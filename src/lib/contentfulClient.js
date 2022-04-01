import { writeFileSync } from 'fs';
import contentful from 'contentful';

const isDev = process.env.NODE_ENV === 'development';

export const client = contentful.createClient({
    accessToken: isDev ? import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN : import.meta.env.VITE_CONTENTFUL_DELIVERY_API_TOKEN,
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    host: isDev ? 'preview.contentful.com' : 'cdn.contentful.com'
});

if (isDev) {
    let currentSyncToken;

    client.sync({
        initial: true
    }).then(({
        nextSyncToken,
    }) => {
        currentSyncToken = nextSyncToken;

        setInterval(() => {
            client.sync({ nextSyncToken: currentSyncToken }).then(({
                nextSyncToken,
            }) => {
                if (currentSyncToken === nextSyncToken) {
                    return;
                }

                currentSyncToken = nextSyncToken;
                writeFileSync('./src/contentful/1', nextSyncToken);
            });
        }, 1000);
    });
}
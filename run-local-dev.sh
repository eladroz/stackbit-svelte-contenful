#!/bin/sh

STACKBIT_APP_URL="https://${STACKBIT_APP_URL:=app.stackbit.com}"
source .env.local

APP_URL=$STACKBIT_APP_URL SNIPPET_URL=$STACKBIT_APP_URL/snippet.js stackbit dev \
       -c contentful \
       --contentful-access-token $CONTENTFUL_PERSONAL_ACCESS_TOKEN \
       --contentful-space-id $VITE_CONTENTFUL_SPACE_ID \
       --contentful-preview-token $VITE_CONTENTFUL_PREVIEW_TOKEN \
       --open

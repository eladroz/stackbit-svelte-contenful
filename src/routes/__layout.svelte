<script context="module">
    export async function load({ url }) {
        return {
            props: {
                currentUrl: url.pathname,
            },
        };
    }
</script>

<script>
    import { invalidate } from "$app/navigation";
    export let currentUrl;

    if (import.meta.hot) {
        import.meta.hot.on("content-update", () => {
            invalidate(`${currentUrl}.json`);
            console.log("Content update - invalidating current page");
        });
    }
</script>

<slot />

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
        import.meta.hot.on("sb-invalidate", () => {
            invalidate(currentUrl);
        });
    }
</script>

<slot />

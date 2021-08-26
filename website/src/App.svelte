<script>
    import {
        Header,
        Content,
        Breadcrumb,
        BreadcrumbItem,
    } from "carbon-components-svelte";

    import List from "./List.svelte";
    import AllFiles from "./files";

    let PATH = "/FILES/";

    function crumb(str) {
        let _path = "/";
        return str
            .split("/")
            .filter((x) => x)
            .map((text) => ({ path: (_path += text + "/"), text }));
    }
</script>

<Header platformName="DK Notes" />
<Content>
    <Breadcrumb>
        {#each crumb(PATH) as { path, text }}
            <BreadcrumbItem href="#" on:click={() => (PATH = path)}>
                {text}
            </BreadcrumbItem>
        {/each}
    </Breadcrumb>
    <List list={AllFiles[PATH]} bind:path={PATH} />
</Content>

<script>
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

<h1 class="center">DK Notes</h1>
<div class="container">
    <div class="crumbs">
        {#each crumb(PATH) as { path, text }}
            <span on:click={() => (PATH = path)}><b>{text}</b></span>
        {/each}
    </div>
    <List list={AllFiles[PATH]} bind:path={PATH} />
</div>

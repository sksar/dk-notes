<script>
    import { ClickableTile } from "carbon-components-svelte";
    import Folder24 from "carbon-icons-svelte/lib/Folder24";
    import Document24 from "carbon-icons-svelte/lib/Document24";
    export let path;
    export let list;
</script>

<br />
{#if list}
    <div class="list">
        <!-- FOLDERS -->
        {#each list.dirs as dir}
            <ClickableTile on:click={() => (path += dir + "/")}>
                <Folder24 />{dir}
            </ClickableTile>
            <!--  -->
        {/each}
        <!-- FILES -->
        {#each list.files as file}
            <ClickableTile
                href={path.substr(1) + file}
                target="_blank"
                download
            >
                <Document24 />{file}
            </ClickableTile>
        {/each}
    </div>
{/if}

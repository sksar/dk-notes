<script>
    import { Tile } from "carbon-components-svelte";
    export let path;
    export let list;
</script>

{#if list}
    <div class="list">
        {#each list.dirs as dir}
            <div class="folder">
                <Tile on:click={() => (path += dir + "/")}>
                    <h5>{dir}<span>⟶</span></h5>
                </Tile>
            </div>
        {/each}
        {#each list.files as file}
            <div class="file">
                <a href={path.split(1) + file} target="_blank">
                    <Tile>
                        <h5>{file}</h5>
                    </Tile>
                </a>
            </div>
        {/each}
    </div>
{/if}

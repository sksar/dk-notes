<script>
    import { Tile } from "carbon-components-svelte";
    import { Link } from "svelte-routing";
    export let path;
    export let list;
</script>

{#if list}
    <div class="list">
        {#each list.dirs as dir}
            <div class="folder">
                <Link to={path + "/" + dir}>
                    <Tile>
                        <h5>{dir}<span>⟶</span></h5>
                    </Tile>
                </Link>
            </div>
        {/each}
        {#each list.files as file}
            <div class="file">
                <a href={path + "/" + file} target="_blank">
                    <Tile>
                        <h5>{file}</h5>
                    </Tile>
                </a>
            </div>
        {/each}
    </div>
{/if}

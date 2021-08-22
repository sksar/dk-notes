<script>
    export let path;
    export let list;
</script>

{#if list}
    <div class="list">
        {#each list.dirs as dir}
            <div class="folder" on:click={() => (path += dir + "/")}>
                {dir}<span>⟶</span>
            </div>
        {/each}
        {#each list.files as file}
            <div class="file">
                <a href={path.substr(1) + file} target="_blank" download>
                    {file}
                </a>
            </div>
        {/each}
    </div>
{/if}

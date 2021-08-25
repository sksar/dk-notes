<script>
    export let path;
    export let list;
</script>

<div class="list">
    {#if list}
        {#each list.dirs as dir}
            <div class="item" on:click={() => (path += dir + "/")}>
                {dir}
            </div>
        {/each}
        <div class="item">JavaScript</div>
        <div class="item">HTML</div>
        <div class="item">CSS</div>
        {#each list.files as file}
            <div class="item file">
                <a href={path.substr(1) + file} target="_blank" download={file}>
                    {file}
                </a>
            </div>
        {/each}
    {/if}
</div>

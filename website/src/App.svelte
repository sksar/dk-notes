<script>
    import { Router, Route, Link } from "svelte-routing";
    import { Breadcrumb, BreadcrumbItem } from "carbon-components-svelte";
    import List from "./List.svelte";
    import AllFiles from "./files";

    let currentPath;
    const setPath = (path) => (currentPath = path);
    $: currentFiles = AllFiles[`/${currentPath}/`];
    $: Breadcrumbs = setCrumbs(currentPath);

    function setCrumbs(str) {
        let path = "";
        return (
            str?.split("/").map((text) => {
                path += "/" + text;
                return { path, text };
            }) || []
        );
    }
</script>

<div class="container">
    <h1 class="center">DK Notes</h1>
    <br />
    <Router>
        <Route path="*" let:params>
            <span style="display: none;">{setPath(params["*"])}</span>
            <Breadcrumb>
                {#each Breadcrumbs as { path, text }}
                    <BreadcrumbItem>
                        <Link to={path}>{text}</Link>
                    </BreadcrumbItem>
                {/each}
            </Breadcrumb>
            <br />
            <List list={currentFiles} path={currentPath} />
        </Route>
    </Router>
</div>

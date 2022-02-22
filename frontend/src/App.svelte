<script lang="ts">
	import { Router, Link, Route } from "svelte-navigator";
	import CreateArticle from "./components/createArticle.svelte";
</script>

<Router primary={false}>
	<header>
	<nav>
		<Link to="/">Home</Link>
		<Link to="createArticle">Create new article</Link>
	</nav>
</header>
	<div>
		<Route path="/">
			<div>Hi, this is the landing page. This is the next task</div>
		</Route>
		<Route path="createArticle">
			<CreateArticle/>
		</Route>
	</div>
</Router>

<script lang="ts">
	import { Router, Link, Route } from "svelte-navigator";
	import CreateArticle from "./pages/CreateArticle.svelte";
	import Home from "./pages/Home.svelte";
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
			<Home/>
		</Route>
		<Route path="createArticle">
			<CreateArticle/>
		</Route>
	</div>
</Router>

<script lang="ts">
    import { onMount } from 'svelte';
    import type { IArticle } from '../types/article';
    let article: IArticle
	onMount(async function () {
		const response = await fetch('http://localhost:4000/articles')
		article = await response.json()
		console.log(article)
	})
</script>

<div>
    <h2> {article.title} </h2>
    <p> {JSON.stringify(article.description)}</p>
    <p> {article.status}</p>
</div>


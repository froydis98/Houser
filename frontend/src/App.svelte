<script lang="ts">
import { onMount } from 'svelte';
	import Article from './components/article.svelte'
	import Tiptap from './lib/Tiptap.svelte';
import type { IArticle } from './types/article';
	import { Status } from './types/status'
	let article: IArticle = {title: '', description: null, status: Status.DRAFT};
	function setTitle(event) {
		article.title = event.target.value;
	}
	async function postArticle () {
		const res = await fetch('http://localhost:4000/add-article', {
			method: 'POST',
			headers: { "Content-Type": "application/json"},
			body: JSON.stringify(article)})
		const json = await res.json()
		let result = JSON.stringify(json)
		console.log(result)
	}
</script>

<main>
	<section>
		<div> 
			<label for="title">Title</label>
			<input type="text" id="title" value={article.title} on:input={setTitle}/>
		</div>
		<Tiptap bind:json={article.description}/>
	</section>
	<button on:click={postArticle}>Publish</button>
</main>

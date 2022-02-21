<script>
import { onMount } from 'svelte';
	import Article from './components/article.svelte'
	import Tiptap from './lib/Tiptap.svelte';
	import { Status } from './types/status'
	let title = '';
	let description= '';
	let status = Status.DRAFT;
	let data = null
	let jsonDescription = null;
	function setTitle(event) {
		title = event.target.value;
		console.log(title, description)
		console.log(json)
	}
	onMount(async function () {
		const response = await fetch('http://localhost:4000/articles')
		data = await response.json()
		console.log(data)
	})
	async function postArticle () {
		const res = await fetch('http://localhost:4000/add-article', {
			method: 'POST',
			headers: { "Content-Type": "application/json"},
			body: JSON.stringify({
				title,
				description,
				status,
			}),
		})
		const json = await res.json()
		result = JSON.stringify(json)
	}
</script>

<main>
	<section>
		<div> 
			<label for="title">Title</label>
			<input type="text" id="title" value={title} on:input={setTitle}/>
		</div>
		<Tiptap bind:json={jsonDescription}/>
	</section>
	<button on:click={postArticle}>Publish</button>
	<Article title={title} description={jsonDescription} status={status}/>
</main>

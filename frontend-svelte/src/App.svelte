<script>
import { onMount } from 'svelte';

	import Article from './article.svelte'
	import { Status } from './types'
	let title = '';
	let description = ''
	let status = Status.DRAFT;
	let published = new Date;
	let lastEdited = new Date;
	let data = null
	function setTitle(event) {
		title = event.target.value;
	}
	onMount(async function () {
		const response = await fetch('http://localhost:4000/articles')
		data = await response.json()
		console.log(data)
	})
	async function postArticle () {
		console.log(JSON.stringify({title, description}))
		const res = await fetch('http://localhost:4000/add-article', {
			method: 'POST',
			headers: { "Content-Type": "application/json"},
			body: JSON.stringify({
				title,
				description,
				status,
				published,
				lastEdited
			}),
		})
		console.log(res.body)
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
		<div>
			<label for="description">Description</label>
			<textarea rows="3" id="description" bind:value ={description}/>
		</div>
	</section>
	<button on:click={postArticle}>Publish</button>
	<Article title={title} description={description} status={status} published={published} lastEdited={lastEdited}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<script lang="ts">
    import { Status } from './types'
	export let title: string;
	export let description: string;
	export let status: Status;
	export let published: Date;
	export let lastEdited: Date;
</script>

<div>
    <h2> {title} </h2>
    <p> {description}</p>
    <p> {status}</p>
    <p>{published.toDateString()}</p>
    <p>{lastEdited.toDateString()}</p>
</div>


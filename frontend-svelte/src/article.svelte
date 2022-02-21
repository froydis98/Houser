<script lang="ts">
    import { Status } from './types'
	export let title: string;
	export let description: string;
	export let status: Status;
</script>

<div>
    <h2> {title} </h2>
    <p> {description}</p>
    <p> {status}</p>
</div>


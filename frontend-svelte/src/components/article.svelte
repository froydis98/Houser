<script lang="ts">
    import { Status } from '../types/status';
    import { generateHTML } from '@tiptap/core'
    import Document from '@tiptap/extension-document'
    import Paragraph from '@tiptap/extension-paragraph'
    import Text from '@tiptap/extension-text'
    import Bold from '@tiptap/extension-bold'
    import { onMount } from 'svelte';
	export let title: string;
	export let status: Status;
    export let description: JSON;
    let descriptionHTML = null;
    (() => {
        console.log(descriptionHTML, description)
        descriptionHTML = {
            output() {
                generateHTML(description, [Document, Paragraph, Text, Bold])
        }}
    })
</script>

<div>
    <h2> {title} </h2>
    <p> {descriptionHTML}</p>
    <p> {status}</p>
</div>


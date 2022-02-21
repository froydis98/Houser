<script>
    import { onMount, onDestroy } from 'svelte'
    import { Editor } from '@tiptap/core'
    import StarterKit from '@tiptap/starter-kit'
  
    let element;
    let editor;
    export let json;
  
    onMount(() => {
      editor = new Editor({
        element: element,
        extensions: [
          StarterKit,
        ],
        onTransaction: () => {
          // force re-render so `editor.isActive` works as expected
          editor = editor
          json = editor.getJSON()
          console.log(json)
        },
      })
    })
  
    onDestroy(() => {
      if (editor) {
        editor.destroy()
      }
    })
  </script>
  
  {#if editor}
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 1}).run()}
      class:active={editor.isActive('heading', { level: 1 })}
    >
      H1
    </button>
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      class:active={editor.isActive('heading', { level: 2 })}
    >
      H2
    </button>
    <button on:click={() => editor.chain().focus().setParagraph().run()} class:active={editor.isActive('paragraph')}>
      P
    </button>
    <button on:click={() => editor.chain().focus().toggleBold().run()} class:active={editor.isActive('bold')}>
      Bold
    </button>
  {/if}
  
  <div bind:this={element} />
  
  <style>
    button.active {
      background: black;
      color: white;
    }
  </style>
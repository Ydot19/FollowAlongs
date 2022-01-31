<script>
    // import {onMount, onDestroy} from "svelte"
    import {FeedbackStore} from "../store.ts"
    import {fade} from "svelte/transition"
    import FeedbackItem from "./FeedbackItem.svelte";

    // let feedback = []
    //
    // const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)
    //
    // onMount(() => {
    //
    // })
    //
    // onDestroy(() => {
    //     unsubscribe()
    // })
</script>


{#each $FeedbackStore as fb (fb.id)}
    <div transition:fade>
        <FeedbackItem item="{fb}" on:delete-feedback />
    </div>
{/each}

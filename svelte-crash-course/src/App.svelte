<script lang="ts">
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
	let count: number
	let average: number
	let feedback = [
		{
			id: 1,
			rating: 10,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Et odio pellentesque diam volutpat commodo."
		},
		{
			id: 2,
			rating: 7,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Et odio pellentesque diam volutpat commodo."
		},
		{
			id: 3,
			rating: 4,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Et odio pellentesque diam volutpat commodo."
		}
	]

	const addFeedback = (e) => {
		feedback = [e.detail, ...feedback]
	}

	$: count = feedback.length;
	$: average = feedback.reduce((a: number, {rating}) => a + rating, 0) / count;

	const deleteFeedback = (e) => {
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id != itemId)
	}
</script>

<main class="container">
	<FeedbackForm on:add-feedback={addFeedback}/>
	<FeedbackStats {count} {average}/>
	<FeedbackList feedback="{feedback}" on:delete-feedback={deleteFeedback}/>
</main>


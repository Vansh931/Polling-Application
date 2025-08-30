<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/tabs.svelte';
	import PollList from './components/PollList.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';


	var items =['Current Polls', 'Create New Polls'];
	var ActiveItem = 'Current Polls';
	var tabchange = (e) =>{
		ActiveItem = e.detail;
	}
	
	var handleAdd = (e) => {
		ActiveItem = 'Current Polls';

	}
	
</script>
<Header />
<main>
	<Tabs {items} {ActiveItem} on:tabturn={tabchange} />
	{#if ActiveItem === 'Current Polls'}
	    <PollList />
	{:else if ActiveItem === 'Create New Polls'}
	    <CreatePollForm on:add={handleAdd} />
	{/if}
</main>
<Footer />

<style>
	p{
		max-width:900px;
		margin:40px auto;
	}
</style>
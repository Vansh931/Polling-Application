<script>
    
    import {flip} from 'svelte/animate';
    import {fade,slide,scale} from 'svelte/transition';
    import pollstore from '../Stores/pollstore.js';
    import PollDetail from './PollDetail.svelte';
</script>

<div class="pL">
    {#each $pollstore as poll(poll.id)}
        <div in:fade out:scale|local animate:flip={{duration:500}}>
            <PollDetail poll={poll} />
        </div>
    {/each}
</div>
<style>
    .pL{
        display:grid;
        grid-template-columns: 1fr 1fr;
    }

</style>
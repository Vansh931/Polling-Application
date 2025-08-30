<script>
    import {createEventDispatcher} from 'svelte';
    var dispatch = createEventDispatcher();
    export var items;
    export var ActiveItem;

</script>

<div class="tabs">
    <ul>
        {#each items as i}
            <li on:click={()=>dispatch('tabturn', i)}>
                <div class:active={i ===ActiveItem}>{i}</div>
            </li>
        {/each}
        
    </ul>
</div>
<style>
    .tabs{
        margin-bottom:40px;
    }
    ul{
        display:flex;
        justify-content:center;
        padding:0;
        list-style-type:none;
        gap:16px;
        margin:0 auto;
        font-size:18px;
        color:#555;
        cursor:pointer;

    }
    .active{
        color:#d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom:8px;
    }
</style>
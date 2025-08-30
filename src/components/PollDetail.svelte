<script>
    import pollstore from '../Stores/pollstore.js';
    import Card from '../shared/Card.svelte';
    import Button from '../shared/button.svelte';
    export var poll;
    import {tweened} from 'svelte/motion';
    $:totalVotes = poll.voteA +poll.voteB;
    let handleVote = (option,id) => {
        pollstore.update(currentpolls =>{
            let copy_polls = [...currentpolls];
            let upvotedpolls = copy_polls.find((poll)=>poll.id == id);
            if(option === 'A'){
                upvotedpolls.voteA++;
            }
            if(option === 'B'){
                upvotedpolls.voteB++;
            }
            return copy_polls;
        });
    };
    let handleDelete =(id)=>{
        pollstore.update(currentpolls =>{
            return currentpolls.filter(poll => poll.id !== id);
        });
    }
    $:percentA =Math.floor(poll.voteA /totalVotes *100)||0;
    $:percentB =Math.floor(poll.voteB /totalVotes *100)||0;
    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);
</script>
<Card>

    <div class="polls">
        <h3>{poll.question}</h3>
        <p>Total votes: {totalVotes}</p>
        <div class="answer" on:click={()=> handleVote('A',poll.id)}>
            <div class="percent percent-a" style="width:{$tweenedA}%"></div>
            <span>{poll.answerA} ({poll.voteA})</span>
        </div>
        <div class="answer"on:click={()=>handleVote('B',poll.id)}>
            <div class="percent percent-b" style="width:{$tweenedB}%"></div>
            <span>{poll.answerB} ({poll.voteB})</span>
        </div>
        <div class="delete">
            <Button flat={true} on:click={()=>handleDelete(poll.id)}>Delete</Button>
        </div>
    </div>
</Card>

<style>
    h3{
        margin:0;
        color:#555;
    }
    p{
        margin-top:6px;
        font-size:14px;
        color:#aaa;
        margin-bottom:30px;
    }
    .answer{
        background:#fafafa;
        cursor:pointer;
        margin:20px 10px;
        position:relative;
    }
    .answer:hover{
        opacity:0.6;
    }
    span{
        display:inline-block;
        padding:10px 20px;
    }
    .percent{
        height:100%;
        position: absolute;
        box-sizing:border-box;
    }
    .percent-a{
        border-left: 4px solid #d91b42;
        background-color: rgba(217,27,66,0.4);
    }
    .percent-b{
        border-left:4px solid #45c496;
        background-color: rgba(69, 196, 150, 0.4);
    }
    .delete{
        margin-top: 30px;
        text-align: center;
    }
</style>
import {writable} from 'svelte/store';

const pollstore = writable([
    {
			id:1,
			question: 'Python or js',
			answerA:'Python',
			answerB:'JavaScript',
			voteA:9,
			voteB:15,
	},
]);

export default pollstore;

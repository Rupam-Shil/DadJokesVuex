import { createStore } from 'vuex';
const url = 'https://icanhazdadjoke.com/';
const headers = { Accept: 'application/json' };
export default createStore({
	state: {
		currentJoke: 'This is a joke',
		allJokes: [],
	},
	mutations: {
		setJoke(state, payload) {
			state.currentJoke = payload;
			state.allJokes.push(payload);
		},
	},
	actions: {
		//async
		async setCurrentJoke(state) {
			const joke = await fetch(url, { headers });
			const j = await joke.json();
			state.commit('setJoke', j.joke);
		},
	},
	modules: {},
	getters: {
		getcurrentJoke: (state) => state.currentJoke,
		getAllJokes: (state) => state.allJokes,
	},
});

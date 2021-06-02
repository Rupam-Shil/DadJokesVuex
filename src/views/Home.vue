<template>
	<div class="home shadow-xl bg-gray-200 w-8/12 mx-auto p-20">
		<h2 class="text-2xl text-blue-600 font-extrabold">Can I Have a Dad Joke</h2>
		<h3 class="text-xl text-black">{{ joke }}</h3>
		<button
			@click="addJoke"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 focus:outline-none"
		>
			Add Joke
		</button>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	methods: {
		addJoke() {
			this.$store.dispatch('setCurrentJoke');
		},
	},
	computed: {
		joke() {
			return this.$store.getters.getcurrentJoke;
		},
	},
	// mounted() {
	// 	this.joke = this.$store.getters.getcurrentJoke;
	// },
	components: {},
};
</script>

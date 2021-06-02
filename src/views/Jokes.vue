<template>
	<div>
		<h1 class="text-3xl p-12 font-extrabold">
			This is all the jokes you've retrieved
		</h1>
		<h4 v-for="(joke, index) in jokes" :key="index">
			<span>{{ index + 1 }}:</span>{{ joke }}
		</h4>
	</div>
</template>
<script>
export default {
	computed: {
		jokes() {
			return this.$store.getters.getAllJokes;
		},
	},
};
</script>
<style>
h4 {
	color: blueviolet;
	font-weight: bolder;
	font-size: 2.5rem;
}
</style>

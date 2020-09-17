<template>
	<div id="app">
		<component :is="layout">
			<router-view></router-view>
		</component>
		<!-- <NavBar></NavBar> -->
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
const HeaderW_layout = "HeaderW";

export default {
	name: "App",
	components: {
		// NavBar,
	},
	computed: {
		layout() {
			return (this.$route.meta.layout || HeaderW_layout) + "-layout";
		},
	},
};
</script>

<style></style>

<template>
	<div>
		<b-alert class="alert-box" :variant="type" show>{{ message }}</b-alert>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: "",
		},
		message: {
			type: String,
			default: "",
		},
	},
};
</script>

<style lang="scss" scoped>
.alert {
	margin-top: 50px;
}
</style>

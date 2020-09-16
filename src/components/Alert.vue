<template>
	<div>
		<b-alert :variant="type" show>{{ message }}</b-alert>
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

<style lang="scss" scoped></style>

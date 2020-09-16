<template>
	<div class="row form-group ajouterVille">
		<div class="col-sm-2">
			Ajouter une ville :
		</div>

		<div class="col-sm-3">
			<input
				type="text"
				id="cityField"
				class="form-control"
				v-model="newCity"
			/>
		</div>

		<div class="col-sm-2">
			<b-button @click="addCityAction" class="primary">Ajouter</b-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newCity: null,
		};
	},
	methods: {
		addCityAction() {
			if (this.newCity) {
				this.$emit("cityAddEvent", this.newCity);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.ajouterVille {
	margin-top: 2em;
}
</style>

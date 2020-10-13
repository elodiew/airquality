<template>
	<div class="row form-group">
		<div class="container container-ville">
			<div class="row">
				<div class="col">
					<div class="text-ville" style="text-align: center">
						{{ $t('message.add_city') }}
					</div>
				</div>
				<div class="col-6">
					<input
						type="text"
						id="cityField"
						class="form-control"
						v-model="newCity"
						v-on:keyup.enter="addCityAction"
					/>
				</div>
				<div class="col">
					<b-button
						v-on:keyup.enter="addCityAction"
						@click="addCityAction"
						class="validation"
						>{{ $t('message.add') }}</b-button
					>
				</div>
			</div>
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
				this.$emit('cityAddEvent', this.newCity);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.ajouterVille {
	margin-top: 2em;
	text-align: center;
	font-family: 'Questrial', sans-serif;
}

.text-ville {
	color: white;
	font-size: 20px;
	font-family: 'Questrial', sans-serif;
}

.outline-secondary {
	color: black;
	background-color: rgb(255, 255, 255);
	border-radius: 20px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
}

.outline-secondary:hover {
	color: rgb(60, 60, 255);
	background-color: rgb(255, 255, 255);
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
}

.outline-secondary:focus {
	background-color: rgb(255, 255, 255);
	color: rgb(60, 60, 255);
	border-color: white;
	box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}

.container-ville {
	margin-top: 50px;
}

.validation {
	color: #1daae5;
	background-color: transparent;
}

.form-control {
	opacity: 0.8;
}
</style>

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
						class="validate"
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

.validate {
	padding: 15px 20px;
	margin: -5px;
}
.validate:hover {
	padding: 15px 20px;
	margin: -5px;
	font-weight: bold;
}

.btn-secondary {
	text-decoration: none;
	border-radius: 50px;
	padding: 15px 20px;
	font-size: 11px;
	line-height: 1rem;
	font-weight: 700;
	text-transform: uppercase;
	display: inline-block;
	letter-spacing: 0.2rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
	text-align: center;
	background-color: #007bff;
	color: #ffffff;
	font-family: 'Questrial', sans-serif;
}

.btn-secondary:hover {
	text-decoration: none;
	border-radius: 50px;
	padding: 15px 20px;
	font-size: 11px;
	line-height: 1rem;
	font-weight: bold;
	text-transform: uppercase;
	display: inline-block;
	letter-spacing: 0.2rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
	text-align: center;
	background-color: rgb(255, 255, 255);
	color: rgb(60, 60, 255);
	transition: all 0.4s ease-in-out 0s;
	font-family: 'Questrial', sans-serif;
}

.btn-secondary:focus {
	text-decoration: none;
	border-radius: 50px;
	padding: 15px 20px;
	font-size: 11px;
	line-height: 1rem;
	font-weight: bold;
	text-transform: uppercase;
	display: inline-block;
	letter-spacing: 0.2rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
	text-align: center;
	background-color: #ffffff;
	color: rgb(60, 60, 255);
	font-family: 'Questrial', sans-serif;
}

.form-control {
	opacity: 0.8;
}
</style>

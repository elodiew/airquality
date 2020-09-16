<template>
	<div>
		<h1>Admin</h1>
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
		<ul>
			<li v-for="city of cities" :key="city.id">
				{{ city.name }}

				<b-button @click="deleteCity(city)">Supprimer</b-button>
			</li>
		</ul>
	</div>
</template>

<script>
import { CitiesService } from "@/services/Cities.service.js";

export default {
	data() {
		return {
			cities: [],
			newCity: "",
		};
	},
	async mounted() {
		this.cities = await CitiesService.getCities();
	},
	methods: {
		async addCityAction() {
			const city = { name: this.newCity, iqa: 0 };
			const idCity = CitiesService.addCity(city);
			city.id = idCity;
			this.cities.push(city);
		},
		deleteCity(city) {
			CitiesService.deleteCity(city);
			const indexToDelete = this.cities.findIndex(
				(cityItem) => city.id === cityItem.id
			);
			this.cities.splice(indexToDelete, 1);
		},
	},
};
</script>

<style lang="scss" scoped></style>

<template>
	<div>
		<h1>Mesure de la qualité de l'air</h1>
		<div class="row">
			<div v-for="city of cities" :key="city.index" class="col-sm-4">
				<City :city="city" @deleteCity="deleteCityAction" />
			</div>
		</div>

		<CityForm @cityAddEvent="addCityAction" />

		<Alert v-if="showAlert" :type="typeAlert" :message="messageAlert" />
	</div>
</template>

<script>
import City from "@/components/City";
import CityForm from "@/components/CityForm";
import Alert from "@/components/Alert";

import { AirQualityService } from "@/services/AirQuality.service";
import { CitiesService } from "@/services/Cities.service";

export default {
	components: {
		City,
		CityForm,
		Alert,
	},
	data() {
		return {
			cities: [],
			typeAlert: "",
			messageAlert: "",
			showAlert: false,
		};
	},
	async mounted() {
		this.cities = await CitiesService.getCities();
	},
	methods: {
		async addCityAction(cityName) {
			const dataForNewCity = await AirQualityService.getAirQuality(cityName);

			if (dataForNewCity !== "Unknown station") {
				this.cities.push({
					name: cityName,
					iqa: null,
				});

				this.typeAlert = "success";
				this.messageAlert = "Ville ajoutée avec succès";
				this.showAlert = true;
			} else {
				this.typeAlert = "warning";
				this.messageAlert = "Ville non disponible";
				this.showAlert = true;
			}
		},
		deleteCityAction(city) {
			const indexToDelete = this.cities.findIndex(
				(cityItem) => cityItem.name === city.name
			);

			this.cities.splice(indexToDelete, 1);
		},
	},
};
</script>

<style lang="scss" scoped></style>

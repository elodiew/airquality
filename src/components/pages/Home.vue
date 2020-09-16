<template>
	<div>
		<h1 class="title">Mesure de la qualité de l'air</h1>
		<div class="row">
			<div class="col-sm-4" v-for="city of cities" :key="city.index">
				<City :city="city" @deleteCity="deleteCityAction"></City>
			</div>
		</div>
		<CityForm @cityAddEvent="addCityAction"></CityForm>
		<Alert v-if="showAlert" :type="typeAlert" :message="messageAlert"></Alert>
	</div>
</template>

<script>
import City from "@/components/City.vue";
import CityForm from "@/components/CityForm.vue";
import Alert from "@/components/Alert.vue";
import { AirQualityService } from "@/services/AirQuality.service.js";
import { CitiesService } from "@/services/Cities.service.js";

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
				console.log(dataForNewCity);

				this.typeAlert = "success";
				this.messageAlert = "Ville ajoutée avec succès";
				this.showAlert = true;
				console.log("Success TYPE", this.typeAlert);
			} else {
				this.typeAlert = "warning";
				this.messageAlert = "Ville non disponible";
				this.showAlert = true;
				console.log("Warning TYPE", this.typeAlert);
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

<style lang="scss" scoped>
.title {
	color: white;
}
</style>

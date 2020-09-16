<template>
	<div>
		<b-card :title="city.name" :class="color + ' cityCard'">
			<b-card-text v-if="!loading">
				Qualité de l'air : {{ city.iqa }}
			</b-card-text>
			<b-button @click="deleteCityAction" variant="secondary"
				>Supprimer</b-button
			>
			<b-spinner v-if="loading" variant="primary" label="Spinning"></b-spinner>
		</b-card>
	</div>
</template>

<script>
import { AirQualityService } from "@/services/AirQuality.service";

export default {
	props: {
		city: {
			type: Object,
			default: null,
		},
	},
	data() {
		return {
			color: "",
			loading: false,
		};
	},
	async mounted() {
		this.loading = true;
		const infosCity = await AirQualityService.getAirQuality(this.city.name);
		this.loading = false;

		this.city.iqa = infosCity.aqi;

		if (this.city.iqa <= 30) this.color = "pollution-faible";
		if (this.city.iqa > 30 && this.city.iqa <= 50)
			this.color = "pollution-medium";
		if (this.city.iqa > 50) this.color = "pollution-forte";
	},
	methods: {
		deleteCityAction() {
			this.$emit("deleteCity", this.city);
		},
	},
};
</script>

<style lang="scss" scoped>
.pollution-faible {
	background: green;
	color: white;
}

.pollution-medium {
	background: rgb(209, 138, 5);
	color: white;
}

.pollution-forte {
	background: rgb(184, 5, 5);
	color: white;
}

.cityCard {
	margin-bottom: 2em;
}
</style>

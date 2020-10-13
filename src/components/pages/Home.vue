<template>
	<div>
		<div class="container" id="home">
			<div class="container-home">
				<h1 class="title-home">
					{{ $t('message.mesure_quality') }} <br />{{ $t('message.city_city') }}
				</h1>
				<div class="row city-row">
					<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
					<div
						class="col-sm-4"
						v-if="(cities && index > limitRow && showAll) || index <= limitRow"
						v-for="(city, index) in cities"
						:key="index"
					>
						<City :city="city" @deleteCity="deleteCityAction" />
					</div>
				</div>

				<!-- Show All button-->
				<button
					class="showallBooking"
					v-on:click="showAllAction()"
					v-if="showAll === false"
				>
					{{ $t('message.show_all') }}
				</button>

				<!-- Show Less button-->
				<button
					class="showlessBooking"
					v-on:click="showAll = !showAll"
					v-if="showAll === true"
				>
					{{ $t('message.show_less') }}
				</button>

				<CityForm @cityAddEvent="addCityAction" />
			</div>
		</div>
	</div>
</template>

<script>
import City from '@/components/City';
import CityForm from '@/components/CityForm';

import { AirQualityService } from '@/services/AirQuality.service';
import { CitiesService } from '@/services/Cities.service';

export default {
	components: {
		City,
		CityForm,
	},
	data() {
		return {
			cities: [],
			typeAlert: '',
			messageAlert: '',
			showAlert: false,
			limitRow: 8,
			showAll: false,
		};
	},
	async mounted() {
		this.cities = await CitiesService.getCities();
	},

	methods: {
		async addCityAction(cityName) {
			const dataForNewCity = await AirQualityService.getAirQuality(cityName);

			if (dataForNewCity !== 'Unknown station') {
				this.cities.push({
					name: cityName,
					iqa: null,
				});

				this.$toastr.Add({
					name: 'Successcity',
					msg: this.$t('message.succes_scity'),
					type: 'success',
				});
			} else {
				this.$toastr.Add({
					name: 'Errorcity',
					msg: this.$t('message.error_city'),
					type: 'warning',
				});
			}
		},
		showAllAction() {
			this.showAll = true;
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

<style lang="scss">
.title-home {
	color: white;
	font-size: 4rem;
}

.container-home {
	margin-top: 150px;
}

.city-row {
	margin-top: 80px;
}

.showallBooking,
.showlessBooking {
	width: 100%;
	max-width: 300px;
	font-size: 20px;
	display: block;
	text-align: center;
	margin: auto;
	padding: 6px 0 6px 0;
	border: none;
	margin-top: 10px;
	border-radius: 50px;
}

@media screen and (max-width: 767px) {
	.container-home {
		margin-top: 10px;
	}
}
</style>

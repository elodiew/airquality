<template>
	<div>
		<div class="container" id="home">
			<div class="container-home">
				<h1 class="title-home">
					{{ $t('message.mesure_quality') }} <br />{{ $t('message.city_city') }}
				</h1>

				<CityForm @cityAddEvent="addCityAction" />
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
			limitRow: 7,
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
	margin-top: 100px;
}

.city-row {
	margin-top: 80px;
	margin-bottom: 50px;
}

.showallBooking,
.showlessBooking {
	width: 100%;
	max-width: 200px;
	text-decoration: none;
	border-radius: 50px;
	padding: 15px 20px;
	font-size: 11px;
	line-height: 1rem;
	font-weight: 700;
	text-transform: uppercase;
	display: block;
	letter-spacing: 0.2rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
	text-align: center;
	background-color: rgb(255, 255, 255);
	color: rgb(0, 0, 0);
	transition: all 0.4s ease-in-out 0s;
	margin: auto;
	font-family: 'Questrial', sans-serif;
}

.showallBooking:hover,
.showlessBooking:hover {
	background-color: rgb(255, 255, 255);
	color: rgb(60, 60, 255);
}

.showallBooking:focus,
.showlessBooking:focus {
	background-color: rgb(255, 255, 255);
	color: rgb(60, 60, 255);
	border-color: white;
	box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}

@media screen and (max-width: 767px) {
	.container-home {
		margin-top: 10px;
	}
}
</style>

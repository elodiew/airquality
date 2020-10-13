<template>
	<div class="card-width">
		<b-card class="text-center" :title="city.name">
			<div class="text-center">
				<b-button v-if="!loading" class="button-qly">
					{{ $t('message.air_quality') }}
					<b-badge variant="light" :class="color + ' cityCard'">{{
						city.iqa
					}}</b-badge>
				</b-button>
			</div>

			<b-spinner v-if="loading" variant="light" label="Spinning"></b-spinner>
		</b-card>
		<div class="button-suppression">
			<b-button class="button-suppr" @click="deleteCityAction">{{
				$t('message.remove_city')
			}}</b-button>
		</div>
	</div>
</template>

<script>
import { AirQualityService } from '@/services/AirQuality.service';

export default {
	props: {
		city: {
			type: Object,
			default: null,
		},
	},
	data() {
		return {
			color: '',
			loading: false,
		};
	},
	async mounted() {
		this.loading = true;
		const infosCity = await AirQualityService.getAirQuality(this.city.name);
		this.loading = false;

		this.city.iqa = infosCity.aqi;

		if (this.city.iqa <= 30) this.color = 'pollution-faible';
		if (this.city.iqa > 30 && this.city.iqa <= 50)
			this.color = 'pollution-medium';
		if (this.city.iqa > 50) this.color = 'pollution-forte';
	},
	methods: {
		deleteCityAction() {
			this.$emit('deleteCity', this.city);
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

.button-supp {
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

.btn-secondary {
	text-decoration: none;
	border-radius: 50px;
	padding: 15px 20px;
	font-size: 9px;
	line-height: 1rem;
	font-weight: 700;
	text-transform: uppercase;
	display: inline-block;
	letter-spacing: 0.2rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
	text-align: center;
	background-color: white;
	color: black;
	margin: 5px;
	font-family: 'Questrial', sans-serif;
}

.button-supp:hover {
	background-color: rgb(255, 255, 255);
	color: rgb(60, 60, 255);
}

.button-supp:focus {
	background-color: rgb(255, 255, 255);
	color: rgb(60, 60, 255);
	border-color: white;
	box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}

.button-suppression {
	text-align: center;
}

.button-qly {
	padding: 10px 20px;
	font-size: 8px;
	line-height: 1rem;
	display: inline-block;
	letter-spacing: 0.2rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
	text-align: center;
	background-color: rgb(255, 255, 255);
	color: rgb(0, 0, 0);
	transition: all 0.4s ease-in-out 0s;
	margin: 5px;
	font-family: 'Questrial', sans-serif;
}

.button-qly:hover {
	background-color: rgb(255, 255, 255);
	font-size: 8px;
}

.button-qly:focus {
	background-color: rgb(255, 255, 255);
	border-style: none;
	box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
	outline: none;
}

.btn .badge {
	position: relative;
	top: 0px;
	padding: 5px;
	font-size: 10px;
}

.card {
	margin-bottom: 20px;
	opacity: 0.8;
}

.card-body {
	padding: 10px 10px;
}

.card-width {
	width: 90%;
}

.outline-secondary {
	margin-top: 5px;
	border-radius: 20px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
}

.outline-secondary:hover {
	color: black;
	background-color: rgb(255, 255, 255);
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
	font-family: 'Questrial', sans-serif;
}

@media screen and (max-width: 767px) {
	.card-width {
		width: 100%;
	}
}
</style>

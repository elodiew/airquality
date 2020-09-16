<template>
  <div class="card-width">
    <!-- <b-card :title="city.name" :class="color + ' cityCard'">
			<b-card-text v-if="!loading">
				Qualité de l'air : {{ city.iqa }}
			</b-card-text>
			<b-button @click="deleteCityAction" variant="secondary"
				>Supprimer</b-button
			>
			<b-spinner v-if="loading" variant="primary" label="Spinning"></b-spinner>
    </b-card>-->
    <b-card class="text-center" :title="city.name">
      <div class="text-center">
        <b-button v-if="!loading" class="button-supp">
          Qualité de l'air :
          <b-badge variant="light" :class="color + ' cityCard'">{{ city.iqa }}</b-badge>
        </b-button>
      </div>
      <b-button @click="deleteCityAction" variant="secondary">Supprimer</b-button>
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

.button-supp {
  text-decoration: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 12px;
  line-height: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  transition: all 0.4s ease-in-out 0s;
  margin: 5px;
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

.btn .badge {
  position: relative;
  top: 0px;
  padding: 5px;
}

.card {
  margin-bottom: 20px;
}

.card-body {
  padding: 10px 10px;
}

.card-width {
  width: 90%;
}
</style>

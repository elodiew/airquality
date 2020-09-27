<template>
  <div>
    <div class="row justify-content-center admin">
      <div class="col-md-8 justify-content-center">
        <h1>Admin</h1>
        <div class="row form-group ajouterVille">
          <div class="col-sm-4">{{ $t("message.add_city") }}</div>
          <div class="col-md-6 col-sm-3">
            <input
              type="text"
              id="cityField"
              class="form-control"
              v-model="newCity"
            />
          </div>

          <div class="col-sm-2 btn-validation">
            <b-button @click="addCityAction" class="validation">{{
              $t("message.add")
            }}</b-button>
          </div>
        </div>

        <ul>
          <li class="li-city" v-for="city of cities" :key="city._id">
            {{ city.name }} -
            <b-button class="suppression" @click="deleteCity(city)">{{
              $t("message.remove")
            }}</b-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { CitiesService } from "@/services/Cities.service";

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
      const idCity = await CitiesService.addCity(city);
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

<style lang="scss" scoped>
h1 {
  margin-bottom: 50px;
}

.admin {
  margin-top: 100px;
}

.li-city {
  margin-top: 50px;
}

.validation {
  color: #1daae5;
  background-color: transparent;
  text-decoration: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 11px;
  line-height: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
  text-align: center;
  transition: all 0.4s ease-in-out 0s;
  font-family: "Questrial", sans-serif;
}

.suppression {
  color: red;
  background-color: transparent;
  text-decoration: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 11px;
  line-height: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
  text-align: center;
  transition: all 0.4s ease-in-out 0s;
  margin: 5px;
  font-family: "Questrial", sans-serif;
}

@media screen and (max-width: 767px) {
  .btn-validation {
    margin-top: 10px;
  }
}
</style>

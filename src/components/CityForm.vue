<template>
  <div class="row form-group">
    <!-- <div class="col-sm-2 text-ville">Ajouter une ville :</div>

    <div class="col-sm-3">
      <input type="text" id="cityField" class="form-control" v-model="newCity" />
    </div>
    <div class="col-sm-2">
      <b-button @click="addCityAction" class="outline-secondary">Ajouter</b-button>
    </div>

    <b-input-group prepend="Ajouter une ville" class="mt-3">
      <b-form-input type="text" id="cityField" class="form-control" v-model="newCity"></b-form-input>
      <b-input-group-append>
        <b-button @click="addCityAction" variant="outline-success">Ajouter</b-button>
      </b-input-group-append>
    </b-input-group>-->

    <div class="container container-ville">
      <div class="row">
        <div class="col">
          <div class="text-ville" style="text-align: center">Ajouter une ville :</div>
        </div>
        <div class="col-6">
          <input type="text" id="cityField" class="form-control" v-model="newCity" />
        </div>
        <div class="col">
          <b-button @click="addCityAction" variant="outline-success">Ajouter</b-button>
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
        this.$emit("cityAddEvent", this.newCity);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ajouterVille {
  margin-top: 2em;
  text-align: center;
}

.text-ville {
  color: white;
  font-size: 20px;
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

// .col {
//   border: 1px solid red;
// }

// .row {
//   border: 1px solid green;
// }
</style>

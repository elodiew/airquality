<template>
  <div class="login">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 justify-content-center">
          <h1>{{ $t("message.connection") }}</h1>
          <b-form @submit="submitAction">
            <b-form-group>
              {{ $t("message.address_mail") }}
              <b-form-input
                @change="initMessageError"
                v-model="email"
                type="email"
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              {{ $t("message.password") }}
              <b-form-input
                @change="initMessageError"
                v-model="password"
                type="password"
              />
            </b-form-group>
            <b-button type="submit" variant="primary">{{
              $t("message.connection")
            }}</b-button>

            <b-alert show v-if="messageError" variant="danger">
              {{ messageError }}
            </b-alert>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";

export default {
  data() {
    return {
      email: null,
      password: null,
      messageError: false,
    };
  },

  methods: {
    async submitAction(evt) {
      evt.preventDefault();
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ path: "/admin" });
      } catch (error) {
        this.messageError = "Erreur de Login/Mot de passe";
        console.log("error", error);
      }
    },
    initMessageError() {
      this.messageError = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 100px;
}

.ssss {
  text-align: center;
}
</style>

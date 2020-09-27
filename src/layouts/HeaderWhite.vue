<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" variant="faded" type="light">
      <b-navbar-brand to="/">
        <img src="https://zupimages.net/up/20/38/d4us.png" alt="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-nav-item right>
              <a
                class="lang"
                style="color: white"
                v-on:click="changeLocale('en')"
                >FR</a
              >
            </b-nav-item>
            <b-nav-item right>
              <a
                class="lang"
                style="color: white"
                v-on:click="changeLocale('fr')"
                >EN</a
              >
            </b-nav-item>
            <b-nav-item right>
              <!-- Using 'button-content' slot -->
              <b-button
                v-if="connected"
                @click="logout"
                type="submit"
                class="btn primary button-navbar"
              >
                <div>{{ $t("message.deconnection") }}</div>
              </b-button>
              <b-button
                v-on:click="isHidden = true"
                v-if="!isHidden"
                type="submit"
                class="btn primary button-navbar"
                to="/login"
              >
                <div>{{ $t("message.connection") }}</div>
              </b-button>
              <b-button
                type="button"
                class="btn primary button-navbar"
                to="/create-account"
                >{{ $t("message.create_account") }}</b-button
              >
              <b-button class="btn primary button-navbar" to="/admin">
                <div>{{ $t("message.admin") }}</div>
              </b-button>
            </b-nav-item>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { auth } from "@/firebase";

export default {
  data() {
    return {
      isHidden: false,
      connected: false,
      langs: {
        fr: "FR",
        en: "EN",
      },
    };
  },
  components: {},

  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.connected = true;
      } else {
        this.connected = false;
      }
    });
  },
  methods: {
    logout() {
      auth.signOut();
      this.$router.replace("/");
    },

    changeLocale: function (locale) {
      if (locale == "fr") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "fr";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button-navbar {
  text-decoration: none;
  border-radius: 50px;
  padding: 15px 20px;
  font-size: 11px;
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
  font-family: "Questrial", sans-serif;
}

.button-navbar:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(60, 60, 255);
}

.button-navbar:focus {
  background-color: rgb(255, 255, 255);
  color: rgb(60, 60, 255);
  border-color: white;
  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}

.button-dropdown {
  border-radius: 50px;
  padding: 8px 20px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  margin: 5px;
  font-family: "Questrial", sans-serif;
}

.button-dropdown:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(60, 60, 255);
}

.button-dropdown:focus {
  background-color: rgb(255, 255, 255);
  color: rgb(60, 60, 255);
  border-color: white;
  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}

.navbar-light .navbar-nav .nav-link {
  color: white !important;
}

.lang {
  font-family: "Questrial", sans-serif;
}
</style>

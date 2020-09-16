<template>
	<div>
		<b-navbar class="navbar" toggleable="lg" variant="faded" type="light">
			<b-navbar-brand to="/">
				<img src="https://zupimages.net/up/20/38/d4us.png" alt="logo" />
			</b-navbar-brand>
			<SelectLocale></SelectLocale>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-form>
						<b-nav-item
							@click="changeLang(i)"
							v-bind:data="$i18n.locale"
							class="lang"
							href="#"
							>FR</b-nav-item
						>
						<b-nav-item
							@click="changeLang(i)"
							v-bind:data="$i18n.locale"
							class="lang"
							href="#"
							>EN</b-nav-item
						>

						<b-nav-item right>
							<!-- Using 'button-content' slot -->
							<b-button
								type="submit"
								class="btn primary button-navbar"
								to="/admin"
								><div>{{ $t("message.connection") }}</div></b-button
							>
							<b-button
								type="button"
								class="btn primary button-navbar"
								to="/create-account"
								>Créer un compte</b-button
							>
						</b-nav-item>
					</b-nav-form>
					<b-nav-item-dropdown>
						<template slot="button-content">
							<img
								class="drapeau"
								width="30px"
								src="https://zupimages.net/up/20/38/9mdb.png"
							/>
						</template>
						<b-dropdown-item
							v-for="(lang, i) in langs"
							v-bind:data="$i18n.locale"
							v-bind:key="i"
							style="display: inline"
							@click="changeLang(i)"
						>
							<img class="drapeau" width="15px" src="" />
							{{ lang }}
						</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
import { auth } from "@/firebase";
import SelectLocale from "./SelectLocale.vue";

export default {
	data() {
		return {
			connected: false,
			langs: {
				fr: "Français",
				en: "English",
			},
			locale: this.$i18n.locale,
		};
	},
	components: {
		SelectLocale,
	},

	beforeMount() {
		this.$i18n.locale = localStorage.getItem("locale")
			? localStorage.getItem("locale")
			: "fr";
	},
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
		changeLang(lang) {
			this.$i18n.locale = lang;
			localStorage.setItem("locale", lang);
		},
	},
};
</script>

<style lang="scss" scoped>
.button-navbar {
	text-decoration: none;
	border-radius: 50px;
	padding: 15px 20px;
	font-size: 12px;
	line-height: 1rem;
	font-weight: 700;
	text-transform: uppercase;
	display: inline-block;
	user-select: none;
	letter-spacing: 0.2rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8rem 1.6rem 0px;
	text-align: center;
	background-color: rgb(255, 255, 255);
	color: rgb(0, 0, 0);
	transition: all 0.4s ease-in-out 0s;
	margin: 5px;
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

.navbar-light .navbar-nav .nav-link {
	color: white !important;
}
</style>

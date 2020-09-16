<template>
	<div>
		<div>
			<b-navbar class="navbar" toggleable="lg" variant="faded" type="dark">
				<b-navbar-brand to="/">
					<img src="https://zupimages.net/up/20/38/d4us.png" alt="Kitten" />
				</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse">
					<b-navbar-nav>
						<b-nav-item to="/admin" @click="logout">Admin</b-nav-item>
					</b-navbar-nav>

					<!-- Right aligned nav items -->
					<!-- <b-navbar-nav class="ml-auto">
						<b-nav-form>
							<b-button
								size="sm"
								class="my-2 my-sm-0"
								v-if="connected"
								to="/login"
								@click="logout"
								>Login</b-button
							>
							<b-nav-item right>
								<b-button
									type="submit"
									class="primary"
									to="/Login"
									@click="logout"
									>Connection</b-button
								>
								<b-button type="button" class="primary" to="/create-account"
									>Créer un compte</b-button
								>
							</b-nav-item>
						</b-nav-form>
					</b-navbar-nav> -->
				</b-collapse>
			</b-navbar>
		</div>
	</div>
</template>

<script>
import { auth } from "@/firebase";

export default {
	data() {
		return {
			connected: false,
		};
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
	},
};
</script>

<style lang="scss" scoped>
.primary {
	text-decoration: none;
	border-radius: 50px;
	padding: 15px 20px;
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
	border: none;
	margin: 10px;
}

.navbar {
	margin-bottom: 50px;
}
</style>

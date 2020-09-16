<template>
	<div>
		<b-navbar type="dark" variant="dark">
			<b-navbar-nav>
				<b-nav-item to="/">Home</b-nav-item>
				<b-nav-item to="/admin">Admin</b-nav-item>
				<b-nav-item v-if="connected" @click="logout">Logout</b-nav-item>
			</b-navbar-nav>
		</b-navbar>
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

<style lang="scss" scoped></style>

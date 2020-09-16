<template>
	<div>
		<h1>Connection</h1>
		<b-form @submit="onSubmit" v-if="show">
			<!-- Mail-->
			<b-form-group
				label="Adresse email:"
				description="Nous ne partagerons jamais votre e-mail avec qui que ce soit."
			>
				<b-form-input
					@change="initMessageError"
					v-model="email"
					type="email"
					required
					placeholder="Entrer votre email"
				></b-form-input>
			</b-form-group>

			<!-- Password-->
			<b-form-group id="input-group-2" label="Mot de passe:">
				<b-form-input
					@change="initMessageError"
					v-model="password"
					type="password"
					required
					placeholder="Entrer votre mot de passe"
				></b-form-input>
			</b-form-group>
			<!-- Button connection-->
			<b-button type="submit" variant="primary">Connection</b-button>

			<!-- Error message-->
			<b-alert show v-if="messageError" variant="danger">{{
				messageError
			}}</b-alert>
		</b-form>
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
			show: true,
		};
	},
	methods: {
		async onSubmit(evt) {
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

<style lang="scss" scoped></style>

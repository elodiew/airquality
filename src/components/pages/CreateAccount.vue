<template>
	<div>
		<div class="row justify-content-center create-account">
			<div class="col-md-8 justify-content-center">
				<h1>{{ $t('message.create_account') }}</h1>
				<b-form @submit="submitAction">
					<b-form-group>
						{{ $t('message.address_mail') }}

						<b-form-input
							@change="initMessageError"
							v-model="email"
							type="email"
						>
						</b-form-input>
					</b-form-group>

					<b-form-group>
						{{ $t('message.password') }}

						<b-form-input
							@change="initMessageError"
							v-model="password"
							type="password"
						/>
					</b-form-group>
					<b-button type="submit" class="createAccount">{{
						$t('message.create')
					}}</b-button>

					<b-alert show v-if="messageError" variant="danger">{{
						messageError
					}}</b-alert>
				</b-form>
			</div>
		</div>
	</div>
</template>

<script>
import { auth } from '@/firebase';
export default {
	data() {
		return {
			email: null,
			password: null,
			messageError: null,
		};
	},
	methods: {
		async submitAction(evt) {
			evt.preventDefault();

			if (this.password.length >= 6) {
				await auth.createUserWithEmailAndPassword(this.email, this.password);
				await auth.signInWithEmailAndPassword(this.email, this.password);
				this.$router.replace({ path: '/admin' });
			} else {
				this.messageError =
					'Le mot de passe doit contenir au moins 6 caractères';
			}
		},
		initMessageError() {
			this.messageError = null;
		},
	},
};
</script>

<style lang="scss" scoped>
.create-account {
	margin-top: 100px;
}

.createAccount {
	max-width: 200px;
	text-decoration: none;
	border-radius: 50px;
	padding: 15px 20px;
	font-size: 11px;
	line-height: 1rem;
	font-weight: 700;
	display: block;
	letter-spacing: 0.2rem;
	background-color: #ffffff;
	color: #0275d8;
	font-family: 'Questrial', sans-serif;
}

.createAccount:hover {
	background-color: rgb(255, 255, 255);
	color: rgb(60, 60, 255);
}

.createAccount:focus {
	background-color: rgb(255, 255, 255);
	color: rgb(60, 60, 255);
	border-color: white;
	box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}
</style>

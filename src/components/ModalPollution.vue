<template>
	<div>
		<b-modal
			hide-footer
			id="modal-lg"
			size="lg"
			title="À propos de la mesure de la qualité de l'air et de la pollution:
"
			>À propos des niveaux de qualité de l'air
			<b-table hover :items="items"></b-table>
			<b-button class="mt-3" block @click="$bvModal.hide('modal-lg')"
				>Close Me</b-button
			>
		</b-modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					AQI: '0-30',
					NiveauDePollutionAtmosphérique: 'Bonne',
					ImplicationsSanitaires:
						"La qualité de l'air est considérée comme satisfaisante et la pollution de l'air pose peu ou pas de risque",
					MiseEnGarde: 'Aucune',
					_rowVariant: 'success',
				},
				{
					AQI: '31-50',
					NiveauDePollutionAtmosphérique: 'Modérer',
					ImplicationsSanitaires:
						'Les membres de groupes sensibles peuvent subir des effets sur la santé. Le grand public ne sera probablement pas affecté.',
					MiseEnGarde:
						"Les enfants et les adultes actifs, ainsi que les personnes souffrant de maladies respiratoires, telles que l'asthme, devraient limiter les efforts prolongés à l'extérieur.",
					_rowVariant: 'warning',
				},
				{
					AQI: '51-100',
					NiveauDePollutionAtmosphérique: 'Mauvaise',
					ImplicationsSanitaires:
						'Tout le monde peut commencer à ressentir des effets sur la santé; les membres de groupes sensibles peuvent subir des effets plus graves sur la santé',
					_rowVariant: 'danger',
					MiseEnGarde:
						"Les enfants et les adultes actifs, ainsi que les personnes souffrant de maladies respiratoires, telles que l'asthme, devraient éviter les efforts prolongés à l'extérieur; tout le monde, en particulier les enfants, devrait limiter les efforts prolongés à l'extérieur",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
table th {
	padding-right: 35px;
}
</style>

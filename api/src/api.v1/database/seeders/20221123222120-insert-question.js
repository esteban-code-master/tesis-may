'use strict'

const TABLE_NAME = "question"

module.exports = {
	async up (queryInterface) {
		await queryInterface.sequelize.query("ALTER TABLE  tesis.question MODIFY COLUMN question LONGTEXT")
		await queryInterface.bulkInsert(TABLE_NAME, [
			{
				question: "Explica cómo sabes cuáles son las cosas que te producen placer y elabora sobre dos ejemplos"
			},
			{
				question:"En las últimas dos semanas, ¿cómo te has sentido emocionalmente?"
			},
			{
				question: "Describe cómo han sido tus hábitos de sueño en las últimas dos semanas"
			},
			{
				question: "Explica cómo logras reconocer que te sientes cansado o con poca energía, describe a detalle cómo fue la última vez que te sentiste así en las últimas semanas"
			},
			{
				question: "Describe cómo es tu apetito normalmente y cómo ha sido en las últimas dos semanas o si has notado algún cambio"
			},
			{
				question: "Elabora sobre la siguiente idea: ¿Te has sentido mal contigo mismo respecto a algo que consideres un fracaso personal o familiar? Si no te ha sucedido, imagina y describe cómo crees que podría presentarse algo así en tu vida"
			},
			{
				question: "Describe qué sucede cuando te sientes distraído o cómo sabes que estás teniendo problemas para concentrarte"
			},
			{
				question: "Cuando notas que tu cuerpo está más o menos inquieto o activo de lo normal, ¿qué piensas? ¿Por qué crees que sucedan estos cambios?"
			},
			{
				question: "¿Has pensado alguna vez que podrías sentirte mejor lastimándote a ti mismo de alguna manera? Si te ha sucedido explica el porqué, de no ser así, explica por qué piensas que la gente puede sentirse así"
			},
			{
				question: "En las últimas dos semanas he sentido poco interés o placer en hacer cosas"
			},
			{
				question: "En las últimas dos semanas me he sentido decaído, deprimido, o sin esperanzas"
			},
			{
				question: "En las últimas dos semanas he tenido dificultad para quedarme o permanecer dormido, o he dormido demasiado"
			},
			{
				question: "En las últimas dos semanas me he sentido cansado o con poca energía"
			},
			{
				question: "En las últimas dos semanas me he sentido sin apetito o he comido en exceso"
			},
			{
				question: "En las últimas dos semanas me he sentido mal conmigo mismo o que soy un fracaso o que he quedado mal conmigo mismo o con mi familia"
			},
			{
				question: "En las últimas dos semanas he tenido dificultad para concentrarme en ciertas actividades, tales como leer el periódico o ver la televisión"
			},
			{
				question: "En las últimas dos semanas me he movido o hablado tan lento que otras personas lo pudieron haber notado, o lo contrario, muy inquieto o agitado que he estado moviéndome mucho más de lo normal"
			},
			{
				question: "En las últimas dos semanas he tenido pensamientos de que estaría mejor muerto o de lastimarme de alguna manera"
			}
		], {})
	},

	async down (queryInterface) {
			await queryInterface.bulkDelete(TABLE_NAME, null, {})
	}
};

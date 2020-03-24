<template>
  <div class="hello">
    <div class="container">
		<section class="oponent">
			<h3>Oponent</h3>
			<section class="op-cards">
				<div class="card-small"></div>
				<div class="card-small"></div>
				<div class="card-small"></div>
				<div class="card-small"></div>
				<div class="card-small"></div>
				<div class="card-small"></div>
				<div class="card-small"></div>
			</section>
		</section>
		<div class="hr"></div>
		<section class="stack">
			<div class="cards-left"></div>
			<div class="cards-current"></div>
			<div class="cards-used"></div>
		</section>
		<section class="current-cards">

			<section class="cards">
				<div class="card" v-bind:key="item" v-for="item in items"></div>
			</section>
			<button class="draw-card">
				Draw
			</button>
		</section>

    </div>

  </div>
</template>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
	*{
		font-family: 'Poppins', sans-serif;
	}
	
	.container {
		background: #fff;
		width: 100vw;
		height: 100vh;
	}

	/* Oponent */
	.oponent h3{
		width: 100%;
		height: 25px;
		text-align: center;
		color: white;
		padding-top: 5%;
		font-weight: 400;
	}
	
	.card-small{
		background: white;
		height: 75px;
		width: 75px;
		margin: 0 5px;
		border-radius: 3px;
		box-shadow: 3px 5px rgba(0, 0, 0, 0.25);
	}

	.oponent{
		background: #485C73;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 17%;
	}

	.op-cards{
		display: flex;
		width: 90%;
		margin-bottom: 5%;
		justify-content: space-evenly;
	}

	.hr{
		background: #232323;
		border-style: none;
		height: 1%;
		width: 100vw;
	}

	/* Stack */
	.stack{
		background: rgba(0, 0, 0, 0.25);
		height: 33%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cards-left{
		width: 75px;
		height: 100px;
		background: blue;
	}

	.cards-current{
		width: 150px;
		height: 200px;
		background: red;
		margin: 0 5%;
	}

	.cards-used{
		width: 75px;
		height: 100px;
		background: blue;
	}

	/* Play field */
	.current-cards{
		background: grey;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.cards{
		width: 100%;
		height: 75%;
		background: green;
		display: flex;
		flex-flow: wrap;
		padding: 2.5% 5%;
	}

	.card{
		width: 20%;
		height: 45%;
		margin: 2% 2.5%;
		background: white;
	}

	.draw-card{
		width: 90%;
		height: 10%;
		background: darkgrey;
		border-radius: 5px;
		border: 1px solid white;
	}

</style>

<script>
  export default {
	name: 'Game',
	data() {
		return {
		items: ['1','2','3','4','5','6','7', '8'],
		}
	}
  }
</script>

<template>
  <div class="hello">
    <div class="container">
		<section class="oponent">
			<h3>Oponent</h3>
			<section class="op-cards">
				<Card  v-bind:key="item" v-for="item in opdeck" :type="item"/>
			</section>
		</section>
		<section class="stack">
			<div class="cards-left">
				<Card class="card-small" type="BACK"/>
			</div>
			<div class="cards-current">
				<Card class="card-small" type="8C"/>
			</div>
			<div class="cards-used">
				<Card class="card-small" type="BACK"/>
			</div>
		</section>
		<section class="current-cards">
			<draggable class="cards"  v-model="deck" group="deck" @start="drag=true" @end="drag=false">
					<Card class="card" v-bind:key="item" v-for="item in deck" :type="item"/>
			</draggable>
		</section>

		<section class="controls">

			<button class="draw-card">Draw</button>

			<button class="draw-card">Hold</button>

		</section>

    </div>
  </div>
</template>
<script>
  import io from "socket.io-client";
  import Card from "./Card.vue";
  import draggable from 'vuedraggable';

  export default {
	name: 'Game',
	components:{
		Card, draggable
	},
	data() {
		return {
			deck: ['JC','4H','5H','2C','9H','QC','KC'],
			opdeck: ['BACK', 'BACK', 'BACK', 'BACK', 'BACK', 'BACK', 'BACK'],
			socket: {},
		}
	},
	created(){
		console.log('test');
		this.socket = io("http://localhost:3000");
	},
	mounted() {
		this.socket.on("position", data => {
			console.log(data);
		});
	},
	methods: {
	}
  }
</script>
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
		padding-top: 2.5%;
		font-weight: 400;
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
		background: #324154;
		height: 33%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cards-left{
		width: 75px;
		height: 100px;
		border-radius: 5px;
		background: grey;
	}

	.cards-current{
		width: 150px;
		height: 200px;
		border-radius: 5px;
		background: white;
		margin: 0 5%;
	}

	.cards-used{
		width: 75px;
		height: 100px;
		border-radius: 5px;
		background: grey;
	}

	/* Play field */
	.current-cards{
		background: #295B96;
		height: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.cards{
		width: 90%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: wrap;
		padding: 2.5% 5%;
	}

	.card{
		width: 20%;
		margin: 1% 2.5%;
	}

	/* Controls */
	.controls{
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: rgb(21, 47, 77);
		height: 10%;
	}

	.draw-card{
		width: 40%;
		height: 75%;
		color: white;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 5px;
		border: 0;
		font-weight: 800;
		font-size: 2rem;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	}

</style>
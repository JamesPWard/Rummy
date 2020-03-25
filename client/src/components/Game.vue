<template>
  <div>
	<div class="side-draw">
		test
	</div>
    <div class="container">
		<section class="oponent">
			<section class="op-cards">
				<Card class="small-card" v-bind:key="index" v-for="(item, index) in opdeck" :type="item"/>
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
					<Card class="card" v-bind:key="index" v-for="(item, index) in deck" :type="item"/>
			</draggable>
		</section>
		<section class="disabled-container">
			<h1 class="op-turn">Oponents Turn</h1>
			<div class="disabled"></div>
		</section>
		<section class="controls">
			<button v-on:click="toggleDisable()" class="draw-card">Draw</button>
			<button class="draw-card">Hold</button>
		</section>
    </div>
  </div>
</template>
<script>
//   import io from "socket.io-client";
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
			settings:{
				controlsDisabled: false,
			},
		}
	},
	created(){
		console.log('test');
		// this.socket = io("http://localhost:3000");
	},
	mounted() {
		// this.socket.on("position", data => {
		// 	console.log(data);
		// });
	},
	methods: {

		toggleDisable(){

			if(!this.settings.controlsDisabled){
				document.getElementsByClassName('disabled-container')[0].style.visibility = "visible";
				this.settings.controlsDisabled = true;
			}else{
				document.getElementsByClassName('disabled-container')[0].style.visibility = "hidden";
				this.settings.controlsDisabled = false;
			}

			console.log(this.settings.controlsDisabled);
			console.log(document.getElementsByClassName('disabled-container')[0].visibility);
		}

	}
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
	*{
		font-family: 'Poppins', sans-serif;
	}

	.side-draw{
		transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
		width: 50%;
		height: 100vh;
		background: green;
		left: 50%;
		position: absolute;
	}

	.disabled-container{
		visibility: hidden;
	}
	.disabled {
		width: 100%;
		height:100%;
		z-index: 99;
		background: #000;
		opacity: 0.75;
		position: absolute;
	}
	.op-turn{ 
		color: white;
		font-size: 2rem;
		font-weight: 800;
		position: absolute;
		z-index: 100;
		width: 100%;		
		height: 10%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		background: #fff;
		width: 100vw;
		height: 100vh;
		left: -40%;
		position: relative;
	}

	/* Oponent */
	.oponent{
		background: #485C73;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 12%;
	}

	.op-cards{
		display: flex;
		width: 90%;
		justify-content: space-evenly;
	}

	.small-card{
		margin: 0.5%;
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
		height: 45%;
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
		width: 45%;
		height: 75%;
		color: white;
		background: rgba(0, 0, 0, 0.25);
		border-radius: 0px;
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 3px;
		font-weight: 800;
		font-size: 1rem;
		box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
	}
</style>
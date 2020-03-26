<template>
    <div class="menu-container">
        <div class="menu" v-if="setting == 'menu'">
            <h3>Main Menu</h3>
            <button class="new-game" v-on:click="createGame()">New Game</button>
            <button class="join-game">Join Game</button>
        </div>
        <div class="menu" v-else-if="setting == 'waiting'">
            <h4>Waiting for oponent...</h4>
            <input type="text" :value="'localhost:8080/join?' + this.$parent.settings.gameId">
        </div>
    </div>
</template>
<style scoped>
    h3{
        font-size: 1.5rem;
        color: white;
    }
    h4{
        font-size: 1.25rem;
        color: white;
        margin-bottom: 5%;
    }
    .menu-container{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
    }
    .menu-container::after{
        content: '';
        background: rgba(0, 0, 0, 0.33);
        position: absolute;
        z-index: 99;
        width: 100%;
        height: 100%;
    }

    .menu{
        width: 50%;
        height: auto;
        padding: 5%;
        background: rgb(30, 47, 66);
        border-radius: 15px;
        position: absolute;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-shadow: 0px 0px 5px #000;
    }

    .menu button{
        margin: 5%;
        background: rgba(255, 255, 255, 0.25);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.5);;
        width: 75%;
        height: 25%;
    }
</style>
<script>
export default {
 
    name: 'MainMenu',
	data() {
		return {
            
		}
    },
    props: ['setting'],
    methods: {

        createGame(){
            this.$parent.createGame();
        }
    },
}
</script>
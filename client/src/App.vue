<template>
  <div id="app">
    <Game />
  </div>
</template>

<script>
  import Game from './components/Game.vue'

  export default {
    name: 'App',
    components: {
      Game
    },
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
	*{
		font-family: 'Poppins', sans-serif;
	}
</style>

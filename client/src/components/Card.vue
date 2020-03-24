<template>
    <div>
        <img v-if="type == 'BACK'" style="max-width:100%;" src="../assets/cards/2B.svg" alt=""/>

        <img v-else-if="type == 'AC'" style="max-width:100%;" src="../assets/cards/AH.svg" alt=""/>
        <img v-else-if="type == 'AD'" style="max-width:100%;" src="../assets/cards/AS.svg" alt=""/>
        <img v-else-if="type == 'AH'" style="max-width:100%;" src="../assets/cards/AH.svg" alt=""/>
        <img v-else-if="type == 'AS'" style="max-width:100%;" src="../assets/cards/AS.svg" alt=""/>

        <img v-else-if="type == 'JC'" style="max-width:100%;" src="../assets/cards/JC.svg" alt=""/>
        <img v-else-if="type == 'JD'" style="max-width:100%;" src="../assets/cards/JD.svg" alt=""/>
        <img v-else-if="type == 'JH'" style="max-width:100%;" src="../assets/cards/JH.svg" alt=""/>
        <img v-else-if="type == 'JS'" style="max-width:100%;" src="../assets/cards/JS.svg" alt=""/>
        
        <img v-else-if="type == 'KC'" style="max-width:100%;" src="../assets/cards/KC.svg" alt=""/>
        <img v-else-if="type == 'KD'" style="max-width:100%;" src="../assets/cards/KD.svg" alt=""/>
        <img v-else-if="type == 'KH'" style="max-width:100%;" src="../assets/cards/KH.svg" alt=""/>
        <img v-else-if="type == 'KS'" style="max-width:100%;" src="../assets/cards/KS.svg" alt=""/>

        <img v-else-if="type == 'QC'" style="max-width:100%;" src="../assets/cards/QC.svg" alt=""/>
        <img v-else-if="type == 'QD'" style="max-width:100%;" src="../assets/cards/QD.svg" alt=""/>
        <img v-else-if="type == 'QH'" style="max-width:100%;" src="../assets/cards/QH.svg" alt=""/>
        <img v-else-if="type == 'QS'" style="max-width:100%;" src="../assets/cards/QS.svg" alt=""/>

        <img v-else-if="type == 'TC'" style="max-width:100%;" src="../assets/cards/TC.svg" alt=""/>
        <img v-else-if="type == 'TD'" style="max-width:100%;" src="../assets/cards/TD.svg" alt=""/>
        <img v-else-if="type == 'TH'" style="max-width:100%;" src="../assets/cards/TH.svg" alt=""/>
        <img v-else-if="type == 'TS'" style="max-width:100%;" src="../assets/cards/TS.svg" alt=""/>

        <img v-else-if="type == '2C'" style="max-width:100%;" src="../assets/cards/2C.svg" alt=""/>
        <img v-else-if="type == '2D'" style="max-width:100%;" src="../assets/cards/2D.svg" alt=""/>
        <img v-else-if="type == '2H'" style="max-width:100%;" src="../assets/cards/2H.svg" alt=""/>
        <img v-else-if="type == '2S'" style="max-width:100%;" src="../assets/cards/2S.svg" alt=""/>

        <img v-else-if="type == '3C'" style="max-width:100%;" src="../assets/cards/3C.svg" alt=""/>
        <img v-else-if="type == '3D'" style="max-width:100%;" src="../assets/cards/3D.svg" alt=""/>
        <img v-else-if="type == '3H'" style="max-width:100%;" src="../assets/cards/3H.svg" alt=""/>
        <img v-else-if="type == '3S'" style="max-width:100%;" src="../assets/cards/3S.svg" alt=""/>

        <img v-else-if="type == '4C'" style="max-width:100%;" src="../assets/cards/4C.svg" alt=""/>
        <img v-else-if="type == '4D'" style="max-width:100%;" src="../assets/cards/4D.svg" alt=""/>
        <img v-else-if="type == '4H'" style="max-width:100%;" src="../assets/cards/4H.svg" alt=""/>
        <img v-else-if="type == '4S'" style="max-width:100%;" src="../assets/cards/4S.svg" alt=""/>

        <img v-else-if="type == '5C'" style="max-width:100%;" src="../assets/cards/5C.svg" alt=""/>
        <img v-else-if="type == '5D'" style="max-width:100%;" src="../assets/cards/5D.svg" alt=""/>
        <img v-else-if="type == '5H'" style="max-width:100%;" src="../assets/cards/5H.svg" alt=""/>
        <img v-else-if="type == '5S'" style="max-width:100%;" src="../assets/cards/5S.svg" alt=""/>

        <img v-else-if="type == '6C'" style="max-width:100%;" src="../assets/cards/6C.svg" alt=""/>
        <img v-else-if="type == '6D'" style="max-width:100%;" src="../assets/cards/6D.svg" alt=""/>
        <img v-else-if="type == '6H'" style="max-width:100%;" src="../assets/cards/6H.svg" alt=""/>
        <img v-else-if="type == '6S'" style="max-width:100%;" src="../assets/cards/6S.svg" alt=""/>

        <img v-else-if="type == '7C'" style="max-width:100%;" src="../assets/cards/7C.svg" alt=""/>
        <img v-else-if="type == '7D'" style="max-width:100%;" src="../assets/cards/7D.svg" alt=""/>
        <img v-else-if="type == '7H'" style="max-width:100%;" src="../assets/cards/7H.svg" alt=""/>
        <img v-else-if="type == '7S'" style="max-width:100%;" src="../assets/cards/7S.svg" alt=""/>

        <img v-else-if="type == '8C'" style="max-width:100%;" src="../assets/cards/8C.svg" alt=""/>
        <img v-else-if="type == '8D'" style="max-width:100%;" src="../assets/cards/8D.svg" alt=""/>
        <img v-else-if="type == '8H'" style="max-width:100%;" src="../assets/cards/8H.svg" alt=""/>
        <img v-else-if="type == '8S'" style="max-width:100%;" src="../assets/cards/8S.svg" alt=""/>

        <img v-else-if="type == '9C'" style="max-width:100%;" src="../assets/cards/9C.svg" alt=""/>
        <img v-else-if="type == '9D'" style="max-width:100%;" src="../assets/cards/9D.svg" alt=""/>
        <img v-else-if="type == '9H'" style="max-width:100%;" src="../assets/cards/9H.svg" alt=""/>
        <img v-else-if="type == '9S'" style="max-width:100%;" src="../assets/cards/9S.svg" alt=""/>
    </div>
</template>
<style scoped>
    .card{
        font-size: 2rem;
    }
</style>
<script>
export default {
    name: 'Card',
    props: ['type'],
    data() {
        return{
            test: ''
        }
    },
}
</script>
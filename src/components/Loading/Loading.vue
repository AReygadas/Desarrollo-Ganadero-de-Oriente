<script setup >
    import {ref} from 'vue';
    const _color1 = ref('#641E16');  
    const _color2 = ref('#7B241C');
    const _color3 = ref('#922B21');
    const _color4 = ref('#A93226');
    const _color5 = ref('#C0392B');
</script>
<template>
   
    <div class="Spinerbloc">
        <div class="container1">
            <div>
                <img alt="logo" src="@/assets/icon2.png" class="logoe" />
            </div>
            <div class="container">
                <div class="yellow bol"></div>
                <div class="red  bol"></div>
                <div class="blue  bol"></div>
                <div class="violet  bol"></div>
                <div class="col5  bol"></div>
            </div>            
        </div>
    </div>
</template>
<style scoped>
.logoe{
    height: 25vh;
    width: auto;
}
.Spinerbloc{
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    place-items: center;
    background: rgba( 0, 0, 0, 0.8 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 1.5px );
    /* border-radius: 10px; */
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
    z-index: 999;
}

.container1 {
    margin: auto;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.container {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bol {
    width: 2.7vw;
    height: 2.7vw;
    border-radius: 100%;
    margin: 1vw;
    background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
    animation: bounce 1.5s 0.5s linear infinite;
}

.yellow {
    background-color:v-bind(_color1); 
}

.red {
    background-color:v-bind(_color2);
    animation-delay: 0.1s;
}

.blue {
    background-color:v-bind(_color3);
    animation-delay: 0.2s;
}

.violet {
    background-color:v-bind(_color4);
    animation-delay: 0.3s;
}
.col5{
    background-color:v-bind(_color5);
    animation-delay: 0.4s;
}

@keyframes bounce {

    0%,
    50%,
    100% {
        transform: scale(1);
        filter: blur(0px);
    }

    25% {
        transform: scale(0.6);
        filter: blur(3px);
    }

    75% {
        filter: blur(3px);
        transform: scale(1.4);
    }
}
</style>







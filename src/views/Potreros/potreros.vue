<script setup>
    import { reactive } from "vue";

    const state = reactive({
    map: 0,
    });
    const ShowMap = (e) => {
    state.map = e;
    };
    const closeMap = () => {
    state.map = 0;
    };
</script>
<template>
  <div class="extendmap">
    <img
      v-if="state.map == 1"
      src="@/assets/Canon.jpg"
      class="map"
      @click="closeMap"
    />
    <img
      v-if="state.map == 2"
      src="@/assets/Carretero.jpg"
      class="map"
      @click="closeMap"
    />
    <img
      v-if="state.map == 3"
      src="@/assets/OdeAgua.jpg"
      class="map"
      @click="closeMap"
    />
    <img
      v-if="state.map == 4"
      src="@/assets/PCaballos.jpg"
      class="map"
      @click="closeMap"
    />
  </div>
  <div class="container">
    <h1>PotreroS</h1>
    <div class="maps">
      <div class="potrero">
        <h1>Cañon</h1>
        <img src="@/assets/Canon.jpg" class="minimap" @click="ShowMap(1)" />
        <h2 >11 Cabezas</h2>
        <h2 class="porc">17%</h2>
      </div>
      <div class="potrero">
        <h1>Carretero</h1>
        <img src="@/assets/Carretero.jpg" class="minimap" @click="ShowMap(2)" />
        <h2>18 Cabezas</h2>
        <h2 class="porc">28%</h2>
      </div>
      <div class="potrero">
        <h1>O. de Agua</h1>
        <img src="@/assets/OdeAgua.jpg" class="minimap" @click="ShowMap(3)" />
        <h2>72 Cabezas</h2>
        <h2 class="porc b">70%</h2>
    </div>
      <div class="potrero">
        <h1>P. Caballos</h1>
        <img src="@/assets/PCaballos.jpg" class="minimap" @click="ShowMap(4)" />
        <img src="@/assets/iconoGan.png" alt="" class="icono4" />
        <h2>6 Cabezas</h2>
        <h2 class="porc b">75%</h2>
      </div>
    </div>
  </div>
</template>
<style scoped>
.extendmap{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}
.porc{
    font-size: 3rem;
    color: forestgreen;
    font-weight: 900;
}
.b{
    color: coral;
}
.icono4{
    width: 3rem;
    
}
.map {
  height: 80vh;
  width: auto;

}
.modal {
  display: none;
}
.container {
  text-align: center;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
}
.maps {
  width: 80vw;
  display: flex;
  padding: 3rem;
  gap: 5rem;
}
.potrero {
}
.minimap {
  width: 100%;
  box-shadow: 10px 10px 10px rgb(20, 20, 20);
  transition: 1s;
  margin-bottom: 3rem;
}
.minimap:hover {
  width: 110%;
}
</style>

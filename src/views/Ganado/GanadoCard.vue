<script setup>
  import { onMounted, inject, ref, reactive, watch  } from "vue";
  import moment from "moment";

  const Get = inject("GET");
  const GanadoData = ref();
  const DataS = ref([]);
  const show = ref(false);
  const IdDettalle = ref(1);

  const credenciales = reactive({
    Siniga: "",
    ControlAnterior: "",
    ControlActual: "",
    Genero: "",
    Raza: "",
    Propietario: "",
    Observaciones: "",
    Situacion: "",
    Fecha_nacimiento: "",
    Potrero: "",
    Ing: "",
    Peso: "",
    PieCria: "",
  });
  const Add = (e) => {
    show.value = !show.value;
    IdDettalle.value = e - 1;
  };

  const getImageUrl = (name) => {
    return new URL(`../../assets/${name}`, import.meta.url).href;
  };

  onMounted(() => {
    Get("/Ganado").then((response) => {
      GanadoData.value = response;
      DataS.value = response;
      console.log(GanadoData.value);
    });
  });

  const searchText = ref('');

  watch(searchText,(newValue, oldValue) => {
    if(newValue){
      GanadoData.value = DataS.value.filter((item) => item.situacion && newValue ? item.situacion.toUpperCase().match(newValue.toUpperCase()) : false)
    }else{
      GanadoData.value = DataS.value;
    }
  });

  const ChangeSearch = (value) =>{
    searchText.value = value;
  }

</script>

<template>
  <div v-if="show" class="Modal" v-on:click="Add(0)">
    <div class="ModalContentA">
      <img
        class="ImagenDetail"
        :src="getImageUrl(GanadoData[IdDettalle].ing)"
      />
      <div>
        <h2>Control: {{ GanadoData[IdDettalle].controlActual }}</h2>
        <h2>Siniga: {{ GanadoData[IdDettalle].siniga }}</h2>

        <h2>Fecha proxima de parto: -- /-- /--</h2>

        <h1>Historial Medico</h1>
        <div class="tableContainer">
          <div class="table">
            <div class="table-header">
              <div class="header__item">
                <a id="name" class="filter__link" href="#">Descripcion</a>
              </div>
              <div class="header__item">
                <a id="wins" class="filter__link filter__link--number" href="#"
                  >Valor</a
                >
              </div>
              <div class="header__item">
                <a id="draws" class="filter__link filter__link--number" href="#"
                  >Fehca</a
                >
              </div>
            </div>
            <div class="table-content">
              <div class="table-row">
                <div class="table-data"></div>
                <div class="table-data"></div>
                <div class="table-data"></div>
              </div>
              <div class="table-row">
                <div class="table-data"></div>
                <div class="table-data"></div>
                <div class="table-data"></div>
              </div>
              <div class="table-row">
                <div class="table-data"></div>
                <div class="table-data"></div>
                <div class="table-data"></div>
              </div>
              <div class="table-row">
                <div class="table-data"></div>
                <div class="table-data"></div>
                <div class="table-data"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>

  <div class="MenuFlotante">
       
  </div> 

  <h2>Listado de Ganado <small>2022-2023</small></h2>
   <div class="buttonCont">
      <button class="button-29" @click="ChangeSearch('')">Todos</button>
      <button class="button-29" @click="ChangeSearch('Vaca')">Vacas</button>
      <button class="button-29" @click="ChangeSearch('Semental')">Sementales</button>
      <button class="button-29" @click="ChangeSearch('Ternera')">Terneras</button>
      <button class="button-29" @click="ChangeSearch('Becerro')">Becerros</button> 
      <label>Buscar: </label><input type="text" v-model="searchText" />
   </div>
  <ul class="CardConteiner">
    <li class="card f4" v-for="dato in GanadoData">
      <img
        class="fotoAn"
        :key="dato.ganadoId"
        :src="getImageUrl(dato.ing)"
        :alt="dato.ganadoId"
        v-on:click="Add(dato.ganadoId)"
      />
      <br>
      <div>
        <span class="DatoD">Control:</span> {{ dato.controlActual }} -
        <span class="DatoD">Siniga:</span> {{ dato.siniga }}
      </div>
      <div>
        <span class="DatoD">Genero:</span> {{ dato.genero }}
        <span class="DatoD">Raza:</span> {{ dato.raza }}
      </div>
      <div>
        
        <span class="DatoD">Propietario:</span> {{ dato.propietario }}
        <h3>Peso: {{ dato.peso }} Situacion: {{ dato.situacion }}</h3>
      </div>
      <h1><span v-for="num in dato.premium">⭐</span></h1>
    </li>
  </ul>
</template>

<style scoped>
.card{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;  
  border-radius: 16px;
  box-shadow: 10px 10px 10px rgba(20, 20, 20,0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.f1{
  background: linear-gradient(220.55deg, #FF8570 0%, #418CB7 100%);
}
.f2{
  background: linear-gradient(220.55deg, #5EE2FF 0%, #00576A 100%);
}
.f3{
  background: linear-gradient(220.55deg, #999999 0%, #ffffff 100%);
}
.f4{
  background: linear-gradient(90deg, #fff48d 0%, #ac9e60 100%);
}
/* CSS */
.buttonCont{
  padding: 0.5rem; 
  background-color: #fff;
  margin: 2rem;
  border-radius: 15px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
}
.button-29 {
  margin: 1rem;
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
}

.button-29:focus {
  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}

.button-29:hover {
  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-29:active {
  box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
}
.tableContainer {
  padding: 2rem;
  margin-left: -8rem;
}
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  padding: 24px;
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
.container {
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.table {
  width: 80%;
  border: 1px solid #eee;
}
.table-header {
  display: flex;
  width: 100%;
  background: #000;
  padding: 18px 0;
}
.table-row {
  display: flex;
  width: 100%;
  padding: 18px 0;
}
.table-row:nth-of-type(odd) {
  background: rgb(117, 117, 117);
}
.table-data,
.header__item {
  flex: 1 1 20%;
  text-align: center;
}
.header__item {
  text-transform: uppercase;
}
.filter__link {
  color: white;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-left: 24px;
  padding-right: 24px;
}
.filter__link::after {
  content: "";
  position: absolute;
  right: -18px;
  color: white;
  font-size: 12px;
  top: 50%;
  transform: translateY(-50%);
}
.filter__link.desc::after {
  content: "(desc)";
}
.filter__link.asc::after {
  content: "(asc)";
}

.ModalContentA {
  display: grid;
  grid-template-columns: 35% 60%;
  color: #ffff;
}
.ImagenDetail {
  width: 80%;
}
.DatoD {
  font-style: oblique;
  font-weight: 500;
}
.fotoAn {
  width: 200px;
  height: 200px;
  margin: 1rem 0 0 0 ;
  border-radius: 9px;
  cursor: pointer;
}
.fotoAn:hover {
  width: 93%;
}
.CardConteiner {
  margin: 1px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
  gap: 30px;
}
.cardItem {
  display: grid;
  place-content: center;
  background-color: #ececec;
  width: 100%;
  height: auto;
  box-shadow: 9px 9px 9px rgba(20, 20, 20, 0.8);
  border: solid 1px rgb(0, 0, 0, 0.8);
  border-radius: 9px;
  padding: 5px;
}
.actionBtns {
  display: flex;
  justify-content: center;
  gap: 1vw;
}
.BtnMas {
  width: 6rem;
  background-color: #7dfc56;
  border-radius: 4px;
  box-shadow: 7px 7px 7px #6c7a89;
  border: none;
  padding: 7px;
}
.Cerrar {
  width: 6rem;
  background-color: #ffc400;
  border-radius: 4px;
  box-shadow: 7px 7px 7px #6c7a89;
  border: none;
  padding: 7px;
}
.fila {
  display: grid;
  grid-template-columns: 40% 60%;
}
.Modal {
  display: block;
  position: fixed;
  top: 0;
  background-color: rgb(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  z-index: 200;
  padding: 2rem;
}
.ModalContent {
  display: grid;
  color: aliceblue;
  gap: 0.2rem;
  margin: auto;
  width: 26%;
  text-align: center;
  padding: 1rem;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.MenuFlotante {
  position: absolute;
  left: 0;
  top:5rem;
}
.buttonAction {
  background: #2b7913;
  border-radius: 7px;
  cursor: pointer;
}
.MenuFloat {
  background: #fff;
  position: absolute;
}
body {
  font-family: "lato", sans-serif;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}
.responsive-table li {
  border-radius: 3px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.responsive-table .table-header {
  background-color: #95a5a6;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.responsive-table .table-row {
  background-color: #fff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}
.responsive-table .col-1 {
  flex-basis: 15%;
}
.responsive-table .col-2 {
  flex-basis: 15%;
}
.responsive-table .col-3 {
  flex-basis: 15%;
}
.responsive-table .col-4 {
  flex-basis: 15%;
}
.responsive-table .col-5 {
  flex-basis: 15%;
}
.responsive-table .col-6 {
  flex-basis: 15%;
}
.responsive-table .col-7 {
  flex-basis: 4.5%;
  cursor: pointer;
}
@media all and (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }
  .responsive-table li {
    display: block;
  }
  .responsive-table .col {
    flex-basis: 100%;
  }
  .responsive-table .col {
    display: flex;
    padding: 1px 0;
  }
  .responsive-table .col:before {
    color: #6c7a89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
  }
}
</style>

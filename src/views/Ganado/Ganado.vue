<script setup>
import { onMounted, inject, ref, reactive } from "vue";
import moment from "moment";

const Get = inject("GET");
const Data = ref();
const GanadoData = ref();
const show = ref(false);
const credenciales = reactive({
	Siniga:"",
	ControlAnterior:"",
	ControlActual:"",
	Genero:"",
	Raza:"",
	Propietario:"",
	Observaciones:"",
	Situacion:"",
	Fecha_nacimiento:"",
	Potrero:"",
	Ing:"",
	Peso:"",
	PieCria:""

});
const Add =()=>{
	show.value=!show.value
}
onMounted(() => {
  Get("/Ganado").then((response) => {
    GanadoData.value = response;
    Data.value = response;
  });

});

</script>

<template>
  <div v-if="show" class="Modal">
    <div class="ModalContent1">
      <h2 style="color:aliceblue">Registro de ganado</h2>
      <br />
      <div class="ModalContent">
		<div class="fila">
			<label>Siniga</label> <input class="InputGas" />
		</div>
		<div class="fila">
			<label>Control Anterior</label> <input class="InputGas" />
		</div>
		<div class="fila">
			<label>Control Actual</label> <input class="InputGas" />
		</div>
		<div class="fila">
			<label>Genero</label> 
				<select name="select">
          <option value="H">Hembra</option>
          <option value="M">Macho</option>
        </select>
		</div>
		<div class="fila">
			<label>Raza</label> <input class="InputGas" />
		</div>
		<div class="fila">
			<label>Propietario</label> <input class="InputGas" />
		</div>
		<div class="fila">
			<label>Observaciones</label> <input class="InputGas" />
		</div>
		<div class="fila">
			<label>Situacion</label> 
			<select name="select">
			<option value="Vaca">Vaca</option>
			<option value="Semental">Semental</option>
			<option value="Ternera">Ternera</option>
			<option value="Becerro">Becerro</option>
			</select>
		</div>
		<div class="fila">
			<label>Fecha de Nacimiento</label> <input class="InputGas" />
		</div>
		<div class="fila">
			<label>Potrero</label> 
			<select name="select">
			<option value="Cañon">Cañon</option>
			<option value="Carretero">Carretero</option>
			<option value="Ojo de agua">Ojo de Agua</option>
			<option value="Fraccion">Fraccion</option>
			<option value="Caballos">Caballos</option>
			</select>
		</div>
		<div class="fila">
			<label>Observaciones</label> <input class="InputGas" />
		</div>
		<div class="fila">
			<label>Peso</label> <input class="InputGas" />
		</div>
		<div class="fila">
			<label>Pie de cria</label> <select name="select">
			<option value="Cañon">Si</option>
			<option value="Carretero">No</option>
			</select>
		</div>

        <br>
        <div class="actionBtns">
			<button v-on:click="showHide" class="BtnMas">Guardar</button>
			<button v-on:click="Add" class="Cerrar">Cerrar</button>
		</div>
      </div>
    </div>
  </div>

 
    <div class="container">
      <div class="MenuFlotante">
        <div class="buttonAction" @click="Add">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-file-plus"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path
              d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
            />
            <line x1="12" y1="11" x2="12" y2="17" />
            <line x1="9" y1="14" x2="15" y2="14" />
          </svg>
        </div>
      </div>

      <h2>Listado de Ganado <small>2022-2023</small></h2>
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">Siniga</div>
          <div class="col col-2">Control Actual</div>
          <div class="col col-3">Genero y Raza</div>
          <div class="col col-4">Situacion</div>
          <div class="col col-5">Fecha de Nacimiento</div>
          <div class="col col-6">Potreo</div>
          <div class="col col-7">Editar</div>
        </li>

        <li class="table-row" v-for="dato in GanadoData">
          <div class="col col-1" data-label="Siniga">{{ dato.siniga }}</div>
          <div class="col col-2" data-label="Control Actual">
            {{ dato.controlActual }}
          </div>
          <div class="col col-3" data-label="Genero y Raza">
            {{ dato.genero }} - {{ dato.raza }}
          </div>
          <div class="col col-4" data-label="Situacion">
            {{ dato.situacion }}
          </div>
          <div class="col col-5" data-label="Fecha de Nacimiento">
            {{ dato.fecha_nacimiento }}
          </div>
          <div class="col col-6" data-label="Potreo">{{ dato.potrero }}</div>
          <div class="col col-7" data-label="Editar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-edit"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00abfb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
              />
              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
              <line x1="16" y1="5" x2="19" y2="8" />
            </svg>
          </div>

          <div class="col col-7" data-label="Editar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-report"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#597e8d"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
              <path d="M18 14v4h4" />
              <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
              <rect x="8" y="3" width="6" height="4" rx="2" />
              <circle cx="18" cy="18" r="4" />
              <path d="M8 11h4" />
              <path d="M8 15h3" />
            </svg>
          </div>
        </li>
      </ul>

      
    </div>
 
</template>

<style scoped>
.actionBtns{
	display: flex;
	justify-content: center;
	gap: 1vw;
}
.BtnMas{
	width: 6rem;
	background-color: #7dfc56;
	border-radius: 4px;
	box-shadow: 7px 7px 7px #6c7a89;
	border: none;
	padding: 7px;
}
.Cerrar{
	width: 6rem;
	background-color: #ffc400;
	border-radius: 4px;
	box-shadow: 7px 7px 7px #6c7a89;
	border: none;
	padding: 7px;
}
.fila{
	display: grid;
	grid-template-columns: 40% 60%;
}
.Modal{
  display:block;
  position:fixed;
  top:0;
  background-color: rgb(0,0,0,0.8);
  height: 100%;
  width: 100%;
  z-index: 200;
}
.ModalContent{
  display: grid;
  color: aliceblue;
  gap: 0.2rem;
  margin:auto;
  width: 26%;
  text-align: center;
  padding:1rem;
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
.container {
  background-color: #E2E2E7;
  color: black;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
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

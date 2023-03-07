<script setup>

import { onMounted, inject, ref} from 'vue';
import MoneyFormat from 'vue-money-format'

	const Get = inject('GET')
	const DashBoardData = ref()
  const Gastos = ref()
  const Ingresos = ref()
  const Ganado = ref()
  const vacas = ref(0)
  const Sementales = ref(0)
  const Terneras = ref(0)
  const Becerros = ref(0)
  const Nacimientos = ref(0)

	onMounted(()=>{
		Get('/Login').then(response => {
			DashBoardData.value = response[0]
      Gastos.value=response[0].gastos.toLocaleString("en"); 
      Ingresos.value=response[0].ingresos.toLocaleString("en")
      Ganado.value=response[0].ganado.toLocaleString("en")
      vacas.value=response[0].vacas
      Sementales.value=response[0].sementales
      Terneras.value=response[0].terneras
      Becerros.value=response[0].becerros    
      Nacimientos.value=response[0].nacimientos      
		})
	})
</script>

<template>
  <div class="" >
    <h1 class="Title1">Resumen Financiero</h1>
  
    <ul class="Container">
      <li class="CardInfo dg45">
        <div class="IconCard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-receipt-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"
            />
            <path
              d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"
            />
          </svg>
        </div>

        <h2 class="inf">${{Gastos}}</h2>
        Total de Gastos
        <div class="line dg45"></div>
      </li>

      <li class="CardInfo dg7">
        <div class="IconCard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-wallet"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
            />
            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
          </svg>
        </div>
        <h2 class="inf">${{Ingresos}}</h2>
        Ingresos
        <div class="line dg7"></div>
      </li>

      <li class="CardInfo dg32">
        <div class="IconCard ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-businessplan"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <ellipse cx="16" cy="6" rx="5" ry="3" />
            <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
            <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
            <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
            <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
            <path d="M5 15v1m0 -8v1" />
          </svg>
        </div>
        <h2 class="inf">${{ Ganado }}</h2>
        Costo de Ganado
        <div class="line dg32"></div>
      </li>
    </ul>
    
    <div class="Cont02">

      <div class="Dt1">
        <h2>Resumen Ganado</h2>
        <div class="dt2">
          <div>Vacas</div><div> {{ vacas }}</div>
        </div>
        <div class="dt2">
          <div>Sementales</div><div>{{Sementales}}</div>
        </div>
        <div class="dt2">
          <div>Terneras</div><div>{{Terneras  }}</div>
        </div>
        <div class="dt2">
          <div>Becerros</div><div>{{ Becerros }}</div>
        </div>
        <div class="dt2">
          <div>Nacimientos</div><div>{{ Nacimientos }}</div>
        </div>
      </div>
      
      <div class="Notificaciones">
        <h2>Notificaciones Recientes</h2>
        <ul>
          <li class="Notificacion-card">
            Palpacion de vacas cargadas del 25 de Febrero al 17 Marzo
          </li>
          <li class="Notificacion-card">
            Vacunacion 1ra Docis del 14 Mayo al 21 de Mayo 
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.Notificacion-card{
  color: #fff;
  list-style: none;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 9px 7px 11px rgb(22, 22, 22);
  font-size: large;
  background: linear-gradient(220.55deg, #24CFC5 0%, #001C63 100%);
  margin-bottom: 1rem;
}
.Notificaciones{
  text-align: center;
  width: 80%;
  margin-left:5rem ;
}
.Notificaciones ul {
  padding: 2rem;
}
.Cont02{
  background-color: #fff;
  margin: 2rem;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
}
.Dt1{
    background-color: rgb(4, 112, 235);
    width: 20vw;
    border-radius: 9px;
    padding: 1vw;
    color: #fff;    
    box-shadow: 6px 5px 6px rgb(73, 71, 71);
    text-align: center;
}
.dt2{
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 1rem;
    margin: 1rem;
    border-bottom: 1px solid #fff;
    font-size: 1rem;
}
.IconCard {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.Container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin: 0 3vw;
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 15px;
}
.CardInfo {
  list-style: none;
  padding: 30px 30px;
  border-radius: 19px;
  height: 25vh;
  color:#fff;
  box-shadow: 3px 4px 7px rgb(146, 146, 146);
}

.line {
  width: 100%;
  height: 1vh;

}

.inf {
  font-size: 3vw;
}
.GridTemplate {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 40%);
  grid-template-rows: max-content;
  grid-gap: 30px;
  grid-auto-rows: 100px;
}
.Card {
  width: 100%;
  height: 13rem;
  background: rgb(0, 65, 255);
  background: linear-gradient(
    86deg,
    rgba(0, 65, 255, 1) 13%,
    rgba(1, 3, 41, 1) 100%
  );
  /* background-image:url(@/assets/Background.jpg);
        background-size:100%; */
  border-radius: 25px;
  box-shadow: 7px 7px 7px rgb(22, 22, 22);
  margin-left: 1rem;
}
.Titulo {
  margin: 0.5rem;
  font-size: 1.3rem;
  color: #fff;
}
.Logo {
  width: 5rem;
}
.glass {
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 100%;
}
.Title1 {
  margin-left: 3vw;
  font-size: 2rem;
  font-weight: 700;
  transition-duration: 0.5s;
  background-size: contain;
  text-align: left;
  text-align: center;
}
</style>

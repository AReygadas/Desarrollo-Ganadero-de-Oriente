<script setup>
import { useAuthStore } from "@/stores/auth";
import { UserStore } from "@/stores/userdata";
import { inject, ref, reactive } from "vue";
import { useCookie } from "vue-cookie-next";
import Loading from '@/components/Loading/Loading.vue'

import { useRouter } from "vue-router";
import image from'@/assets/fondo1.jpeg';
import image2 from'@/assets/fondo2.jpg';
import image3 from'@/assets/fondo3.jpg';
import logo from'@/assets/logo.png';

  const bgColor = ref('background:linear-gradient(220.55deg, #8FFF85 0%, #39A0FF 100%)')
  const barsize = ref('0vw')
  const Loadd = ref('false')
  const Post = inject('POST')
  const credenciales = reactive({
    Name: "",
    Contraseña: "",
  });

  const cookie = useCookie();
  const authval = useAuthStore();
  const userdata = UserStore();
  const router = useRouter();
  const state = reactive({
    user: {},
  });
  const changeBG=(e)=>{
    barsize.value=e
  }
  const bgC=(e)=>{
    bgColor.value = e 
    console.log(e)
  }
  const bgCimg=(e)=>{
    const bgImageStyle=ref();
    switch (e) {
      case 1:
      bgColor.value  = `background-image: url(${image}); background-size:cover;`;
       
        break;
      case 2:
      bgColor.value  = `background-image: url(${image2}); background-size:cover;`;
    
        break;
      case 3:
      bgColor.value  = `background-image: url(${image3}); background-size:cover;`;
       
        break;
      default:
      bgColor.value  = `background-image: url(${image}); background-size:cover;`;
    
    }



  }

  const HandleLogin = () => {
    Loadd.value = 'true'
      Post('/Login', credenciales)
          .then((response) => {
            console.log(response)
            if (response.length > 0)
            {
              state.user = response.data; // 👈 get just results
            let us = {
              user_id: response[0].usuarioId,
              name:  response[0].name,
              session_start_time: new Date(),
            }
            cookie.setCookie('DesganApp', us, {
              expire: '30MIN',
              path: '/login',  
              domain: '',
              secure: '',
              sameSite: '',
            })
            // simulate AJAX
            authval.changeAuth(true);
            userdata.changeUsName( response[0].name);
            router.push({
              name: 'dashboard',
              query: {
                ...router.query,
              },
            })
            Loadd.value = 'false'
          }else{
            Loadd.value = 'false'
            alert('Usuario o Contraseña Incorrecta')
          }
          })
          .catch(error => {
          authval.changeAuth(true);
          Loadd.value = 'false'
            alert(error)
          });  
  };

</script>

<template>
  <div v-if="Loadd === 'true'">
     <Loading />
  </div>
  <div class="box"  :style="bgColor">
    <div class="config" @click="changeBG('grid')">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </div>
    <div class="configCard" :style="{ display: barsize }">
        <h1>Temas</h1>
        <div @click="changeBG('none')">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <h1>Colores</h1>
        <div class="contentC">
          <div class="boxColor dg-01" @click="bgC('background:linear-gradient(220.55deg, #A531DC 0%, #4300B1 100%)')"></div>
          <div class="boxColor dg-02" @click="bgC('background:linear-gradient(220.55deg, #7CF7FF 0%, #4B73FF 100%)')"></div>
          <div class="boxColor dg-03" @click="bgC('background:linear-gradient(220.55deg, #FFED46 0%, #FF7EC7 100%)')"></div>
          <div class="boxColor dg-04" @click="bgC('background:linear-gradient(220.55deg, #8FFF85 0%, #39A0FF 100%)')"></div>
          <div class="boxColor dg-05" @click="bgC('background:linear-gradient(220.55deg, #565656 0%, #181818 100%)')"></div>
          <div class="boxColor dg-06" @click="bgC('background:linear-gradient(220.55deg, #5D85A6 0%, #0E2C5E 100%)')"></div>
          <div class="boxColor dg-07" @click="bgC('background:linear-gradient(220.55deg, #FF3F3F 0%, #063CFF 100%)')"></div>
          <div class="boxColor dg-08" @click="bgC('background:linear-gradient(220.55deg, #FFF500 0%, #FF00B8 100%)')"></div>
          <div class="boxColor dg-09" @click="bgC('background:linear-gradient(220.55deg, #B9A14C 0%, #000000 100%)')"></div>
          <div class="boxColor dg-10" @click="bgC('background:linear-gradient(220.55deg, #00E0EE 0%, #AD00FE 100%)')"></div>
        </div>
        <h1>Imagenes</h1>
        <div class="contentC">
          <div class="boxColor img01" @click="bgCimg(1)"></div>
          <div class="boxColor img02" @click="bgCimg(2)"></div>
          <div class="boxColor img03" @click="bgCimg(3)"></div>
        </div>
        
    </div>

    <div class="card">
       <img src="@/assets/logo.png" alt="" class="logoPng" >
      <h1 class="title">Inicio de Sesion </h1>
      <div class="inputBox">
        <input type="text" required  v-model="credenciales.Name" />
        <span>Usuario</span>
      </div>
      <div class="inputBox">
        <input type="password" required  v-model="credenciales.Contraseña" @keyup.enter="HandleLogin()" />
        <span>Contraseña</span>
      </div>
      <button class="btn_aprove" @click="HandleLogin()">Aceptar</button>
    </div>
  </div>
  <!-- <div class="GridC2">
    <div class="LgPage">
   
    {}

      <div class="container">
        <div class="screen">
          <img src="@/assets/icon2.png" class="Logo" />
          <div class="screen__content">
            <form class="login">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder="Nombre de usuario"
                  v-model="state.valor1"
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login__input"
                  placeholder="Contraseña"
                  v-model="credenciales.pass"
                  @keyup.enter="HandleLogin()"
                />
              </div>
              <button
                class="button login__submit"
                @click.prevent="HandleLogin()"
                
              >
                <span class="button__text">Inicia Sesión</span>
              </button>
            </form>
            <div class="social-login">
              <h3>Desgan</h3>
            </div>
          </div>
          <div class="screen__background">
            <span
              class="screen__background__shape screen__background__shape4"
            ></span>
            <span
              class="screen__background__shape screen__background__shape3"
            ></span>
            <span
              class="screen__background__shape screen__background__shape2"
            ></span>
            <span
              class="screen__background__shape screen__background__shape1"
            ></span>
          </div>
        </div>
      </div>
    
      <div class="container2">
        <h1>Inicio de Sesión</h1>
        <br />
        <div class="login__field">
          <i class="login__icon fas fa-user"></i>
          <input
            type="text"
            class="login__input"
            placeholder="Nombre de usuario"
            v-model="credenciales.Name"
          />
        </div>
        <div class="login__field">
          <i class="login__icon fas fa-lock"></i>
          <input
            type="password"
            class="login__input"
            placeholder="Contraseña"
            v-model="credenciales.Contraseña"
            @keyup.enter="HandleLogin()"
          />
        </div>
        <br />
        <button class="button login__submit" @click.prevent="HandleLogin()" @keyup.enter="HandleLogin()">
          <span class="button__text">Inicia Sesión</span>
        </button>
      </div>
       -->
    <!-- </div>
     <div class="Secc2">
      <div class="centerL">
        <img src="@/assets/icon2.png" alt="Logo" class="centerL" />
        <h1 class="SIlabel">Sistema de Control Ganadero</h1>
      </div>
    </div> 
  </div> -->
</template>

<style scoped>
.logoPng{
  height: 10rem;
}
.configCard{
  width: 20vw;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  right: 0;
  transition: opacity 1s ease-out;
  text-align: center;
  display:none;
  grid-template-columns:50% 50%;
}
.contentC{
  display:grid; 
  grid-template-columns: 32% 32% 32%;
}
.boxColor
{
  width: 3rem;
  height: 3rem;
  border-radius: 9px;  
  margin-left: 0.5rem;
}
.dg-01{
  background: linear-gradient(220.55deg, #A531DC 0%, #4300B1 100%);
}
.dg-02{
  background: linear-gradient(220.55deg, #7CF7FF 0%, #4B73FF 100%);
}
.dg-03{
  background: linear-gradient(220.55deg, #FFED46 0%, #FF7EC7 100%);
}
.dg-04{
  background: linear-gradient(220.55deg, #8FFF85 0%, #39A0FF 100%);
}
.dg-05{
  background: linear-gradient(220.55deg, #565656 0%, #181818 100%);
}
.dg-06{
  background: linear-gradient(220.55deg, #5D85A6 0%, #0E2C5E 100%);
}
.dg-07{
  background: linear-gradient(220.55deg, #FF3F3F 0%, #063CFF 100%);
}
.dg-08{
  background: linear-gradient(220.55deg, #FFF500 0%, #FF00B8 100%);
}
.dg-09{
  background: linear-gradient(220.55deg, #B9A14C 0%, #000000 100%);
}
.dg-10{
  background: linear-gradient(220.55deg, #00E0EE 0%, #AD00FE 100%);
}
.img01{
  background-image: url("@/assets/fondo1.jpeg");
  background-size: cover;
}
.img02{
  background-image: url("@/assets/fondo2.jpg");
  background-size: cover;
}
.img03{
  background-image: url("@/assets/fondo3.jpg");
  background-size: cover;
}
.btn_aprove{
  width: 50%;  
  background: linear-gradient(#555353,#363535,#303030);
  color: #fefffb;
  border: none;
  padding: 1rem;
  border-radius: 9px;
  transition: 1s;
}
.btn_aprove:hover{
  font-size: 1.1rem;
  width: 55%;
}
.config{
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.config:hover ~ .configCard
{
  width: 30vw;
}
.config svg{
  transition: 1s;
}
.config svg:hover{
  stroke: #fefffb;
  filter: drop-shadow( -2px 3px 5px #010102 );
}
.box{
  display: grid;
  place-content: center;
  height: 100vh;  
}
.card{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;  
  gap: 3rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 10px 10px 10px rgba(20, 20, 20,0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.title{
  font-family: 'Varela Round', sans-serif;
  text-shadow: 2px 2px 2px rgba(255,255,255, 0.5);
}
.inputBox{
    position: relative;
}
.inputBox input{
  background: transparent;
  color: #080808;
  border: solid 1px #fff;
  font-size:1.2rem;
  border: none;
  border-bottom:2px solid #fff;
  width: 15rem;
  text-align: center;
}
.inputBox input:focus{
  outline: none;
}
.inputBox input:-webkit-autofill,
.inputBox input:-webkit-autofill:hover,
.inputBox input:-webkit-autofill:focus,
.inputBox input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}
.inputBox span {
  position: absolute;
  left: 0;
  padding: 5px;
  pointer-events: none;
  text-transform: uppercase;
  transition: 0.7s;
  font-size: 1rem;
}
.inputBox input:valid ~ span,
.inputBox input:focus ~ span
{
  color: #1e00a3;
  transform: translateX(10px) translateY(-15px);
  font-size: 0.7rem;
}
/* 
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
}
.SIlabel {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  -webkit-text-stroke: 0.7px rgb(24, 24, 24);
}
.GridC2 {
  display: flex;
}
.LgPage {
  height: 100vh;
 }
.Secc2 {
  width: 100%;
  height: 100%;
  background: url("@/assets/fondo1.jpeg");
  background-size: cover;
  display: none;
}
.centerL {
  width: 20vw;
  margin: 10% auto;
}
.Logo {
  width: 8rem;
  margin: 10px;
  margin-bottom: -7rem;
  z-index: 10;
  background-color: transparent;
  border-radius: 15px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 90vh;
}
.container2 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  background: #fff;
  height: 100vh;
}
.screen {
  background: linear-gradient(90deg, #ffffff, #b10e02);
  position: relative;
  height: 600px;
  width: 360px;
  border-radius: 15px;
  box-shadow: 10px 10px 10px;
}
.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}
.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}
.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}
.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
  border-radius: 15px;
}
.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #840707;
  top: -172px;
  right: 0;
  border-radius: 32px;
}
.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #840707, #ff0000);
  top: -24px;
  right: 0;
  border-radius: 32px;
}
.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #840707;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}
.login {
  width: 320px;
  padding: 30px;
  padding-top: 156px;
}
.login__field {
  padding: 20px 0px;
  position: relative;
}
.login__icon {
  position: absolute;
  top: 30px;
  color: #7875b5;
}
.login__input {
  color: rgb(0, 0, 0);
  border: none;
  border-bottom: 2px solid #ff0303;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
}
.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #840707;
}
.login__submit {
  background: #fff;
  font-size: 14px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #840707;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 80%;
  color: #4c489d;
  box-shadow: 0px 2px 2px #840707;
  cursor: pointer;
  transition: 0.2s;
  text-align: center;
}
.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #fefffb;
  outline: none;
}
.button__icon {
  font-size: 24px;
  margin-left: auto;
  color: #840707;
}
.social-login {
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: rgb(92, 92, 92);
}
.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}
.social-login__icon {
  padding: 20px 10px;
  color: rgb(73, 72, 72);
  text-decoration: none;
  text-shadow: 0px 0px 8px #840707;
}
.social-login__icon:hover {
  transform: scale(1.5);
}

@media (min-width: 979px) {
  .container {
    display: none;
  }
  .GridC2 {
    display: grid;
    grid-template-columns: 25vw 75vw;
  }
  .container2 {
    display: flex;
  }
  .Secc2 {
    display: flex;
  }
  .login__input {
    color: rgb(71, 70, 70);
  }
} */
</style>
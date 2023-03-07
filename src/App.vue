<script setup>
  import { RouterLink, RouterView, useRouter } from "vue-router";
  import { useAuthStore } from "@/stores/auth";
  import { UserStore } from "@/stores/userdata";
  import { onMounted, ref } from "vue";
  import { useCookie } from "vue-cookie-next";
  
  const cookie = useCookie();
  const router = useRouter();
  const authval = useAuthStore();
  const us = UserStore();
  const sideSize = ref("");
  const state = {
    user: [],
  };
  onMounted(() => {
    const cook = cookie.getCookie("DesganApp");
    if (cook != null) {
      console.log("con cookie");
      authval.changeAuth(true);
      us.changeUsName(cook.name);
    }
  });
  const logOut = () => {
    cookie.removeCookie("DesganApp", {
      expire: "30MIN",
      path: "/login",
      domain: "",
      qsecure: "",
      sameSite: "",
    });
    console.log(cookie);
    location.reload();
  };
  const expand = () => {
    authval.changeSide();
  };
  const exit=()=>{
    authval.changeAuth(false);
    router.push({ path: "login"});
  }
</script>

<template>
  <div
    :class="`${
      authval.isAuth
        ? authval.sideStatus
          ? 'Container'
          : 'ContainerSB'
          : 'Container1'
    }`"
  >
    <div class="sidebar" v-show="authval.isAuth">
      <div class="Top_Log">
    
        <img
          src="@/assets/logo.png"
          alt="Desgan"
          class="log1"
          v-show="!authval.sideStatus"
        />
        <i @click="expand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </i>
      </div>

      <nav>
        <div v-show="authval.sideStatus" class="SBCollapsed">
        <RouterLink to="/dash"   exact-active-class="active"  active-class="active" class="my-link"> 
           <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-layout-2 iconsvg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="6" height="5" rx="2" />
            <rect x="4" y="13" width="6" height="7" rx="2" />
            <rect x="14" y="4" width="6" height="7" rx="2" />
            <rect x="14" y="15" width="6" height="5" rx="2" />
          </svg>
        </RouterLink>
        
        <RouterLink to="/ganadoCards"  exact-active-class="active"  active-class="active" class="my-link" >
          <!-- <img src="@/assets/654.svg" alt="" class="icono4" /> -->
          <svg class="icono4" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 378.72 269.84"   ><defs>
            </defs><image width="3071" height="2683" transform="translate(0 4.9) scale(0.12 0.1)"/>
            <path class="cls-1" d="M125.45,52c21.46-3.18,79.49-9.52,148.73,1.48,0,0,29.27-6.47,28.59-42.55,0,0,55.15,24.85,25.2,71.14,0,0,31.31-2,42.55,5.11,0,0,10.89,40.17-33,51.41,0,0-18.05,5.44-31.32,3.4L282,195.44s1.7,24.85-26.9,51.4-108.59,18.38-131.06-12.25c0,0-14-22.13-13.28-39.49l-19.4-53.45S7.28,146.42,25,88.2C25,88.2,42,76,62.09,79c0,0-16.18-45.42,30-66.38,15.18-6.9-8.3,17.27,12.65,30.64C111.52,47.62,117.45,53.18,125.45,52Z"/></svg>
        </RouterLink>

        <RouterLink to="/gas" exact-active-class="active"  active-class="active" class="my-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-wallet iconsvg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
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
        </RouterLink>

        <RouterLink to="/Inventarios"  exact-active-class="active"  active-class="active" class="my-link">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-forklift iconsvg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="5" cy="17" r="2" />
            <circle cx="14" cy="17" r="2" />
            <line x1="7" y1="17" x2="12" y2="17" />
            <path d="M3 17v-6h13v6" />
            <path d="M5 11v-4h4" />
            <path d="M9 11v-6h4l3 6" />
            <path d="M22 15h-3v-10" />
            <line x1="16" y1="13" x2="19" y2="13" />
          </svg>
        </RouterLink>

        <RouterLink to="/potreros"  exact-active-class="active"  active-class="active" class="my-link" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-map-2 iconsvg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="18" y2="6.01" />
            <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
            <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
            <line x1="9" y1="4" x2="9" y2="17" />
            <line x1="15" y1="15" x2="15" y2="20" />
          </svg>

        </RouterLink>

        <RouterLink to="/alm"  exact-active-class="active"  active-class="active" class="my-link">
            
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-report-analytics iconsvg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
            />
            <rect x="9" y="3" width="6" height="4" rx="2" />
            <path d="M9 17v-5" />
            <path d="M12 17v-1" />
            <path d="M15 17v-3" />
          </svg>
        </RouterLink>

          <RouterLink to="/usu"  exact-active-class="active"  active-class="active" class="my-link"> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-users iconsvg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="9" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
        </RouterLink>

        <RouterLink to="/conf"  exact-active-class="active"  active-class="active" class="my-link"> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-adjustments-horizontal iconsvg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="14" cy="6" r="2" />
            <line x1="4" y1="6" x2="12" y2="6" />
            <line x1="16" y1="6" x2="20" y2="6" />
            <circle cx="8" cy="12" r="2" />
            <line x1="4" y1="12" x2="6" y2="12" />
            <line x1="10" y1="12" x2="20" y2="12" />
            <circle cx="17" cy="18" r="2" />
            <line x1="4" y1="18" x2="15" y2="18" />
            <line x1="19" y1="18" x2="20" y2="18" />
          </svg>
        </RouterLink>
        </div>

        <div v-show="!authval.sideStatus">
          <h2 class="Titulo2">Modulos</h2>
          <RouterLink to="/dash"
            ><samp class="IconBg"
              ><fa icon="fa-solid fa-file-invoice-dollar" /> </samp
            >Resumen Financiero</RouterLink
          >
          <RouterLink to="/ganado"
            ><samp class="IconBg"><fa icon="fa-solid fa-cow" /> </samp
            >Ganado</RouterLink
          >
          <RouterLink to="/ganadoCards"
            ><samp class="IconBg"><fa icon="fa-solid fa-cow" /> </samp>Ganado
            Img</RouterLink
          >
          <RouterLink to="/gas"
            ><samp class="IconBg"
              ><fa icon="fa-solid fa-comment-dollar" /> </samp
            >Gastos</RouterLink
          >
          <RouterLink to="/Inventarios"
            ><samp class="IconBg"><fa icon="fa-solid fa-boxes-stacked" /> </samp
            >Inventarios</RouterLink
          >
          <RouterLink to="/potreros"
            ><samp class="IconBg"
              ><fa icon="fa-solid fa-comment-dollar" /> </samp
            >Potreros</RouterLink
          >
          <RouterLink to="/alm"
            ><samp class="IconBg"><fa icon="fa-solid fa-boxes-stacked" /> </samp
            >Reportes</RouterLink
          >
          <br /><br />
          <h2 class="Titulo2">Configuraciones</h2>
          <RouterLink to="/usu"
            ><samp class="IconBg"><fa icon="fa-solid fa-users" /> </samp
            >Usuarios</RouterLink
          >
          <RouterLink to="/conf"
            ><samp class="IconBg"><fa icon="fa-solid fa-gear" /> </samp
            >Configuración</RouterLink
          >
        </div>
      </nav>
    </div>

    <div class="contenido">
      <div class="topbar" v-show="authval.isAuth">
        <div class="topbtn">
          <div v-if="authval.sideStatus" class="punto"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-message"
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
              d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"
            />
            <line x1="8" y1="9" x2="16" y2="9" />
            <line x1="8" y1="13" x2="14" y2="13" />
          </svg>
        </div>
        <div class="topbtn" @click="exit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-logout icon3"
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
              d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
            />
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
          </svg>
        </div>

        <img src="@/assets/icon2.png" alt="" />
      </div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.active svg{
  background-color: transparent;
  stroke: #00aeff !important;
}
.active:hover{
  background-color: #030303;
}

.my-link:active svg {
  stroke: #00aeff !important;
  text-decoration: none;
}
.icono4 {
  width: 3rem;
  fill:transparent;
  stroke:#757575;
  stroke-miterlimit:10;
  stroke-width:30px;

}
.iconsvg {
  width: 44;
  stroke: #888888;
}

.iconsvg:hover{
  stroke: #fff;
}
.log1 {
  width: 80%;
}
.SBCollapsed {
  display: grid;
  place-content: center;
  gap: 0.5rem;
}
.punto {
  height: 10px;
  width: 10px;
  background-color: crimson;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  animation: latido linear 1s infinite;
}
@keyframes latido {
  0% {
    border: 2px solid rgb(250, 171, 171);
  }
  100% {
    border: 5px solid transparent;
  }
}
.topbtn:hover {
  background-color: #e0e0e0;
  border-radius: 50%;
}
.topbar {
  width: 100%;
  height: 3rem;
  background-color: #fff;
  display: flex;
  gap: 3rem;
  justify-content: end;
  padding: 0.5rem;
}
.contenido {
  background-color: #e2e2e7;
  height: 100%;
}
.Not {
  font-size: 0.7rem;
  background-color: #000000;
  border-radius: 50%;
  width: 1rem;
  text-align: center;
}
.SB_Title {
  color: var(--background-C);
  margin: auto;
}
.Top_Log {
  display: flex;
}
.MArgg {
  margin-top: 2rem;
  display: flex;
  right: 2px;
}
.Titulo2 {
  font-size: 0.9rem;
  margin-left: 2rem;
  color: var(--background-C);
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, var(--degrade-A), var(--degrade-B));
  border-image-slice: 1;
}
.sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: #131f2e;
  padding: 0 5%;
  margin: 0;
}
.contenido {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 0 2rem 0 0;
  background-color: var(--background-A);
  color: var(--color-text-A);
}
.logo {
  display: block;
  margin: 0 auto 0rem;
  width: 4rem;
}
.menuTop {
  display: grid;
  background-color: var(--background-B);
  width: 100%;
  height: 5vh;
  color: #535658;
}
.Container {
  position: relative;
  display: grid;
  grid-template-columns: 5vw 95vw;
  transition: 1s;
  height: 100%;
}
.ContainerSB {
  position: relative;
  display: grid;
  grid-template-columns: 17vw 83vw;
  transition: 1s;
}
.Container1 {
  display: grid;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: grid;
}
nav a.router-link-exact-active {
  /* background: var(--background-A); */
  background:#ffffff;
  padding: 3px 10px;
  stroke: #e0e0e0;
  color: #030303;
  font-weight: 500;
  outline: none;
  border-radius: 0 7px 7px 0;
}
nav a.router-link-exact-active:hover {
  transition: background-color 2s ease-out;
}
nav a.router-link-exact-active::before {
  border-left: 0.3rem solid #00aeff;
  content: attr(data-item);
  transition: all 1s ease-in-out;
  color: #4b4b4b;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0;
  overflow: hidden;
}
nav a.router-link-exact-active:hover::before {
  width: 100%;
}
nav a {
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
  display: inline-block;
  padding: 0 1rem;
  /* border-left: 1px solid var(--color-border); */
}
nav a:hover {
  background: var(--background-A);
  padding: 5px 20px;
  border-left: 0.3rem solid #00aeff;

  color: var(--background-C);
  font-weight: 500;
  border-radius: 0 7px 7px 0;
  outline: none;
}
nav a:first-of-type {
  border: 0;
}
.IconBg {
  background-color: transparent;
  
  padding: 5px 12px;
  margin-right: 0.5rem;
  border-radius: 50%;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding: 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  nav {
    text-align: left;
    margin-left: -0.7rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.Avatar {
  position: absolute;
  width: 2.5rem;
  right: 1rem;
}
.Avatar:hover {
  width: 3rem;
  transition: 0.7s;
}
.MenuUser {
  display: none;
  position: absolute;
  background-color: #ccc;
}
.Nombre {
  text-align: end;
  margin-right: 5rem;
  font-size: 1.3rem;
}
</style>

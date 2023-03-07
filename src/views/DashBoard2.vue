<script>
  import Card from "@/components/CardDash/Card.vue"
  export default {
      name:'Dashboard',
      components: {
          Card
      }
  }
</script>

<template>
  <h1 class="Title1">DashBoard Operaciones</h1>
  <div>
  </div>    
  <div class="GridTemplate">
      <div class="Card">
          <h1 class="Titulo">Ganado</h1>
          <img src="@/assets/picture1.png" alt="img1" class="Logo" />
      </div>

      <div class="Card">
          <h1 class="Titulo">Gastos</h1>
          <img src="@/assets/picture1.png" alt="img1" class="Logo" />
      </div>

      <div class="Card">                     
          <h1 class="Titulo">Almacen</h1>
          <img src="@/assets/picture1.png" alt="img1" class="Logo" />            
      </div>

      <div class="Card">
          <h1 class="Titulo">Usuarios</h1>
          <img src="@/assets/picture1.png" alt="img1" class="Logo" />
      </div>
  </div>
</template>

<style>
  .GridTemplate{
      margin:auto;
      display: grid;
      grid-template-columns: repeat(2, 40%);
      grid-template-rows:max-content;
      grid-gap:30px;
      grid-auto-rows: 100px;
      
  }
  .Card{
      width:100%;
      height:13rem;
      background: rgb(255, 255, 255);
      /* background-image:url(@/assets/Background.jpg);
      background-size:100%; */
      border-radius:25px;
      box-shadow: 7px 7px 7px rgb(220, 220, 220);
      margin-left: 1rem;           
  }
  .Titulo{
      margin:0.5rem;
      font-size:2rem;
      color:#fff;
  }
  .Logo{
      width:5rem;
     
  }
  .glass{
      background-color:rgba(255,255,255,0.2);
      width: 100%;
      height:100%;
   }
   .Title1{        
      font-size: 3rem;
      cursor:pointer ;
      transition-duration: 0.5s;       
      background: rgb(1,1,1);
      background: linear-gradient(83deg, rgb(27, 190, 255) 13%, rgb(107, 145, 250) 71%);
      background-size:contain;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;        
      text-align: center;
  }

</style>
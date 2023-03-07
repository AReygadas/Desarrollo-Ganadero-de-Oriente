
<template>
    <h1>Notificaciones</h1>
    <br><br>
    <div class="NotiContainer">
    
    <div class="NotiContainer21"><div class="fondo">Aplicacion</div><div class="fondo">Notificación</div><div class="fondo">Eliminar</div>    </div>
    
    <div class="NotiContainer2"><div>Ganado</div><div>Requieren verificacion</div><div><button>Aceptar</button></div></div>
    <div class="NotiContainer2"><div>Ganado</div><div>Requieren verificacion</div><div><button>Aceptar</button></div></div>
    <div class="NotiContainer2"><div>Ganado</div><div>Requieren verificacion</div><div><button>Aceptar</button></div></div>
    
    </div>
</template>

<style scoped>
    .NotiContainer{
        padding: 2rem;
     
    }
    .NotiContainer2{
        display: grid;
        grid-template-columns: 15% 60% 15%;
        margin-top:1rem;  
        background-color: rgba(16, 4, 119, 0.637);
        padding:0.5rem;
        color: #ffffff;
        border-radius: 1rem;
        box-shadow: 7px 7px 7px rgba(0,0,0,0.637);
    }
    .NotiContainer21{
        display: grid;
        grid-template-columns: 15% 60% 15%;
        background-color:dodgerblue;
        padding:0.5rem;
        color: #ffffff;
    }
    .fondo{
        background-color:dodgerblue;
    }

</style>
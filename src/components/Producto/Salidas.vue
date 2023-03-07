<script setup>
    import {  inject,ref, reactive, defineProps, onMounted } from 'vue';
    const Post = inject("POST");
    const Productos=ref();
    const Get = inject("GET");
    const data = reactive({
        Producto:"",
        Cantidad:0,
        UM:"KG",
        Fecha:"Activo",
        Destino:''
    });
    onMounted(async () => {
        Get("/Inventarios/Productos").then((response) => {            
                Productos.value = response;
                console.log(Productos.value);
                data.value=response;
            })
            .catch(error => {
                alert("Error en Cargar el inventario");
            });  
    });
    
    const Add=()=>{
        Post('/Inventarios/Post', data)
        .then((response) => {
            alert("Salida Guardada");
            props.onButtonClick();
        })
        .catch(error => {
        });      
        console.log(data);
    }
    const props = defineProps({
        onButtonClick: {
            type: Function,
            required: true
        }
    })
</script>

<template>
    <div class="producto">
        <h2>Salidas</h2> 
        <div class="inputBox">
            <select class="select" v-model="data.Producto">
                <option value='Select' selected>Selecciona Producto</option>
                <option v-for="producto in Productos" :value="producto.id">{{ producto.id }}</option>            
            </select>
            <span>Producto</span>
        </div>
        <div class="inputBox">
            <input type="number" required="required" v-model="data.Cantidad"/>
            <span>Cantidad</span>
        </div>
        <div class="inputBox">
            <select class="select" v-model="data.UM">
              <option value="KG" selected>KG</option>
              <option value="PZ">PZ</option>
              <option value="LT">LT</option>
              <option value="Ml">Ml</option>
              <option value="G">G</option>
              <option value="MG">MG</option>
              <option value="MG">UND</option>              
            </select>
            <span>Producto</span>
        </div>
        <div class="inputBox">
            <input type="date" required="required" v-model="data.Fecha"/>
            <span>Fecha</span>
        </div>
        <div class="inputBox">
            <input type="text" required="required" v-model="data.Destino"/>
            <span>Destino</span>
        </div>        
        <div>
            <button class="btn G" @click="Add" >Guardar</button>
            <button class="btn C" @click="onButtonClick" >Cancelar</button>
        </div>
    </div>
</template>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #fff;
}

.btn{
    padding: 0.5rem 1rem;
    margin:0 1rem;
}
.G{
    background-color: darkseagreen;
}
.C{
    background-color: brown;
}
.select {
    width: 220px;
}
.producto{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    background: #1d2b1d;
    width: 30vw;
    padding: 3rem;
    border-radius: 15px;
}
.inputBox{
    position: relative;
}
.inputBox input {
    padding: 10px;
    border: 1px solid rgba(255,255 ,255,0.25);
    background: #1d2b1d;
    border-radius: 5px;
    outline: none;
    color:aliceblue;
    font-size: 1rem;
}
.inputBox select {
    padding: 10px;
    border: 1px solid rgba(255,255 ,255,0.25);
    background: #1d2b1d;
    border-radius: 5px;
    outline: none;
    color:aliceblue;
    font-size: 1rem;
}
.inputBox span{
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color: rgba(255,255 ,255,0.25);
    text-transform: uppercase;
    transition: 0.5s;
}
.inputBox input:valid ~ span,
.inputBox input:focus ~ span
{
    color:#00e8f4;
    transform: translateX(10px) translateY(-7px );
    font-size: 0.65em;
    padding: 0 10px;
    background: #1d2b1d;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    letter-spacing: 0.2em ;
}
.inputBox select:valid ~ span,
.inputBox select:focus ~ span
{
    color:#00e8f4;
    transform: translateX(10px) translateY(-7px );
    font-size: 0.65em;
    padding: 0 10px;
    background: #1d2b1d;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    letter-spacing: 0.2em ;
}
</style>
<script setup>  
  import { onMounted, inject, ref, reactive, watch,computed  } from "vue";
  import Ipt from '@/components/Inputs/Inp.vue'
    const Get = inject("GET");
    const Post = inject("POST");
    const GastosData = ref();
    const AddProduct = ref(false);
    const isPaginated = ref(true)
    const isPaginationSimple = ref(false)
    const paginationPosition = ref('bottom')
    const sortIcon = ref('arrow-up')
    const sortIconSize = ref('small')
    const defaultSortDirection = ref('asc')
    const currentPage = ref(1)
    const perPage = ref(15)
    const data = ref(GastosData.value)
    const Productos =ref();
    const Tipos =ref();

    const getValues=(async()=>{
      Get("/Gastos/GetGastos").then((response) => {
        GastosData.value = response;
        data.value=response;
      });
      Get("/Inventarios/Productos").then((response) => {
        Productos.value = response;
        Tipos.value = [...new Set(response.map(item => item.tipo))] 
      });
    })
    onMounted( () => {
       getValues()
    });

    const Gasto = reactive({
      descripcion: "",
      cantidad: null,
      um: "",
      precio_Unitario: null,
      iva: 0,
      total: 0,
      nota_Factura: "",
      fecha: "",
      observaciones: "",
      tipo: "",
      proveedor: "",
      producto: "",
      inventario: false
    }) 
    const Guardar =()=>{
      Post('/Gastos/PostGasto', Gasto)
        .then((response) => {
            alert("Gasto Guardado");
            getValues()
        })
        .catch(error => {
            alert("Error en Guardar el Gasto");
        });      
    }
    const selected = ref(GastosData[1])

    watch(selected,(newValue, oldValue) => {
      if(newValue){
        console.log(selected)
      }else{
        console.log(newValue)
      }
    });
    const openModal=()=>{
      AddProduct.value = !AddProduct.value;
    }
    const calculateTot=()=>{
      Gasto.total = Gasto.precio_Unitario * Gasto.cantidad + Gasto.iva;
      console.log(Gasto.total)
    }
    const closeModal =()=>{
      AddProduct.value=false;
    }
</script>


<template>

  <div class="producto" v-if="AddProduct">
   <div class="producto_container">

       <h1>Nuevo Producto</h1>
     <div class="items">

      <div style="width: 50%;" class="inputBox">
        <input type="text" required="required" v-model="Gasto.descripcion" />
        <span>Descripcion</span>
      </div>

      <div style="width: 40%;" class="inputBox">
       <input type="text" required="required" v-model="Gasto.nota_Factura" />
       <span>Nota/Factura</span>
      </div>

      <div  style="width: 30%;"  class="inputBox">
       <select style="width: 100%;"  v-model="Gasto.um">
         <option value="NA"  disabled >Selecciona UM</option>
         <option value="KG" selected>KG</option>
         <option value="LT">LT</option>
         <option value="MG">MG</option>
         <option value="PAGO">PAGO</option>
         <option value="PZ">PZ</option>
         <option value="UND">UND</option>
         <option value="ML">ML</option>
         <option value="G">G</option>
        </select>
        <span>Unidad de Medida</span>
      </div>

      <div style="width: 25%;" class="inputBox">
      <input  required v-model="Gasto.cantidad" @keyup="calculateTot"/>
        <span>Cantidad</span>
      </div>
      
      <div  class="inputBox" style="width: 25%;">
          <input  type="number" required v-model="Gasto.precio_Unitario" @keyup="calculateTot"/>
          <span>Presio Unitario</span>
      </div>

      <div  class="inputBox">
        <input type="text" required v-model="Gasto.iva" @keyup="calculateTot"/>
        <span>IVA</span>
      </div>
      
      <div  class="inputBox">
        <input type="number" required  v-model="Gasto.total"/>
        <span>total</span>
      </div>
      
      <div  class="inputBox">
        <input style="width: 100%;"  type="date"  v-model="Gasto.fecha"/>
        <span>fecha</span>
      </div>
      
      <div  class="inputBox" style="width: 60%;" >
        <input type="text" required v-model="Gasto.observaciones"/>
        <span>observaciones</span>
      </div>
      
      <div  class="inputBox">
        <input type="text" required v-model="Gasto.proveedor"/>
        <span>proveedor</span>
      </div>

      <div style="width: 35%;" class="inputBox">
        <select   v-model="Gasto.tipo">
          <option value="" selected>Selecciona Tipo</option>
          <option v-for="Tipo in Tipos" :value="Tipo">{{ Tipo }}</option>
        </select>
        <span>Tipo</span>
      </div>

      <div style="width: 35%;" class="inputBox">
        <select   v-model="Gasto.producto">
          <option value="" selected >Selecciona Producto</option>
          <option v-for="i in Productos" :value="i.id">{{ i.id }}</option>
        </select>
        <span>Producto</span>
      </div>
      
      <h2>Inventario</h2>
        <div class="checkbox-wrapper-19">
          <input type="checkbox" id="cbtest-19" v-model="Gasto.inventario" />
          <label for="cbtest-19" class="check-box"></label>
        </div>
      </div>  
      
      <div>
        <button class="btn G" @click="Guardar" >Guardar</button>
        <button class="btn C" @click="closeModal" >Cancelar</button>
      </div>
    </div>

  </div>

  <div class="TableContainer" >
    <div class="Algo" >
      <h1>Gastos</h1>
      <br>
      <button class="btn" @click="openModal">Agregar Gasto</button>
    </div>
    <section>
      <o-table
            :data="data"
            :paginated="isPaginated"
            :per-page="perPage"
            v-model:selected="selected"
            focusable
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            default-sort="user.first_name"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
            searchable: true
          >
              <o-table-column
                field="id"
                label="ID"
                width="40"
                sortable
                numeric
                #default="props"
              >
                {{ props.row.id }}
              </o-table-column>

              <o-table-column
                field="user.first_name"
                label="Descripcion"
                sortable
                #default="props"
                searchable: true
              >
                {{ props.row.descripcion}}
              </o-table-column>

              <o-table-column
                field="cantidad"
                label="Cantidad"
                sortable
                #default="props"
              >
                {{ props.row.cantidad}}
              </o-table-column>

              <o-table-column
                field="UM"
                label="UM"
                sortable
                #default="props"
              >
                {{ props.row.um}}
              </o-table-column>
              <o-table-column
                field="precio_Unitario"
                label="Precio Unitario"
                sortable
                #default="props"
              >
                {{ props.row.precio_Unitario}}
              </o-table-column>
              <o-table-column
                field="iva"
                label="IVA"
                sortable
                #default="props"
              >
                {{ props.row.iva}}
              </o-table-column>
              <o-table-column
                field="total"
                label="Total"
                sortable
                #default="props"
              >
                {{ props.row.total}}
              </o-table-column>

              <o-table-column
                field="nota_Factura"
                label="Nota"
                sortable
                #default="props"
              >
                {{ props.row.nota_Factura}}
              </o-table-column>
              <o-table-column
                field="fecha"
                label="Fecha"
                sortable
                #default="props"
              >
                {{ new Date(props.row.fecha).toLocaleDateString()}}
              </o-table-column>

              <o-table-column
                field="tipo"
                label="Tipo"
                sortable
                #default="props"
              >
                {{ props.row.tipo}}
              </o-table-column>
            <!-- 
              <o-table-column
                field="user.last_name"
                label="Last Name"
                sortable
                #default="props"
              >
                {{ props.row.user.last_name }}
              </o-table-column>

              <o-table-column
                field="date"
                label="Date"
                sortable
                position="centered"
                #default="props"
              >
                {{ new Date(props.row.date).toLocaleDateString() }}
              </o-table-column> -->



          </o-table>
    </section>
  </div>

</template>

<style scoped>

.inputBox {
  position: relative;
}
.inputBox input {
  width: 100%;
  padding: 10px;
  box-shadow: 7px 9px 10px rgb(0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: transparent;
  border-radius: 5px;
  outline: none;
  color: rgb(0, 0, 0);
  font-size: 1rem;
  
}
.inputBox select {
  padding: 10px;
  border: 1px solid rgba(2, 2, 2, 0.911);
  background: #f8f8f8;
  border-radius: 5px;
  outline: none;
  color: rgb(8, 8, 8);
  font-size: 1rem;
}
.inputBox span {
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  transition: 0.5s;
}
.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: #ffffff;
  transform: translateX(10px) translateY(-7px);
  font-size: 0.65em;
  padding: 0 10px;
  background: #0079db;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  letter-spacing: 0.2em;
}
.inputBox select:valid ~ span,
.inputBox select:focus ~ span {
  color: #f8ffff;
  transform: translateX(10px) translateY(-7px);
  font-size: 0.65em;
  padding: 0 10px;
  background: #0079db;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  letter-spacing: 0.2em;
}
.items{
  gap: 1.5rem;
  display: flex;
  flex-wrap: wrap;
}
.producto_container{
  position: fixed;
  display: grid;
  place-content: center;
  width: 50vw;
  gap: 2rem;
  height: auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);
  text-align: center;
}  
.producto{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(218, 218, 218, 0.377);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.7px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 3;
}
.Algo{
  width: 100%;
  margin-bottom: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.btn{
    padding: 0.5rem 1rem;
    margin:0 1rem 0 0;
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 9px;
    background-color: rgb(3, 117, 3);
    font-size: 1.2rem;
    box-shadow: 5px 6px 2px rgba(0, 0, 0, 0.7) ;
}
  .TableContainer{
    margin: 0 5rem;
    font-size: 0.8rem;
  }
  table{
    margin:40px 20px;

  }
  thead tr{
    background-color: black;
    color:aliceblue

  }
  tbody tr{

  }
  .G{
    background-color: rgb(36, 158, 36);
}
.C{
    background-color: brown;
}
.select {
    width: 220px;
}
  .checkbox-wrapper-19 {
    box-sizing: border-box;
    --background-color: #fff;
    --checkbox-height: 25px;
  }

  @-moz-keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @-webkit-keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  @-webkit-keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  @-moz-keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  .checkbox-wrapper-19 input[type=checkbox] {
    display: none;
  }

  .checkbox-wrapper-19 .check-box {
    height: var(--checkbox-height);
    width: var(--checkbox-height);
    background-color: transparent;
    border: calc(var(--checkbox-height) * .1) solid #000;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-transition: border-color ease 0.2s;
    -o-transition: border-color ease 0.2s;
    -webkit-transition: border-color ease 0.2s;
    transition: border-color ease 0.2s;
    cursor: pointer;
  }
  .checkbox-wrapper-19 .check-box::before,
  .checkbox-wrapper-19 .check-box::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    height: 0;
    width: calc(var(--checkbox-height) * .2);
    background-color: #34b93d;
    display: inline-block;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    border-radius: 5px;
    content: " ";
    -webkit-transition: opacity ease 0.5;
    -moz-transition: opacity ease 0.5;
    transition: opacity ease 0.5;
  }
  .checkbox-wrapper-19 .check-box::before {
    top: calc(var(--checkbox-height) * .72);
    left: calc(var(--checkbox-height) * .41);
    box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  .checkbox-wrapper-19 .check-box::after {
    top: calc(var(--checkbox-height) * .37);
    left: calc(var(--checkbox-height) * .05);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box,
  .checkbox-wrapper-19 .check-box.checked {
    border-color: #34b93d;
  }
  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::after,
  .checkbox-wrapper-19 .check-box.checked::after {
    height: calc(var(--checkbox-height) / 2);
    -moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    -o-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    -webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    animation: dothabottomcheck-19 0.2s ease 0s forwards;
  }
  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::before,
  .checkbox-wrapper-19 .check-box.checked::before {
    height: calc(var(--checkbox-height) * 1.2);
    -moz-animation: dothatopcheck-19 0.4s ease 0s forwards;
    -o-animation: dothatopcheck-19 0.4s ease 0s forwards;
    -webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;
    animation: dothatopcheck-19 0.4s ease 0s forwards;
  }
</style>

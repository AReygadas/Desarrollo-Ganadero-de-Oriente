<script setup>
  import { onMounted, inject, ref, reactive, watch, computed } from "vue";
  import Formulario from "@/components/Producto/AddProducto.vue";
  import Salidas from "@/components/Producto/Salidas.vue";

  const Get = inject("GET");
  const AddProduct = ref(false);
  const Inventario = ref();
  const isPaginated = ref(true);
  const isPaginationSimple = ref(false);
  const paginationPosition = ref("bottom");
  const sortIcon = ref("arrow-up");
  const sortIconSize = ref("small");
  const defaultSortDirection = ref("asc");
  const currentPage = ref(1);
  const perPage = ref(30);
  const data = ref(Inventario.value);  
  const selected = ref(Inventario[1])

  const ChangeState = () => {
    AddProduct.value = !AddProduct.value;
  };
  onMounted(async () => {
    Get("/Inventarios/Get").then((response) => {            
        Inventario.value = response;
        data.value=response;
    })
    .catch(error => {
        alert("Error en Cargar el inventario");
    });  
  });

  watch(selected,(newValue, oldValue) => {
    if(newValue){
      console.log(selected)
    }else{
      console.log(newValue)
    }
  });

</script>
<template>

  <div class="Titulo">
    <h1>Inventarios</h1>
    <button @click="ChangeState" class="btn">Nuevo Producto</button>
    <button @click="ChangeState" class="btn" style="background: rgb(159, 3, 3);">Agregar Salida</button>
    <button @click="exportToExcel">Exportar a Excel</button>
  </div>
  <div class="TableContainer">
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
      default-sort="Id"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      :tbody-tr-class="rowClass"
      
    >
        <o-table-column
          field="id"
          label="Producto"
          width="60"
          sortable
          numeric
          #default="props"
        >
          {{ props.row.id }}
        </o-table-column>

        <o-table-column
          field="um"
          label="UM"
          width="10"
          sortable
          #default="props"
        >
          {{ props.row.um}}
        </o-table-column>

     

        <o-table-column
          field="entradas"
          label="Entradas"
          width="10"
          sortable
          #default="props"
        >
          {{ props.row.entradas}}
        </o-table-column>

        <o-table-column
          field="salidas"
          label="Salidas"
          width="10"
          sortable
          #default="props"
        >
          {{ props.row.salidas}}
        </o-table-column>

        <o-table-column
          field="existencias"
          label="Existencias"
          width="10"
          sortable
          #default="props"
        >
        <span :class="props.row.existencias > props.row.minimo ? 'A' :'B'" >
          {{ props.row.existencias}}
        </span>
        </o-table-column>
        <o-table-column
          field="minimo"
          label="Minimo"
          width="10"
          sortable
          #default="props"
        >
          <span :class="props.row.existencias === 0 ? 'A' :'B'" >
            {{ props.row.minimo}}
          </span>

        </o-table-column>
        
        <o-table-column
          field="minimo"
          label="Minimo"
          width="10"
          sortable
          #default="props"
        >
          <span :class="props.row.existencias === 0 ? 'A' :'B'" >
            {{ props.row.minimo}}
          </span>

        </o-table-column>
    </o-table>

  </div>

  <div v-if="AddProduct" class="modal">
    <div class="modal-content">
      <Salidas  :onButtonClick="ChangeState" />
    </div>
  </div>

</template>
<style scoped>
.btn{
    padding: 0.5rem 1rem;
    margin:0 1rem;
    color: rgb(255, 255, 255);
    border:1px solid slategrey;
    border-radius: 9px;
    background-color: rgb(77, 146, 77);
}
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  width: 80%; /* Could be more or less, depending on screen size */
  
}
.A{
    color: blue;
}
.B{
    color: brown;
}
  .TableContainer{
    margin:0 5rem;
    font-size: 0.8rem;
  }
  table tbody tr  {
    background: #006dcc !important;
  }
  .Titulo{
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
</style>

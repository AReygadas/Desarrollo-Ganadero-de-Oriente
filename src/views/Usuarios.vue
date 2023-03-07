<script setup lang="ts">

</script>

<template>
  <div class="background">
    <div>
        <h1>Uuarios</h1>
        <div class="MM">
          <button><fa icon="fa-solid fa-plus" class="iconA"/> Nuevo Usuario</button>        
        </div>
    </div>
    <table class="table">
      <thead>
        <tr class="headerT">
          <th>&nbsp;</th>
          <th>Usuario</th>
          <th>Correo</th>
          <th>Status</th>
          <th>Perfil</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td>
            <label class="checkbox-wrap checkbox-primary">
              <input type="checkbox" checked />
              <span class="checkmark"></span>
            </label>
          </td>
          <td class="d-flex align-items-center">
            <div
              class="img"
              style="
                background-image: url(images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp);
                "
            ></div>
            <div class="pl-3 email">
              <span>Admin</span>
            </div>
          </td>
          <td>ganaderodesarrollo@gmail.com</td>
          <td class="status"><span class="active">Active</span></td>
          <td>
            <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            >
            <span aria-hidden="true"><i class="fa fa-close"></i></span>
            </button>
          </td>
          <td>

          </td>
        </tr>


      </tbody>
    </table>
</div>
</template>

<style scoped>
  
* {
  --blue: #E2E3E7;
  --indigo: #6610f2;
  --purple: #6f42c1;
}
.iconA{
   color:#6610f2;
  font-size: 1.2rem;
}
.MM{
    background-color: #1f2c47;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 15px;
    box-shadow: 7px 7px 7px;
}
.headerT{
  font-size:1.2rem;
  font-family:Arial, Helvetica, sans-serif;
  font-weight: 800;  
}
.background{
  background-color:var(--background-A);
  width: 100%;
  height: 100%;
  padding: 5%;
}
.table {
  margin: auto;
  width:90%;
  background-color:white;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse; 
  
}
  
  .table tbody td {
    padding: 1.75rem;
    vertical-align: top;
    border-top: 1px solid var(--blue);
   }
  .table thead th {
    vertical-align: bottom;
    border-bottom: 15px solid var(--blue);
  }
  .table tbody tr {
    border-top:5px solid ;
    border-color: var(--blue);
      
  }

</style>

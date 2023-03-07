<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        title: String,
        size: String
    });
</script>
<template>
  <div class="inputBox">
    <input type="text" required="required" />
    <span>{{ title }}</span>
  </div>
</template>
<style scoped>
.inputBox {
  position: relative;
}
.inputBox input {
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
  background: #1d2b1d;
  border-radius: 5px;
  outline: none;
  color: aliceblue;
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
  color: #00e8f4;
  transform: translateX(10px) translateY(-7px);
  font-size: 0.65em;
  padding: 0 10px;
  background: #1d2b1d;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  letter-spacing: 0.2em;
}
.inputBox select:valid ~ span,
.inputBox select:focus ~ span {
  color: #00e8f4;
  transform: translateX(10px) translateY(-7px);
  font-size: 0.65em;
  padding: 0 10px;
  background: #1d2b1d;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  letter-spacing: 0.2em;
}
</style>

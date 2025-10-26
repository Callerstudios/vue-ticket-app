<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <body>
    <Header />
    <RouterView />
    <Footer />
  </body>
</template>

<style>
/* ===== Base Reset ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  scroll-behavior: smooth;
  font-family: "Inter", Arial, sans-serif;
  background-color: #f9fafb;
  color: #111;
  line-height: 1.5;
}
</style>

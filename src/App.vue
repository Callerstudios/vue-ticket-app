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
.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn.primary {
  background-color: white;
  color: #1e3a8a;
}

.btn.primary:hover {
  background-color: #e0e7ff;
}

.btn.secondary {
  background-color: transparent;
  border: 2px solid white;
  color: white;
}

.btn.secondary:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.error-message {
  display: block;
  color: #dc2626;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  min-height: 1rem;
}
.toast {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: #1e3a8a;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease, transform 0.4s ease;
  transform: translateY(20px);
  z-index: 999;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}
.btn-primary {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: #0056b3;
}
</style>

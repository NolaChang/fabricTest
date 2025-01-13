<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper ml-15">
    <nav>
      <RouterLink to="/">設置畫布</RouterLink>
      <RouterLink to="/bg">背景圖片</RouterLink>
      <RouterLink to="/shape">基本圖形</RouterLink>
      <RouterLink to="/path">繪製路徑</RouterLink>
      <RouterLink to="/text">文本</RouterLink>
      <RouterLink to="/style">基本樣式</RouterLink>
      <RouterLink to="/gradient">漸變</RouterLink>
      <RouterLink to="/useImage">使用圖片</RouterLink>
      <RouterLink to="/filter">圖片濾鏡</RouterLink>
      <RouterLink to="/transform">轉換</RouterLink>
      <!-- <RouterLink to="/about">About</RouterLink> -->
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
const list = [
  { link: '/', title: '設置畫布' },
  { link: '/bg', title: '背景圖片' },
  { link: '/shape', title: '基本圖形' },
  { link: '/path', title: '繪製路徑' },
  { link: '/text', title: '文本' },
  { link: '/style', title: '基本樣式' },
  { link: '/gradient', title: '漸變' },
  { link: '/useImage', title: '使用圖片' },
  { link: '/filter', title: '圖片濾鏡' },
  { link: '/transform', title: '轉換' },
  { link: '/group', title: '群組' },
  { link: '/animate', title: '動畫' },
  { link: '/event', title: '事件' },
  { link: '/draw', title: '自由繪畫' },
  { link: '/lock', title: '禁止部分操作' },
  { link: '/scaleCanvas', title: '縮放畫布' },
  { link: '/moveCanvas', title: '平移畫布' },
  { link: '/select', title: '選中狀態' },
  { link: '/clip', title: '裁剪' },
  { link: '/serialize', title: '序列化' },
  { link: '/unserialize', title: '反序列化' },
]
</script>

<template>
  <div class="wrapper ml-15">
    <nav>
      <RouterLink v-for="item in list" :to="item.link" :key="item.link">{{
        item.title
      }}</RouterLink>
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
  margin-top: 3rem;
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

<template>
  <div class="box-mi-switch" title="点击切换主题" @click="toggleTheme" :style="{
    background: isDark ? '#80808040' : '#0ccd94'
  }">
    <img :src="isDark ? '/img/about/off.svg' : '/img/about/on.svg'">
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<style scoped>
.box-mi-switch {
  position: absolute;
  margin-left: 90px;
  margin-top: -65px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.3s ease;
}

.box-mi-switch img {
  position: absolute;
  width: 20px;
  margin-top: 0px;
  margin-left: 0px;
  transition: transform 0.3s ease;
}

.box-mi-switch:hover {
  opacity: 0.8;
}
</style>
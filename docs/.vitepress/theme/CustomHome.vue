<template>
  <div class="custom-home">
    <section class="hero">
      <div class="hero-content">
        <div class="text-content">
          <h1 class="name">{{ hero.name }}</h1>
          <p class="text">{{ hero.text }}</p>
          <p class="tagline">{{ hero.tagline }}</p>
          
          <div class="actions">
            <a
              v-for="action in hero.actions"
              :href="action.link"
              :class="['action-button', action.theme]"
            >
              {{ action.text }}
            </a>
          </div>
        </div>
        
        <div class="logo-container">
          <div class="irregular-shape">
            <img 
              v-if="hero.image" 
              :src="hero.image.src" 
              :alt="hero.image.alt"
              class="logo-image"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const hero = computed(() => frontmatter.value.hero)
</script>

<style scoped>
.custom-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero {
  width: 100%;
  position: relative;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}

.text-content {
  flex: 1;
  max-width: 600px;
}

.name {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--vp-c-brand);
  position: relative;
  display: inline-block;
}

.name::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 4px;
  background: var(--vp-c-brand);
  border-radius: 2px;
}

.text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
  line-height: 1.5;
  font-weight: 500;
}

.tagline {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  max-width: 90%;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.action-button {
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.action-button.brand {
  background: var(--vp-c-brand);
  color: white;
  box-shadow: 0 4px 15px rgba(var(--vp-c-brand-rgb), 0.2);
}

.action-button.brand:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--vp-c-brand-rgb), 0.3);
}

.action-button.alt {
  background: transparent;
  color: var(--vp-c-text-1);
  border: 2px solid var(--vp-c-border);
}

.action-button.alt:hover {
  background: rgba(var(--vp-c-brand-rgb), 0.1);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.logo-container {
  position: relative;
  width: 500px;
  height: 500px;
  flex-shrink: 0;
}

.irregular-shape {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: path('M 50 0 Q 100 20 100 50 Q 80 100 50 100 Q 20 80 0 50 Q 20 20 50 0 Z');
  background: rgba(var(--vp-c-brand-rgb), 0.1);
  overflow: hidden;
  transition: all 0.5s ease;
}

.irregular-shape:hover {
  transform: rotate(5deg);
  clip-path: path('M 30 0 Q 100 30 100 50 Q 70 100 50 100 Q 0 70 0 50 Q 30 20 30 0 Z');
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.5s ease;
}

.irregular-shape:hover .logo-image {
  transform: scale(1.05);
}

@media (max-width: 960px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }
  
  .name::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .tagline {
    max-width: 100%;
  }
  
  .actions {
    justify-content: center;
  }
  
  .logo-container {
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
  }
  
  .name {
    font-size: 2.2rem;
  }
  
  .text {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .actions {
    flex-direction: column;
  }
  
  .action-button {
    width: 100%;
  }
}
</style>
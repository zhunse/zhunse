<template>
    <div class="equipment-page">
        <!-- 顶部大图 -->
        <div class="hero-image">
            <img :src="heroImage" alt="装备展示">
            <div class="hero-text-overlay">
                <h1 class="hero-title">{{ heroTitle }}</h1>
                <p class="hero-subtitle">{{ heroSubtitle }}</p>
            </div>
        </div>

        <!-- 多个装备区块 -->
        <div v-for="(section, index) in sections" :key="index" class="equipment-section">
            <!-- 区块标题和描述 -->
            <h1 class="section-title">{{ section.title }}</h1>
            <p class="section-desc">{{ section.description }}</p>

            <!-- 卡片容器 -->
            <div class="cards-grid">
                <!-- 单个装备卡片 -->
                <div v-for="(item, itemIndex) in section.items" :key="itemIndex" class="equipment-card">
                    <div class="card-image">
                        <img :src="item.image" :alt="item.name">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">{{ item.name }}</h3>
                        <h4 class="card-subtitle">{{ item.model }}</h4>
                        <p class="card-desc">{{ item.description }}</p>
                        <a :href="item.link" class="card-btn" target="_blank">
                            {{ item.btnText || '查看详情' }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    heroImage: String,      // 顶部大图URL
    heroTitle: String,     // 新增：图片主标题
    heroSubtitle: String,  // 新增：图片副标题
    sections: {            // 原有装备分类区块
        type: Array,
        default: () => [
            {
                title: "",          // 区块标题
                description: "",  // 区块描述
                items: [                  // 装备列表
                    {
                        name: "",     // 装备名称
                        model: "", // 型号/副标题
                        description: "", // 描述
                        image: "", // 图片
                        link: "#",         // 详情链接
                        btnText: ""  // 按钮文字(可选)
                    }
                    // 更多装备...
                ]
            }
            // 更多区块...
        ]
    }
})
</script>

<style scoped>
.equipment-page {
    max-width: 1280px;
    margin: 0 auto;
}

/* 顶部大图样式 */
.hero-image {
    height: 350px;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--vp-extra-border) !important;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-image {
    position: relative;
    /* 为文字定位做准备 */
}

.hero-text-overlay {
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 0px;
    color: white;
    pointer-events: none;
    /* 防止文字阻挡图片点击 */
}

.hero-title {
    font-size: 28px;
    margin-bottom: 8px;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 16px;
    line-height: 1.4;
    opacity: 0.9;
}

/* 装备区块样式 */
.equipment-section {
    margin-bottom: 60px;
}

.section-title {
    font-size: 28px;
    margin-bottom: 12px;
    color: var(--vp-c-text-1);
}

.section-desc {
    font-size: 16px;
    color: var(--vp-c-text-2);
    margin-bottom: 30px;
    line-height: 1.6;
}

/* 卡片网格布局 */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

/* 单个卡片样式 */
.equipment-card {
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid var(--vp-extra-border) !important;
    background: #80808005 !important;
    backdrop-filter: blur(25px) !important;
}

.equipment-card:hover {
    border: 1px solid var(--vp-extra-border-hover) !important;
}

.equipment-card:hover .card-image {
    border-bottom: 1px solid var(--vp-extra-border-hover) !important;
}

.card-image {
    height: 210px;
    border-bottom: 1px solid var(--vp-extra-border) !important;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: var(--vp-c-bg);
}

.card-body {
    padding: 18px;
}

.card-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 4px 0;
    color: var(--vp-c-text-1);
}

.card-subtitle {
    font-size: 14px;
    color: var(--vp-c-text-2);
    margin: 0 0 12px 0;
    font-weight: 500;
}

.card-desc {
    font-size: 14px;
    color: var(--vp-c-text-2);
    line-height: 1.5;
    margin-bottom: 20px;
    min-height: 60px;
}

.card-btn {
    background: #80808010 !important;
    backdrop-filter: blur(25px) !important;
    border: 1px solid var(--vp-extra-border);
    color: var(--vp-c-text-2);
    padding: 8px 10px;
    text-decoration: none;
    border-radius: 8px;
    font-size: 13px;
    transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.5);
    transform: scale(1);
}

.card-btn:hover {
    border: 1px#ec6d32 solid;
    color: var(--vp-c-text-1);
}

.card-btn::after {
    display: none !important;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .cards-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-image {
        height: 300px;
    }
}

@media (max-width: 768px) {
    .cards-grid {
        grid-template-columns: repeat(1, 1fr);
    }

    .hero-image {
        height: 250px;
    }
}

@media (max-width: 480px) {
    .cards-grid {
        grid-template-columns: 1fr;
    }

    .hero-image {
        height: 200px;
        margin-bottom: 30px;
    }

    .section-title {
        font-size: 24px;
    }
}
</style>
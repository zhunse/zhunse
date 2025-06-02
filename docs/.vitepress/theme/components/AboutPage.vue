<template>
    <div class="about-page">
        <br class="min-br">
        <br class="min-br">
        <h1>关于</h1>

        <div class="box-component">
            <div class="component-a">
                <div class="extra box-about">
                    <div class="extra box-about-min">
                        <div class="extra box-about-img"></div>
                        <div class="extra box-about-name"><span>你好，很高兴认识你</span><br />我叫 朱宁宁<br />我来自 陕西汉中</div>
                        <div class="extra box-about-hr-x"></div>
                        <div class="extra box-about-text">
                            我的专业是 平面设计 我比较精通于 Photoshop 和 CorelDRAW 但是设计灵感往往会使人头疼……<div>后来在网上自学了一些前端编程知识没事就独自一个人坐在电脑前 敲敲敲……</div>
                        </div>
                    </div>
                </div>
                <div class="extra box-wante">
                    <a href="https://music.163.com/" target="_blank" title="点击打开网易云音乐">
                        <div class="extra box-wang">
                            <div class="extra box-wang-min">
                                <div class="extra box-wang-icon"><img src="/img/about/wangyiyun-icon.svg"></div>
                                <div class="extra box-wang-ri"><img src="/img/about/wangyiyun-Calendar.svg"></div>
                                <div class="extra box-wang-text">每日音乐推荐<br /><span>为你推荐好音乐</span></div>
                            </div>
                        </div>
                    </a>
                    <div class="extra box-note">
                        <div class="extra box-note-min">
                            <div class="extra box-note-icon"><img src="/img/about/note.svg"></div>
                            <div class="extra box-note-ti" title="程序员の浪漫">@瓜女子</div>
                            <div class="extra box-note-text">你的出现就像我代码里的finally——无论前面有多少bug和异常，最后总会执行到你。</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="component-b">
                <div class="extra box-lunbo">
                    <div class="carousel-container">
                        <div class="carousel-track">
                            <div class="carousel-slide" style="background-image: url('/img/about/lunbo/chuan.jpg')">
                                <div class="slide-text">周末划船</div>
                            </div>
                            <div class="carousel-slide" style="background-image: url('/img/about/lunbo/xiaban.jpg')">
                                <div class="slide-text">下班的时光</div>
                            </div>
                            <div class="carousel-slide" style="background-image: url('/img/about/lunbo/chi.jpg')">
                                <div class="slide-text">吃喝玩乐</div>
                            </div>
                            <div class="carousel-slide" style="background-image: url('/img/about/lunbo/yun.jpg')">
                                <div class="slide-text">云朵</div>
                            </div>
                        </div>
                        <div class="carousel-dots">
                            <span class="active"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="extra box-miimg">
                    <div class="extra box-mi">
                        <div class="extra box-mi-min">
                            <div class="extra box-mi-led"><img src="/img/about/led.svg"></div>
                            <ThemeToggle />
                            <div class="extra box-mi-text">主题颜色<br /><span>我的小站</span></div>
                        </div>
                    </div>
                    <div class="extra box-img">
                        <div class="extra box-img-min">Snow</div>
                    </div>
                </div>
                <div class="extra box-personal">
                    <div class="extra box-personal-min">
                        <div class="extra box-personal-icon"><img src="/img/about/personal.svg"></div>
                        <div class="extra box-personal-ti">逻辑学家<br /><span>INTP-T</span></div>
                        <a href="https://www.16personalities.com/ch" target="_blank">
                            <div class="extra box-personal-text">点击查看你的人格类型</div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="component-c">
                <div class="extra box-xired">
                    <a href="https://www.xiaohongshu.com/" target="_blank" title="点击打开小红书">
                        <div class="extra box-xiao">
                            <div class="extra box-xiao-min">
                                <div class="extra box-xiao-icon"><img src="/img/about/redbook.svg"></div>
                                <div class="extra box-xiao-text">咔嚓一下</div>
                            </div>
                        </div>
                    </a>
                    <div class="extra box-weibo">
                        <div class="extra box-weibo-min">
                            <div class="extra box-weibo-icon"><img src="/img/about/weibo.svg"></div>
                            <div class="extra box-weibo-ti">微博热搜</div>
                            <div class="extra box-weibo-api">
                                <div class="hot-list" id="hotList">
                                    <div class="hot-item">
                                        <div class="content">null...</div>
                                        <div class="hot">0.0W</div>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="hot-item">
                                        <div class="content">null...</div>
                                        <div class="hot">0.0W</div>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="hot-item">
                                        <div class="content">null...</div>
                                        <div class="hot">0.0W</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="extra box-Photo">
                    <div class="extra  box-Photo-min">
                        <div class="extra box-Photo-text">2X2<br><span>元素预留位</span></div>
                    </div>
                </div>
                <div class="extra box-more">
                    <div class="box-more-min">
                        <div class="extra box-more-text">1X2<br><span>元素预留位</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 轮播图相关数据
            carousel: {
                currentIndex: 0,
                track: null,
                dots: null,
                interval: null
            }
        }
    },
    async mounted() {
        await this.fetchWeiboHot();
        setInterval(this.fetchWeiboHot, 5 * 60 * 1000);

        // 初始化轮播图
        this.carousel.track = document.querySelector('.carousel-track');
        this.carousel.dots = document.querySelectorAll('.carousel-dots span');
        this.initCarousel();
    },
    beforeUnmount() {
        // 清除轮播图定时器
        clearInterval(this.carousel.interval);
    },
    methods: {
        async fetchWeiboHot() {
            const hotList = document.getElementById('hotList');
            if (!hotList) return;

            try {
                const response = await fetch('https://v2.xxapi.cn/api/weibohot');
                const data = await response.json();

                if (data.code === 200 && data.data?.length > 0) {
                    let html = '';
                    const top3 = data.data.slice(0, 3);

                    top3.forEach((item, index) => {
                        if (index > 0) html += '<div class="divider"></div>';
                        const hotValue = item.hot.includes('万')
                            ? parseFloat(item.hot.replace('万', '')) + 'W'
                            : (parseFloat(item.hot) / 10000).toFixed(1) + 'W';

                        html += `
              <div class="hot-item" data-url="${item.url}">
                <div class="content">${item.title}</div>
                <div class="hot">${index === 0 ? '新' : hotValue}</div>
              </div>
            `;
                    });

                    hotList.innerHTML = html;
                    hotList.querySelectorAll('.hot-item').forEach(el => {
                        el.addEventListener('click', () => window.open(el.dataset.url));
                    });
                }
            } catch (error) {
                console.error('获取微博热搜失败:', error);
            }
        },
        // 轮播图方法
        initCarousel() {
            const slideCount = 4; // 4张图片

            // 自动轮播
            this.carousel.interval = setInterval(() => {
                this.carousel.currentIndex = (this.carousel.currentIndex + 1) % slideCount;
                this.updateCarousel();
            }, 3000);

            // 点击小圆点切换
            this.carousel.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    this.carousel.currentIndex = index;
                    this.updateCarousel();
                });
            });

            // 触摸滑动支持
            this.addSwipeSupport();
        },
        updateCarousel() {
            this.carousel.track.style.transform = `translateX(-${this.carousel.currentIndex * 25}%)`;
            this.carousel.dots.forEach(dot => dot.classList.remove('active'));
            this.carousel.dots[this.carousel.currentIndex].classList.add('active');
        },
        addSwipeSupport() {
            let startX = 0;
            let isDragging = false;
            const slideCount = 4;

            this.carousel.track.addEventListener('mousedown', (e) => {
                startX = e.pageX;
                isDragging = true;
                this.carousel.track.style.transition = 'none';
            });

            this.carousel.track.addEventListener('touchstart', (e) => {
                startX = e.touches[0].pageX;
                isDragging = true;
                this.carousel.track.style.transition = 'none';
            });

            const moveHandler = (e) => {
                if (!isDragging) return;
                const x = e.pageX || e.touches[0].pageX;
                const diff = startX - x;
                this.carousel.track.style.transform = `translateX(calc(-${this.carousel.currentIndex * 25}% - ${diff}px))`;
            };

            const endHandler = (e) => {
                if (!isDragging) return;
                isDragging = false;
                this.carousel.track.style.transition = 'transform 0.5s ease';

                const x = e.pageX || e.changedTouches[0].pageX;
                const diff = startX - x;

                if (Math.abs(diff) > 50) {
                    this.carousel.currentIndex = diff > 0
                        ? (this.carousel.currentIndex + 1) % slideCount
                        : (this.carousel.currentIndex - 1 + slideCount) % slideCount;
                    this.updateCarousel();
                } else {
                    this.carousel.track.style.transform = `translateX(-${this.carousel.currentIndex * 25}%)`;
                }
            };

            this.carousel.track.addEventListener('mousemove', moveHandler);
            this.carousel.track.addEventListener('touchmove', moveHandler);
            this.carousel.track.addEventListener('mouseup', endHandler);
            this.carousel.track.addEventListener('touchend', endHandler);
        }
    }
}
</script>

<style>
:root {
    --component-border-radius: 20px !important;
    --component-border: #80808035 !important;
}

.min {
    width: 1152px;
    height: 562px;
    margin: 150px auto;
    background: #3b3b3b;
}

.box-component {
    margin: 15px 0 15px 0;
}

.component-a {
    position: absolute;
}

.extra {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.extra:hover {
    --component-border: #80808050 !important;
}

.box-about {
    width: 368px;
    height: 368px;
    margin: 0 0 12px 0;
    background: var(--vp-about-back);
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
}

.box-about-min {
    position: absolute;
    width: 368px;
    height: 368px;
    padding: 15px;
}

.box-about-img {
    position: absolute;
    margin-top: 0px;
    margin-left: 0px;
    width: 130px;
    height: 130px;
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
    background-image: url('/img/about/me.gif');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.box-about-name {
    position: absolute;
    margin-top: 10px;
    margin-left: 150px;
    line-height: 33px;
    font-size: 24px;
    color: var(--vp-c-text-1);
    font-weight: bold;
}

.box-about-name span {
    font-size: 14px;
    color: var(--vp-c-text-2);
}

.box-about-hr-x {
    position: relative;
    margin-top: 145px;
    border-top: 2px dashed #80808080;
}

.box-about-text {
    position: absolute;
    width: 338px;
    margin: 5px;
    margin-top: 15px;
    color: var(--vp-c-text-2);
    font-size: 18px;
    letter-spacing: 1.5px;
    line-height: 25px;
    text-indent: 2.25em;
}

.box-wante {
    width: 369px;
    height: 196px;
}

.box-wang {
    width: 172px;
    height: 172px;
    background: linear-gradient(to bottom left, #FA5C5D, #FF3A38);
    display: inline-block;
    margin: 12px 10px 0 0;
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
}

.box-wang-min {
    position: absolute;
    width: 172px;
    height: 172px;
    padding: 15px;
}

.box-wang-icon img {
    position: absolute;
    margin-left: 118px;
    width: 25px;
}

.box-wang-ri img {
    display: block;
    margin: 20px auto;
    text-align: center;
    width: 55px;
}

.box-wang-text {
    text-align: center;
    margin-top: -10px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 20px;
}

.box-wang-text span {
    color: #f3f3f3;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: normal;
}


.box-note {
    width: 172px;
    height: 172px;
    background: #f5f5f5;
    display: inline-block;
    margin: 12px 0 0 11px;
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
}

.box-note-min {
    position: absolute;
    width: 172px;
    height: 172px;
    padding: 15px;
}

.box-note-icon img {
    width: 20px;
}

.box-note-ti {
    position: absolute;
    margin-top: -21px;
    margin-left: 25px;
    font-size: 17px;
    font-weight: 500;
    color: #151515;
}

.box-note-text {
    width: 100%;
    font-size: 12px;
    margin-top: 10px;
    color: #303030;
    letter-spacing: 1.5px;

}

.component-b {
    position: relative;
    margin-left: 392px;
}

.box-lunbo {
    width: 368px;
    height: 172px;
    background: var(--vp-about-back);
    margin: 0 0 12px 0;
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
}

.box-miimg {
    width: 369px;
    height: 196px;
}

.box-mi {
    width: 172px;
    height: 172px;
    background: #f5f5f5;
    display: inline-block;
    margin: 12px 10px 12px 0;
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
}

.box-mi-min {
    position: absolute;
    width: 172px;
    height: 172px;
    padding: 15px;
}

.box-mi-led img {
    width: 40px;
}

/* .box-mi-switch {
    position: absolute;
    margin-left: 90px;
    margin-top: -65px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #80808025;
}

.box-mi-switch img {
    position: absolute;
    width: 20px;
    margin-top: 15px;
    margin-left: 15px;
} */

.box-mi-text {
    position: absolute;
    margin-top: 30px;
    font-size: 20px;
    line-height: 25px;
    color: #313131;
    font-weight: 500;
}

.box-mi-text span {
    font-size: 15px;
    color: #808080;
}

.box-img {
    width: 172px;
    height: 172px;
    display: inline-block;
    margin: 12px 0 12px 11px;
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
    background-image: url('/img/about/snow.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.box-img-min {
    position: absolute;
    width: 172px;
    height: 172px;
    padding: 15px;
    color: #ffffffaa;
    font-size: 25px;
    font-weight: bold;

}


.box-personal {
    width: 368px;
    height: 172px;
    background: var(--vp-about-back);
    margin: 12px 0 0 0;
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
}

.box-personal-min {
    position: absolute;
    width: 368px;
    height: 172px;
    padding: 15px;
}

.box-personal-icon img {
    position: absolute;
    margin-top: 0px;
    margin-left: 215px;
    width: 145px;
    transform: scaleX(-1);
}


.box-personal-ti {
    position: absolute;
    margin-top: 0px;
    margin-left: 0px;
    color: #88619a;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1.5px;
    line-height: 40px;
}

.box-personal-ti span {
    color: var(--vp-c-text-1);
}

.box-personal-text {
    position: absolute;
    margin-top: 125px;
    margin-left: 0px;
    font-size: 12px;
    color: var(--vp-c-text-2);
}


.box-personal ::after {
    display: none !important;
}

.component-c {
    position: relative;
    margin-left: 784px;
    margin-top: -564px;
}

.box-xired {
    width: 369px;
    height: 196px;
}

.box-xiao {
    width: 172px;
    height: 172px;
    display: inline-block;
    margin: 0 10px 12px 0;
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
    background-image: url('/img/about/kacha.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.box-xiao-min {
    position: absolute;
    width: 172px;
    height: 172px;
    padding: 15px;
}

.box-xiao-icon img {
    border-radius: 10px;
    position: absolute;
    margin-left: 98px;
    width: 45px;
}

.box-xiao-text {
    position: absolute;
    color: #e2e2e2;
    font-size: 18px;
    font-weight: 500;
    margin-top: 120px;
}

.box-weibo {
    width: 172px;
    height: 172px;
    background: linear-gradient(to bottom, #ffecb5 5%, #f5f5f5 30%);
    display: inline-block;
    margin: 0 0 12px 11px;
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
}

.box-weibo-min {
    position: absolute;
    width: 172px;
    height: 172px;
    padding: 15px;
}

.box-weibo-icon img {
    position: absolute;
    width: 20px;
}

.box-weibo-ti {
    position: absolute;
    margin-top: 0px;
    margin-left: 25px;
    font-size: 18px;
    font-weight: 500;
    color: #191919;
}

.box-weibo-api .hot-list {
    margin-top: 30px;
    height: calc(100% - 30px);
    display: flex;
    flex-direction: column;
}

.box-weibo-api .hot-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    cursor: pointer;
}

.box-weibo-api .hot-item:hover {
    background-color: #cdcdcd1d;
    border-radius: 5px;
}

.box-weibo-api .content {
    font-size: 15px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
}

.box-weibo-api .hot {
    font-size: 13px;
    color: #ff8200;
    margin-left: 8px;
}

.box-weibo-api .divider {
    height: 1px;
    background-color: #eee;
    margin: 2px 0;
}


.box-Photo {
    width: 368px;
    height: 368px;
    background: #626d05;
    margin: 0 0 12px 0;
    background: var(--vp-about-back);
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
}

.box-Photo-min {
    position: absolute;
    width: 368px;
    height: 368px;
    padding: 15px;
}

.box-Photo-text {
    position: absolute;
    margin-top: 130px;
    margin-left: 85px;
    font-size: 30px;
    color: var(--vp-c-text-1);
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    letter-spacing: 2.5px;
}


.box-more {
    width: 368px;
    height: 172px;
    position: absolute;
    margin-top: 784px !important;
    margin-left: -392px !important;
    background: var(--vp-about-back);
    margin: 12px 0 0 0;
    border-radius: var(--component-border-radius);
    border: 1px var(--component-border) solid;
    display: none;
}

.box-more-min {
    position: absolute;
    width: 368px;
    height: 172px;
    padding: 15px;
}

.box-more-text {
    position: absolute;
    margin-top: 30px;
    margin-left: 85px;
    font-size: 30px;
    color: var(--vp-c-text-1);
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    letter-spacing: 2.5px;
}


/* 轮播图样式 */
.box-lunbo {
    position: relative;
    overflow: hidden;
}

.carousel-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.carousel-track {
    display: flex;
    height: 100%;
    transition: transform 0.5s ease;
    width: 400%;
}

.carousel-slide {
    width: 25%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    flex-shrink: 0;
}

.slide-text {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    padding: 2px 10px;
    border-radius: 25px;
    font-size: 13px;
}

.carousel-dots {
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 8px;
}

.carousel-dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
}

.carousel-dots span.active {
    background: white;
}

@media (max-width: 767px) {

    .box-component {
        height: 1710px;
    }

    .about-page {
        width: 368px;
        margin: 0 auto;
    }

    .component-b {
        position: relative;
        margin-left: 0px;
        top: 588px;
    }

    .component-c {
        position: relative;
        margin-left: 0px;
        top: 1176px;
    }

    br.min-br {
        display: none;
    }
}

@media (min-width: 768px) and (max-width: 1279px) {

    .box-component {
        height: 932px;
    }

    .about-page {
        width: 760px;
        margin: 0 auto;
    }

    .box-Photo {
        position: absolute;
        margin-top: 588px;
        margin-left: -784px;
    }

    .box-xired {
        position: absolute;
        margin-top: 588px;
        margin-left: -392px;
    }

    .box-more {
        display: block;
    }
}
</style>

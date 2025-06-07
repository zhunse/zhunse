---
title: 我的装备
aside: false
sidebar: false
layout: home
---

<br/>

<style>
html {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
html::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Opera */
}
</style>

<EquipmentDisplay 
    heroImage=".//img/equip/back.webp"
    heroTitle="我的装备库" 
    heroSubtitle="提升生产力的秘密武器"
    :sections="[
        {
            title: '生产力工具',
            description: '我的生产主力设备组合',
            items: [
                {
                    name: 'Xiaomi 14 Pro',
                    model: '16GB+512GB 白色',
                    description: '小米14 Pro 是一款高端旗舰手机，搭载骁龙8 Gen 3 处理器、6.73英寸2K屏幕和徕卡影像系统。',
                    image: './/img/equip/Xiaomi14Pro.png',
                    link: 'https://www.mi.com/xiaomi-14-pro',
                    btnText: '详情'
                },
                {
                    name: '华硕 天选三',
                    model: '16GB+2.5TB 青色',
                    description: '天选三 是一款高性能游戏本，搭载 i7-12700H 处理器、RTX 3060 显卡和 165Hz 2.5K 显示屏。',
                    image: './/img/equip/FX507ZM.png',
                    link: 'https://www.asus.com.cn/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-f15-2022/',
                    btnText: '详情'
                },
                {
                    name: 'Xiaomi Pad 6 Max ¹⁴',
                    model: '16GB+1TB 灰色',
                    description: '小米 Pad 6 Max 是一款大屏平板，配备 14 英寸 2.8K 显示屏，支持手写笔和键盘，搭载骁龙 8+ 处理器。',
                    image: './/img/equip/XiaomiPad6Max.png',
                    link: 'https://www.mi.com/xiaomi-pad-6-max',
                    btnText: '详情'
                },
                {
                    name: '小米手环 8 Pro',
                    model: '黑色',
                    description: '小米手环 8 Pro 是一款智能手环，配备 1.74 英寸 AMOLED 屏幕，支持心率、血氧监测和多种运动模式。',
                    image: './/img/equip/Xiaomi-Mi-Band8Pro.png',
                    link: 'https://www.mi.com/xiaomi-shouhuan-8-pro',
                    btnText: '详情'
                },
                {
                    name: '梵想 S790 SSD',
                    model: '2TB',
                    description: '高速PCIe 4.0固态硬盘，读取速度高达7000MB/s，寿命持久，适合高端游戏和创意工作。',
                    image: './/img/equip/fanxiang.png',
                    link: 'https://item.jd.com/100052237871.html',
                    btnText: '京东商城'
                },
                {
                    name: '绿联M·2双协议固态硬盘盒',
                    model: '10Gbps',
                    description: '支持NVMe/SATA两种协议固态硬盘使用，不用担心硬盘不兼容，USB3.2 Gen2数传标准，1G文件1秒传',
                    image: './/img/equip/UGBox.png',
                    link: 'https://item.jd.com/100080664632.html',
                    btnText: '京东商城'
                }
            ]
        },
        {
            title: '影音娱乐',
            description: '用来娱乐的一些设备',
            items: [
                {
                    name: '绿联私有云 DXP-4800',
                    model: '2*4TB西数红盘Plus',
                    description: '四盘位NAS，支持M.2缓存，10GbE高速传输，多功能备份，4K影音解码。',
                    image: './/img/equip/UGNAS.png',
                    link: 'https://item.jd.com/100140008328.html',
                    btnText: '京东商城'
                },
                                {
                    name: '华为智慧屏 SE65 Pro',
                    model: '3GB+16GB',
                    description: '65英寸4K超清屏，鸿蒙系统，92%屏占比，MEMC动态补偿，智能语音控制。',
                    image: './/img/equip/huaweise65pro.png',
                    link: 'https://consumer.huawei.com/cn/visions/',
                    btnText: '详情'
                },                {
                    name: '小爱音箱Play 增强版',
                    model: '黑色',
                    description: '内置红外遥控，一句话控制传统家电内置红外遥控，一句话控制传统家电 | LED时钟显示，自适应亮度调节',
                    image: './/img/equip/MiSpeakers.png',
                    link: 'https://www.mi.com/shop/buy/detail?product_id=14596&selected=14596&pClass=p',
                    btnText: '详情'
                }
            ]
        }
    ]"
/>
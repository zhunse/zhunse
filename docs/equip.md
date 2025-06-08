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
                    description: '很喜欢小米产品。忠实米粉。刚发布不久就入手了，主要吸引我的点就是影像上面，他居然搭载了一个1024级 物理可变光圈，这您受得了吗。',
                    image: './/img/equip/Xiaomi14Pro.png',
                    link: 'https://www.mi.com/xiaomi-14-pro',
                    btnText: '详情'
                },
                {
                    name: '华硕 天选三',
                    model: '16GB+2.5TB 青色',
                    description: '上学时需要用电脑，父母给我买的，搭载 i7-12700H 处理器、RTX 3060 显卡和 165Hz 2.5K 显示屏。无论是大型游戏 设计绘图 程序开发 都绰绰有余。',
                    image: './/img/equip/FX507ZM.png',
                    link: 'https://www.asus.com.cn/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-f15-2022/',
                    btnText: '详情'
                },
                {
                    name: 'Xiaomi Pad 6 Max ¹⁴',
                    model: '16GB+1TB 灰色',
                    description: '当时刚毕业，实习期间打工赚了点钱购买的，14英寸超大屏幕、八扬声器的设计，无论是追剧、听歌、打游戏，总体体验都是非常的不错的。',
                    image: './/img/equip/XiaomiPad6Max.png',
                    link: 'https://www.mi.com/xiaomi-pad-6-max',
                    btnText: '详情'
                },
                {
                    name: '小米手环 8 Pro',
                    model: '黑色',
                    description: '用了两年多了，表带都换了四条了，总体感觉很不错性价比比较高，续航和防水都做的不错，还支持NFC公交卡，之前在成都上班时坐地铁方便许多。',
                    image: './/img/equip/Xiaomi-Mi-Band8Pro.png',
                    link: 'https://www.mi.com/xiaomi-shouhuan-8-pro',
                    btnText: '详情'
                },
                {
                    name: '梵想 S790 SSD',
                    model: '2TB',
                    description: '电脑之前标配的是512GB*2=1TB，后来感觉稍微下两个游戏存储就不够用了，刚好也看见长江存储技术的上新，果断入手了一块2TB的SSD硬盘。',
                    image: './/img/equip/fanxiang.png',
                    link: 'https://item.jd.com/100052237871.html',
                    btnText: '京东商城'
                },
                {
                    name: '绿联M·2双协议固态硬盘盒',
                    model: '10Gbps',
                    description: '因为电脑换了新的硬盘，拆下来了一条闲置的512GB硬盘，所以就买了这个硬盘盒，体验感觉不错，传输速度和散热都做的挺好的。',
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
                    description: '购买原因很简单，手机的存储快不够用了，我没事了就喜欢拍拍拍，导致手机里的视频和照片加起来就有149.47GB，实在没有时间清理。',
                    image: './/img/equip/UGNAS.png',
                    link: 'https://item.jd.com/100140008328.html',
                    btnText: '京东商城'
                },
                {
                    name: '华为智慧屏 SE65 Pro',
                    model: '3GB+16GB',
                    description: '搭配华为自研的鸿蒙系统，以及4K分辨率，日常看电视 电影都是绰绰有余了，还有一个智能摄像头，可以打视频电话和体感游戏健身。',
                    image: './/img/equip/huaweise65pro.png',
                    link: 'https://consumer.huawei.com/cn/visions/',
                    btnText: '详情'
                }, 
                                {
                    name: '盖世小鸡 启明星2',
                    model: '辉光白',
                    description: '平时不咋玩游戏，最近一段时间刷快手时经常看见盖世小鸡游戏手柄的直播间，反正也不贵就入手了,感觉还不错吧',
                    image: './/img/equip/gaishi.png',
                    link: 'https://www.xiaoji.com/buy-330.html',
                    btnText: '详情'
                }, 
                {
                    name: '小爱音箱Play 增强版',
                    model: '黑色',
                    description: '实习期买的，不是很贵一百来出头，主要是当时租的房子的空调是老式空调，不支持手机联网控制，所以就入手这个音箱，支持红外控制家电，就很方便。',
                    image: './/img/equip/MiSpeakers.png',
                    link: 'https://www.mi.com/shop/buy/detail?product_id=14596&selected=14596&pClass=p',
                    btnText: '详情'
                }
            ]
        }
    ]"
/>
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
    heroTitle="我的装备" 
    heroSubtitle="提升生产力的秘密武器"
    :sections="[
        {
            title: '主力装备',
            description: '我的主力设备组合',
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
                    name: '罗技 G102',
                    model: '白色',
                    description: '一款性价比非常高的鼠标，LIGHTSYNC RGB 智能炫光 6 个可编程按键，1000Hz USB 报告速率，用了五年了，从来没有罢工过。',
                    image: './/img/equip/G102.png',
                    link: 'https://www.logitechg.com/zh-cn/products/gaming-mice/g102-lightsync-rgb-gaming-mouse.html',
                    btnText: '详情'
                },
                                {
                    name: '艾石头 FE104 械键盘',
                    model: '白色 红轴 RGB',
                    description: '网上数码博主推荐的，一百来出头性价比较高，支持宏编程、自定义RGB灯光、热插拔轴体、TYPE-C连接，之前后朋友打游戏的时候用一下。',
                    image: './/img/equip/FE104.png',
                    link: 'https://www.irok.cn/item/338',
                    btnText: '详情'
                },
                {
                    name: '梵想 S790 SSD',
                    model: '2TB',
                    description: '电脑之前标配的是512GB*2=1TB，后来感觉稍微下两个游戏存储就不够用了，刚好也看见长江存储技术的上新，果断入手了一块2TB的SSD硬盘。',
                    image: './/img/equip/fanxiang.png',
                    link: 'https://item.jd.com/100052237871.html',
                    btnText: '京东商城'
                }
            ]
        },
                {
            title: '离家出行',
            description: '出门在外必备神器',
            items: [
                {
                    name: '小米手环 8 Pro',
                    model: '黑色',
                    description: '用了两年多了，表带都换了四条了，总体感觉很不错性价比比较高，续航和防水都做的不错，还支持NFC公交卡，之前在成都上班时坐地铁方便许多。',
                    image: './/img/equip/Xiaomi-Mi-Band8Pro.png',
                    link: 'https://www.mi.com/xiaomi-shouhuan-8-pro',
                    btnText: '详情'
                },
                {
                    name: '小米自带线充电宝 165W',
                    model: '10000mAh',
                    description: '自带一根TYPE-C充电线，还可以当挂绳使用，充电速度很快不发烫，唯一的缺点就是容量有点小，但是有快充不是很介意这点。',
                    image: './/img/equip/mi165.png',
                    link: 'https://www.mi.com/xiaomi-power-bank',
                    btnText: '详情'
                },
                {
                    name: '大疆 Osmo Mobile 6',
                    model: '暗岩灰',
                    description: '换手机才买的，第一次自己买这么贵的手机，所以就要发挥一下他的实力，云台可以折叠收纳，带有延长杆还有三脚架，支持一键横竖切换。',
                    image: './/img/equip/Osmo-Mobile-6.png',
                    link: 'https://www.dji.com/cn/osmo-mobile-6',
                    btnText: '详情'
                },
                {
                    name: '酷态科10号超级电能线',
                    model: '黑色 一拖二 TYPE-C',
                    description: '这可是一个妥妥的黑科技产品，通过自研的ADC协议转换功能能够为普通充电器拓展更多快充协议，可供市面上大部分手机支持快速充电',
                    image: './/img/equip/kutaike.png',
                    link: 'https://item.jd.com/10137972673694.html',
                    btnText: '京东商城'
                },
                {
                    name: 'Redmi Buds 6 青春版',
                    model: '白色',
                    description: '平时很少戴耳机，坐地铁时用一下，之前用的是 Redmi Buds 5 Pro 很巧不巧的是有一会骑共享单车给落在车筐的袋子里面了，后面就买了一个便宜点。',
                    image: './/img/equip/Redmi-Buds-6.png',
                    link: 'https://www.mi.com/prod/redmi-buds-6-youth',
                    btnText: '详情'
                },
                {
                    name: '华硕天选潮流双肩背包',
                    model: '灰白色',
                    description: '买电脑的时候购买的，掐指一算五年过去了，只能说真结实，装衣服啥的就别想了，扁平化的设计，没有弹性，装个笔记本，耳机，充电器/宝 就足够了。',
                    image: './/img/equip/tx-knapsack.png',
                    link: 'https://b.asus.com.cn/item-12307998.html',
                    btnText: '详情'
                }
           ]
        },
        {
            title: '桌面娱乐',
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
                },
                {
                    name: '绿联M·2双协议固态硬盘盒',
                    model: '10Gbps',
                    description: '因为电脑换了新的硬盘，拆下来了一条闲置的512GB硬盘，所以就买了这个硬盘盒，体验感觉不错，传输速度和散热都做的挺好的。',
                    image: './/img/equip/UGBox.png',
                    link: 'https://item.jd.com/100080664632.html',
                    btnText: '京东商城'
                },
                {
                    name: '小米 30W 立式无线充',
                    model: '白色',
                    description: '上班的时候买的，只是上班用一下30W足够了，闲的时候摸鱼可以当手机支架，横竖都能放，下班拿起手机就跑，非常的方便。',
                    image: './/img/equip/wuxian.png',
                    link: 'https://www.mi.com/shop/buy/detail?product_id=14596&selected=14596&pClass=p',
                    btnText: '详情'
                }
            ]
        }
    ]"
/>
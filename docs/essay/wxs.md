---
title: Vitepress关注微信公主号页面
aside: false
sidebar: false
---

# Vitepress关注微信公主号页面

## 效果
![](/img/essay/wxs01.png)

## 教程

这个页面非常的简单，只需要在任意位置创建一个`.md`文件粘贴以下代码即可

::: info 提示
二维码可以在[草料二维码-点击打开](https://cli.im/)服务生成，其他图片素材可以访问[关注微信公众号](/wx)页面右击图片-保存 自行参考尺寸
:::

```Markdown:line-numbers {1}
---
title: 关注微信
aside: false
sidebar: false
---

<br/>

# 关注微信公众号

<div class="qr-container">
  <div class="qr-code-box">
    <img src="/image/about/qrcode.png" alt="微信公众号二维码" data-fancybox="gallery" class="qr-code-image">
    <p class="qr-code-text">扫描二维码关注微信公众号</p>
    <div class="qr-info-box">
      <div class="qr-avatar">
        <img src="/image/about/logo.png" width="100%">
      </div>
      <div class="qr-info-text">
        <div class="qr-info-name">
          进函科技社
          <a href="/image/about/wx.png" download="进函科技社.png">
            <img src="/image/about/download.svg" alt="下载" title="点击下载二维码" class="qr-download-button">
          </a>
        </div>
        <div class="qr-info-slogan">探索未来，连接无限</div>
      </div>
    </div>
  </div>
</div>

<style>
  /* 隐藏底部 Footer */
  .VPDocFooter{
    display: none;
  }

  .qr-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55vh;
    padding: 20px;
    box-sizing: border-box;
  }

  .qr-code-box {
    padding: 25px;
    border-radius: 15px;
    max-width: 320px;
    text-align: center;
    background-color: var(--vp-c-bg-soft);
    border: 1px solid #80808025;
  }

  .qr-code-image {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #80808025;
  }

  .qr-code-text {
    margin-top: 15px;
    font-size: 0.9em;
    font-weight: bold;
    color: var(--vp-c-text-1);
  }

  .qr-info-box {
    width: 100%;
    background: #80808020;
    padding: 15px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    color: var(--info-text-color);
    margin-top: 15px;
  }

  .qr-avatar {
    width: 80px;
    height: 100%;
    margin-right: 15px;
  }

  .qr-info-text {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .qr-info-name {
    font-size: 1.2em;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .qr-info-name a {
    margin-left: auto; /* 将下载按钮推到右侧 */
  }
  
  .qr-download-button {
    width: 20px;
    height: 20px;
  }

  .qr-info-slogan {
    font-size: 0.9em;
    font-weight: 600;
    margin-top: 5px;
  }

  /* 响应式设计：在较小屏幕上调整字体大小 */
  @media (max-width: 600px) {
    .qr-code-box {
      padding: 20px;
    }

    .qr-code-text {
      font-size: 1em;
    }

    .qr-info-name {
      font-size: 1em;
    }

    .qr-info-slogan {
      font-size: 0.8em;
    }

    .qr-download-button {
      width: 18px;
      height: 18px;
    }
  }
</style>
```
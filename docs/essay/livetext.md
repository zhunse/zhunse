---
title: 实时共享文本框
aside: false
sidebar: false
---

# 实时共享文本框

## 效果
![](/img/essay/livetext01.png)

## 教程

### 文件树结构

```TXT:line-numbers {1}
livetext/
├── index.php          #前端页面
├── get-content.php    #获取最新内容
├── update.php         #处理内容更新
├── content.txt        #存储共享内容（空文件）
└── favicon.ico        #favicon.ico图标 可以在 https://www.ico51.cn/ 生成
```

### 代码部分

::: details index.php

```PHP:line-numbers {1}
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./favicon.ico">
    <title>实时共享文本框</title>
    <style>
        :root {
            --primary-color: #4285f4;
            --danger-color: #ea4335;
            --border-color: #ddd;
            --text-color: #333;
            --light-text: #666;
            --bg-color: #f9f9f9;
            --description-bg: #fee8e8;
            --warning-bg: #fff8e6;
        }

        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: var(--text-color);
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            min-height: 95vh;
        }

        a {
            color: inherit;
            text-decoration: none;
            outline: none;
        }


        h1 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 20px;
        }

        .description-box {
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid #ff9090;
            border-radius: 15px;
            background-color: #fff8f8;
            color: #ff5b49;
            font-size: 14px;
            line-height: 1.5;
        }

        .warning-box {
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid #ffc107;
            border-radius: 15px;
            background-color: var(--warning-bg);
            color: #ff6b00;
            font-size: 14px;
            line-height: 1.5;
        }

        #sharedText {
            width: 100%;
            height: 200px;
            padding: 15px;
            font-size: 16px;
            border: 1px solid var(--border-color);
            border-radius: 15px;
            resize: vertical;
            box-sizing: border-box;
            transition: border 0.3s;
        }

        #sharedText:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
        }

        .button-group {
            display: flex;
            gap: 10px;
            margin-top: 15px;
            flex-wrap: wrap;
        }

        .btn {
            padding: 15px 20px;
            border: none;
            border-radius: 15px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s;
            flex: 1;
            min-width: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .btn-copy {
            background-color: var(--primary-color);
            color: white;
        }

        .btn-clear {
            background-color: var(--danger-color);
            color: white;
        }

        .btn:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }

        .btn:active {
            transform: translateY(0);
        }

        .status {
            margin-top: 15px;
            padding: 15px;
            border-radius: 15px;
            background-color: var(--bg-color);
            text-align: center;
            color: var(--light-text);
            font-size: 14px;
            display: none;
        }

        footer {
            margin-top: auto;
            padding-top: 20px;
            text-align: center;
            font-size: 12px;
            color: var(--light-text);
            border-top: 1px solid var(--border-color);
        }

        .footer-links {
            margin-top: 10px;
        }

        .footer-links a {
            color: var(--primary-color);
            text-decoration: none;
            margin: 0 10px;
        }

        .footer-links a:hover {
            text-decoration: underline;
        }

        /* 移动端优化 */
        @media (max-width: 600px) {
            body {
                padding: 15px;
            }

            h1 {
                font-size: 24px;
            }

            #sharedText {
                height: 200px;
                padding: 10px;
            }

            .btn {
                padding: 15px 15px;
                font-size: 15px;
                flex: 1 0 100%;
            }
        }
    </style>
</head>

<body>
    <h1>实时共享文本框</h1>

    <div class="description-box">
        <strong>使用说明：</strong>本平台内容为公开共享，所有输入信息将实时展示给所有访问者。请勿在此提交任何个人敏感信息、机密数据或受保护内容。用户需自行承担信息泄露风险。
    </div>

    <div class="warning-box">
        <strong>使用条款：</strong>本服务仅供合法用途使用，禁止用于任何违法活动。用户应对其发布的内容负全部责任，平台不承担任何用户行为导致的连带责任。如发现违法内容，我们将依法配合相关部门处理。
    </div>

    <textarea id="sharedText" placeholder="请输入要共享的内容..."></textarea>

    <div class="button-group">
        <button class="btn btn-copy" id="copyBtn">
            复制内容
        </button>
        <button class="btn btn-clear" id="clearBtn">
            清空内容
        </button>
    </div>

    <div class="status" id="statusMsg"></div>

    <footer>
        <div>© 2025-2025 <a href="#" target="_blank">你的名称</a> 版权所有</div>
        <a href="https://beian.miit.gov.cn/" target="_blank">
            <div>陕ICP备2023000000号</div>
        </a>
        <a href="#" target="_blank">
            <div>川公网安备00000000000000号</div>
        </a>
    </footer>

    <script>
        const sharedText = document.getElementById('sharedText');
        const copyBtn = document.getElementById('copyBtn');
        const clearBtn = document.getElementById('clearBtn');
        const statusMsg = document.getElementById('statusMsg');
        let lastContent = '';
        let isTyping = false;

        // 显示状态消息
        function showStatus(message, isSuccess = true) {
            statusMsg.textContent = message;
            statusMsg.style.display = 'block';
            statusMsg.style.backgroundColor = isSuccess ? '#e6f7ee' : '#feeaea';
            statusMsg.style.color = isSuccess ? '#2e7d32' : '#c62828';

            setTimeout(() => {
                statusMsg.style.display = 'none';
            }, 3000);
        }

        // 复制内容
        copyBtn.addEventListener('click', () => {
            sharedText.select();
            document.execCommand('copy');

            // 对于现代浏览器
            if (navigator.clipboard) {
                navigator.clipboard.writeText(sharedText.value)
                    .then(() => showStatus('内容已复制到剪贴板'))
                    .catch(err => showStatus('复制失败: ' + err, false));
            } else {
                showStatus('内容已复制到剪贴板');
            }

            // 取消选中
            window.getSelection().removeAllRanges();
        });

        // 清空内容
        clearBtn.addEventListener('click', () => {
            if (sharedText.value.trim() === '') {
                showStatus('内容已经是空的', false);
                return;
            }

            if (confirm('确定要清空所有内容吗？所有用户都会看到清空后的结果。')) {
                sharedText.value = '';
                lastContent = '';
                isTyping = true;

                fetch('update.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: 'content='
                })
                    .then(response => response.text())
                    .then(() => {
                        isTyping = false;
                        showStatus('内容已清空');
                    });
            }
        });

        // 发送更新到服务器
        sharedText.addEventListener('input', () => {
            isTyping = true;
            const content = sharedText.value;

            fetch('update.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'content=' + encodeURIComponent(content)
            })
                .then(response => response.text())
                .then(() => {
                    lastContent = content;
                    isTyping = false;
                });
        });

        // 轮询获取最新内容
        function pollContent() {
            if (isTyping) {
                setTimeout(pollContent, 1000);
                return;
            }

            fetch('get-content.php')
                .then(response => response.text())
                .then(content => {
                    if (content !== lastContent && content !== sharedText.value) {
                        sharedText.value = content;
                        lastContent = content;
                    }
                    setTimeout(pollContent, 1000);
                });
        }

        // 初始加载
        fetch('get-content.php')
            .then(response => response.text())
            .then(content => {
                sharedText.value = content;
                lastContent = content;
                pollContent();
            });
    </script>
</body>

</html>
```
:::

::: details get-content.php

```PHP:line-numbers {1}
<?php
echo file_exists('content.txt') ? file_get_contents('content.txt') : '';
?>
```
:::

::: details update.php

```PHP:line-numbers {1}
<?php
$content = isset($_POST['content']) ? $_POST['content'] : '';
file_put_contents('content.txt', $content);
echo 'OK';
?>
```
:::



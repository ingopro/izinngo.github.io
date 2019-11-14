---
title: 重裝系統後重新部署恢復 Hexo blog
tags:
  - Hexo
  - 主題
  - 教程
categories: 
  - 教程
  - Hexo
keywords: "Hexo,重新部署,恢復"
abbrlink: dda8c81b
date: 2018-10-14 22:05:07
description:
top_img:
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/Rebuild_hexo_when_reinstall_the_system.png
---

> 以下方法只適用於沒有刪除 hexo blog 文件夾

因為重裝系統後，Hexo 相關依賴插件/軟件和在 C 盤的緩存資料都會被刪除，以至於 Hexo 的相關命令都無法運行。所有，在重裝系統後，都要重新部署 Hexo。但是重新部署並不難，只需要幾個步驟就行。
因為我的 hexo blog 文件夾不存儲於 C 盤，並沒有因為重裝系統被刪掉。所有重新部署很容易。

## 安裝 git 和 node

git for windows: https://git-scm.com/
Node.js: https://nodejs.org/en/

## 生成 ssh 密鑰

配置 git 個人信息和生成 ssh 密鑰
打開 git bash，輸入

```bash
 git config --global user.name "xxxxx"
 git config --global user.email "xxxxxx@xx.com"
 ssh-keygen -t rsa -C "xxxxxx@xx.com"
```

把上面的 xxxx 換成自己的資料，然後一直 Enter 就行。

## 設置 Github 的 ssh 密鑰

當上面的運行完成後，會在 `C:\Users\主用户`裏出現`.ssh`文件夾，裏面有 id_rsa 和 id_rsa.pub 兩個文件，複製 id_rsa.pub 的內容。

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Rebuild_hexo_when_reinstall_the_system/1.png)

打開 Github 網頁，依次是 `右上角Settings - SSH and GPG keys - New SSH key` 把複製的內容粘貼到 `Key`欄，然後保存。
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Rebuild_hexo_when_reinstall_the_system/2.png)
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Rebuild_hexo_when_reinstall_the_system/3.png)

PS：如果你有把 blog 同步到 coding 的，記得同樣把 id_rsa.pub 的內容複製到 coding 的 ssh 公鑰去，具體為`右上角個人設置 － SSH公鑰 - 新增公鑰`
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Rebuild_hexo_when_reinstall_the_system/4.png)

## 安裝 Hexo

git bash 上 輸入 `npm install hexo-cli -g`

## 刪掉原 blog 文件夾部分文件

打開你原有的 blog 文件夾，只需保留\_config.yml，theme/，source/，scaffolds/，package.json，.gitignore 這些項目，刪除其他的文件。

## 安裝依賴文件

git bash 上 輸入 `npm install`

## 安裝部署插件

git bash 上 輸入 `npm install hexo-deployer-git --save`

最後 運行 hexo clean && hexo g && hexo d 看看是否成功。

> 本文章參考 https://helloqingfeng.github.io/2017/02/25/hexo-rebuilding/

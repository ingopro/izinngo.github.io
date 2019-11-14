---
title: 好用的新浪圖床工具推薦 - Weibo-Picture-Store
tags:
  - 工具
  - 圖床
  - chrome插件
categories: 工具
keywords: '新浪,圖床,新浪圖床,chrome,chrome插件,插件,上傳工具'
description: 好用的新浪圖床工具推薦 - Weibo-Picture-Store
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/Weibo-Picture-Store-cover.jpg
abbrlink: d786a301
date: 2019-04-14 17:02:15
top_img:
---

{% note danger %}
2019年5月28號更新
微博圖床已經開始現在外鏈了，導致在網站上使用微博圖床的圖片無法顯示，如果使用微博作爲圖床的，應考慮轉向其它的圖床。
{% endnote %}

對於運營靜態網站的人來説，圖片存儲在哪裏是一個值得深思的問題。
要考慮到連接速度和存儲持久問題。
像七牛、騰訊雲這些服務商，想要使用存儲服務，就需要付費使用。
就算有提供免費的存儲，但奈何存儲空間大小限制，加上要實名認證，就足以將人拒之門外。
只能考慮一些即免費又沒有空間限制的服務商。
國外的一些圖片上傳網站考慮到在中國大陸的連接速度和有可能被和諧的問題，暫時不考慮。
像sm.ms這些圖床，因爲怕隨時會關掉而導致所有鏈接失效，同時上傳後又沒有備份，所以也在排除之外。
偶然在Github上看到這個新浪圖床上傳工具，有上傳存儲記錄。同時，新浪作爲一個用戶量很大的網站，也不用擔心會被關閉的問題。

## 簡介

這個圖床上傳工具叫做 Weibo-Picture-Store,由[Semibold](https://github.com/Semibold)開發。是一款上傳圖片到微博並生成外鏈的 Chrome 瀏覽器擴展。
> chrome webstore 下載地址： https://chrome.google.com/webstore/detail/微博图床/pinjkilghdfhnkibhcangnpmcpdpmehk
> Github: https://github.com/Semibold/Weibo-Picture-Store

## 功能

- 支持點選、拖拽、粘貼以及頁面右鍵菜單上傳圖片到微博並同步到微相冊
- 支持拖拽上傳文件夾中的圖片文件
- 支持 JPEG、PNG、GIF 三種圖片格式
- 支持 SVG、BMP、WebP、ico 有損轉換為 PNG
- 支持把 HTML5 視頻的當前幀上傳為 JPG 圖像
- 支持查看上傳記錄，簡單的瀏覽及刪除操作
- 支持生成 URL、HTML、UBB、Markdown 四種格式
- 支持單條、多條模式的複製操作
- 支持選擇協議（http、https 和相對協議）
- 支持三種固定裁剪尺寸和用户自定義尺寸
- 支持使用微博賬號和密碼自動登錄
  
## 界面介紹

### 主界面

![主界面](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Weibo-Picture-Store/Main_interface.png)

1. 地址協議選擇
2. 圖片裁剪選擇
3. 在單條和多條複製模式之間切換的按鈕
4. 上傳記錄按鈕
5. 選擇上傳圖片的按鈕
6. 複製當前類型的地址，批量模式下會複製此類型的所有地址
7. 粘貼區域及拖拽區域，彈窗任何區域都可以使用（這裏可以批量粘貼圖片鏈接）
8. 隱藏菜單，用於放置反饋及其他信息（圖中是菜單展開狀態）
9. 在 GitHub 上提交建議或者 BUG
10. 通過電子郵件反饋問題（如果不方便使用 GitHub）
11. 捐贈支持一下
12. 查看更新日誌

### 上傳記錄界面

![上傳記錄界面](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Weibo-Picture-Store/Upload_record_interface.png)

1. 從微相冊中移除這張圖片
2. 在圖片上右擊可以複製圖片地址
3. 批量刪除選中的文件（按住 Ctrl 鍵可以多選）
4. 圖片最近的修改時間
5. 切換相冊（不可用狀態）
6. 切換相冊（可用狀態）

## 上傳方式

支持單張上傳和多張上傳

### 點擊上傳
![上傳方式](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Weibo-Picture-Store/Upload_method.jpg)

### 拖拽上傳
![拖拽上傳](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Weibo-Picture-Store/Drag_and_drop_file_upload.gif)

### 瀏覽器右鍵上傳
![瀏覽器右鍵上傳](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Weibo-Picture-Store/Browser_right_click_upload.jpg)

## 存儲位置

因為上傳的時候會讀取cookies,所以你要提前登錄新浪微博。當然你也可以在擴展中填寫微博賬號和密碼(不推薦)。

![設置微博賬號和密碼](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Weibo-Picture-Store/Set_Weibo_account_and_password.jpg)

上傳後的圖片會存儲在新浪微博-我的相冊裏

![存儲位置](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Weibo-Picture-Store/storage_location.jpg)

## 其他資訊

- 圖片上傳到哪兒了？
  上傳到用户的微博上了

- 在擴展中填寫微博賬號和密碼，這樣做是否安全？
  你填寫的賬號和密碼存在本地，不會上傳到任何服務器上

- 我的常用微博賬號是A，我可以在擴展中填寫另一個賬號B嗎？
  可以但不推薦，因為一個瀏覽器同時只能有一個微博的登錄狀態，在使用B時，A可能會被強制登出。若有同時登錄兩個賬户的需求，請使用 Chrome 的多用户模式來避免上述這種情況

- 可以上傳的最大圖片大小是多少？
  目前是 20MB

- 如何設置微博圖片水印？
  請參考官方教程設置微博圖片水印

- 如何管理已上傳的圖片？
  上傳記錄或者微相冊均可以管理

- 如何刪除已上傳的圖片？
  目前無法刪除，微相冊中的刪除是針對相冊的操作，對圖片本身沒有影響

- 粘貼上傳沒有效果？
  粘貼上傳只支持複製圖片文件，在資源文件管理器中的複製文件並粘貼是沒有效果的

- 上傳的是 PNG 圖片，返回的卻是 JPG 後綴的地址？
  微博不支持 PNG 後綴，後綴對於瀏覽器判斷圖片的格式是沒有影響的

- 如何使用自定義裁剪？
  自定義裁剪的格式需要微博支持，否則生成的地址是不能訪問的

- 裁剪操作對圖片的影響？
  裁剪適用於 JPEG 格式的圖片。PNG 圖片裁剪後會丟失透明通道，GIF 則會變成靜態圖片

- 微相冊同步圖片的最大數量是多少？
  1000 張。如果達到這個數量後繼續使用，會創建新的相冊，如果相冊也滿了，則不再同步圖片

- 微相冊數量已達到上限 100 個，不能同步圖片了怎麼辦？
  前往微相冊清理陳舊的相冊即可

- 為什麼通過複製粘貼的方式上傳 GIF 會變成靜態圖片？
  在瀏覽器或操作系統中複製 GIF 時，只有其中一幀被複制到了剪切板，因此上傳後會變成靜態圖片

## 相關文章
  Weibo-Picture-Store：https://github.com/Semibold/Weibo-Picture-Store

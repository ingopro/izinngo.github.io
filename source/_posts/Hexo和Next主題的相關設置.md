---
title: Hexo和Next主題的相關設置（持續更新）
tags:
  - Hexo
  - next
  - 主題
  - 教程
categories: 
  - 教程
  - Hexo
keywords: Hexo
abbrlink: 31391d01
date: 2018-06-09 22:00:56
description: Hexo和Next主題的相關設置
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/Related_settings_for_Hexo_and_Next_theme.png
---

# 字數統計和閲讀時長(網站底部/文章内)

效果如圖

文章内

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Related_settings_for_Hexo_and_Next_theme/post-wordcount.png)

網頁頂部

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Related_settings_for_Hexo_and_Next_theme/page-wordcount.png)

## 安裝插件

```
npm install hexo-symbols-count-time --save
```

## 修改 `站點配置文件`

```yaml
symbols_count_time:
 #文章内是否顯示
  symbols: true
  time: true
 # 網頁底部是否顯示
  total_symbols: true
  total_time: true
```

## 修改 `主題配置文件`

```YAML
# Post wordcount display settings
# Dependencies: https://github.com/theme-next/hexo-symbols-count-time
symbols_count_time:
  separated_meta: true
  #文章中的顯示是否顯示文字（本文字數|閱讀時長）
  item_text_post: true
  #網頁底部的顯示是否顯示文字（站點總字數|站點閱讀時長）
  item_text_total: false
  # Average Word Length (chars count in word)
  awl: 4
  # Words Per Minute
  wpm: 275
```

# 文章底部添加版權信息

效果如圖

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Related_settings_for_Hexo_and_Next_theme/copyright.png)

修改 `主題配置文件`

```yaml
# 把 enable: 設爲true
post_copyright:
  enable: true
  license: <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" rel="external nofollow" target="_blank">CC BY-NC-SA 4.0</a>
```

# 網頁底部信息隱藏

只需要把 `主題配置文件`的相關資料改爲**false**就行

```yaml
footer:
  since: 2018
  # Icon between year and copyright info.
  icon:
    name: user
    animated: false
    color: "#808080"
  powered:
    # Hexo link (Powered by Hexo).
    enable: true
    # Version info of Hexo after Hexo link (vX.X.X).
    version: true
theme:
    # Theme & scheme info link (Theme - NexT.scheme).
    enable: false
    # Version info of NexT after scheme info (vX.X.X).
    version: false
```

# 給文章增加陰影效果

效果如圖  

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Related_settings_for_Hexo_and_Next_theme/post-shadow.png)

修改`custom.styl` 文件,具體為`themes/next/source/css/_custom/custom.styl`

```
// 為文章添加陰影效果
.post {
   margin-top: 60px;
   margin-bottom: 60px;
   padding: 25px;
   -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
   -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
}
```

# 為博客添加寵物

效果如圖

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Related_settings_for_Hexo_and_Next_theme/live2d.png)

## 安裝依賴包

在站點根目錄,打開Git Bash,安裝hexo-helper-live2d

```
npm install --save hexo-helper-live2d
```

## 在`站點配置文件`或者`主題配置文件`添加以下内容

```yml
live2d:
  enable: true
  scriptFrom: local
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  model:
    use: live2d-widget-model-wanko
  display:
    position: right
    width: 150
    height: 300
  mobile:
    show: true
```

## 安裝需要的寵物文件

```
npm install {packagename}
```

如效果圖所示的寵物名為haruto, 則為 `npm install live2d-widget-model-haruto`,其他寵物包點擊[live2d-widget-models](https://github.com/xiazeyu/live2d-widget-models)。如果需要修改寵物的位置,可以在`display`下添加

```yml
# 水平位置
hOffset: 0
# 垂直位置
vOffset: -20
```

詳細内容可參考[**hexo-helper-live2d**](https://github.com/EYHN/hexo-helper-live2d)

# 添加網站已運行時間

效果如圖

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Related_settings_for_Hexo_and_Next_theme/counttime.png)

在`themes/layout/_parrials/footer.swig` 中添加

```swig
<span id="sitetime"></span>
<script language=javascript>
function siteTime(){
window.setTimeout("siteTime()", 1000);
var seconds = 1000;
var minutes = seconds * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;
var today = new Date();
var todayYear = today.getFullYear();
var todayMonth = today.getMonth()+1;
var todayDate = today.getDate();
var todayHour = today.getHours();
var todayMinute = today.getMinutes();
var todaySecond = today.getSeconds();
var t1 = Date.UTC(2018,06,07,12,00,00); // 設置建立網站的時間
var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
var diff = t2-t1;
var diffYears = Math.floor(diff/years);
var diffDays = Math.floor((diff/days)-diffYears*365);
var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
document.getElementById("sitetime").innerHTML=" 已運行"+diffYears+" 年 "diffDays+" 天 "+diffHours+" 小時 "+diffMinutes+" 分鐘 "+diffSeconds+" 秒";
}
siteTime();
</script>
```

把代碼放在你想要的位置,插入位置不同,效果顯示的位置也會不同。若想要顯示為簡體或者英文,只要把對應的文字修改就行。

# 添加標簽云

效果如圖

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Related_settings_for_Hexo_and_Next_theme/tag-cloud.png)

在`next/layout/page.swig`中,找到

```s
<div class="tag-cloud-tags">
              {{ tagcloud({min_font: 12, max_font: 30, amount: 300, color: true, start_color: '#ccc', end_color: '#111'}) }}
            </div>

```

如果你想標籤頁先顯示標簽云,再顯示基本的標籤頁,可以在這段代碼之前添加

```s
{% if site.tags.length > 1 %}
<script type="text/javascript" charset="utf-8" src="/js/tagcloud.js"></script>
<script type="text/javascript" charset="utf-8" src="/js/tagcanvas.js"></script>
<div class="widget-wrap">
    <h3 class="widget-title">Tag Cloud</h3>
    <div id="myCanvasContainer" class="widget tagcloud">
        <canvas width="250" height="250" id="resCanvas" style="width=100%">
            {{ list_tags() }}
        </canvas>
    </div>
</div>
{% endif %}
```

如果是先顯示預設的標籤頁,再顯示標簽云,則把上面代碼添加到後面。

如果你只想顯示標簽云就行,可以把

```s
<div class="tag-cloud-tags">
              {{ tagcloud({min_font: 12, max_font: 30, amount: 300, color: true, start_color: '#ccc', end_color: '#111'}) }}
            </div>
```

刪掉就行。

# 修改界面内容顯示區域寬度

Next主題默認的設置,兩邊留白的區域很大。當然我們可以修改設置
在`themes\next\source\css\_custom`的`custom.styl`添加下面參數  

```s
// 屏幕寬度小於1600px
$content-desktop = 700px

// 屏幕寬度大於或等於 1600px
$content-desktop-large = 900px
```

修改對應的參數就行,此方法不適用於Pisces主題。

# 添加文章時,自動打開markdown編輯器

找到博客根目錄,打開scripts文件夾(沒有的話,自己創建一個)。  

創建一個JavaScript文件,可任意命名。  

打開所創建的JavaScript文件,輸入以下内容

```js
var spawn = require('child_process').exec;

//根據自己安裝的hexo版本選擇
// Hexo 2.x 複製這段
hexo.on('new', function(path){
spawn('start "" "markdown編輯器絕對路徑" ' + path);
});

// Hexo 3 複製這段
hexo.on('new', function(data){
  spawn('start "" "markdown編輯器絕對路徑" ' + data.path);
});
```

注意: markdown編輯器絕對路徑 格式為(例如打開Typora)

```
C:\\Program Files\\Typora\\Typora.exe
```

# 添加在綫聯係功能

一個在綫的聯係功能:[DaoVoice](http://www.daovoice.io/)

## 注冊DaoVoice , 獲取app_id

點擊 [DaoVoice](http://www.daovoice.io/) ,並點擊注冊。可以填入邀請碼：`98657237`  

得到 app_id

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Related_settings_for_Hexo_and_Next_theme/daovoice_id.png)

## 修改head.swig  

修改next\layout\_partials\head\head.swig 文件, 添加以下内容  

```swig
{% if theme.daovoice %}
  <script>
  (function(i,s,o,g,r,a,m){i["DaoVoiceObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;a.charset="utf-8";m.parentNode.insertBefore(a,m)})(window,document,"script",('https:' == document.location.protocol ? 'https:' : 'http:') + "//widget.daovoice.io/widget/0f81ff2f.js","daovoice")
  daovoice('init', {
      app_id: "{{theme.daovoice_app_id}}"
    });
  daovoice('update');
  </script>
{% endif %}
```

## 修改_config.yml  

在`主題配置文件`中,添加以下内容

```bash
  # daovoice 配置
  daovoice: true
  daovoice_app_id:   # 填入剛才的app_id
```  

## 部署到網站  

hexo clean && hexo g && hexo d 就能看到效果了,網頁右下角多了個 圖標

具體修改圖表的樣式,位置。可以在daovoice網頁中 應用設置-聊天設置 中配置  

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Related_settings_for_Hexo_and_Next_theme/daovoice2.png)
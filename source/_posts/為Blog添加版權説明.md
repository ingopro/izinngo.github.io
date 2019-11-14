---
title: 為Blog添加版權説明
tags: 
  - Hexo
  - 主題
categories: 
  - 教程
  - Hexo
keywords: 'Hexo,Hexo theme'
description: 為Blog添加版權説明
abbrlink: d87ce901
date: 2018-07-10 22:48:50
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/Add_a_copyright_notice_to_the_blog.png
---
  
最近更換了新的Hexo主題[hexo-theme-hiker](https://github.com/iTimeTraveler/hexo-theme-hiker),覺得挺好看的。文章底部沒有版權説明,自己動手加上。

## 新建文件 copyright.ejs

在`themes\hiker\layout\_partial`新建文件`copyright.ejs`

打開`copyright.ejs`,添加一下內容。

```ejs
<div>
        <ul class="post-copyright">
          <li class="post-copyright-author">
          <strong><%= __('copyright.author') %> </strong><%= config.author%></a>
          </li>
          <li class="post-copyright-link">
          <strong><%= __('copyright.link') %> </strong>
          <a href="<%- config.root %><%- post.path %>" target="_blank" title="<%= post.title %>"><%- config.url %>/<%- post.path %></a>
          </li>
          <li class="post-copyright-license">
            <strong><%= __('copyright.license_title') %>  </strong>
            <%= __('copyright.left_license_content') %><a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" title="Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)">CC BY-NC-ND 4.0</a>
            <%= __('copyright.right_license_content') %>
          </li>
        </ul>
      <div>
```

## 修改article.ejs文件

打開`themes\hiker\layout\_partial\article.ejs`添加一下內容,位置介於donate和comment之間

```ejs
<% if (!index && theme.donate.enable){ %>
        <%- partial('donate') %>
      <% } %>
       <!-- 要添加的內容 -->
      <% if (!index && theme.copyright.enable){ %>
      <%- partial('copyright') %>
      <% } %>
      <!---->
      <% if (!index && post.comments && (theme.gentie_productKey || theme.duoshuo_shortname || theme.disqus_shortname || theme.uyan_uid || theme.wumii || theme.livere_shortname)){ %>
        <%- partial('comment') %>
      <% } %>
```

## 修改 article.styl

修改`themes\hiker\source\css\_partial\article.styl`,在末端添加以下內容。

```styl
.post-copyright {
    margin: 2em 0 0;
    padding: 0.5em 1em;
    border-left: 3px solid #FF1700;
    background-color: #F9F9F9;
    list-style: none;
}

.post-copyright li {
    line-height: 30px;
}
```

## 修改語言文件

在themes\hiker\languages中,找到你應用的語言文件,例如zh-TW,打開並添加以下內容。

```yml
copyright:
    author: "作者: "
    link: "文章連結: "
    license_title: "版權聲明: "
    left_license_content: "本網誌所有文章除特別聲明外,均採用 "
    right_license_content: "許可協議。轉載請註明出處!"
```

## 修改主題設置文件

打開`themes\hiker\_config.yml`,添加以下內容。

```yml
#版權信息
copyright:
    enable: true
```

最後當然是 hexo clean && hexo g && hexo d 就可以看到結果了

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Add_a_copyright_notice_to_the_blog/COPYRIGHT.png)

## 資料參考

[為Hexo icarus添加版權説明](http://okbtm.com/archives/ead2b478.html)

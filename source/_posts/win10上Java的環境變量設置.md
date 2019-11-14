---
title: Windows上Java的環境變量配置
tags:
  - Windows
  - Java
  - 教程
categories: 
  - 教程
  - Windows
keywords: 'win10,Windows,Java,環境變量'
abbrlink: aa98736e
date: 2018-10-14 18:17:13
description:
top_img:
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/setting_up_enviromental_variables_in_windows10-cover.png
---

對於開發者來說，Java是電腦上必備安裝的軟件。安裝Java不單單只是安裝jdk就可以，還要配置Java的環境變量。這篇文章主要是介紹如何配置Java的環境變量。

> 電腦系統： Windows 10 1809
> Java版本： 1.8.0_181

## 安装Java

第一步当然是安装Java文件。Java現在已經發現到Java11了，不一定要安裝最新的版本，可以根據自己的需要安裝對應的版本。
本文安裝的 Java SE 8u181
下載Java可以到oracle的官網：https://www.oracle.com/technetwork/java/javase/downloads/index.html

## 新建Java_Home變量

右鍵This PC(即此電腦)，選擇Properties(屬性)選項。

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/setting_up_enviromental_variables_in_windows10/1.png)

點擊左邊欄的Advanced sysyem settings(高級系統設置)，點擊下面的Environment Variables(環境變量)

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/setting_up_enviromental_variables_in_windows10/2.png)

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/setting_up_enviromental_variables_in_windows10/3.png)

點擊System variable(系統變量)下的New(新建)。

> Variable name(變量名) 填爲 Java_Home
> Variable value(變量值) 爲Java的安裝路徑。例如我的是 C:\Program Files\Java\jdk1.8.0_181 
> 然後點擊OK(確定)

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/setting_up_enviromental_variables_in_windows10/4.png)

## 編輯 Path變量

在System variable(系統變量)下找到``Path``並雙擊。
在打開的窗口中點擊右邊的編輯文本。
把 ``%Java_Home%\bin;%Java_Home%\jre\bin;`` 複製到 Variable value(變量值) 的開頭並保存。

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/setting_up_enviromental_variables_in_windows10/5.png)

## 新建 CLASSPATH

點擊System variable(系統變量)下的New(新建)。

> Variable name(變量名) 填爲 CLASSPATH
> Variable value(變量值) 填爲  .;%Java_Home%\bin;%Java_Home%\lib\dt.jar;%Java_Home%\lib\tools.jar
> 然後點擊OK(確定)

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/setting_up_enviromental_variables_in_windows10/6.png)

## 測試

上面已經把相關的環境變量給配置好了，接下來測試下是否配置正確。
打開CMD或者PowerShell

輸入``Java``

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/setting_up_enviromental_variables_in_windows10/7.png)

接着輸入 ``java -version``

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/setting_up_enviromental_variables_in_windows10/8.png)

接着輸入 ``javac``

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/setting_up_enviromental_variables_in_windows10/9.png)

如果你的結果跟上面圖片的結果一樣或者相似的話，恭喜你，Java的環境變量配置已經成功了。
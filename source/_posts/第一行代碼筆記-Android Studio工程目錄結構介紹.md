---
title: 第一行代碼筆記-Android Studio工程目錄結構介紹
tags:
  - Android
  - 第一行代碼
categories:
  - Android
  - 第一行代碼
keywords: 'AndroidStudio工程目錄, Android, 安卓'
description: bulid.gradle 解析
abbrlink: effd323a
date: 2018-06-08 13:19:32
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/Android_Studio_Projects_Overview.png
---

## Project模式下的項目結構  

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Android_Studio_Projects_Overview/Andoidstudioproject1.png)

### .gradle 和 .idea  

主要放置的都是Android studio自動生成的一些文件。

### app  

項目的代碼資源等內容都在這個目錄

### gradle  

包含gradle wrapper的配置文件

### .gitignore  

用來將指定的目錄或文件排除在版本控制之外的

### build.gradle

這是項目全局的gradle構建腳本。

### gradle.properties

這個文件是全局的gradle的配置文件,在這裏配置的屬性將會影響到項目中所有的gradle編譯腳本。

### gradlew 和 gradlew.bat

這兩個文件是用來在令行介面中執行gradle 命令的,其中gradlew 是在linux和mac 系統中使用,而gradlew.bat是在windows系統中使用。  

### local.properties

用來指定本機中的Android sdk路徑,通常內容都是自動生成,我們並不需要修改。

### settings.gradle

用於指定項目中所有引入的模塊。通常情況下模塊的引入都是自動完成的,需要我們手動去修改的這個文件的場景可能比較少。

### .iml

.iml文件是所有IntelliJ IDEA 項目都會自動生成的一個文件,用於標識這是一個IntelliJ IDEA項目,我們不需要修改這個文件中的任何內容。

## App目錄下的結構

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Android_Studio_Projects_Overview/Andoidstudioproject2.png)

### build

主要是包含了一些在編譯中自動生成的文件。

### libs

如果你的項目中使用了第三方jar包,就需要把這些jar包都放在libs目錄下,放在這個目錄下的jar包都會被自動添加到構建路徑里去。

### androidTest

用來編寫Android Test測試用例的,可以對項目進行一些自動化測試。

### java

放置java代码的地方

### res

為 resource 的縮寫,專案所需的 UI 相關檔案,也就是非程式的資源,如 layout、圖像與文字。

### AndroidManifest.xml

整個Android項目的配置文件,在程序中自定義的所有四大組建都需要在這個文件裏註冊,另外還可以在這個文件中給應用程序添加權限聲明。

### test

用來編寫Unit Test測試用例的,是對項目進行自動化測試的另一種方式。

### .gitignore

用來將指定的目錄或文件排除在版本控制之外的.

### build.gradle

這首app模塊的gradle構建腳本,這個文件中會指定很多項目構建相關的配置。

### proguard-rules.pro

這個文件用於指定項目代碼的混淆規則,當代碼開發完成後打開安裝包文件,如果不希望代碼被別人破解,通常會將代碼進行混淆,從而讓破解者難以閱讀。

---
title: 第一行代碼筆記-bulid.gradle 解析
tags: 
  - grade
  - Android
  - 第一行代碼
categories:
  - Android
  - 第一行代碼
keywords: 'bulid.gradle, Android, 安卓'
description: bulid.gradle 解析
abbrlink: a4ecdf66
date: 2018-06-08 21:28:01
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/build_gradle_overview.png
---

## 外層的bulid.gradle文件  

```groovy
buildscript {
    repositories {
        jcenter()   // 一個代碼托管倉庫
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:2.3.0' // 聲明一個gradle插件
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
allprojects {
    repositories {
        jcenter()
    }
}
task clean(type: Delete) {
    delete rootProject.buildDir
}
```

兩處的**repositories**的閉包中都聲明了**jcenter()** 這行配置。
jcenter是一個代碼托管倉庫,很多Androdi開源項目都會選擇將代碼托管到jcenter上,聲明了這個配置之後,可以在項目中引用任何jcenter上的開源項目。  

**dependencies閉包**使用classpath聲明一個gradle插件。gradle并不是專門為構建android項目而開發,使用它時,需要聲明com.android.tools.build:gradle+版本號

## app目錄内的build.gradle文件

```groovy

apply plugin: 'com.android.application'
android {
    compileSdkVersion 25    //指定項目的編譯版本
    buildToolsVersion "25.0.2" //指定項目構建工具的版本
    defaultConfig {
        applicationId "com.example.hwy01.myfirstapp"  //指定項目的包名
        minSdkVersion 15  
        targetSdkVersion 25
        versionCode 1 //指定項目的版本號
        versionName "1.0" //指定項目的版本名
        testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
    }
    buildTypes {    //用於指定生成安裝文件的相關配置
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
dependencies
{   //指定當前項目所有的依賴關係
    compile fileTree(dir: 'libs', include: ['*.jar']) //本地依賴聲明,表示將libs目錄下所有的.jar後綴的文件都添加到項目的構建路徑中
    androidTestCompile('com.android.support.test.espresso:espresso-core:2.2.2', {
        exclude group: 'com.android.support', module: 'support-annotations'
    })
    compile 'com.android.support:appcompat-v7:25.2.0' //標準的遠程依賴庫格式
    compile 'com.android.support.constraint:constraint-layout:1.0.2'
    testCompile 'junit:junit:4.12' //用於聲明測試用例庫的
}
```

第一行是應用了一個插件,一般有2個值可選：  

- **com.android.application**表示這是一個應用程序模塊
- **com.android.library** 表示這是一個庫模塊。

應用程序模塊和庫模塊的最大區別是,一個可以直接運行,一個衹能作爲代碼庫依附于別的應用程序模塊來運行。  

**buildTypes**閉包用於指定生成安裝文件的相關配置。通常衹有2個子閉包：debug和release

- debug閉包用於指定生成測試版安裝文件的配置
- release閉包用於指定生成正式版安裝文件的配置
debug閉包可以忽略不寫。

### release閉包詳解  

- minifyEnabled 用於指定是否對對項目的代碼進行混淆。 true表示混淆,false表示不混淆。
- proguardFiles用於指定混淆時使用的規則文件。

`proguard-android.txt` 是在Android SDK目錄下的,裏面是所有項目通用的混淆規則。  
`proguard-rules.pro` 是在當前項目根目錄下的,裏面可以編寫當前項目特有的混淆規則  

通過Android Studio直接運行項目生成的都是測試版安裝文件

`dependencies閉包` 指定當前項目所有的依賴關係  

通常Android Studio項目一共有3種依賴方式：  

- **本地依賴**  

可以對本地的jar包或目錄添加依賴關係  

- **庫依賴**  
  
可以對項目中的庫模塊添加依賴關係  

- **遠程依賴**  
  
可以對jcenter庫上的開源項目添加依賴關係  

`compile 'com.android.support:appcompat-v7:25.2.0'` 標準的遠程依賴庫格式  
`com.android.support`是域名部分,用於和其他公司的庫做區分。  
`appcompat-v7`是組名稱,用於和同一個公司中不同的庫做區分。
`25.2.0`是版本號,用於和同一個庫不同的版本做區分。

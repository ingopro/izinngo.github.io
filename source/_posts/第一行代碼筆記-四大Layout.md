---
title: 第一行代碼筆記-四大Layout
tags:
  - 第一行代碼
  - Android
  - Layout
categories:
  - Android
  - 第一行代碼

keywords: '安卓,Android,layout,布局'
abbrlink: 125d29fb
date: 2018-06-26 00:03:30
description:
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/android-cover.png
---

## LinerLayout 線性布局

LinerLayout, 中文名為線性布局。這個布局會將它所包含的控件在線性方向上依次排列。  

我們可以通過`android:orientation`屬性來指定排列方向。  

`vertical`為垂直方向,`horizontal`為水平方向

```XML
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="horizontal"
    >

    <Button
       android:layout_width="wrap_content"
       android:layout_height="wrap_content"
       android:text="button 1"
        />
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="button 2"
        />
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="button 3"
        />
```

運行效果：  

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Four_Layout/LINERLAYOUT2.png)

注意：如果是`vertical`垂直方向,則内部的控件不能將`android:layout_height`指定為`match_parent`,因爲這樣的話,單獨的一個控件就已經把整個垂直方向佔據了,接下來的控件就沒有可以放置的位置了,而導致其它的控件無法顯示。同理,如果是`horizontal`水平方向,則内部的控件不能將`android:layout_width`指定為`match_parent`  

`android:layout_gravity`用於指定控件在布局中的對齊方式。  

當`vertical`垂直方向,只有水平方向上的對齊方式才會生效。  

當`horizontal`水平方向,只有垂直方向上的對齊方式才會生效。  

```XML
<Button
       android:layout_width="wrap_content"
       android:layout_height="wrap_content"
       android:text="button 1"
       android:layout_gravity="top"/>
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="button 2"
        android:layout_gravity="center_vertical"/>
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="button 3"
        android:layout_gravity="bottom"/>
```

運行效果：

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Four_Layout/LINERLAYOUT1.png)

android:layout_weight 可以用比例的方式來指定控件的大小,其在手機屏幕的適配上起到很重要的作用。

```XML
   <EditText
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_weight="3"
        android:hint="Type something"
        />

    <Button
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_weight="1"
        android:text="send"/>
```

運行效果：

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Four_Layout/LINERLAYOUT3.png)

## RelativeLayout 相對布局

RelativeLayout又稱爲相對布局,通過相對定位的方式讓控件出現在布局的任何地方。

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Four_Layout/relativelayout1.png)  

父容器定位屬性示意圖

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Four_Layout/relativelayout2.png)

圖片來自[runoob](http://www.runoob.com/w3cnote/android-tutorial-relativelayout.html)  

```XML
<RelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button1"
        android:text="button1"
        android:layout_alignParentLeft="true"
        android:layout_alignParentTop="true"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button2"
        android:text="button2"
        android:layout_alignParentRight="true"
        android:layout_alignParentTop="true"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button3"
        android:text="button3"
        android:layout_centerInParent="true"
        />

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button4"
        android:text="button4"
        android:layout_alignParentLeft="true"
        android:layout_alignParentBottom="true"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button5"
        android:text="button5"
        android:layout_alignParentRight="true"
        android:layout_alignParentBottom="true"/>

</RelativeLayout>
```

運行效果：

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Four_Layout/relativelayout3.png)

以上是相對于父布局定位的。Button1和父布局的左上角對齊,Button2和父布局的右上角對齊,Button3居中顯示,Button4和父布局的左下角對齊,Button5和父布局的左下角對齊。

```xml
 <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button3"
        android:text="button3"
        android:layout_centerInParent="true"
        />
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button1"
        android:text="button1"
        android:layout_above="@id/button3"
        android:layout_toLeftOf="@id/button3"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button2"
        android:text="button2"
        android:layout_above="@id/button3"
        android:layout_toRightOf="@id/button3"/>
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button4"
        android:text="button4"
        android:layout_below="@id/button3"
        android:layout_toLeftOf="@id/button3"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button5"
        android:text="button5"
        android:layout_below="@id/button3"
        android:layout_toRightOf="@id/button3"/>

```

運行效果：

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Four_Layout/relativelayout4.png)

以上是每個控件都是以Button3 控件進行定位的。  

+ `android:layout_above`讓一個控件位於另一個控件上方,需要指定相對控件id的引用。上方為`android:layout_above="@id/button3"`在Button3的上方。
+ `android:layout_below`讓一個控件位於另一個控件下方。
+ `android:layout_toLeftOf`讓一個控件位於另一個控件左側。
+ `android:layout_toRightOf`讓一個控件位於另一個控件右側  

## FrameLayout 幀布局

FrameLayout又稱爲幀布局,所有的控件都會默認擺放在布局的左上角。

```xml
<FrameLayout
xmlns:android="http://schemas.android.com/apk/res/android"
android:layout_width="match_parent"
android:layout_height="match_parent">

<TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="This is TextView"/>
<ImageView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:id="@+id/imageview"
    android:src="@mipmap/ic_launcher"/>
<Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="button"/>

</FrameLayout>
```

運行效果：

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Four_Layout/framelayout1.png)

所有的控件都位於布局的左上角,而且按照順序曡在一起。

我們可以通過`android:layout_gravity`去指定控件在布局中的對齊方式。  

## Percent-support-lib 百分比布局

只有`LinearLayout`支持使用layout_weight屬性來實現按比例指定控件大小的功能,其他的布局并不支持這屬性。因此,Android引入了一種全新的布局方式來解決這個問題-----百分比布局。可以直接指定控件在布局中所占的百分比。  

百分比布局為`FrameLayout`和`RelativeLayout`進行了功能擴展,提供了`PercentFrameLayout`和`PercentRelativeLayout`兩個全新的布局。

在`build.gradle`添加百分比布局的依賴。  

打開`app/build.gradle`,在dependencies閉包添加以下内容：

`implementation 'com.android.support:percent:25.3.0'`

```gradle
dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    implementation 'com.android.support:appcompat-v7:27.0.0'
    implementation 'com.android.support:percent:25.3.0'
    implementation 'com.android.support.constraint:constraint-layout:1.1.2'
    testImplementation 'junit:junit:4.12'
    androidTestImplementation 'com.android.support.test:runner:1.0.2'
    androidTestImplementation 'com.android.support.test.espresso:espresso-core:3.0.2'
}

```  

### PercentRelativeLayout

修改xml文件

```XML
<android.support.percent.PercentRelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
    <View
        android:id="@+id/top_left"
        android:layout_width="0dp"
        android:layout_height="0dp"
        android:layout_alignParentTop="true"
        android:background="#ff44aacc"
        app:layout_heightPercent="20%"
        app:layout_widthPercent="70%" />

    <View
        android:id="@+id/top_right"
        android:layout_width="0dp"
        android:layout_height="0dp"
        android:layout_alignParentTop="true"
        android:layout_toRightOf="@+id/top_left"
        android:background="#ffe40000"
        app:layout_heightPercent="20%"
        app:layout_widthPercent="30%" />


    <View
        android:id="@+id/bottom"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_below="@+id/top_left"
        android:background="#ff00ff22"
        app:layout_heightPercent="80%" />
</android.support.percent.PercentRelativeLayout>
```

運行效果：

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Four_Layout/percentrelativelayout.png)

可以看到通過`app:layout_heightPercent`和`app:layout_widthPercent`兩個參數進行百分比設定。

### PercentFrameLayout

```xml
<android.support.percent.PercentFrameLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <Button
        android:id="@+id/button1"
        android:text="Button1"
        android:layout_gravity="left|top"
        app:layout_widthPercent="50%"
        app:layout_heightPercent="50%"
        />

    <Button
        android:id="@+id/button2"
        android:layout_gravity="right|top"
        android:text="Button2"
        app:layout_heightPercent="50%"
        app:layout_widthPercent="50%" />
    <Button
        android:id="@+id/button3"
        android:text="Button3"
        android:layout_gravity="left|bottom"
        app:layout_widthPercent="50%"
        app:layout_heightPercent="50%"
        />

    <Button
        android:id="@+id/button4"
        android:text="Button4"
        android:layout_gravity="right|bottom"
        app:layout_widthPercent="50%"
        app:layout_heightPercent="50%"
        />

</android.support.percent.PercentFrameLayout>
```

運行效果：

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Four_Layout/percentframelayout.png)

其它的屬性還有  

* app:layout_heightPercent
* app:layout_widthPercent
* app:layout_marginBottomPercent
* app:layout_marginEndPercent
* app:layout_marginLeftPercent
* app:layout_marginPercent
* app:layout_marginRightPercent
* app:layout_marginStartPercent
* app:layout_marginTopPercent

可以參考[android-percent-support-lib-sample](https://github.com/JulienGenoud/android-percent-support-lib-sample)和[Android 百分比布局库(percent-support-lib) 解析与扩展](https://blog.csdn.net/lmj623565791/article/details/46695347)
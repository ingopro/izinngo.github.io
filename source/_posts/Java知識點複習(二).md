---
title: Java知識點複習(二)
tags:
  - Java
  - Android
categories: Java
keywords: 'Java,Android'
description: 對學習java的一些知識筆記
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/Java_review_2.jpg
abbrlink: 46be9372
date: 2019-04-10 20:24:51
top_img:
---

## 面向對象程序設計(OOP)

面向對象的程序由對象組成的，每個對象包含對用户公開的特定功能部分和隱藏的實現部分。
oop將數據擺在第一位，然後考慮操作數據的算法。

### 對象

要使用OOP，要瞭解對象的三個主要特性：

- 對象的行為(behavior) ———— 可以對對象施加哪些操作，或可以對對象施加哪些方法？
- 對象的狀態(state) ———— 當施加那些方法時，對象如何響應？
- 對象標識(identity) ———— 如何辨別具有相同行為與狀態的不同對象？
  
### 類之間的關係

- 依賴("uses-a")
  如果一個類的方法操作另一個類的對象，我們就説一個類依賴另一個類

- 聚合("has-a")
  聚合意味著類A的對象包含類B的對象

- 繼承("is-a")
  類A擴展類B,類A不但包含從類B繼承的方法，還會擁有一些額外的功能

## 使用預定義類

### 對象與對象變量

要想使用對象，就必須首先構造對象，並指定其初始狀態。然後，對對象應用方法。
`構造器(constructor)`用來構造新實例。構造器是一種特殊的方法，用來構造並初始化對象。

構造器的名字應與類名相同。
以Date類為例，Date類的構造器名為Date。構造一個Date對象，需要在構造器前面加上new操作符。
`new Date()`
這個表達式構造一個新對象，這個對象被初始化啊為當前的日期和時間。
為了讓構造的對象能多次使用，將對象存放在一個變量
`Date birthday = new Date()`

下圖顯示了引用新構造的對象變量birthday

![創建一個新對象](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Java_review_2/Java_review_2_Create_a_new_object.jpg)

在對象與對象變量之間存在一個重要的區別。例如
**Date deadline**  //deadline doesn't refer to any object
定義了一個對象變量deadline，它可以引用Date類型的對象。
但是，變量deadline不是一個對象，實際上也沒有引用對象。

必須初始化變量deadline,有兩個選擇。一是用新構造的對象初始化這個變量
`deadline = new Date()`
二是讓這個變量引用一個**已存在**的對象：
`deadline = birthday`
現在兩個變量引用同一個對象

![引用同一個對象的對象變量](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Java_review_2/Java_review_2_references_the_same_object.jpg)

**一個對象變量並沒有實際包含一個對象，而僅僅引用一個對象。**
**在Java中，任何對象變量的值都是對存儲在另外一個地方的一個對象的引用**

`Date deadline = new Date()`
表達式new Date()構造了一個Date類型的對象，並且它的值是對新創建對象的引用。這個引用存儲在變量deadline中。

可以將對象變量設為null,表明這個對象變量目前沒有引用任何對象。
`deadline = null;`
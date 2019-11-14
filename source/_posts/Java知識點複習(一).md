---
title: Java知識點複習(一)
tags:
  - Java
  - Android
categories: Java
keywords: 'Java,Android'
description: 對學習java的一些知識筆記
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/Java_review_1.jpg
abbrlink: 58a40d07
date: 2019-03-29 22:56:03
top_img:
---

學習Java的一些筆記

## 注意事項

1. Java對大小寫很敏感
2. 類名必須以字母開頭，後面可以跟字母和數字,也可以用 _和$ 兩種符號。不能使用Java保留字。（標準類名：以大寫字母開頭，如果類名由多個單詞組成，每個單詞首字母應該要大寫
3. 源代碼文件名必須與公共類的名字相同
4. 為了代碼能夠執行，必須包含一個main方法

## Java中的三種註釋

1. 單行註釋( // )
2. 多行註釋( /*  */)
3. 多行註釋 可以自動生成文檔( /**  */)

## 數據類型

| 類型 |     | 儲存需求 | 取值範圍 |
| ---- | --- | -------- | -------- |
| boolean |          | 1字節 (8 bit)  | true, false                                                               |
| char    |          | 2字節(16 bit)  | 0 ~ 216-1                                                                 |
| byte    | 整型     | 1字節 (8 bit)  | -128 ~ 127                                                                |
| short   | 整型     | 2字節 (16 bit) | -32 768 ~ 32 767 <br>(-215 ~ 215-1)                                       |
| int     | 整型     | 4字節 (32 bit) | -2 147 483 648 ~ 2 147 483 647<br>(-231 ~ 231-1)                          |
| long    | 整型     | 8字節 (64 bit) | -9 223 372 036 854 776 808 ~ 9 223 372 036 854 775 807 <br>(-263 ~ 263-1) |
| float   | 浮點類型 | 4字節 (32 bit) | 大約±3.402 823 47E + 38F(有效位數為6~7位)                                 |
| double  | 浮點類型 | 8字節 (64 bit) | 大約±1.797 693 134 862 315 70E + 308(有效位數為15位)                      |

1. 長整數型有一個後綴L (如4000000000L)
2. 十六進制數值有一個後綴0x (如0xCAFE)
3. 八進制有一個前綴 0 (如010)
4. 二進制有一個前綴 0b (如0b1001)
5. Float類型的數值有一個後綴F (如 3.14F)

## final 關鍵字

final關鍵字表示變量只能被賦值一次，一旦被賦值後，就不能被更改。
例如：

```java
Final double CMCC = 2.54
```

如果希望某個常量可以在一個類中的多個方法中使用，稱這個常量為類常量。可以使用關鍵字static final 設置一個類常量，定義的位置在main方法外部。因此，同一個類的其他方法中也可以使用這個常量。如果一個常量被聲明為public，那麼其他類的方法也可以使用這個常量。

## 運算符

在java中，算術運算符可以用+ - * / 來代表加減乘除。
當參與除(/)運算的兩個操作數為整數時，表示整數除法，答案為整數。否則，表示浮點除法。
求餘數可以用%
例如 10%3等於1，10%3.0等於1.0

注意：整數除以0將會產生一個異常，而浮點數除以0將會得到無窮大或NaN結果。

## i++ 和 ++i 的 區別

1. 如果只是看i++和++i，這兩個是等價的，都等同於i=i+1，都是變量自身加1。
2. 在一般情況下，它們都是跟賦值聯繫在一起。
比如：

```java
int a;
a=i++; //將i的值賦值給a，即a=i；然後再執行i=i+1；
也就是【a=i++;】與【a=i; i=i+1;】等價。
a=++i;//將i+1的值賦給a,即a=i+1;然後再執行i=i+1；
也就是【a=++i;】與【a=i+1;i=i+1;】等價。
```

總結一下

- 前置++是將自身加1的值賦值給新變量，同時自身也加1；
- 後置++是將自身的值賦給新變量，然後才自身加1.

## 關係運算符

**三元操作符**
`Condition? expression1: expression2`
當Condition為true時，計算或返回第一個表達式expression1，如果為false,則計算第二個表達式expression2.
如 x <y ? x: y
返回x和y中較小的那個值。

## 數值類型之間的轉換

整型、實型（常量）、字符型數據可以混合運算。運算中，不同類型的數據先轉化為同一類型，然後進行運算。轉換過程中可能導致溢出或損失精度

```java
低----------------------------------------------------------高
byte, short, char—> int —> long—> float —> double
```

### 自動類型轉換

必須滿足轉換前的數據類型的位數要低於轉換後的數據類型。
自動轉換由低到高的順序轉換

```java
int n = 123456789;
float f = n;//f值為1.234567892E8
```

當使用上面兩個數值進行二元操作時（例如 n+f  , n是整數，f是浮點數），先要將兩個操作數轉換為同一種類型，然後再進行計算。

- 如果兩個操作數中有一個是double類型，另一個操作數就會轉換為double類型；

- 否則，如果其中一個操作數是float類型，另一個操作數將會轉換為float類型；

- 否則，如果其中一個操作數是long類型，另一個操作數將會轉換為long類型。

- 否則，兩個操作數都將被轉換為int類型。

### 強制類型轉換

高的向低的順序轉換

```java
double x = 3.94;
int y = (int) x;
```

x的結果為3，強制類型轉換通過截斷小數部分將浮點值轉為整型。
如果想要四捨五入，得到最接近的整數。可以使用Math.round方法

```java
double x = 3.14;
int y = (int) Math.round(x);
```

結果為 4，當調用round時，仍然需要使用強制類型轉換(int).其原理是因為round方法返回的結果為long類型。由於存在信息丟失的可能性，所以只有使用顯式的強制類型轉換才能夠將long類型轉換成int類型。

不要在boolean類型與任何類型之間進行強制類型轉換，這樣可以防止發生錯誤。

## 運算符優先級

| 優先級 | 運算符                                                               | 簡介                                                       | 結合性   |
| ------ | -------------------------------------------------------------------- | ---------------------------------------------------------- | -------- | -------- |
| 1      | [ ]、 .、 ( )                                                        | 方法調用，屬性獲取 | 從左向右 |
| 2      | !、~、 ++、 --                                                       | 一元運算符                                                 | 從右向左 |
| 3      | * 、/ 、%                                                            | 乘、除、取模（餘數）                                       | 從左向右 |
| 4      | + 、 -                                                               | 加減法                                                     | 從左向右 |
| 5      | <<、 >>、 >>>                                                        | 左位移、右位移、無符號右移                                 | 從左向右 |
| 6      | < 、<= 、>、 >=、 instanceof                                         | 小於、小於等於、大於、大於等於，對象類型判斷是否屬於同類型 | 從左向右 |
| 7      | == 、!=                                                              | 2個值是否相等，2個值是否不等於。 下面有詳細的解釋          | 從左向右 |
| 8      | &                                                                    | 按位與                                                     | 從左向右 |
| 9      | ^                                                                    | 按位異或                                                   | 從左向右 |
| 10     | &#124;                                                               | 按位或                                                     | 從左向右 |
| 11     | &&                                                                   | 短路與                                                     | 從左向右 |
| 12     | &#124;&#124;                                                         | 短路或                                                     | 從左向右 |
| 13     | ?:                                                                   | 條件運算符                                                 | 從右向左 |
| 14     | =、 += 、-= 、*= 、/=、 %=、 &=、 &#124;=、 ^=、 <、<= 、>、>= 、>>= | 混合賦值運算符                                             | 從右向左 |

## 字符串

### 子串substring

String類的substring方法可以從一個較大的字符串提取出一個子串。

`substring(a,b)`

- a 表示開始的位置（從0開始計數）
- b表示不想複製的第一個位置

例如

```java
String greeting = "hello";
String s = greeting.substring(0,3);

// s = hel
//從0開始計數，直到3位置，但是不包括3，所以返回 hel
```

substring的一個優點：容易計算子串的長度，長度為b-a。
例如 hel的長度為 3-0=3

### 檢測字符串是否相等

可以使用equals來檢測兩個字符串是否相等。
`s.equals(t)`
如果相等，會返回true,否則，返回false. s和t可以是字符串變量，也可以是字符串常量。
eg: "hello".equals(greeting)

檢測是否相等，而且不區分大小寫，可以使用equalsIgnoreCase方法。
eg: "hello".equalsIgnoreCase("HeLLO)

不能使用==運算符來檢測兩個字符串是否相同，這個運算符只能夠確定兩個字符串是否放置在同一個位置。

### 空串和Null串

空串是一個Java對象，有自己的串長度(0)和內容(空)。可以通過調用以下代碼檢查字符串是否為空。

```java
if(str.length()==0)
或
if (str.equals(""))
```

`null`表示目前沒有任何對象與該變量關聯。可以通過調用以下代碼檢查字符串是否為null

```java
if (str == null)
要檢測一個字符串既不是null也不是空串：
if (str != null && str.length()!=0)
```

### length() 與 charAt()

length方法會返回採用UTF-16編碼表示的給定字符串所需的代碼單元數量。
想要得到實際的長度，即代碼點數量，可以調用

```java
xxx.codePointCount(0,xxx.length())
```

調用s.chatAt(n)將返回位置n的代碼單元，n介於0~ s.length()-1 之間。
eg:

```java
String greeting = "Hello"
char first = greeting.charAt(0);    // first is H
char last = greeting.charAt(4);  // last is o
```

想得到i個的代碼點，可以使用

```java
int index= greeting.offsetByCodePoints(0,i);
int cp = greeting.codePonintAt(index);
```

## 輸入輸出

### 讀取輸入

為了能夠讀取用户在控制枱的輸入，首先需要創建一個Scanner對象，並與“標準輸入流”System.in關聯。

```java
Scanner in = new Scanner (System.in)
```

- next()
    讀取到輸入有效的字符才會結束輸入，對於輸入有效的字符**之前**的空白會自動去掉，輸入有效的字符**之後**的空白作為分隔符或者結束符。next() 不能得到帶有空格的字符串。
- nextLine()
    以enter為結束符，nextLine()可以得到帶有空格的字符串，不會去掉空白，會全盤輸出。
- nextInt()
    得到int類型的數據。nextDouble(),nextFloat()以此類推。
- boolean hasNext()
  檢測輸入中是否有還有其他單詞。

記得要`import java.util.*;`

```java
import java.util.*;

public class Input_and_Output {

    public static void main(String[] args) {
    // TODO Auto-generated method stub

        Scanner in = new Scanner(System.in);
        System.out.print("what is your name :");
        String name = in.nextLine();
        System.out.print("age :");
        int age = in.nextInt();
        System.out.println("the name is " + name + ",the age is "+age);
}

//輸入結果：
//what is your name :jerry
//age :24
//the name is jerry,the age is 24

```

### 格式化輸出

System.out.print(X)會將以x對應的數據類型所允許的最大非0數字位數打印輸出x

```java
double x = 10000.0/3.0;
System.out.print(x);  // x = 3333.3333333333335
```

為了能夠方便格式輸出結果，可以使用printf()。

```java
double x = 10000.0/3.0;
System.out.printf("8.2f",x);
// x = 3333.33 使用8個字符的寬度和小數點後兩位字符的精度打印x
// 因為小數點後2位，為3333.33。但是指定要8個字符的寬度，所以左邊會補一個空格
// x結果為（1個空格）3333.33
```

用於printf的轉換符

|轉換符|類型|舉例|
|-----|-----|-----|
|%s|字符串類型|"Hello"|
|%c|字符類型|'H'|
|%b|布爾類型|true OR false|
|%d|整數類型（十進制）|10|
|%x|整數類型（十六進制）|9f|
|%o|整數類型（八進制）|237|
|%f|浮點類型|15.9|
|%a|十六進制浮點類型|0x1.fccdp3|
|%e|指數類型|6.23e+24|
|%g|通用浮點類型（f和e類型中較短的）|42.5000|
|%h|散列碼|42628b2|
|%%|百分比類型|％|
|%n|換行符|相當於"\n"換行作用|
|%tx|日期與時間類型（x代表不同的日期與時間轉換符）|見博文下表|

### 大數值

如果基本的整數和浮點數精度不夠滿足需求，那麼可以使用java.math包中的兩個很有用的類：**BigInteger**和**BigDecimal**。這兩個類可以處理包含任意長度數字序列的數值。

- BigInteger 實現任意精度的整數運算
- BigDecimal 實現任意精度的浮點數運算

把普通的數值轉換成大數值，可以使用靜態的valueOf()方法。

```java
BigInteger a = BigInteger.valueOf(100);
```

大數值的運算不能使用常用的算術運算符（如+，*）處理，而是要使用大數值類中的`add`和`multiply`

```java
BigInteger c = a.add(b); // c=a+b
BigInteger d = c.multiply(b.add(BigInteger.valueOf(2))); // d = c*(b+2)
```

其他的運算包括有 `subtract(減)`，`divide(除)`和`mod(餘數)`

## 數組

### 數組聲明

數組是一種數據結構，用來存儲同一類型值的集合

數組聲明方式:

```java
  int[] array 或者int array[]
```

數組初始化

```java
  int[] array = new int[100];
  int[] arry = new int[]{1,2,3,4,5}
  int[] array = {1,2,3,4,5}
```

創建一個數字數組時，所有的元素都初始化為0。
boolean數組的元素會初始化為false
對象數組的元素會初始化為一個特殊值null

```JAVA
public class Array {

  public static void main(String[] args) {

  int[] test = new int[5];
  for(int i =0;i<test.length;i++) {
  System.out.println(test[i]);}
}
}
```

輸出的結果會是： 0 0 0 0 0

**重要：**
一旦創據數組，就不能再改變數組的大小。如果需要在運行中擴展數組的大小，則需要使用另一種數據結構——數組列表（array list)

### for each循環

Java有一種很強的循環結構，可以用來依次處理數組中的每個元素而不必為指定下標值而分心。

格式：
`for(variable:collection) statement`
定義一個變量用於暫存集合中的每一個元素，並執行相應的語句。
collection這一集合表達式必須必須是一個數組或者是一個實現了Iterable接口的類對象（例如Arraylist)。
eg:

```java
for(int element ：a)
  System.out.println(element)  
  //打印數組a的每一個元素，一個元素佔一行
  // for each element in a
```

### 數組拷貝

在java中，允許將一個數組變量拷貝到給另一個數組變量。這時，兩個變量將引用同一個數組

```java
int[] a = {2,3,5,7,11,12};
int[] b = a;
a[5] = 12 // b[2] = 12
```

如果想將一個數組的所有值拷貝到一個新的數組去，使用Arrays類的copyTo方法。

```java
int[] copieda = Arrays.copyTo(a,a.length);
```

第二個參數是新數組的長度，可以通過這個方法來增加數組的大小。
eg: `Arrays.copyTo(a,2*a.length);` 增加到2倍大
如果數組元素是數字數組時，多餘的元素都賦值為0。
如果數組元素是boolean數組，多餘的元素會賦值為false
如果數組元素是對象數組的元素，多餘的元素賦值為特殊值null
如果長度小於原始數組的長度，則只拷貝前面的數據元素
  
### 數組排序

想要對數組排序，可以使用Arrays類的sort方法`Arrays.sort(數組a)`

抽獎遊戲

```java
import java.util.Arrays;
import java.util.Scanner;

public class LotteryDrawing {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        //抽獎遊戲，設置總數n和抽取的數k,隨機抽取
        Scanner in = new Scanner(System.in);
        System.out.println("how many numbers do you need to draw?");
        int k = in.nextInt();
        System.out.println("what is the highest number you can draw?");
        int n = in.nextInt();

        // 給 總數賦值
        int[] numbers = new int[n];
        for(int i = 0;i< numbers.length;i++) {
          numbers[i]= i+1;
        }

        int[] result = new int[k];
        for(int i =0; i<result.length;i++) {

          int r = (int)(Math.random()*n); //隨機抽取
          result[i] = numbers[r];    //把抽取的值賦給result

          numbers[r]=numbers[n-1]; //避免抽到相同的數，把最尾的值賦給被抽到的值
          n--;
        }

        Arrays.sort(result); //排序
        System.out.println("Bet the foolowing combination. It'll make you rich!");

        for(int r:result)
          System.out.println(r);

}

}
```

### 多維數組（矩陣）

多維數組適用於表示表格或者更加複雜的排列方式。

#### 聲明和初始化

聲明：`type arrayName[][]`或者`type[][] arrayName`
初始化：

```java
- balance=new double[rownumber][columnNumber]
- int[][] abc = {{1,2,3,4},{5,6,7,8},{9,10,11,12,13}}
```

Java語言中，由於把二維數組看作是數組的數組，數組空間不是連續分配的，所以不要求二維數組每一維的大小相同。
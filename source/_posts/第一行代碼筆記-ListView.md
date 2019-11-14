---
title: 第一行代碼筆記-ListView
tags: 
    - ListView
    - Android
    - 第一行代碼
categories:
  - Android
  - 第一行代碼
keywords: '安卓,Android,ListView,布局'
abbrlink: 75c18a
date: 2018-07-05 21:05:18
description:
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/ListView.png
---
手機屏幕空間有限，能顯示的內容不多。可以藉助ListView來顯示更多的內容。
ListView允許用户通過上下滑動來將屏幕外的數據滾動到屏幕內，同時屏幕內原有的數據滾動出屏幕，從而顯示更多的數據內容。

# ListView的簡單用法

## 修改activity_main.xml

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">
    <ListView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/listview"></ListView>
</LinearLayout>
```

`android:layout_width`和`android:layout_height`設置為`match_parent`可以把ListView佔滿整個布局的空間。

## 修改MainActivity.java

```java
public class MainActivity extends AppCompatActivity {

    private String [] data = {"Apple","Banana","Orange","Watermelon","Pear","Grape","Pineapple","Strawberry","Cherry",
    "Mango","Apple","Banana","Orange","Watermelon","Pear","Grape","Pineapple","Strawberry","Cherry",
            "Mango"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //ArraryAdapter適配器，通過泛型來指定要適配的數據類型，然後在構造函數中把要適配的數據傳入。
        ArrayAdapter<String> arrayAdapter= new ArrayAdapter<String> (
                MainActivity.this, android.R.layout.simple_list_item_1,data);
        ListView listView = (ListView) findViewById(R.id.listview);
        listView.setAdapter(arrayAdapter);
        }
    }
```

例子中以數組的方式來傳遞數據，裏面包含很多水果的名字。
數組中的數據無法直接傳遞給ListView,這時需要藉助適配器(Adapter)來完成。
Android中提供了很多適配器,這裏使用的是ArrayAdapter,它可以通過泛型來指定要適配的數據類型，然後在構造函數中把要適配的數據傳入。
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/ListView/ArrayAdapter.png)
因為數據都是字符串，所以ArrayAdapter的泛型指定為String。
ArrayAdapter的構造函數傳入3個數據：

* 1是Context 傳入當前的上下文
* 2是ListView子項布局的ID
* 3是要適配的數據

`android.R.layout.simple_list_item_1`作為ListView子項布局的ID，這時安卓內置的布局文件。裏面只有一個TextView，可用於顯示一段文本。

最後調用ListView的setAdapter()方法將構建好的適配器對象傳遞進去。

運行效果：
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/ListView/listview1.png)

# 定製ListView界面

 對ListView界面進行定製，讓其可以顯示更豐富的內容。
 為每個水果加上圖片

## 新建fruit.java

定義一個實體類，作為ListView適配器的適配類型。

```java
public class Fruit {
    private String name;
    private int imageId;
    public Fruit (String name,int imageId){
        this.name = name;
        this.imageId = imageId;
    }
    public String getName() {
        return name;
    }
    public int getImageId() {
        return imageId;
    }
}
```

## 新建布局文件 fruit_item.xml

創建ImageView來顯示水果圖片，TextView來顯示水果名字。並讓TextView在垂直方向上居中顯示。

```xml
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
>
    <ImageView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/fruit_image"/>
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/fruitname"
        android:layout_gravity="center_vertical"
        android:layout_marginLeft="10dp"/>
</LinearLayout>
```

## 新建 FruitAdapter.java

```java
public class FruitAdapter extends ArrayAdapter<Fruit> {

    private int resourceId;

    public FruitAdapter(Context context, int textViewResourceId, List<Fruit> objects){
        super(context,textViewResourceId,objects);
        resourceId = textViewResourceId;

    }


    @Override
    public View getView(int position, View convertView, ViewGroup parent){
       Fruit fruit = getItem(position); //獲取當前項的Fruit實例
       View view= LayoutInflater.from(getContext()).inflate(resourseId,parent,false);
       ImageView fruitImage = (ImageView) view.findViewById(R.id.fruit_image);
       TextView fruitName =(TextView) view.findViewById(R.id.fruitname);
       fruitImage.setImageResource(fruit.getImageId());
       fruitName.setText(fruit.getName());
       return view;
    }
}
```

FruitAdapter 重寫了父類的構造函數，用於將上下文，ListView子項布局的ID和要適配的數據傳遞進去。

重寫getView（）方法，這個方法在每個子項被滾動到屏幕內的時候會被調用。
首先通過getItem()得到當前的項的Fruit實例，然後使用LayoutInflater來為這個子項加載我們傳入的布局。

`LayoutInflater.from(getContext()).inflate(resourseId,parent,false);`
inflate接受三個參數

* 一個是加載的布局文件id
* 另一個是給加載好的布局再添加一個父布局
* `false`表示只讓我們在父布局中聲明的layout屬性生效，但不會為這個view添加父布局。

## 修改 MainActivity.java

```java
public class MainActivity extends AppCompatActivity {
    private List<Fruit> fruitList = new ArrayList<>();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initFruits();// 初始化水果數據

       FruitAdapter arrayAdapter = new FruitAdapter(MainActivity.this,R.layout.fruit_item,fruitList);

        ListView listView = (ListView) findViewById(R.id.listview);
        listView.setAdapter(arrayAdapter);
    }


   private void initFruits(){
       for( int i =0; i<2;i++){
           Fruit apple = new Fruit("Apple",R.drawable.apple_pic);
           fruitList.add(apple);
           Fruit banana = new Fruit("Banana",R.drawable.banana_pic);
           fruitList.add(banana);
           Fruit orange = new Fruit("Orange",R.drawable.orange_pic);
           fruitList.add(orange);
           Fruit watermelon = new Fruit("Watermelon",R.drawable.watermelon_pic);
           fruitList.add(watermelon);
           Fruit pear = new Fruit("Pear",R.drawable.pear_pic);
           fruitList.add(pear);
           Fruit grape = new Fruit("Grape",R.drawable.grape_pic);
           fruitList.add(grape);
           Fruit pineapple = new Fruit("Pineapple",R.drawable.pineapple_pic);
           fruitList.add(pineapple);
           Fruit strawberry = new Fruit("Strawberry",R.drawable.strawberry_pic);
           fruitList.add(strawberry);
           Fruit cherry = new Fruit("Cherry",R.drawable.cherry_pic);
           fruitList.add(cherry);
           Fruit mango = new Fruit("Mango",R.drawable.mango_pic);
           fruitList.add(mango);

       }
   }
}
```

添加initFruit()方法來初始化所有的水果數據。

運行結果：
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/ListView/listview2.png)

# 提升ListView的運行效率

上面的代碼中，FruitAdapter的getView()每次都將布局重新加載了一遍，當ListView快速滾動時，就會成為性能的瓶頸。
為了解決這問題，需要對ListView進行優化。

修改FruitAdapter.java

```java
@Override
    public View getView(int position, View convertView, ViewGroup parent){
        Fruit fruit = getItem(position); //獲取當前項的Fruit實例
        View view;
        ViewHolder viewHolder;
        if (convertView == null){
            view = LayoutInflater.from(getContext()).inflate(resourceId,parent,false);
            viewHolder = new ViewHolder();
            viewHolder.fruitImage = (ImageView) view.findViewById(R.id.fruit_image);
            viewHolder.fruitName =(TextView) view.findViewById(R.id.fruitname);
            view.setTag(viewHolder);// 將ViewHolder存儲在View中。
        }else
        {
            view = convertView;
            viewHolder=(ViewHolder)view.getTag(); //重新獲取ViewHolder

        }
        viewHolder.fruitImage.setImageResource(fruit.getImageId());
        viewHolder.fruitName.setText(fruit.getName());
        return view;
    }

    class ViewHolder{
        ImageView fruitImage;
        TextView fruitName;
    }
```

getView中的convertView參數，用於將之前加載好的布局進行緩存，以便以後可以進行重用。

* convertView為null時，使用LayoutInflater去加載布局。
* 如果不是Null,則直接對convertView進行重用。

內部類ViewHolder用於對控件的實例進行緩存。  

* 當convertView為null時
  創建ViewHolder對象，並將控件的實例都存到ViewHolder去，然後調用View的setTag()方法，將ViewHolder對象存儲於View中。
* 當convertView不為null時
  調用View的setTag()方法，把ViewHolder重新取出。

# LiewView的點擊事件

修改MainActivity.java

```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initFruits();// 初始化水果數據

        FruitAdapter arrayAdapter = new FruitAdapter(MainActivity.this,R.layout.fruit_item,fruitList);

        ListView listView = (ListView) findViewById(R.id.listview);
        listView.setAdapter(arrayAdapter);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener()
        {
            @Override
            public void onItemClick(AdapterView<?> parent, View view,int position, long id){
                Fruit fruit = fruitList.get(position);
                Toast.makeText(MainActivity.this,fruit.getName(),Toast.LENGTH_SHORT).show();

            }


        });
```

使用setOnItemClickListener（）為ListView註冊了一個監聽器。
通過position參數判斷出用户點擊的是哪一個子項。
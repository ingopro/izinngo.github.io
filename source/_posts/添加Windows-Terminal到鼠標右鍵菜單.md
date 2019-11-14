---
title: 添加Windows Terminal到鼠標右鍵菜單
tags:
  - Windows
categories:
  - 教程
  - Windows
keywords: 'Windows,教程,Windows Terminal'
description: 添加Windows Terminal到鼠標右鍵菜單
top_img: 
abbrlink: c621cf12
date: 2019-11-11 00:16:06
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Windows_Terminal_cover.jpg
---

Windows上有很多命令行程序，例如CMD和PowerShell。微軟在Build 2019上推出了一款面向Windows10的命令行程序，這款程序集合了Windows上的PowerShell、CMD以及Windows Subsystem for Linux於一身，解決了不少惹人吐槽的毛病，甚至被稱為Windows下命令體驗的救世主。而我早在Preview版發佈時，就已經下載使用，現在也是我主要使用的命令行工具。然而畢竟現在還是體驗版的關係，所以並沒有集成在右鍵菜單上。在搜索了許久之後，終於在Github上找到了安裝方法。

## 軟件安裝

 Windows Terminal 現在還是 Preview 狀態，我們可以在 Microsoft Store 上下載安裝。當然有能力的人，可以下載Github的代碼自己編譯。

[Windows Terminal (Preview) - Microsoft Store](https://www.microsoft.com/zh-cn/p/windows-terminal-preview/9n0dx20hk701?activetab=pivot:overviewtab)

[GitHub - microsoft/terminal: The new Windows Terminal, and the original Windows console host - all in the same place!](https://github.com/microsoft/terminal)

## 添加 Windows Terminal 到右鍵菜單

### 測試變量

下面的兩個變量後面的操作需要使用到。所以，先測試下是否正常。

```
echo %USERPROFILE%
echo %LOCALAPPDATA%
```

如果有報錯，接下來的操作，請把對應的部分進行替換。

`%USERPROFILE%` 替換成 `C:\Users\[userName]`
`%LOCALAPPDATA%` 替換成 `C:\Users\[userName]\AppData\Local`

**注意** `[userName]`為自己的用户名

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Windows_Terminal_var_test.png)

### 創建圖標

從以下地址下載圖標

[圖標ico下載](https://raw.githubusercontent.com/yanglr/WindowsDevTools/master/awosomeTerminal/icons/wt_32.ico) ， 打開網址，鼠標右鍵保存到電腦。

打開命令行，輸入

```
mkdir "%USERPROFILE%\AppData\Local\terminal"
```

這個命令是創建一個`terminal`文件夾，把下載的圖標ico複製到這個文件夾。


### 寫入註冊表

創建一個txt文檔，並把檔後綴改為`reg`。文檔的名字可自己創建，後綴名不可以錯。右鍵菜單出現`Windows Terminal`有兩種方法。一種是按`shift`+ `右鍵`,另一種是直接`右鍵`。

#### `shift`+ `右鍵`

把下面的內容複製到reg去

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt]
@="Windows Terminal"
"Icon"="%USERPROFILE%\\AppData\\Local\\terminal\\wt_32.ico"
"Extended"=""

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command]
@="C:\\Users\\[user_name]\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe"
```

**注意**：請把`[user_name]`改成自己電腦的用户名

#### 右鍵

把下面的內容複製到reg去

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt]
@="Windows terminal here"
"Icon"="%USERPROFILE%\\AppData\\Local\\terminal\\wt_32.ico"

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command]
@="C:\\Users\\[user_name]\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe"
```

**注意**：請把`[user_name]`改成自己電腦的用户名

### 修改`Windows Terminal`的`profile.json`

打開`profile.json`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Windows_Terminal_setting.png)

把`startingDirectory`改為`null`,沒有的自己創建一個。

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Windows_Terminal.setting_edit.png)

照著上面的方法操作，相信右鍵菜單已經出現`Windows Terminal`的入口了。

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Windows_Terminal_right_menu.png)

### 參考

1.   ['Add "open Windows terminal here" into right-click context menu' 下  yanglr 的回答](https://github.com/microsoft/terminal/issues/1060#issuecomment-497539461)



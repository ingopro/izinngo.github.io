---
title: 設置Windows電腦自動關機
categories: 
  - 教程
  - Windows
abbrlink: 19f9ade4
date: 2019-06-01 14:24:58
tags: 
  - Windows
  - 教程
keywords: 'Windows,win10,win,教程,關機,自動關機,shutdown'
description: 利用Windows內建的shutdown指令讓電腦自動關機
top_img:
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/Set_Auto_Shutdown_in_Windows.jpg
---

為了減少長時間沉迷電腦而忘記時間，設置Windows電腦自動關機是必要的事。
在我的電腦裏，每到晚上10點都會自動關機。當然不會立刻關機，而是設置了1分鐘的預留時間給自己保存一些文檔資料。
Windows內建的Shutdown指令讓人很方便的對這些進行操作。
你有沒有試過在使用電腦處理一些事時，因為臨時需要外出，而又不能立刻關掉電腦，這時就可以使用Shutdown設置xx時間後自動關閉電腦。

## shutdown的一些參數

### 1. 寫法

```
shutdown [/i | /l | /s | /sg | /r | /g | /a | /p | /h | /e | /o] [/hybrid] [/soft] [/fw] [/f][/m \\computer][/t xxx][/d [p|u:]xx:yy [/c "comment"]]
```

也可以寫成

```
shutdown [-i | -l | -s | -sg | -r | -g | -a | -p | -h | -e | -o] [-hybrid] [-soft] [-fw] [-f] [-m \\computer][-t xxx][-d [p|u:]xx:yy [-c "comment"]]
```

### 2. 參數

|參數|描述|
|-----|-----|
|    No args    |顯示説明。與輸入 /? 意義相同。|
|   /?         |顯示説明。與不輸入任何選項意義相同。|
|    /i         |顯示圖形化使用者介面 (GUI)。<br>這必須是第一個選項。|
|    /l         |登出。不能和 /m 或 /d 選項一起使用。|
|    /s         |將電腦關機。|
|    /sg        | 將電腦關機。如有啟用自動重新啟動登入，<br>會在系統重新開機後自動登入並鎖定上一個互動使用者。<br>登入後，會重新啟動所有已註冊應用程式。|
|    /r         | 將電腦完全關機並重新開機。|
|    /g         | 將電腦完全關機並重新啟動。如有啟用自動重新啟動登入，<br>會在系統重新開機後自動登入並鎖定上一個互動使用者。<br>登入後，會重新啟動所有已註冊應用程式。|
|    /a         | 中止系統關機。<br>只有在逾時期間可以使用這個選項。<br>與 /fw 結合以清除任何擱置中的開機到韌體作業。|
|    /p         | 沒有逾時或警告就關閉本機電腦<br>能和 /d 與 /f 選項一起使用。|
|    /h         | 讓本機電腦休眠。<br>能和 /f 選項一起使用。|
|    /hybrid    | 執行電腦關機作業，並準備電腦以用於快速啟動。<br>必須搭配 /s 選項使用。|
|    /fw       |  與關機選項結合，讓下一次開機能進入<br>韌體使用者介面。|
|    /e         | 記錄電腦意外關機的理由。|
|    /o         | 移至 [進階開機選項] 功能表並重新啟動電腦。<br> 必須搭配 /r 選項使用。|
|    /m \\computer | 指定目標電腦。|
|    /t xxx     | 將關機前的逾時期間設定為 xxx 秒。<br>有效的範圍是 0-315360000 (10 年)，預設值為 30。<br>若逾時期間大於 0，則會隱含 /f參數。|
|    /c "comment" | 為重新啟動或關機理由加上註解。<br>最多僅允許 512 個字元。|
|    /f         | 強制關閉執行中的應用程式，而不事先警告使用者。<br>為 /t 參數指定大於 0 的值時，<br> 會隱含 /f 參數。|
|    /d [p&#124;u:]xx:yy  | 提供重新啟動或關機的理由。<br> p 代表重新啟動或關機是已計劃的。<br> u 代表理由是由使用者所定義。<br> 若未指定 p 或 u，則重新啟動或關機<br> 是非計劃性。<br> xx 是主要的理由編號 (小於 256 的正整數)。<br> yy 是次要的理由編號 (小於 65536 的正整數)。|

`shutdown /s /t 10`  指定10s後自動關機
`shutdown /l /t 10`  指定10s後自動登出賬號
`shutdown /i`
![shutdown -i](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/shutdown_i.png)

## 設置自動關機的方法

### 1. 通過工作排程器

1. 在 `本機` 右鍵鼠標並選擇管理。
2. 點擊左邊的工作排程器
![工作排程器](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/TaskScheduler.png)
3. 點擊右邊`動作`下的`建立基本工作`
![建立基本工作](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/create_basic_task.png)
4. 輸入名稱和描述
![輸入名稱和描述](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/create_basic_task_process_1.png)
5. 選擇觸發程序時間（這裏選擇每天）
![選擇觸發程序時間](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/trigger.png)
6. 設置開始的時間和間隔，間隔的數值要大於0
![設置開始的時間和間](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/set_start_time.png)
7. 選擇`啟動程序`
![選擇啟動程序](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/action.png)
8. 程序或指令碼填寫`shutdown`或者點擊右邊的瀏覽，選擇shutdown.exe，會變成`C:\Windows\System32\shutdown.exe`。新增引數填`-s`
![填寫程序或指令碼](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/start_a_program.png)
9. 檢查所有填寫的資料的是否正確，點擊完成就可以了。這樣電腦就會按照你設定的時間，到時間後就會跳出提醒。
![建立的基本工作詳情](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/finish.png)

### 2. 通過`執行`程序

按`win`+`R`，打開`執行`程序，直接輸入shutdown指令。
![執行程序](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/Run_Command.png)

### 3. 通過`CMD`或者`PowerShell`

打開`CMD`或者`PowerShell`，然後直接輸入shutdown指令。

![CMD](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/cmd.png)
![PowerShell](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/Set_Auto_Shutdown_in_Windows/powershell.png)
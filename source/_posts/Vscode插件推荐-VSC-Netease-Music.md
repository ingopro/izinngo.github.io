---
title: Visual Studio Code 插件推薦-VSC Netease Music
tags:
  - 插件
  - Visual Studio Code
  - 工具
categories: 工具
keywords: '插件,推薦,vscode'
abbrlink: '86e73295'
date: 2019-03-21 00:08:30
description:
top_img:
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/VSC_Netease_Music_cover.jpg
---
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/VSC_Netease_Music/1.png)

最近在微博上看到有一位科技博主推薦了一款Visual Studio Code插件,名字叫做 VSC Netease Music。
Visual Studio Code的插件真是越來越多樣化，看漫畫、看小説，現在連聼音樂也都有了。
這款插件對我來説最吸引的，應該就是無地區版權限制了。畢竟因為版權原因，網易雲音樂早就把我拒之門外了。

## 插件簡介

插件是一位叫做[nondanee](https://github.com/nondanee)的第三方開發者開發的。
>插件github地址: [https://github.com/nondanee/vsc-netease-music](https://github.com/nondanee/vsc-netease-music)
插件marketplace: [https://marketplace.visualstudio.com/items?itemName=nondanee.vsc-netease-music](https://marketplace.visualstudio.com/items?itemName=nondanee.vsc-netease-music)

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/VSC_Netease_Music/2.gif)

## 插件功能

- 發現音樂 (歌單 / 新歌 / 排行榜)
- 搜索 (單曲 / 歌手 / 專輯 / 歌單)
- 用户登錄 (手機號 / 郵箱)
- 用户收藏 (歌單 / 歌手 / 專輯)
- 每日歌曲推薦 / 推薦歌單 / 私人 FM
- 喜歡音樂 / 收藏音樂
- 播放模式切換 / 音量調節
- 逐行歌詞
- 熱門評論
- 快捷鍵支持
- 聽歌記錄 (不確定有效)
- 無海外限制

## 插件需求

我在電腦上可以正常地使用
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/VSC_Netease_Music/3.png)
但是Github上看到可能需要替換一些文件才可以正常使用。

**Github原文:**

VS Code for Windows 自 1.31.0 起自帶完整的 ffmpeg 動態鏈接庫 (可能是 bug)，無需替換；macOS 與 Linux 平台仍需替換。

VS Code 使用的 Electron 版本不包含 ffmpeg，需替換自帶的 ffmpeg 動態鏈接庫才能正常播放 (每次更新 VS Code 都需重新替換)

### 手動替換
通過 VS Code 版本在 https://raw.githubusercontent.com/Microsoft/vscode/%version%/.yarnrc 查看其使用的 Electron 版本，並於 https://github.com/electron/electron/releases/tag/%version% 下載對應的 Electron 完整版本進行替換

#### Windows

```bash
下載 electron-%version%-win32-%arch%.zip
替換 ./ffmpeg.dll
```

#### macOS

```bash
下載 electron-%version%-darwin-x64.zip
替換 ./Electron.app/Contents/Frameworks/Electron\ Framework.framework/Libraries/libffmpeg.dylib
```

#### Linux

```bash
下載 electron-%version%-linux-%arch%.zip
替換 ./libffmpeg.so
```

### 自動替換

使用 Python 腳本替換 (Python 2/3 均可，絕大部分發行版自帶環境)

默認安裝位置下 Linux 和 Windows 需要以管理員身份運行，macOS 不需要

#### Windows Powershell

```bash
Invoke-RestMethod https://gist.githubusercontent.com/nondanee/f157bbbccecfe29e48d87273cd02e213/raw | python
```

#### Unix Shell

```bash
curl https://gist.githubusercontent.com/nondanee/f157bbbccecfe29e48d87273cd02e213/raw | python
```

如果 VS Code 使用默認配置安裝，腳本會自動尋找並替換，若自定義了安裝位置，請自行修改 installation

## 插件用法

按**F1**或者**Ctrl Shift P**打開命令面板

輸入命令前綴 ``網易雲音樂`` 或 ``NeteaseMusic``就可以使用。
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/VSC_Netease_Music/4.png)
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/VSC_Netease_Music/5.png)
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/VSC_Netease_Music/6.png)

界面底部還會顯示歌詞和操作欄
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/blog/VSC_Netease_Music/7.png)

一邊編程，一邊聽歌，是一種很享受的行為，不用另外開多一個音樂軟件。
不過涉及到音樂版權問題，這款插件感覺命不久矣。

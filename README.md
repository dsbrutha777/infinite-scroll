# Dcard 回家測驗

請實作一個網頁滿足以下需求：

- 偵測文字輸入框的變動，並查詢相關的 Github repos
- 請留意搜尋 API 有 limit rate，所以必須避免過於頻繁的 API requests
- 請實作 infinite scroll，在使用者滾到頁面底部時自動載入更多 repos ，此功能不能使用現成的 library

## 啟動方式

`yarn start`

## 相依套件

- `@emotion/css` : A library designed for writing css styles with JavaScript

- `@material-ui/core` : React components for faster and easier web development Build your own design system, or start with Material Design

- `axios` : Promise based HTTP client for the browser and node.js

- `lodash` : Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc

## 架構描述

- `/components`

  Component 放置處，內含

  1. index.jsx : 實作組件的呈現與邏輯
  2. styles.js : 以 `@emotion/css` 編寫 css 程式碼

- `/models`

  API Model 放置處，內含對應 restful api 所定義 resource 的 `Class`，並對應操作 class 的 method ( Ex. GET, POST, UPDATE, DELETE, ... )

- `/pages`

  放置網頁頁面 component，若需要 Router 可建立於 `/pages/index.jsx`

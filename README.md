# ALBERT-FE-interview-task-1

前端面試作業 1 - 計數器

## 技術棧

- **React 19**
- **TypeScript** - 型別安全
- **Vite** - 建構工具
- **Redux Toolkit** - 客戶端狀態管理
- **Material-UI (MUI)** - UI 框架

## 環境需求

- [Bun](https://bun.sh/) >= 1.0

## 安裝

```bash
bun install
```

## 啟動方式

### 開發模式

```bash
bun run dev
```

### 建置生產版本

```bash
bun run build
```

### 預覽生產版本

```bash
bun run preview
```

### 程式碼檢查

```bash
bun run lint
```

## 功能特色

- 計數器功能（點擊增加）
- 清除計數功能
- 啟用/停用按鈕切換

## 專案結構

```
src/
 ├── components/     # React 組件
 │   └── Counter
 ├── store/          # Redux store 配置
 │   ├── index.ts
 │   ├── counterSlice.ts
 │   ├── selectors.ts
 │   ├── types.ts
 │   └── hooks.ts
 ├── constants/      # 常數定義
 │   └── index.ts
 ├── App.tsx         # 主要應用組件
 └── main.tsx        # 應用入口
```

# グラフィックレコーディング共有サイト

## 概要

このプロジェクトは、グラフィックレコーディング風HTMLインフォグラフィックを投稿・共有できるプラットフォームです。

## 機能

- HTMLによるグラフィックレコーディングの投稿・共有
- 投稿されたグラフィックレコーディングの閲覧
- GitHub認証によるユーザー管理
- 投稿者情報の表示

## 技術スタック

- フロントエンド: Next.js, React, TailwindCSS
- バックエンド: Next.js API Routes
- データベース: MongoDB
- 認証: NextAuth.js (GitHub OAuth)

## 開発方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください。

```
MONGODB_URI=your_mongodb_connection_string
GITHUB_ID=your_github_oauth_app_id
GITHUB_SECRET=your_github_oauth_app_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```
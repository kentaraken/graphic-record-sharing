# Graphic Record Sharing

グラフィックレコーディング風HTMLインフォグラフィックを投稿・共有できるプラットフォーム

## 概要

このプロジェクトは、グラフィックレコーディング風のHTMLインフォグラフィックを作成・共有するためのウェブアプリケーションです。ユーザーはHTMLコードを投稿し、視覚的に魅力的な情報の整理と表現を共有できます。

## 主な機能

- GitHubアカウントによる認証
- グラフィックレコーディング風HTMLインフォグラフィックの投稿
- 投稿された作品の閲覧とコメント
- HTMLのコピーと再利用
- タグ付けによる作品の分類

## 技術スタック

- Next.js 14
- TypeScript
- Prisma ORM
- NextAuth.js
- Tailwind CSS
- PostgreSQL

## 開発環境のセットアップ

1. リポジトリをクローン
   ```bash
   git clone https://github.com/kentaraken/graphic-record-sharing.git
   cd graphic-record-sharing
   ```

2. 依存パッケージをインストール
   ```bash
   npm install
   ```

3. 環境変数の設定
   `.env.local`ファイルを作成し、以下の変数を設定します：
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/graphicrecord"
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. データベースのセットアップ
   ```bash
   npx prisma migrate dev --name init
   ```

5. 開発サーバーの起動
   ```bash
   npm run dev
   ```

## ライセンス

MIT

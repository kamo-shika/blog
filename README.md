# ブログ

## 目次

- [ブログ](#ブログ)
  - [目次](#目次)
  - [はじめに](#はじめに)
  - [機能一覧](#機能一覧)
  - [アーキテクチャ](#アーキテクチャ)
  - [技術スタック](#技術スタック)
  - [セットアップ手順](#セットアップ手順)
  - [参考文献](#参考文献)

## はじめに

このドキュメントは、ブログサービスを構築するためのガイドラインを提供します。

## 機能一覧

- 記事投稿機能
  - 管理者はmdファイルをGitHubリポジトリにpushすることで記事の投稿、編集、削除が可能
- 記事一覧表示機能
  - 記事の一覧を表示する
- 記事詳細表示機能
  - 記事の詳細を表示する

## アーキテクチャ

- Honox
  - SSGを使用してビルド時に静的サイトを生成する
- Bun
  - ビルドに利用
- Cloudflare Pages
  - ホスティング・デプロイに利用

## 技術スタック

- HTML/CSS/JavaScript
- Honox
- Bun
- Cloudflare Pages

## セットアップ手順

1. リポジトリをクローンする

2. 依存関係をインストールする

   ```bash
   cd honox-app
   bun install
   ```

## 参考文献

- [Hono公式ドキュメント](https://hono.dev/)
- [Bun公式ドキュメント](https://bun.sh/)
- [Cloudflare Pages公式ドキュメント](https://pages.cloudflare.com/)
- [Honox + Prisma + Cloudflare で最速最小のWEBアプリケーションを作成する](https://zenn.dev/kimikimi/articles/1f1ebd54d276d7)
- [MDX公式ドキュメント](https://mdxjs.com/)
- [Honoxのサンプル](https://github.com/yusukebe/honox-examples/tree/main)
- [mooriiiさんのブログ](https://github.com/mr04vv/blog)

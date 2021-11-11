# HAIR_LOG_APP

## About

美容師が自分の作品をヘアカタログのようにお客様に見せられるような web アプリを作成しようと考えています。

## Environment

- node ^14.17.0

  - vercel の都合でこのバージョンです

- Next.js : 12.0.3
- react : 17.0.2
- typescript : ^4.4.4

## Tools

- ESLint
- Prettier
- stylelint
- Sass
  - CSS 設計
    - CSS Modules
    - ITCSS × RSCSS

## hosting

- frontend
  - vercel
- backend
  - vercel(Next.js API)

## How to

- install

```bash
$ yarn
```

- ローカル開発

```bash
$ yarn dev
```

- formatting

```bash
## js
$ yarn lint:js:fix

## scss
$ yarn lint:style:fix

## jsとcss両方
$ yarn lint:fix
```

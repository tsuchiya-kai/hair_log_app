# HAIR_LOG_APP

## About

美容師が自分の作品をヘアカタログのようにお客様に見せられるような web アプリを作成しようと考えています。

※対応ブラウザはひとまずGoogle  Chromeのみとさせていただきます🙇‍♂️

## hosting

こちらからご覧いただけます：https://hair-log-app.vercel.app/

Basic 認証：

- ID: reviewer
- PassWord: dHY6jR4d6XzVu5LyvZ7F9925OA74seGh

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
  - 設計: CSS Modules + ITCSS + RSCSS

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

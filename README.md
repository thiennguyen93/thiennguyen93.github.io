![Thien Nguyen's Blog](https://thiennguyen.dev/assets/img/blog-thumbnail-page-cv.png)

![Github Pages (en)](https://github.com/thiennguyen93/thiennguyen93.github.io/actions/workflows/main.yml/badge.svg) &emsp; ![Google Hosting (vi)](https://github.com/thiennguyen93/thiennguyen93.github.io/actions/workflows/firebase-hosting-merge.yml/badge.svg)

# About Thien Nguyen's microblog

- This is my personal microblog.
- Built with [Hexo](https://hexo.io/) - A fast, simple & powerful static site generator
- Hosted on
  - GitHub Pages: [https://thiennguyen93.github.io](https://thiennguyen93.github.io) or [https://thiennguyen.dev](https://www.thiennguyen.dev)
  - Cloudflare Pages: [https://thien.pages.dev](https://thien.pages.dev)

# Configs

- Adding .env with the following environment variables:
  - GH_TOKEN: Github personal access token (scope: repo)
  - GH_PRIVATE_THEME_REPOSITORY: the name of theme repository

# Github Page

## On local

- Clone the source;
- Run command "npm run myinstall" to install packages;
- Run command "npm run build-gh-page" to generate Github Page;
- Done

## With Github Action

- Personal access token is required.
- Go to repository Settings → Secrets and Variables → Actions, add two secrets
  - GH_PRIVATE_THEME_REPOSITORY: Custom theme private repository
  - GH_TOKEN: Personnal access token to give access to the private theme repository

# Netlify

- Site settings > Build & deploy > Build settings;
  - Build command: npm install --global yarn && yarn build
  - Publish directory: public
- Site settings > Build & deploy > Environment;
  - Set the environment variables same as .env file;

# Dev mode

Run this command

```
npm run dev
```

Please update the .env

```
GH_PRIVATE_THEME_REPOSITORY=<theme_repo>#<branch>
GH_TOKEN=<Token to get the theme repos>
```

# SHARED COMMON ASSETS

Because the two different source folders shares the same assets folder. Need to copy `assets`  folder to each source folder when running blog (auto-copy).

## STYLES

### Classes

#### `in-view-effect`

If class is added to an img element. If the image is in the user's view, an additional class `in-view` is added automatically to the img element.

### `not-gallery-item`

If class is added to an img element. It will be ignored in the gallery of the post.

# LOW QUALITY IMAGE PLACEHOLDER

- Package  <https://www.npmjs.com/package/lqip-modern>

This package helps the low quality version of each images stored in the `root/assets/img` directory. The LQIP is saved under path `source[_<<{language_code}>>]/assets/img/lqip/<<file_name>>.webp`

# THIRD-PARTY APIs

1. Restcountries.com

- <https://restcountries.com/v3.1/all?fields=name,flags>

2. Github Emoji


## Sử dụng Emoji của Gihub
Refer to this page https://jimit105.github.io/github-emoji-cheatsheet/
You can use Github version of Emojis in your post :+1: :computer: :kissing_closed_eyes:

## Sử dụng Fontawesome
Nếu cần dùng icon nào mới trong bộ fontawesome (v6)
Tìm đến `/assets/css/all.css` (cái này sẽ exclude khỏi source chính, ko nhúng vào page)
Tìm icon cần thêm ví dụ
```css
.fa-pencil::before {
  content: "\f303"; }
```
Copy & paste vào `/assets/css/font-icon.css` đúng vị trí (liền kề các icon đã có sẵn)

# POST
## Front matter
```
---
title: Âm thanh của hạnh phúc
date: 2024/01/28
categories:
- Journal
language: en
toc: false
cover: /assets/img/2024-01-28-am-thanh-hanh-phuc-cover.webp
fetchpriority: "high"    --> Reduce LCP
cover_lqip: /assets/img/lqip/2024-01-28-am-thanh-hanh-phuc-cover.webp
thumbnail: /assets/img/2024-01-28-am-thanh-hanh-phuc-thumbnail.jpg
useStyles: ['/assets/styles/img-tilt-effect.css','/assets/styles/bulma-timeline.css']
```
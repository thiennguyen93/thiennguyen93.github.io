![Github Pages](https://github.com/thiennguyen93/thiennguyen93.github.io/actions/workflows/main.yml/badge.svg)


# About Thien Nguyen's microblog
- This is my personal microblog.
- Built with [Hexo](https://hexo.io/) - A fast, simple & powerful static site generator
- Hosted on
    - GitHub Pages: [https://thiennguyen93.github.io/](https://thiennguyen93.github.io)
# Configs:
- Adding .env with the following environment variables:
    - GH_TOKEN: Github personal access token (scope: repo)
    - GH_PRIVATE_THEME_REPOSITORY: the name of theme repository
# Github Page: 
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

# Netlify:
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



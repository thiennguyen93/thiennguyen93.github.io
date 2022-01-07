# About Thien Nguyen's microblog
[![Netlify Status](https://api.netlify.com/api/v1/badges/b87fd3bc-c3eb-462c-ac91-79507e22feb7/deploy-status)](https://app.netlify.com/sites/thiennguyen-blog/deploys)
- This is my personal microblog.
- Built with [Hexo](https://hexo.io/) - A fast, simple & powerful static site generator
- Hosted on
    - GitHub Pages: [https://thiennguyen93.github.io/](https://thiennguyen93.github.io)
    - Netlify: [https://thiennguyen-blog.netlify.app](https://thiennguyen-blog.netlify.app)
    - Vercel: [https://thiennguyen.vercel.app/](https://thiennguyen.vercel.app/)
    - CloudFlare Page: [https://thiennguyen.pages.dev/](https://thiennguyen.pages.dev/)
# Configs:
- Adding .env with the following environment variables:
    - GH_TOKEN: Github personal access token (scope: repo)
    - GH_PRIVATE_THEME_REPOSITORY: the name of theme repository
# Github Page:
- Clone the source;
- Run command "npm run myinstall" to install packages;
- Run command "npm run build-gh-page" to generate Github Page;
- Done

# Netlify:
- Site settings > Build & deploy > Build settings;
    - Build command: npm install --global yarn && yarn build
    - Publish directory: public
- Site settings > Build & deploy > Environment;
    - Set the environment variables same as .env file;

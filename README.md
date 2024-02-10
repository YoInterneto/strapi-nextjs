# Strapi and Next JS project
## Next project (app)
Create a new project
npx create-next-app app

### Next configuration
output: 'export' -> generate a build
compress: false -> disable the compression
distDir: 'static-build' -> name of the build
trailingSlash: true -> /page/ will be redirected to /page

### Installed dependecies
Slick carrusel
npm install react-slick slick-carousel
Sitemap generation
npm install next-sitemap

## Strapi project (api)
npx create-strapi-app@latest api
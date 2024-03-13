# Strapi and Next JS project
## Next project (app)
Create a new project, Next version `14.1.0`
```bash
npx create-next-app@14.1.0 app
```
Node version should be greater than 18.17

### Next configuration
| Option | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `output` | `export` | generate a build |
| `compress` | `false` | disable the compression |
| `distDir` | `static-build` | name of the build |
| `trailingSlash` | `true` | /page/ will be redirected to /page |

### Installed dependecies
Slick carrusel
```bash
npm install react-slick slick-carousel
```
Sitemap generation
```bash
npm install next-sitemap
```

## Strapi project (api)
Create a new project, Strapi version `4.20.0`
```bash
npx create-strapi-app@v4.20.0 api
```

### Installed dependecies
Deep populate plugin
```bash
npm install strapi-plugin-populate-deep
```
Localization plugin
```bash
npm install @strapi/plugin-i18n
```
SEO plugin
```bash
npm install @strapi/plugin-seo
```  
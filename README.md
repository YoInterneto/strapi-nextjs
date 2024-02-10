# Strapi and Next JS project
## Next project (app)
Create a new project
```bash
npx create-next-app app
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
```bash
npx create-strapi-app@latest api
```
<p align="center">
  <img src="https://github.com/lizjulien/angular-static-starter/blob/master/src/assets/img/logo.png" alt="Angular Static Starter" height="320"/>
</p>

# Angular Static Starter [![Angular Static Starter](https://img.shields.io/badge/static-angular-brightgreen.svg?style=flat)](https://github.com/lizjulien/angular-static-starter)
> Static Generator for Angular based app

A minimal starter for generate static website using the power of Angular

> More information about Angular Universal: [**angular/universal**](https://github.com/angular/universal)  

This repo demonstrates the use of Server Side Rendering with a script to dump app to static website, and hosting everywhere.

---

### Installation
* `npm install`

### Development (Client-side only rendering)
* run `npm run start` which will start `ng serve`

### Production
**`npm run build`** - Compiles your application, spins up a Node Express to serve your application with `pm2`, use the `build-static` script to get all website to full html, with Angular client-side code available.

**Note**: To deploy your static site to a static hosting platform you will have to deploy the `site/localhost_4200` content, rather than the usual `dist`

# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
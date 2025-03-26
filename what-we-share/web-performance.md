# Introduction to Web Performance <!-- omit in toc -->

Table of Contents

- [How slow is slow?](#how-slow-is-slow)
- [Tool](#tool)
- [How to make it faster](#how-to-make-it-faster)
- [Modern Web Application Architecture](#modern-web-application-architecture)
- [1. Cache assets as much as possible](#1-cache-assets-as-much-as-possible)
  - [Cache on browsers](#cache-on-browsers)
  - [Cache on Servers](#cache-on-servers)
- [2. Compression](#2-compression)
- [3. Reduce overhead on browsers](#3-reduce-overhead-on-browsers)
  - [Consider HTTP3](#consider-http3)
  - [Be avoid to generate CORS](#be-avoid-to-generate-cors)
- [Recommended Readings](#recommended-readings)

## How slow is slow?

[Core Web Vitals](https://web.dev/articles/vitals)

  - FCP (First Contentful Paint) - Respond quickly
  - LCP (Largest Contentful Paint) - Get to the point
  - CLS (Cumulative Layout Shift) - Don't move stuff
  - FID (First Input Delay) - Don't load too much

## Tool

[lighthouse](https://developer.chrome.com/docs/lighthouse/overview) - a built-in tool in Google Chrome provides **Core Web Vitals** and advices on the website

## How to make it faster

1. Reduce requests to servers
2. Reduce size of each request
3. Make requests as early as possible
4. Make requests as much as possible concurrently
5. Make the web server faster

## Modern Web Application Architecture

Modern Web Application often consists of three major components
  - **Single Page Application** (Public and Static)
  - **API** (Authenticated and Dynamic), and
  - **Downloadable Content** (Authenticated but Static)

## 1. Cache assets as much as possible

### Cache on browsers

Caution: It does not work for the first time load

1a. What can be cached

- HTML file
- Javascript files
- CSS files
- AOB - images, fonts, robot.txt, favicon

1b. add HTTP headers to web server

- `Cache-Control "private, max-age=31536000"` (local cache)
- `Cache-Control "public, max-age=31536000"` (shared cache)

2a. What cannot be cached

- API response json
- documents uploaded

2b. to secure private content, consider

- `Cache-Control "no-store, no-cache, must-revalidate, proxy-revalidate"`

### Cache on Servers

- Consider applying cache on API Requests
- It could be very hard if it is on RPC design
- If you stick on REST and make each api stateless, the cache key can be defined pretty easily (by resource url)

## 2. Compression

- Text Files
  - Web Server can always compress data before it sends
  - Common compression type - gzip, br (brotli), deflate
  - Generally, the compression rate of br is the best
  - Can be quite effective on text data (e.g. json, js, css, html etc)
  - nodejs - [compression](https://github.com/expressjs/compression)
  - nginx in `default.conf`

    ```bash
    server {
        listen {{ .Values.service.port }};
        root /usr/share/nginx/html;

        gzip on;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml image/x-icon;

        ...
    }
    ```

- Multimedia files

  - consider a good format
    - `jpeg`, `jpg`, `gif`, `png` - consider switching to `webp`, you might check on [squoosh](https://squoosh.app) by google
    - `svg` - optimize by [svgo](https://github.com/svg/svgo)
    - to make it more automatic, consider vite [plugin](https://github.com/FatehAK/vite-plugin-image-optimizer)

## 3. Reduce overhead on browsers

### Consider [HTTP3](https://www.cloudflare.com/learning/performance/what-is-http3)

- Make sure your web content supports at least HTTP2, upgrade your infrastructure to support HTTP3
- [How to check which protocol I am using?](https://stackoverflow.com/questions/78246219/azure-application-gateway-http-2-not-working)

### Be avoid to generate [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- if the website calls foreign websites, it will generate an additional calls (preflight requests) before it starts
- consider having proxy server so that the browsers make calls under the **SAME** domain on the website

## Recommended Readings

- [Tips to improve website speed | How to speed up websites](https://www.cloudflare.com/learning/performance/speed-up-a-website)
- [Website Load Time & Speed Statistics: Is Your Site Fast Enough?](https://wp-rocket.me/blog/website-load-time-speed-statistics)
- [NGINX Performance Tuning Tips and Optimization Strategies](https://www.cloudpanel.io/blog/nginx-performance)

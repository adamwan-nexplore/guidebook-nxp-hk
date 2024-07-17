# Web Performance

## Modern Web Application Architecture

### Static Assets

#### Public

- can be cached

- Javascript files
- CSS files
- AOB - images, fonts, robot.txt, favicon

- Do not load
- Load Less
- Load Together
- Do not load (again)

#### Private

- cannot be cached

- documents

### Dynamic Serving

- JSON data from API

## Blocking on being fast

- CORS - Cross-Origin Resource Sharing - generate a lot of preflight requests
- Server distance from requestors
- Network Speed

## General Approaches on Optimizing

- Perceived performance
- Keep the skeleton of the page
- Do not show only a loading icon
- Bored by nothing to do

Web Vitals
- Chrome LightHouse
-
- FCP (First Contentful Paint) - Respond Quick
- LCP (Largest Contentful Paint) - Get to the point
- CLS (Cumulative Layout Shift) - Don't move stuff
- FID (First Input Delay) - Don't load too much


- First Time Load
- Non-first Time Load

- Maximize concurrent load of requests

  - Reduce blocking loads on SAP Assets (Vite, React)
  - Reduce blocking loads on API (NodeJS & Databases)

- Reducing the number of requests to the server

  - make non-shared resources inline in JS files (Vite)
  - Cache something not private (Nginx)

- Make assets smaller while delivering

  - Compress assets (Nginx / NestJS) - gzip, br (brotli)
  - Minimize assets (Nginx)

- Make API faster (Developer Brains, better hardware)

- Reduce CORS / CSP

  - Use same domain for Web Sites and APIs (Better Infrastructure design)

- HTTP 1.1 / HTTP 2 -> HTTP3 (QUIC)
- https://www.cloudflare.com/learning/performance/what-is-http3/ (Cloudflare)
- https://nginx.org/en/docs/quic.html (Nginx)
- https://learn.microsoft.com/en-us/azure/application-gateway/configuration-listeners#http2-support (Application Gateway)
- How to check? https://stackoverflow.com/questions/78246219/azure-application-gateway-http-2-not-working
- Need to enable both

## Modern Expectation on Fast Web

- Page Load should be 3 seconds or less
- Website Load should be 5 seconds or less
- Will harm SEO in Search Engine (not related to us)

- https://www.cloudflare.com/learning/performance/speed-up-a-website
- https://wp-rocket.me/blog/website-load-time-speed-statistics
- https://vite-workshop.vercel.app/json-named-exports

- https://frontendmasters.com/courses/web-perf/
- https://frontendmasters.com/courses/react-performance/
- https://frontendmasters.com/courses/dev-tools/
- https://frontendmasters.com/courses/web-app-performance/

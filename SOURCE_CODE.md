# 完整源码逐文件清单

本文件收录 ZIP 中全部文本源码与配置，每个文件按路径单独展示。图片、视频、音频等二进制资源已原样放在 `public/`，对应路径见 `PROJECT_STRUCTURE.md`。

## `.gitattributes`

````.gitattributes
# Auto detect text files and perform LF normalization
* text=auto
````

## `.gitignore`

````.gitignore
node_modules/
dist/
.DS_Store
*.log
````

## `.gitpod.yml`

````.gitpod.yml
tasks:
  - name: Portfolio website
    init: corepack enable && pnpm install
    command: pnpm dev --host 0.0.0.0

ports:
  - port: 5173
    onOpen: open-preview
    visibility: public
````

## `ASSET_MANIFEST.md`

````ASSET_MANIFEST.md
# 静态资源清单

以下网站静态资源已全部包含在 `public/` 中。图片、视频和音频是二进制文件，因此不展开成文本代码。

| 项目内路径 | 大小 |
|---|---:|
| `public/a-plus/A1.jpg` | 118.1 KB |
| `public/a-plus/A2.jpg` | 87.8 KB |
| `public/a-plus/A3.jpg` | 114.4 KB |
| `public/a-plus/G1.jpg` | 84.1 KB |
| `public/a-plus/G2.jpg` | 123.5 KB |
| `public/a-plus/H1.jpg` | 181.9 KB |
| `public/a-plus/H2.jpg` | 86.2 KB |
| `public/audio/ambient.mp3` | 1240 KB |
| `public/basic-vi/Lastar-VI_01.jpg` | 78.8 KB |
| `public/basic-vi/Lastar-VI_02.jpg` | 77.2 KB |
| `public/basic-vi/Lastar-VI_03.jpg` | 109.5 KB |
| `public/basic-vi/Lastar-VI_04.jpg` | 100.8 KB |
| `public/basic-vi/Lastar-VI_05.jpg` | 96 KB |
| `public/basic-vi/Lastar-VI_06.jpg` | 136.4 KB |
| `public/basic-vi/Lastar-VI_07.jpg` | 161.7 KB |
| `public/basic-vi/Lastar-VI_08.jpg` | 142.5 KB |
| `public/basic-vi/Lastar-VI_09.jpg` | 168.1 KB |
| `public/basic-vi/Lastar-VI_10.jpg` | 174 KB |
| `public/basic-vi/Lastar-VI_11.jpg` | 200.5 KB |
| `public/basic-vi/Lastar-VI_12.jpg` | 141.3 KB |
| `public/basic-vi/Lastar-VI_13.jpg` | 166 KB |
| `public/basic-vi/Lastar-VI_14.jpg` | 267.7 KB |
| `public/basic-vi/Lastar-VI_15.jpg` | 209.5 KB |
| `public/basic-vi/Lastar-VI_16.jpg` | 89.2 KB |
| `public/brand-projects/independent-site.jpg` | 392.4 KB |
| `public/brand-projects/woman-bag.jpg` | 409.6 KB |
| `public/brochure/1.jpg` | 105.8 KB |
| `public/brochure/11.jpg` | 173.5 KB |
| `public/brochure/2.jpg` | 214.8 KB |
| `public/brochure/3.jpg` | 242.3 KB |
| `public/brochure/4.jpg` | 172.6 KB |
| `public/brochure/5.jpg` | 328.4 KB |
| `public/brochure/6.jpg` | 345.5 KB |
| `public/brochure/7.jpg` | 249.6 KB |
| `public/brochure/8.jpg` | 404.6 KB |
| `public/brochure/9.jpg` | 109.4 KB |
| `public/hero-bags.jpg` | 209.5 KB |
| `public/hero-product.jpg` | 160.9 KB |
| `public/hero-travel.webp` | 110.9 KB |
| `public/main-feature/1.jpg` | 93.4 KB |
| `public/main-feature/2.jpg` | 110.4 KB |
| `public/main-image-2/1.1.jpg` | 272.2 KB |
| `public/main-image-2/1.2.jpg` | 339 KB |
| `public/main-image-2/1.3.jpg` | 303.7 KB |
| `public/main-image-2/1.4.jpg` | 339.3 KB |
| `public/main-image-2/1.5.jpg` | 338.6 KB |
| `public/main-image-2/1.6.jpg` | 363.1 KB |
| `public/main-image-2/2.3.jpg` | 277.3 KB |
| `public/main-image-2/2.5.jpg` | 216.7 KB |
| `public/main-image-2/2.6.jpg` | 292 KB |
| `public/main-image-2/2.7.jpg` | 313.1 KB |
| `public/main-image-2/3.0.jpg` | 205.1 KB |
| `public/main-image-2/3.1.jpg` | 151.5 KB |
| `public/main-image-2/3.2.jpg` | 148.9 KB |
| `public/main-image/1.1.jpg` | 300.8 KB |
| `public/main-image/1.2.jpg` | 385.8 KB |
| `public/main-image/1.3.jpg` | 216.6 KB |
| `public/main-image/1.4.jpg` | 392.7 KB |
| `public/main-image/1.5.jpg` | 378.9 KB |
| `public/main-image/1.6.jpg` | 378.8 KB |
| `public/main-image/2.2.jpg` | 263 KB |
| `public/main-image/2.3.jpg` | 432.1 KB |
| `public/main-image/2.4.jpg` | 416.6 KB |
| `public/main-image/2.5.jpg` | 361.6 KB |
| `public/main-image/2.6.jpg` | 581.1 KB |
| `public/main-image/2.7.jpg` | 536.9 KB |
| `public/main-image/3.0.jpg` | 547.2 KB |
| `public/main-image/3.1.jpg` | 456.9 KB |
| `public/main-image/3.2.jpg` | 646.7 KB |
| `public/moving/022-poster.jpg` | 78.6 KB |
| `public/moving/022.mp4` | 21225.6 KB |
| `public/moving/853-poster.jpg` | 324.6 KB |
| `public/moving/853.mp4` | 25361.7 KB |
| `public/new-video/electric-standing-desk.mp4` | 45735.1 KB |
| `public/packaging-effects/1.jpg` | 135.8 KB |
| `public/packaging-effects/2.jpg` | 209.1 KB |
| `public/packaging-effects/3.jpg` | 222.7 KB |
| `public/packaging-effects/4.jpg` | 134.6 KB |
| `public/packaging-effects/5.jpg` | 127.8 KB |
| `public/packaging-effects/6.jpg` | 241.6 KB |
| `public/packaging-effects/7.jpg` | 100 KB |
| `public/packaging-effects/revised/01.jpg` | 154.5 KB |
| `public/packaging-effects/revised/02.2.jpg` | 106.2 KB |
| `public/packaging-effects/revised/02.jpg` | 114.1 KB |
| `public/packaging-effects/revised/03.jpg` | 82.2 KB |
| `public/packaging-effects/revised/04.jpg` | 102.9 KB |
| `public/packaging-effects/revised/05.jpg` | 76.1 KB |
| `public/packaging-effects/revised/06.jpg` | 78.2 KB |
| `public/packaging-effects/revised/07.jpg` | 125.1 KB |
| `public/packaging-effects/revised/08.jpg` | 83.4 KB |
| `public/packaging/04.jpg` | 150.6 KB |
| `public/packaging/05s.jpg` | 361.5 KB |
| `public/packaging/5(1).jpg` | 214.8 KB |
| `public/packaging/f1.jpg` | 213 KB |
| `public/packaging/f2.1.jpg` | 355.4 KB |
| `public/packaging/f2.2.jpg` | 346 KB |
| `public/packaging/f2.3.jpg` | 168.6 KB |
| `public/packaging/f2.4.jpg` | 359.8 KB |
| `public/packaging/f2.5.jpg` | 370.1 KB |
| `public/packaging/f2.jpg` | 372 KB |
| `public/profile-vincent.jpg` | 427 KB |
| `public/social-ads/0.5.jpg` | 93.2 KB |
| `public/social-ads/0.6.jpg` | 84.1 KB |
| `public/social-ads/01.jpg` | 70.8 KB |
| `public/social-ads/02.jpg` | 125.3 KB |
| `public/social-ads/04.jpg` | 98.7 KB |
| `public/social-ads/05.jpg` | 102.3 KB |
| `public/social-ads/06.jpg` | 77.3 KB |
| `public/social-ads/07.jpg` | 186.1 KB |
| `public/social-ads/08.jpg` | 152.7 KB |
| `public/social-ads/09.jpg` | 166.5 KB |
| `public/social-ads/10.jpg` | 141.4 KB |
| `public/social-ads/A1.jpg` | 126.7 KB |
| `public/social-ads/A2.jpg` | 144.9 KB |
| `public/social-ads/B1.jpg` | 168 KB |
| `public/social-ads/B2.jpg` | 164.3 KB |
| `public/social/025.jpg` | 225.8 KB |
| `public/social/05s.jpg` | 361.5 KB |
| `public/social/06.jpg` | 458 KB |
| `public/social/07.jpg` | 486.8 KB |
| `public/social/0a.jpg` | 202 KB |
| `public/social/13.jpg` | 464.7 KB |
| `public/social/E1.jpg` | 385.6 KB |
| `public/social/E2.jpg` | 163.1 KB |
| `public/social/f1.jpg` | 213 KB |
| `public/social/f2.jpg` | 372 KB |
| `public/social/W1.jpg` | 609.5 KB |
| `public/social/W2.jpg` | 373.3 KB |
| `public/vi-application/1.png` | 2138 KB |
| `public/vi-application/2.png` | 2462.1 KB |
| `public/vi-application/3.png` | 1850.1 KB |
| `public/vi-application/4.png` | 2067.5 KB |
| `public/vi-application/D1.jpg` | 63.9 KB |
| `public/vi-application/D2.jpg` | 56.9 KB |
| `public/vi-application/D3.jpg` | 38.7 KB |
| `public/vi-application/desk-lamp.jpg` | 106.2 KB |
| `public/vi-application/desk-lamp.png` | 1597.4 KB |
````

## `index.html`

````index.html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#171817" />
    <link rel="preload" as="image" href="/hero-bags.jpg" fetchpriority="high" />
    <title>陈庆志 / Visual Design Director</title>
  </head>
  <body><div id="root"></div><script type="module" src="/src/main.jsx"></script></body>
</html>
````

## `package.json`

````package.json
{
  "name": "qingzhi-chen-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {"dev": "vite", "build": "vite build", "preview": "vite preview"},
  "dependencies": {"@vitejs/plugin-react":"latest","vite":"latest","react":"latest","react-dom":"latest","lucide-react":"latest"},
  "devDependencies": {}
}
````

## `pnpm-lock.yaml`

````pnpm-lock.yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@vitejs/plugin-react':
        specifier: latest
        version: 6.1.1(vite@8.2.2)
      lucide-react:
        specifier: latest
        version: 1.42.0(react@19.2.8)
      react:
        specifier: latest
        version: 19.2.8
      react-dom:
        specifier: latest
        version: 19.2.8(react@19.2.8)
      vite:
        specifier: latest
        version: 8.2.2

packages:

  '@oxc-project/types@0.148.0':
    resolution: {integrity: sha512-Nm4s/jB+4FpFsPhWGEC4h7rzksesmtnMXomo6rCMcg/b8zLQuOziRgkCS1fxDCXOlJB/6Q8oABOZ/OP6RIPj9A==}

  '@rolldown/binding-android-arm-eabi@1.2.7':
    resolution: {integrity: sha512-EypzgnYCwyVY4NDHKzGmNJT5b+XaQEBniHxsMdeIQLB/tcCzZnhqrzHpZFbX9iaxx+5RiB8caATBtfvZP7zVxQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [android]

  '@rolldown/binding-android-arm64@1.2.7':
    resolution: {integrity: sha512-l17HE9EweWaqJZhuUuNBN/FzM62xw+DECVnJyvMsxn8vJFAGLy5QfLDoYAcronkAN8VxKZHezDpulHDPx95vFw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [android]

  '@rolldown/binding-darwin-arm64@1.2.7':
    resolution: {integrity: sha512-8ED8ELFvHXc6OCETIn4gXObPiaR6bckM/ipXtbzlPVDRMBfEGjCKgO90F9YtfdpDatVx/ZQw7aZ1vUMf/+T3Mw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [darwin]

  '@rolldown/binding-darwin-x64@1.2.7':
    resolution: {integrity: sha512-/WPripjtiAIZ2tWY7ddijORT0Ujg87wxWW/qcoFVCKAWVDPhtY0xr7Dj0M3GyNGz60jGwTElhro/mkF9dT7dDQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [darwin]

  '@rolldown/binding-freebsd-x64@1.2.7':
    resolution: {integrity: sha512-14DI4NcqpvbICxSnGLx3PmtDaWqRP/KGSGb6C+JLLVPeZRl6dKdHba3pGsqT3vpdTqhEYIPG0MMQ8c0xYqoJxA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [freebsd]

  '@rolldown/binding-linux-arm-gnueabihf@1.2.7':
    resolution: {integrity: sha512-bxrWIRvHWQvbJwi+VIie/kDJmQxcNE6xxWwZdqF/ExVAigtHkv54WTLQPb+QsZdnFy18fg7JPfWGL0RH6vwIlQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [linux]

  '@rolldown/binding-linux-arm64-gnu@1.2.7':
    resolution: {integrity: sha512-toOY2BChBZyuxU7OYX6Tn389di4IzAqPTycVcci0O7FSfBqzRB3RZn+K5Is6ANf4tmgRd/K1yZTsNTXbkXsnLg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-arm64-musl@1.2.7':
    resolution: {integrity: sha512-lAIXTH/aiLRLxsTgQvfhjo4K1ydWIp00+V0voOr9beb/9ZmkUFrSIb03dXNFRgMNvkE6oGsF10ioQ6UsI+vS5Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@rolldown/binding-linux-ppc64-gnu@1.2.7':
    resolution: {integrity: sha512-kdnwS28Pkenp/mZMRwjXXXwxQ7pIsm+bF919LUK93BOyhcLsrVKdP2p9fxpiPNPAbNuch8ypQt0pm2P2LYCAGg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-s390x-gnu@1.2.7':
    resolution: {integrity: sha512-516OdsyLdr5E65paF3yBF55t8mfm9+gmtCsK3xI7XKXIT7EfRlHhxL8K/NR6Hu8BWSgF5+1w74lTL0+nxcc8Qw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-x64-gnu@1.2.7':
    resolution: {integrity: sha512-r8/z8n7GFaYRln3xmP1Cxy0HH/HLM0uBUPkEuSVEfKGDA89M0FsZRZJRSwe/tJjRx+fpH/gjorfhB8tmEbSFLA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-x64-musl@1.2.7':
    resolution: {integrity: sha512-pAsE8iiDxUg1xBqdhrTfg45AVDVpirjz00sblEYClGNNcMnDb+e8beQgqIAw6LvauX/APvgxUnwrgun/YYGBhw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@rolldown/binding-openharmony-arm64@1.2.7':
    resolution: {integrity: sha512-lTcIYmmnQQA8Or/2DatS6oSqcdLHvendjS+zLu+FwgToynWMRSmQdpM65fTANJgIS4mjbMOo5KT2lnT9SAb96w==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [openharmony]

  '@rolldown/binding-win32-arm64-msvc@1.2.7':
    resolution: {integrity: sha512-e3Gu3WxbNk/UqQhxqU7YIYO+9ZBvWNz3U+h/qRFosscMFzdRPbXYSaSWgSnklv2fz1TgzBTcti2z35c/7irsHw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [win32]

  '@rolldown/binding-win32-x64-msvc@1.2.7':
    resolution: {integrity: sha512-W/jg5qoRSqjsEv0+dZi4e687mcHqmVuU0P4fK6qS/xjetW2Gmc1W8j//z5nAeNcC8Ttm0hV46IjcYeuVwYhuiw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [win32]

  '@rolldown/pluginutils@1.0.1':
    resolution: {integrity: sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==}

  '@vitejs/plugin-react@6.1.1':
    resolution: {integrity: sha512-yxLaQV9gkhS8ezJqCM6+ndU7mDY6gqAg75NQ+0IjwEI8IYOmQCgkRwHKVSfWXW076DsqMo0Dk+0FK1U+M5RgFw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    peerDependencies:
      '@rolldown/plugin-babel': ^0.1.7 || ^0.2.0
      babel-plugin-react-compiler: ^1.0.0
      oxc-transform-react: ^0.145.0
      vite: ^8.0.0
    peerDependenciesMeta:
      '@rolldown/plugin-babel':
        optional: true
      babel-plugin-react-compiler:
        optional: true
      oxc-transform-react:
        optional: true

  detect-libc@2.1.2:
    resolution: {integrity: sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==}
    engines: {node: '>=8'}

  fdir@6.5.0:
    resolution: {integrity: sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  lightningcss-android-arm64@1.33.0:
    resolution: {integrity: sha512-gEpRTalKdosp4Bb8qWtc2iOgE5SeIHlpS1up9bFq2wAyYhl1UdTObYiHe98zEM9SQvSoqQZ1IQD0JNpg3Ml5pg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [android]

  lightningcss-darwin-arm64@1.33.0:
    resolution: {integrity: sha512-Sciaz8eenNTKn9b3t7+xr0ipTp9YxKQY4npwQ3mrRuL0BAVHBLyZxofhaKBAVtzmtRZ/zTyo0/to4B1uWG/Djg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [darwin]

  lightningcss-darwin-x64@1.33.0:
    resolution: {integrity: sha512-Z5UPAxzrjlWNNyGy6i65cJzzvgJ5D3T6wMvs+gWpY9d7qRhANrxqAp6LhxIgZhWEw18RfJTGcRxjuLIBr+m8XQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [darwin]

  lightningcss-freebsd-x64@1.33.0:
    resolution: {integrity: sha512-QQM/Ti/hQajJwCY+RiWuCZ9sdtI/XQk7nDK5vC8kkdwixezOlDgvDx7+RT+QjK6FcFT4MpsuoBnHIo/O3StRRg==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [freebsd]

  lightningcss-linux-arm-gnueabihf@1.33.0:
    resolution: {integrity: sha512-N7FVBe6iS24MlM6R/4RBTxGhQheZGs7tiQ9U32UtF75NzP5Q7xWPRqLBCKxlRQRk3rY1jCIPLzx7WzOhuUIRLQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm]
    os: [linux]

  lightningcss-linux-arm64-gnu@1.33.0:
    resolution: {integrity: sha512-j2v/itmy4HlNxlc6voKXYgBqNi0Ng2LShg4z7GufpEgs05P+2suBVyi9I6YHq5uoVFx9ETin3eCEhLVyXGQnKg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-arm64-musl@1.33.0:
    resolution: {integrity: sha512-yiO5ROMuYQgXbC60yjZU5CYSFZGKXL0HFATXt9mHJn1+zW55oCtMI9NfcVhYLMFDL7gV7oBPon/EmMMGg2OvtQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  lightningcss-linux-x64-gnu@1.33.0:
    resolution: {integrity: sha512-ar+Ju7LmcN0Jo4FpL4hpFybwNG9/3A/Br5KW2n2jyODg3MEZXaDYADdemoNS+BDNfMgKvylJLj4S5tyRActuAg==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-x64-musl@1.33.0:
    resolution: {integrity: sha512-RYiYbkokw0trfKqqzfF55lginwEPrD3OJDfTuJzFs1MK6iFnDenaz1fqLLtX4ITG3OktJQXOeTaw1awrBAlZPw==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  lightningcss-win32-arm64-msvc@1.33.0:
    resolution: {integrity: sha512-1K+MPfLSFVpphzpdbfkhlWk6wBrTObBzS2T6db10PNOZgR9GoVsAWzwNyuhUYYbTp23j+4RrncfujZ4uAzXvwA==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [win32]

  lightningcss-win32-x64-msvc@1.33.0:
    resolution: {integrity: sha512-OlEICDx/Xl0FqSp4bry8zFnCvGpig3Gl4gCquvYwHuqJKEC1+n9NgDniFvqHGmMv1ZkqDJrDqKKSykTDX+ehuA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [win32]

  lightningcss@1.33.0:
    resolution: {integrity: sha512-WkUDrojuJs0xkgGf2udWxa3yGBRxPtxUkB79i6aCZLRgc7PM8fZe9TosfPDcvEpQZbuFASnHYmRLBLUbmLOIIA==}
    engines: {node: '>= 12.0.0'}

  lucide-react@1.42.0:
    resolution: {integrity: sha512-b3jprplnoLS8n5etw1z8xODe3hF/yjKATrTitsrKrnjUhCef5BdDct6Ppv3zVvzFwmtfWgLO6XNM3C9fAD93ug==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0

  nanoid@3.3.18:
    resolution: {integrity: sha512-DTg4MJbGMWkfi6VZFdNt2/caMbQy4Ou+Op/hJQvGEWcnVfoA1QA+xzRKAzw9jD6+GVOOeYr/mIcuDSdug6F6+w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@4.0.7:
    resolution: {integrity: sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==}
    engines: {node: '>=12'}

  postcss@8.5.28:
    resolution: {integrity: sha512-RRuzqDtt5Y9h3quz5hWhK+TPnsmVs6WwSU6LkJMeY4HstUEDuYTG8UJSdawMRzmzAtV+KEoG8N3Qg2qLy5vM/A==}
    engines: {node: ^10 || ^12 || >=14}

  react-dom@19.2.8:
    resolution: {integrity: sha512-rVprimfGBG3DR+Tq0IQG2DT5PxKth1WIGDmj5yPmlzr4YBe7uyE+Du4oVqTDXZSHGGGXRtTJEGSSePyQCMBglQ==}
    peerDependencies:
      react: ^19.2.8

  react@19.2.8:
    resolution: {integrity: sha512-PWaYA1L/q9u2u7xYQi+Y3L3Yfnie7XyLeaJICV1MGD6LprsBxcAqGjYyr0eY3p+QdsA+x/Irkt4Qif8D63+Sbw==}
    engines: {node: '>=0.10.0'}

  rolldown@1.2.7:
    resolution: {integrity: sha512-g0EtLvBjTUB7jhyV0S/TCup3v/XSVl45vUIGbOGU4QPiyjTenCe4mKuFvW9fEgYmS2Fo42AUssRmNuMziXdrig==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true

  scheduler@0.27.0:
    resolution: {integrity: sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  tinyglobby@0.2.17:
    resolution: {integrity: sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==}
    engines: {node: '>=12.0.0'}

  vite@8.2.2:
    resolution: {integrity: sha512-cFKLV/PRgAUlIRm5WjMjJ86jrftzpqcgH+Us+DS8mI3CDNiH30Whrz8uHL3+MOLPAgqbMBAqWdAHAphOAM+z/Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true
    peerDependencies:
      '@types/node': ^20.19.0 || >=22.12.0
      '@vitejs/devtools': ^0.4.0 || ^0.5.0
      esbuild: ^0.27.0 || ^0.28.0
      jiti: '>=1.21.0'
      less: ^4.0.0
      sass: ^1.70.0
      sass-embedded: ^1.70.0
      stylus: '>=0.54.8'
      sugarss: ^5.0.0
      terser: ^5.16.0
      tsx: ^4.8.1
      yaml: ^2.4.2
    peerDependenciesMeta:
      '@types/node':
        optional: true
      '@vitejs/devtools':
        optional: true
      esbuild:
        optional: true
      jiti:
        optional: true
      less:
        optional: true
      sass:
        optional: true
      sass-embedded:
        optional: true
      stylus:
        optional: true
      sugarss:
        optional: true
      terser:
        optional: true
      tsx:
        optional: true
      yaml:
        optional: true

snapshots:

  '@oxc-project/types@0.148.0': {}

  '@rolldown/binding-android-arm-eabi@1.2.7':
    optional: true

  '@rolldown/binding-android-arm64@1.2.7':
    optional: true

  '@rolldown/binding-darwin-arm64@1.2.7':
    optional: true

  '@rolldown/binding-darwin-x64@1.2.7':
    optional: true

  '@rolldown/binding-freebsd-x64@1.2.7':
    optional: true

  '@rolldown/binding-linux-arm-gnueabihf@1.2.7':
    optional: true

  '@rolldown/binding-linux-arm64-gnu@1.2.7':
    optional: true

  '@rolldown/binding-linux-arm64-musl@1.2.7':
    optional: true

  '@rolldown/binding-linux-ppc64-gnu@1.2.7':
    optional: true

  '@rolldown/binding-linux-s390x-gnu@1.2.7':
    optional: true

  '@rolldown/binding-linux-x64-gnu@1.2.7':
    optional: true

  '@rolldown/binding-linux-x64-musl@1.2.7':
    optional: true

  '@rolldown/binding-openharmony-arm64@1.2.7':
    optional: true

  '@rolldown/binding-win32-arm64-msvc@1.2.7':
    optional: true

  '@rolldown/binding-win32-x64-msvc@1.2.7':
    optional: true

  '@rolldown/pluginutils@1.0.1': {}

  '@vitejs/plugin-react@6.1.1(vite@8.2.2)':
    dependencies:
      '@rolldown/pluginutils': 1.0.1
      vite: 8.2.2

  detect-libc@2.1.2: {}

  fdir@6.5.0(picomatch@4.0.7):
    optionalDependencies:
      picomatch: 4.0.7

  fsevents@2.3.3:
    optional: true

  lightningcss-android-arm64@1.33.0:
    optional: true

  lightningcss-darwin-arm64@1.33.0:
    optional: true

  lightningcss-darwin-x64@1.33.0:
    optional: true

  lightningcss-freebsd-x64@1.33.0:
    optional: true

  lightningcss-linux-arm-gnueabihf@1.33.0:
    optional: true

  lightningcss-linux-arm64-gnu@1.33.0:
    optional: true

  lightningcss-linux-arm64-musl@1.33.0:
    optional: true

  lightningcss-linux-x64-gnu@1.33.0:
    optional: true

  lightningcss-linux-x64-musl@1.33.0:
    optional: true

  lightningcss-win32-arm64-msvc@1.33.0:
    optional: true

  lightningcss-win32-x64-msvc@1.33.0:
    optional: true

  lightningcss@1.33.0:
    dependencies:
      detect-libc: 2.1.2
    optionalDependencies:
      lightningcss-android-arm64: 1.33.0
      lightningcss-darwin-arm64: 1.33.0
      lightningcss-darwin-x64: 1.33.0
      lightningcss-freebsd-x64: 1.33.0
      lightningcss-linux-arm-gnueabihf: 1.33.0
      lightningcss-linux-arm64-gnu: 1.33.0
      lightningcss-linux-arm64-musl: 1.33.0
      lightningcss-linux-x64-gnu: 1.33.0
      lightningcss-linux-x64-musl: 1.33.0
      lightningcss-win32-arm64-msvc: 1.33.0
      lightningcss-win32-x64-msvc: 1.33.0

  lucide-react@1.42.0(react@19.2.8):
    dependencies:
      react: 19.2.8

  nanoid@3.3.18: {}

  picocolors@1.1.1: {}

  picomatch@4.0.7: {}

  postcss@8.5.28:
    dependencies:
      nanoid: 3.3.18
      picocolors: 1.1.1
      source-map-js: 1.2.1

  react-dom@19.2.8(react@19.2.8):
    dependencies:
      react: 19.2.8
      scheduler: 0.27.0

  react@19.2.8: {}

  rolldown@1.2.7:
    dependencies:
      '@oxc-project/types': 0.148.0
      '@rolldown/pluginutils': 1.0.1
    optionalDependencies:
      '@rolldown/binding-android-arm-eabi': 1.2.7
      '@rolldown/binding-android-arm64': 1.2.7
      '@rolldown/binding-darwin-arm64': 1.2.7
      '@rolldown/binding-darwin-x64': 1.2.7
      '@rolldown/binding-freebsd-x64': 1.2.7
      '@rolldown/binding-linux-arm-gnueabihf': 1.2.7
      '@rolldown/binding-linux-arm64-gnu': 1.2.7
      '@rolldown/binding-linux-arm64-musl': 1.2.7
      '@rolldown/binding-linux-ppc64-gnu': 1.2.7
      '@rolldown/binding-linux-s390x-gnu': 1.2.7
      '@rolldown/binding-linux-x64-gnu': 1.2.7
      '@rolldown/binding-linux-x64-musl': 1.2.7
      '@rolldown/binding-openharmony-arm64': 1.2.7
      '@rolldown/binding-win32-arm64-msvc': 1.2.7
      '@rolldown/binding-win32-x64-msvc': 1.2.7

  scheduler@0.27.0: {}

  source-map-js@1.2.1: {}

  tinyglobby@0.2.17:
    dependencies:
      fdir: 6.5.0(picomatch@4.0.7)
      picomatch: 4.0.7

  vite@8.2.2:
    dependencies:
      lightningcss: 1.33.0
      picomatch: 4.0.7
      postcss: 8.5.28
      rolldown: 1.2.7
      tinyglobby: 0.2.17
    optionalDependencies:
      fsevents: 2.3.3
````

## `PROJECT_STRUCTURE.md`

````PROJECT_STRUCTURE.md
# 项目完整目录结构

ZIP 根目录即项目根目录；未打包 `node_modules/`、`dist/`、原图备份或其他本机临时文件。

```text
qingzhi-chen-portfolio/
├── .gitattributes
├── .gitignore
├── .gitpod.yml
├── ASSET_MANIFEST.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public/a-plus/A1.jpg
├── public/a-plus/A2.jpg
├── public/a-plus/A3.jpg
├── public/a-plus/G1.jpg
├── public/a-plus/G2.jpg
├── public/a-plus/H1.jpg
├── public/a-plus/H2.jpg
├── public/audio/ambient.mp3
├── public/basic-vi/Lastar-VI_01.jpg
├── public/basic-vi/Lastar-VI_02.jpg
├── public/basic-vi/Lastar-VI_03.jpg
├── public/basic-vi/Lastar-VI_04.jpg
├── public/basic-vi/Lastar-VI_05.jpg
├── public/basic-vi/Lastar-VI_06.jpg
├── public/basic-vi/Lastar-VI_07.jpg
├── public/basic-vi/Lastar-VI_08.jpg
├── public/basic-vi/Lastar-VI_09.jpg
├── public/basic-vi/Lastar-VI_10.jpg
├── public/basic-vi/Lastar-VI_11.jpg
├── public/basic-vi/Lastar-VI_12.jpg
├── public/basic-vi/Lastar-VI_13.jpg
├── public/basic-vi/Lastar-VI_14.jpg
├── public/basic-vi/Lastar-VI_15.jpg
├── public/basic-vi/Lastar-VI_16.jpg
├── public/brand-projects/independent-site.jpg
├── public/brand-projects/woman-bag.jpg
├── public/brochure/1.jpg
├── public/brochure/11.jpg
├── public/brochure/2.jpg
├── public/brochure/3.jpg
├── public/brochure/4.jpg
├── public/brochure/5.jpg
├── public/brochure/6.jpg
├── public/brochure/7.jpg
├── public/brochure/8.jpg
├── public/brochure/9.jpg
├── public/hero-bags.jpg
├── public/hero-product.jpg
├── public/hero-travel.webp
├── public/main-feature/1.jpg
├── public/main-feature/2.jpg
├── public/main-image-2/1.1.jpg
├── public/main-image-2/1.2.jpg
├── public/main-image-2/1.3.jpg
├── public/main-image-2/1.4.jpg
├── public/main-image-2/1.5.jpg
├── public/main-image-2/1.6.jpg
├── public/main-image-2/2.3.jpg
├── public/main-image-2/2.5.jpg
├── public/main-image-2/2.6.jpg
├── public/main-image-2/2.7.jpg
├── public/main-image-2/3.0.jpg
├── public/main-image-2/3.1.jpg
├── public/main-image-2/3.2.jpg
├── public/main-image/1.1.jpg
├── public/main-image/1.2.jpg
├── public/main-image/1.3.jpg
├── public/main-image/1.4.jpg
├── public/main-image/1.5.jpg
├── public/main-image/1.6.jpg
├── public/main-image/2.2.jpg
├── public/main-image/2.3.jpg
├── public/main-image/2.4.jpg
├── public/main-image/2.5.jpg
├── public/main-image/2.6.jpg
├── public/main-image/2.7.jpg
├── public/main-image/3.0.jpg
├── public/main-image/3.1.jpg
├── public/main-image/3.2.jpg
├── public/moving/022-poster.jpg
├── public/moving/022.mp4
├── public/moving/853-poster.jpg
├── public/moving/853.mp4
├── public/new-video/electric-standing-desk.mp4
├── public/packaging-effects/1.jpg
├── public/packaging-effects/2.jpg
├── public/packaging-effects/3.jpg
├── public/packaging-effects/4.jpg
├── public/packaging-effects/5.jpg
├── public/packaging-effects/6.jpg
├── public/packaging-effects/7.jpg
├── public/packaging-effects/revised/01.jpg
├── public/packaging-effects/revised/02.2.jpg
├── public/packaging-effects/revised/02.jpg
├── public/packaging-effects/revised/03.jpg
├── public/packaging-effects/revised/04.jpg
├── public/packaging-effects/revised/05.jpg
├── public/packaging-effects/revised/06.jpg
├── public/packaging-effects/revised/07.jpg
├── public/packaging-effects/revised/08.jpg
├── public/packaging/04.jpg
├── public/packaging/05s.jpg
├── public/packaging/5(1).jpg
├── public/packaging/f1.jpg
├── public/packaging/f2.1.jpg
├── public/packaging/f2.2.jpg
├── public/packaging/f2.3.jpg
├── public/packaging/f2.4.jpg
├── public/packaging/f2.5.jpg
├── public/packaging/f2.jpg
├── public/profile-vincent.jpg
├── public/social-ads/0.5.jpg
├── public/social-ads/0.6.jpg
├── public/social-ads/01.jpg
├── public/social-ads/02.jpg
├── public/social-ads/04.jpg
├── public/social-ads/05.jpg
├── public/social-ads/06.jpg
├── public/social-ads/07.jpg
├── public/social-ads/08.jpg
├── public/social-ads/09.jpg
├── public/social-ads/10.jpg
├── public/social-ads/A1.jpg
├── public/social-ads/A2.jpg
├── public/social-ads/B1.jpg
├── public/social-ads/B2.jpg
├── public/social/025.jpg
├── public/social/05s.jpg
├── public/social/06.jpg
├── public/social/07.jpg
├── public/social/0a.jpg
├── public/social/13.jpg
├── public/social/E1.jpg
├── public/social/E2.jpg
├── public/social/f1.jpg
├── public/social/f2.jpg
├── public/social/W1.jpg
├── public/social/W2.jpg
├── public/vi-application/1.png
├── public/vi-application/2.png
├── public/vi-application/3.png
├── public/vi-application/4.png
├── public/vi-application/D1.jpg
├── public/vi-application/D2.jpg
├── public/vi-application/D3.jpg
├── public/vi-application/desk-lamp.jpg
├── public/vi-application/desk-lamp.png
├── README.md
├── SOURCE_CODE.md
├── src/main.jsx
├── src/styles.css
├── vite.config.js
```

完整静态资源及大小见 `ASSET_MANIFEST.md`；所有文本源码在 `SOURCE_CODE.md` 中逐文件展开。
````

## `README.md`

````README.md
# 陈庆志个人作品集

基于 React、Vite 和 lucide-react 的个人作品集网站源码，包含页面组件、样式、图片、视频和背景音乐。

## 本地运行

需要 Node.js 20.19+ 或 22.12+。在项目目录运行：

```bash
pnpm install
pnpm dev
```

终端会显示本地预览地址。按 `Ctrl+C` 停止服务。

如果尚未安装 pnpm，可先运行 `corepack enable`，再执行上述命令。

## 在 Gitpod 运行

将项目 ZIP 上传到 GitHub 仓库后，在 Gitpod 中打开该仓库。项目根目录的 `.gitpod.yml` 会自动安装依赖并启动 Vite，预览端口为 `5173`。

也可以在 Gitpod 终端手动运行：

```bash
corepack enable
pnpm install
pnpm dev --host 0.0.0.0
```

## 编辑内容

- 页面文字、作品列表、图片路径、邮箱和链接：`src/main.jsx`
- 页面布局与视觉样式：`src/styles.css`
- 图片与音频素材：`public/` 下的对应目录
- 视频与封面：`public/moving/`
- 页面标题与浏览器主题色：`index.html`
- Gitpod 安装、启动和预览配置：`.gitpod.yml`

替换图片时，保持 `src/main.jsx` 中引用路径与 `public/` 内文件路径一致。添加作品时，同时检查桌面和手机布局。

## 构建预览

```bash
pnpm build
pnpm preview
```

## 重新打包 ZIP

在项目根目录运行：

```powershell
Add-Type -AssemblyName System.IO.Compression.FileSystem
$source = (Get-Location).Path
$zip = Join-Path (Split-Path $source -Parent) 'qingzhi-chen-portfolio.zip'
[System.IO.Compression.ZipFile]::CreateFromDirectory($source, $zip, [System.IO.Compression.CompressionLevel]::Optimal, $false)
```

重新打包本次提供的 `qingzhi-chen-portfolio-source-export/` 文件夹即可；它只包含项目源码、网站素材和清单，不含 `node_modules/`、`dist/` 或原图备份。

## 当前检查记录

- 压缩包内 51 个页面静态资源引用均可找到；本地图片、视频和音频素材已随项目还原。
- 首屏作品列表仍使用 Unsplash 图片，需要联网；如需完全离线或稳定部署，请换成本地授权素材。
- LinkedIn 链接当前指向 LinkedIn 通用主页，请补充个人主页地址。
- 未包含 `node_modules`；首次运行需要安装依赖。
````

## `src/main.jsx`

````src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Menu, X, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import './styles.css';

const photo = (id, width = 1800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=86`;

const visualWorks = [
  { num: '01', category: 'A+ CONTENT / AMAZON', title: '把产品卖点变成品牌体验', detail: '信息架构 · 场景化叙事 · 转化优化', image: photo('1600267165477-6d4cc741b379') },
  { num: '02', category: 'MAIN IMAGE / PRODUCT', title: '黄金三秒，先让人看懂', detail: '主图系统 · 产品视频 · Listing 视觉', image: photo('1542291026-7eec264c27ff') },
  { num: '03', category: 'PACKAGING / VISUAL SYSTEM', title: '让每一件产品都有识别度', detail: '包装设计 · 品牌系统 · 多品类延展', image: photo('1604324008323-1a4b0e7a1c1e') },
];

const packagingEffectWorks = ['01.jpg', '02.jpg', '02.2.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg'].map((file, index) => [`/packaging-effects/revised/${file}`, `AI packaging · ${String(index + 1).padStart(2, '0')}`]);

const brandWorks = [
  { category: '独立站', title: '', image: '/brand-projects/independent-site.jpg' },
  { category: '亚马逊 A+', title: '', image: '/brand-projects/woman-bag.jpg' },
];

const heroSlides = [
  { image: '/hero-bags.jpg', label: 'BRAND VISUAL SYSTEM', case: '箱包品牌视觉系统', detail: 'Brand Store · A+ · Packaging' },
  { image: '/hero-travel.webp', label: 'PRODUCT STORYTELLING', case: '旅行产品内容系统', detail: 'Main Image · Video · Campaign' },
];

const heroThumbs = [
  { image: '/social/025.jpg', label: 'Brand story 01' },
  { image: '/social/05s.jpg', label: 'Brand story 02' },
  { image: '/social/06.jpg', label: 'A+ system 01' },
  { image: '/social/07.jpg', label: 'A+ system 02' },
  { image: '/social/0a.jpg', label: 'Product visual 01' },
  { image: '/social/13.jpg', label: 'Product visual 02' },
  { image: '/social/E1.jpg', label: 'Campaign 01' },
  { image: '/social/E2.jpg', label: 'Campaign 02' },
  { image: '/social/W1.jpg', label: 'Social content 01' },
  { image: '/social/W2.jpg', label: 'Social content 02' },
  { image: '/social/f1.jpg', label: 'Visual system 01' },
  { image: '/social/f2.jpg', label: 'Visual system 02' },
];

const viApplicationImages = [['/vi-application/D1.jpg', 'Lastar 应用系统 · 01'], ['/vi-application/D2.jpg', 'Lastar 应用系统 · 02'], ['/vi-application/D3.jpg', 'Lastar 应用系统 · 03'], ['/vi-application/3.png', 'Lastar 应用系统 · 04']];
const viApplicationFeature = '/vi-application/desk-lamp.jpg';

const workModules = [
  {
    key: 'basic-vi', title: 'Basic VI', subtitle: '基础视觉识别系统', description: '以标志、色彩与应用规范为起点，呈现品牌识别系统的建立过程。',
    images: Array.from({ length: 16 }, (_, index) => [`/basic-vi/Lastar-VI_${String(index + 1).padStart(2, '0')}.jpg`, `基础 VI · ${String(index + 1).padStart(2, '0')}`]),
  },
  {
    key: 'main-image', title: 'Main image', subtitle: '亚马逊视觉主图', description: '首图抓眼，卖点递进，最后用细节和规格完成决策闭环。',
    images: [
      ['/main-image-2/1.1.jpg', '主视觉 / 白底抓眼'], ['/main-image-2/1.2.jpg', '卖点 / 场景表达'], ['/main-image-2/1.3.jpg', '材质 / 细节'], ['/main-image-2/1.4.jpg', '尺寸 / 规格'],
      ['/main-image-2/1.5.jpg', '功能 / 对比'], ['/main-image-2/1.6.jpg', '配件 / 组合'], ['/main-image-2/2.5.jpg', '包装 / 认证'], ['/main-image-2/2.7.jpg', '场景 / 质感'],
      ['/main-image-2/2.6.jpg', '品牌 / 总结'], ['/main-image-2/3.0.jpg', '结构 / 细节'], ['/main-image-2/3.1.jpg', '使用 / 体验'], ['/main-image-2/3.2.jpg', '收纳 / 配置'],
    ],
  },
  {
    key: 'a-plus', title: 'A+ content', subtitle: '电动桌 / 切菜机 / 咖啡器 / 灯饰', description: '用审美、视觉节奏和数据模块，把产品核心组织成一段完整的品牌视觉，提升品牌影响力。',
    images: [
      ['/social/W1.jpg', 'Brand hero'], ['/social/W2.jpg', 'Feature story'], ['/a-plus/A1.jpg', 'Detail story'], ['/main-feature/1.jpg', 'Product in use'],
      ['/main-feature/2.jpg', 'Product scene'], ['/a-plus/G1.jpg', 'Data visual'], ['/a-plus/G2.jpg', 'Scenario / review'], ['/a-plus/H1.jpg', 'Brand ending'],
      ['/a-plus/H2.jpg', 'Lighting story'],
    ],
  },
  {
    key: 'brochure', title: 'Brand brochure', subtitle: '画册里的品牌叙事', description: '从视觉节奏到内容编排，展示品牌形象如何在纸面上延展。',
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11].map((number, index) => [`/brochure/${number}.jpg`, `画册作品 · ${String(index + 1).padStart(2, '0')}`]),
  },
  {
    key: 'packaging', title: 'Social / Media / Ads', subtitle: '社交/媒体/广告', description: '以统一视觉连接产品、内容与社交传播，让每一次曝光都更有记忆点。',
    images: [
      ['/packaging/04.jpg', 'Front'], ['/packaging/05s.jpg', 'Side'], ['/packaging/5(1).jpg', 'Back'], ['/packaging/f1.jpg', 'Unboxing'],
      ['/packaging/f2.1.jpg', 'Texture'], ['/packaging/f2.2.jpg', 'Structure'], ['/packaging/f2.3.jpg', 'Set'], ['/packaging/f2.4.jpg', 'Scene'],
      ['/packaging/f2.5.jpg', 'Detail'], ['/packaging/f2.jpg', 'Brand'],
    ],
    socialImages: ['0.5.jpg', '0.6.jpg', '01.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', 'A1.jpg', 'A2.jpg', 'B1.jpg', 'B2.jpg'].map((file, index) => [`/social-ads/${file}`, `Social ad ${String(index + 1).padStart(2, '0')}`]),
  },
];

function SnapCarousel({ items, onPreview, label }) {
  const trackRef = React.useRef(null);
  const pointerRef = React.useRef(null);
  const draggedRef = React.useRef(false);
  const suppressClickRef = React.useRef(false);
  const [active, setActive] = React.useState(0);
  const getClosestIndex = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const trackRect = track.getBoundingClientRect();
    let nearest = 0;
    let distance = Infinity;
    [...track.querySelectorAll('.snap-slide')].forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const next = Math.abs((rect.left + rect.width / 2) - (trackRect.left + track.clientWidth / 2));
      if (next < distance) { distance = next; nearest = index; }
    });
    return nearest;
  };
  const onScroll = () => {
    setActive(getClosestIndex());
  };
  const goTo = (index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (!track || !card) return;
    const cardRect = card.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    const target = track.scrollLeft + cardRect.left + cardRect.width / 2 - (trackRect.left + track.clientWidth / 2);
    track.scrollTo({ left: target, behavior: 'smooth' });
  };
  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerRef.current = { id: event.pointerId, x: event.clientX, scrollLeft: event.currentTarget.scrollLeft, startIndex: getClosestIndex() };
    draggedRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event) => {
    const track = trackRef.current;
    if (!track || !pointerRef.current || pointerRef.current.id !== event.pointerId) return;
    const delta = event.clientX - pointerRef.current.x;
    if (!draggedRef.current && Math.abs(delta) > 5) {
      draggedRef.current = true;
      track.classList.add('is-pointer-dragging');
    }
    if (draggedRef.current) {
      event.preventDefault();
      track.scrollLeft = pointerRef.current.scrollLeft - delta;
    }
  };
  const onPointerUp = (event) => {
    if (!pointerRef.current || pointerRef.current.id !== event.pointerId) return;
    const start = pointerRef.current;
    const track = trackRef.current;
    const distance = track ? track.scrollLeft - start.scrollLeft : 0;
    suppressClickRef.current = draggedRef.current;
    pointerRef.current = null;
    trackRef.current?.classList.remove('is-pointer-dragging');
    if (draggedRef.current) {
      const count = track?.querySelectorAll('.snap-slide').length || items.length;
      const direction = Math.sign(distance || start.x - event.clientX);
      const step = Math.max(1, Math.round(Math.abs(distance) / (track?.clientWidth || 1)));
      const target = Math.max(0, Math.min(count - 1, start.startIndex + direction * step));
      setActive(target);
      goTo(target);
    }
  };
  const onImageClick = (event, src, caption) => {
    if (suppressClickRef.current) {
      event.preventDefault();
      suppressClickRef.current = false;
      return;
    }
    onPreview({ src, caption });
  };
  return <div className="snap-carousel-wrap">
    <div className="snap-carousel" ref={trackRef} onScroll={onScroll} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} onDragStart={(event) => event.preventDefault()} role="list" aria-label={label}>
      {items.map(([src, caption], index) => <article className="snap-slide" key={`${src || 'pending'}-${index}`} role="listitem">
        <button className="snap-image-button" type="button" onClick={(event) => onImageClick(event, src, caption)} aria-label={`放大查看${caption}`}><img src={src} alt={caption} loading="lazy" draggable="false" /></button>
        <div className="snap-caption"><span>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span><b>{caption}</b><span className="snap-view">VIEW ↗</span></div>
      </article>)}
    </div>
    <div className="snap-controls"><span>← 拖动或滑动浏览 →</span><div className="snap-dots" aria-label={`${label}分页指示器`}>{items.map((item, index) => <button type="button" key={index} className={index === active ? 'is-active' : ''} onClick={() => goTo(index)} aria-label={`查看第 ${index + 1} 张`} aria-current={index === active ? 'true' : undefined} />)}</div><span>{String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span></div>
  </div>;
}

function DirectionalGallery({ images, label, direction, onPreview }) {
  const trackRef = React.useRef(null);
  const pointerRef = React.useRef(null);
  const hoveringRef = React.useRef(false);
  const suppressClickRef = React.useRef(false);
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame;
    let groupWidth = 0;
    let lastTime = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const measure = () => {
      const first = track.children[0];
      const last = track.children[images.length - 1];
      if (first && last) groupWidth = last.getBoundingClientRect().right - first.getBoundingClientRect().left + 14;
      if (groupWidth && track.scrollLeft < 1) track.scrollLeft = groupWidth;
    };
    const animate = (time) => {
      if (isVisibleRef.current && !document.hidden && groupWidth && !hoveringRef.current && !pointerRef.current && !reduceMotion) {
        const delta = lastTime ? Math.min((time - lastTime) / 16.67, 2) : 1;
        track.scrollLeft += (direction === 'left' ? 0.42 : -0.42) * delta;
        if (track.scrollLeft >= groupWidth * 2) track.scrollLeft -= groupWidth;
        if (track.scrollLeft <= 0) track.scrollLeft += groupWidth;
      }
      lastTime = time;
      if (isVisibleRef.current && !document.hidden && !reduceMotion) frame = requestAnimationFrame(animate);
    };
    const isVisibleRef = { current: false };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
      lastTime = 0;
      cancelAnimationFrame(frame);
      if (isVisibleRef.current && !document.hidden && !reduceMotion) frame = requestAnimationFrame(animate);
    }, { rootMargin: '120px' });
    visibilityObserver.observe(track);
    const onVisibilityChange = () => {
      cancelAnimationFrame(frame);
      lastTime = 0;
      if (!document.hidden && isVisibleRef.current && !reduceMotion) frame = requestAnimationFrame(animate);
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); visibilityObserver.disconnect(); document.removeEventListener('visibilitychange', onVisibilityChange); };
  }, [direction, images.length]);
  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerRef.current = { id: event.pointerId, x: event.clientX, scrollLeft: event.currentTarget.scrollLeft, dragged: false };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event) => {
    const track = trackRef.current;
    const start = pointerRef.current;
    if (!track || !start || start.id !== event.pointerId) return;
    const delta = event.clientX - start.x;
    if (Math.abs(delta) > 5) start.dragged = true;
    if (start.dragged) { event.preventDefault(); track.scrollLeft = start.scrollLeft - delta; }
  };
  const onPointerUp = (event) => {
    if (pointerRef.current?.id !== event.pointerId) return;
    suppressClickRef.current = pointerRef.current.dragged;
    pointerRef.current = null;
  };
  return <div className="directional-gallery-wrap"><div className={"packaging-gallery directional-gallery direction-" + direction} ref={trackRef} role="list" aria-label={label} onPointerEnter={() => { hoveringRef.current = true; }} onPointerLeave={() => { hoveringRef.current = false; }} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} onDragStart={(event) => event.preventDefault()}>{[0, 1, 2].flatMap((copy) => images.map(([src, caption], index) => <article className="directional-gallery-card" key={copy + '-' + src} role="listitem" aria-hidden={copy !== 1}><button type="button" tabIndex={copy === 1 ? 0 : -1} aria-label={"放大查看" + caption} onClick={(event) => { if (suppressClickRef.current) { event.preventDefault(); suppressClickRef.current = false; return; } onPreview({ src, caption }); }}><img src={src} alt={caption} loading="lazy" decoding="async" draggable="false" /><span><small>{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</small><b>{caption}</b><i>VIEW ↗</i></span></button></article>))}</div></div>;
}

function BlurText({ text, className = '', delay = 55, direction = 'top', as: Tag = 'p', trigger }) {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef(null);
  const segments = text.split(' ');
  React.useEffect(() => {
    if (trigger !== undefined) return;
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: '0px' });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [trigger]);
  React.useEffect(() => {
    if (trigger !== undefined) setInView(trigger);
  }, [trigger]);
  return <Tag ref={ref} className={`blur-text ${inView ? 'is-visible' : ''} ${className}`}>
    {segments.map((segment, index) => <span className="blur-word" style={{ '--blur-delay': `${index * delay}ms`, '--blur-from-y': direction === 'top' ? '-50px' : '50px' }} key={`${segment}-${index}`}>{segment}{index < segments.length - 1 ? '\u00a0' : ''}</span>)}
  </Tag>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeHero, setActiveHero] = React.useState(0);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [previewImage, setPreviewImage] = React.useState(null);
  const [profileVisible, setProfileVisible] = React.useState(false);
  const [videoPlaying, setVideoPlaying] = React.useState([false, false]);
  const [videoControlsVisible, setVideoControlsVisible] = React.useState([true, true]);
  const [musicPlaying, setMusicPlaying] = React.useState(false);
  const profileRef = React.useRef(null);
  const movingVideoRefs = React.useRef([]);
  const musicRef = React.useRef(null);
  const close = () => setMenuOpen(false);
  const playMusic = React.useCallback(() => {
    const audio = musicRef.current;
    if (!audio) return;
    audio.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
  }, []);
  const toggleMusic = () => {
    const audio = musicRef.current;
    if (!audio) return;
    if (audio.paused) playMusic();
    else {
      audio.pause();
      setMusicPlaying(false);
    }
  };
  const toggleVideo = (index) => {
    const video = movingVideoRefs.current[index];
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };
  const setVideoState = (index, playing) => {
    setVideoPlaying((current) => current.map((value, i) => i === index ? playing : value));
    setVideoControlsVisible((current) => current.map((value, i) => i === index ? !playing : value));
  };
  React.useEffect(() => {
    let timer;
    const schedule = () => {
      window.clearInterval(timer);
      if (!document.hidden) timer = window.setInterval(() => setActiveHero((current) => (current + 1) % heroSlides.length), 6000);
    };
    schedule();
    document.addEventListener('visibilitychange', schedule);
    return () => { window.clearInterval(timer); document.removeEventListener('visibilitychange', schedule); };
  }, []);
  React.useEffect(() => {
    const audio = musicRef.current;
    if (!audio) return;
    audio.volume = 0.2;
    const syncState = () => setMusicPlaying(!audio.paused);
    const resumeMusic = (event) => {
      if (event.target.closest?.('.music-toggle')) return;
      playMusic();
    };
    audio.addEventListener('play', syncState);
    audio.addEventListener('pause', syncState);
    window.addEventListener('pointerdown', resumeMusic, { passive: true });
    window.addEventListener('keydown', resumeMusic);
    return () => {
      audio.pause();
      audio.removeEventListener('play', syncState);
      audio.removeEventListener('pause', syncState);
      window.removeEventListener('pointerdown', resumeMusic);
      window.removeEventListener('keydown', resumeMusic);
    };
  }, [playMusic]);
  React.useEffect(() => {
    if (!previewImage) return;
    const closeOnEscape = (event) => { if (event.key === 'Escape') setPreviewImage(null); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [previewImage]);
  React.useEffect(() => {
    const profile = profileRef.current;
    if (!profile) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setProfileVisible(true);
        observer.unobserve(profile);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -15% 0px' });
    observer.observe(profile);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > window.innerHeight * 0.82;
        setIsScrolled((current) => current === next ? current : next);
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('resize', handleScroll); window.cancelAnimationFrame(frame); };
  }, []);
  return <main>
    <section className="hero" id="top">
      <div className="hero-slides" aria-label="首屏案例轮播">
        {heroSlides.map((slide, index) => <img key={slide.image} className={`hero-product-bg ${activeHero === index ? 'is-active' : ''}`} src={slide.image} alt={slide.case} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} decoding="async" />)}
      </div>
      <div className="hero-shade" />
      <nav className={`nav shell ${isScrolled ? 'is-sticky' : ''}`}>
        <a className="mark" href="#top" onClick={close}>Vincent<span>•</span></a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="#about" onClick={close}>About</a><a href="#work" onClick={close}>Selected work</a><a href="#contact" onClick={close}>Contact</a></div>
        <a className="top-contact" href="mailto:549944496@qq.com">Let's talk <ArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label="打开导航" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>
      <div className="hero-content shell">
        <p className="eyebrow">品牌视觉总监</p>
        <h1>AI LEADS<br />THE ERA</h1>
        <p className="hero-slogan">Using Visuals to Drive Brand Impact</p>
      </div>
      <div className="hero-case"><small>{heroSlides[activeHero].label}</small><strong>{heroSlides[activeHero].case}</strong><a className="scroll-cue" href="#about">Explore <ArrowDownRight size={16} /></a></div>
      <div className="hero-gallery" aria-label="精选作品动态预览"><div className="hero-gallery-track">{[...heroThumbs, ...heroThumbs].map((item, index) => <div className="hero-thumb" key={`${item.label}-${index}`}><img src={item.image} alt={item.label} loading="lazy" decoding="async" /><span>{item.label}</span></div>)}</div></div>
      <div className="hero-progress" aria-label="轮播进度">{heroSlides.map((slide, index) => <button key={slide.image} className={activeHero === index ? 'active' : ''} aria-label={`切换到第 ${index + 1} 张`} onClick={() => setActiveHero(index)} />)}</div>
      <div className="hero-index">01 <span>/</span> 06</div>
    </section>

    <section ref={profileRef} className="section shell profile" id="about">
      <div className="section-label"><span>01</span><span>Profile</span></div>
      <div className="profile-grid">
        <div className="portrait"><img src="/profile-vincent.jpg" alt="陈庆志人物照片" /><span>12 YEARS OF<br />VISUAL THINKING</span></div>
        <div className="profile-copy"><p className="kicker profile-name">ABOUT ME</p><h2>Hi, I am <i>Vincent!</i></h2><BlurText trigger={profileVisible} className="lead" text="拥有 12 年视觉设计及团队管理经验，专注于打造高绩效、善战的设计团队，主导15亿级销售额视觉体系建设。" /><BlurText trigger={profileVisible} className="copy" delay={28} direction="bottom" text="深耕箱包、智能用品、家居用品等多品类亚马逊市场。通过部门流程优化与AIGC技术的创新，帮助团队在紧迫时间内稳定交付业绩成果，构建一个能持续赋能业务增长的一流设计团队。" />
          <div className={`profile-details ${profileVisible ? 'is-visible' : ''}`}><div><small>当前身份</small><BlurText trigger={profileVisible} as="b" delay={70} text="Visual Design Director" /></div><div><small>服务方向</small><BlurText trigger={profileVisible} as="b" delay={70} text="Brand / Amazon / AIGC" /></div></div>
          <div className={`profile-metrics ${profileVisible ? 'is-visible' : ''}`}><div><strong>12<span>+</span></strong><small>年视觉设计经验<br />管理经验</small></div><div><strong>15<span>亿+</span></strong><small>年度销售额<br />多平台渠道</small></div><div><strong>8<span>人</span></strong><small>设计团队<br />协作与赋能</small></div></div>
          <div className={`profile-building ${profileVisible ? 'is-visible' : ''}`}><small>NOW BUILDING</small><div><span>品牌视觉系统</span><span>AIGC 视觉工作流</span><span>亚马逊视觉体系</span><span>电商营销视觉</span></div><b>进行中的项目</b></div>
        </div>
      </div>
      <div className="timeline"><div><small>2018.01 — 2021.03</small><b>广东新特丽照明 / 设计主管</b><span>品牌视觉 · 电商活动 · 团队 4 人</span><p className="timeline-detail">基于高端灯饰产品定位，主导品牌视觉调性、详情页结构与视频风格。负责天猫、京东、阿里巴巴、苏宁等平台视觉呈现与双11、双12活动页面设计；通过竞品分析和用户调查，完成新品上市视觉策划、摄影指导、图文优化与视频制作，并带领4人团队协同运营提升页面转化。</p></div><div><small>2021.04 — 2024.08</small><b>广州小马智印网络平台科技 / 创意经理</b><span>亚马逊视觉 · 品牌搭建 · 团队6人</span><p className="timeline-detail">汇报总经理，管理6人创意设计部，负责5亿年度销售额业务。构建品牌旗舰店视觉体系，践行“店铺即品牌”的策略，整体规划Store视觉架构与叙事逻辑，按功能、用途和外观梳理家居产品场景，搭建可延展的视觉模块，推动单品引导多品的销售思维。</p></div><div><small>2024.08 — 2026.06</small><b>缘道缘科技（广州） / 设计经理</b><span>Amazon A+ · 视频 · 品牌社媒 · 团队 8 人</span><p className="timeline-detail">汇报总经理，管理8人视觉设计部，负责15亿年度销售额业务。深度分析A+页面点击热力图与用户停留数据，主导高信息密度、强场景化的A+模板，并为主力产品制作“黄金三秒”主图视频；协同品牌团队制作TikTok、Instagram、Pinterest等平台内容，通过防泼水测试、容量挑战和穿搭Lookbook等内容为Listing引流并塑造品牌形象。</p></div></div>
    </section>

    <section className="section shell ai-design-system" aria-labelledby="ai-system-title">
      <div className="section-label"><span>02</span><span>AI design system</span></div>
      <div className="ai-system-intro"><div><p className="kicker">TEAM INTELLIGENCE UPGRADE</p><h2 id="ai-system-title">AI设计效能体系<i>团队智能化升级</i></h2></div><p className="ai-system-slogan">用 AI 重构设计流程，<br />让小团队产出大品牌产能。</p></div>
      <div className="ai-capability-grid">
        <article><span>01 / TEAM</span><i>✳</i><h3>AI 团队搭建</h3><p>明确角色与协作边界，让人和 AI 在合适的环节发挥优势。</p></article>
        <article><span>02 / PROCESS</span><i>↗</i><h3>流程提效重构</h3><p>梳理从需求、创意到交付的路径，减少重复劳动与信息损耗。</p></article>
        <article><span>03 / OUTPUT</span><i>＋</i><h3>标准化产能</h3><p>沉淀可复用的模板、组件和工作方法，提升交付的一致性。</p></article>
        <article><span>04 / BRAND</span><i>◌</i><h3>品牌视觉统一</h3><p>以视觉规范和审核机制，保持不同渠道与内容的品牌表达。</p></article>
      </div>
      <div className="ai-efficiency-panel"><div className="ai-panel-heading"><small>EFFICIENCY SHIFT / WORKFLOW</small><h3>从单点作图，到体系化设计产能</h3></div><div className="ai-comparison"><article><small>TRADITIONAL DESIGN</small><h4>传统设计模式</h4><ul><li>依赖个人经验推进</li><li>重复任务逐项处理</li><li>经验留在个人手中</li><li>扩展产能依赖增加人力</li></ul></article><div className="ai-comparison-arrow">→</div><article className="ai-comparison-next"><small>AI-ASSISTED DESIGN</small><h4>AI 智能化设计模式</h4><ul><li>人机协同完成流程</li><li>重复环节沉淀为工作流</li><li>方法与标准可复用</li><li>团队围绕资产持续迭代</li></ul></article></div></div>
      <div className="ai-scenarios"><div><small>APPLICATION SCENARIOS</small><h3>设计能力，贯穿业务全链路</h3></div><div className="ai-scenario-tags"><span>跨境电商</span><span>品牌视觉</span><span>包装设计</span><span>品牌画册</span><span>网页体验</span></div></div>
      <p className="ai-system-conclusion"><span>FROM</span>「单人作图」<i>→</i><span>TO</span>「体系化 AI 设计产能」</p>
    </section>

    <section className="section shell work" id="work">
      <div className="section-head"><div className="section-label work-section-label"><span>Selected visual work</span></div><p>Brand systems, product stories and moving image.</p></div>
      <div className="work-modules">{workModules.map((module, moduleIndex) => {
        return <article className={`work-module work-module-${module.key}`} key={module.key}>
          <div className="module-heading"><div><small>{String(moduleIndex + 1).padStart(2, '0')} / {module.title}</small><h3>{module.subtitle}</h3></div><p>{module.description}</p></div>
          {module.key === 'basic-vi' && <SnapCarousel items={module.images} label="基础 VI 作品" onPreview={setPreviewImage} />}
          {module.key === 'basic-vi' && <section className="vi-application-showcase" aria-label="Lastar VI 应用系统样式展示"><div className="vi-application-heading"><div><small>VISUAL IDENTITY / APPLICATIONS</small><h4>VI 应用系统 <i>Lastar</i></h4></div><p>从标志、色彩到真实触点，探索视觉识别如何进入日常应用。</p></div><div className="vi-application-layout"><div className="vi-application-mosaic">{viApplicationImages.map(([src, caption], index) => <button type="button" key={src} onClick={() => setPreviewImage({ src, caption: `Lastar · 应用系统 · 0${index + 1}` })} aria-label={`放大查看 Lastar VI 应用图 ${index + 1}`}><img src={src} alt={`Lastar VI 应用图 ${index + 1}`} loading="lazy" /><span>0{index + 1} / APPLICATION</span></button>)}</div><button type="button" className="vi-application-feature" onClick={() => setPreviewImage({ src: viApplicationFeature, caption: 'Lastar · VI 应用系统 · 台灯应用' })} aria-label="放大查看 Lastar VI 主视觉"><img src={viApplicationFeature} alt="Lastar VI 应用系统台灯" loading="lazy" /><small>IDENTITY IN EVERY TOUCHPOINT</small></button></div></section>}
          {module.key === 'brochure' && <SnapCarousel items={module.images} label="画册作品" onPreview={setPreviewImage} />}
          {module.key === 'packaging' && <><DirectionalGallery images={module.images} label="社交媒体广告视觉" direction="right" onPreview={setPreviewImage} /><DirectionalGallery images={module.socialImages} label="社交媒体广告作品" direction="left" onPreview={setPreviewImage} /><p className="gallery-hint">↔ 点击滑动栏浏览 · DRAG TO EXPLORE</p></>}
          {module.key === 'main-image' && <div className="main-image-stage"><div className="main-image-waterfall" role="list" aria-label="Main image works">{module.images.map(([image, label], index) => <article className="main-image-card" key={image + label}><div className="main-image-card-media"><img src={image} alt={label} loading="lazy" decoding="async" /><span className="main-image-card-index">{String(index + 1).padStart(2, '0')}</span></div></article>)}</div></div>}
          {module.key === 'a-plus' && <div className="ap-grid">{module.images.map(([image, label], index) => <article className={index === 0 ? 'ap-hero' : ''} key={image + label}><img src={image} alt={label} loading="lazy" decoding="async" /><div><small>{String(index + 1).padStart(2, '0')} / A+ STORY</small><b>{label}</b></div></article>)}</div>}
        </article>;
      })}</div>
    </section>
    {previewImage && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={previewImage.caption} onClick={() => setPreviewImage(null)} onKeyDown={(event) => { if (event.key === 'Escape') setPreviewImage(null); }}><button className="lightbox-close" type="button" onClick={() => setPreviewImage(null)} aria-label="关闭图片预览"><X size={24} /></button><img src={previewImage.src} alt={previewImage.caption} onClick={(event) => event.stopPropagation()} /><p>{previewImage.caption}</p></div>}

    <section className="section shell strengths"><div className="section-label"><span>07</span><span>What I bring</span></div><div className="strength-intro"><h2><span>CORE STRENGTHS</span><i>个人优势</i></h2><p>把品牌、AICG、视觉设计、系统与团队链成一套可持续的设计生产力。</p></div><div className="strength-grid"><article className="strength-card strength-card-brand"><span className="strength-index">01</span><h3>品牌升级能力<span>.</span></h3><p>从品牌定位、视觉识别到内容资产，建立能持续扩展的品牌升级路径。</p><div className="strength-tags"><span>Brand Book</span><span>VI System</span><span>Premium Visual</span></div></article><article className="strength-card strength-card-ai"><span className="strength-index">02</span><h3>AI 落地能力<span>.</span></h3><p>不是单点使用 AI，而是把 ComfyUI、LibTV、LoRA、SDXL / FLUX 与 3D 渲染装载成团队可直接调用的生产流程，让设计与运营稳定获得自动化提效。</p><div className="strength-tags"><span>ComfyUI</span><span>LoRA</span><span>chatGPT</span></div></article><article className="strength-card strength-card-growth"><span className="strength-index">03</span><h3>电商增长能力<span>.</span></h3><p>深耕 A+、Listing、主图视频与 Store，用视觉系统提升理解效率、转化效率与品牌溢价。</p><div className="strength-tags"><span>GMV Growth</span><span>Conversion</span><span>Amazon</span></div></article><article className="strength-card strength-card-system"><span className="strength-index">04</span><h3>视觉系统搭建能力<span>.</span></h3><p>从定位、调性到视觉规范与内容模板，搭建可延展、可协作、可持续的品牌资产。</p><div className="strength-tags"><span>Visual System</span><span>Design Rules</span><span>Templates</span></div></article><article className="strength-card strength-card-team"><span className="strength-index">05</span><h3>团队管理能力<span>.</span></h3><p>建设高绩效设计团队，优化工作流，引入 AIGC，让团队交付更稳定、更快、更有创造力。</p><div className="strength-tags"><span>Design Ops</span><span>Skill Matrix</span><span>Training</span></div></article></div></section>

    <section className="section shell packaging-impact" aria-labelledby="packaging-impact-title">
      <div className="section-label"><span>08</span><span>AI packaging</span></div>
      <div className="module-heading"><div><small>AI / PACKAGING DEVELOPMENT</small><h3 id="packaging-impact-title">AI驱动包装落地</h3></div><p>利用AI快速的晚餐产品包装的开发效果。</p></div>
      <div className="packaging-impact-grid">{packagingEffectWorks.map(([src, label], index) => <div className={index === 0 ? 'packaging-impact-feature' : ''} key={src}><img src={src} alt={label} loading="lazy" /><span><small>{String(index + 1).padStart(2, '0')} / AI PACKAGING</small></span></div>)}</div>
    </section>

    <section className="section shell brand-projects"><div className="section-head"><div className="section-label"><span>09</span><span>Brand projects</span></div><p>品牌旗舰店、A+品牌营销。<br />让产品从一个页面，进入一套完整的视觉体验。</p></div><div className="brand-grid">{brandWorks.map(w => <article className="brand-card" key={w.category}><div className="brand-card-scroll"><img src={w.image} alt={w.category} loading="lazy" decoding="async" /></div><div className="brand-card-heading"><small>{w.category}</small></div><div className="brand-card-action"><ArrowUpRight size={20} /></div></article>)}</div></section>

    <section className="section shell moving"><div className="section-head"><div className="section-label"><span>10</span><span>Brand video</span></div><p>用视频、动态与场景化内容，<br />让产品在媒体/平台里被传播与理解。</p></div><div className="module-heading amazon-video-heading"><div><small>VIDEO / AMAZON</small><h3>亚马逊视频</h3></div><p>把产品优势转化为直观、易懂、可传播的动态内容。</p></div><div className="moving-grid"><article className="moving-feature" onMouseMove={() => setVideoControlsVisible((current) => current.map((value, i) => i === 0 ? true : value))}><video ref={(node) => { movingVideoRefs.current[0] = node; }} poster="/moving/853-poster.jpg" preload="none" playsInline onPlay={() => setVideoState(0, true)} onPause={() => setVideoState(0, false)} onEnded={() => setVideoState(0, false)} onClick={() => toggleVideo(0)} aria-label="播放 853 视频"><source src="/moving/853.mp4" type="video/mp4" /></video><button className={`moving-play ${videoPlaying[0] && !videoControlsVisible[0] ? 'is-hidden' : ''}`} aria-label={videoPlaying[0] ? '暂停 853 视频' : '播放 853 视频'} onClick={() => toggleVideo(0)}>{videoPlaying[0] ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" size={20} />}</button><div><small>01 / PRODUCT VIDEO</small><h3>Show the value.<br />Before the words.</h3></div></article><article className="moving-small" onMouseMove={() => setVideoControlsVisible((current) => current.map((value, i) => i === 1 ? true : value))}><video ref={(node) => { movingVideoRefs.current[1] = node; }} poster="/moving/022-poster.jpg" preload="none" playsInline onPlay={() => setVideoState(1, true)} onPause={() => setVideoState(1, false)} onEnded={() => setVideoState(1, false)} onClick={() => toggleVideo(1)} aria-label="播放 022 视频"><source src="/moving/022.mp4" type="video/mp4" /></video><button className={`moving-play ${videoPlaying[1] && !videoControlsVisible[1] ? 'is-hidden' : ''}`} aria-label={videoPlaying[1] ? '暂停 022 视频' : '播放 022 视频'} onClick={() => toggleVideo(1)}>{videoPlaying[1] ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" size={20} />}</button><div><small>02 / SOCIAL CONTENT</small><h3>Visuals that travel.</h3></div></article><article className="moving-product"><div className="moving-product-media"><video controls playsInline preload="none" aria-label="电动升降桌产品视频"><source src="/new-video/electric-standing-desk.mp4" type="video/mp4" />您的浏览器暂不支持视频播放。</video><span>✳</span></div><div className="moving-product-copy"><small>03 / PRODUCT FILM</small><h3>电动升降桌<br />Movement, made for everyday work.</h3><p>以动态影像展示产品细节、使用场景与体验。</p></div></article></div></section>

    <footer className="footer" id="contact"><div className="shell footer-inner"><div className="section-label"><span>11</span><span>Start a conversation</span></div><h2 className="footer-creative-title"><span>Make the</span><i>brand</i><span>more</span><strong>competitive.</strong></h2><a className="email" href="mailto:549944496@qq.com">549944496@qq.com <ArrowUpRight size={23} /></a><div className="footer-bottom"><span>© 2026 陈庆志</span><div><a href="#top">Back to top ↑</a><a href="mailto:549944496@qq.com">Email</a><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></div></div></div></footer>
    <audio ref={musicRef} src="/audio/ambient.mp3" loop preload="none" aria-hidden="true" />
    <button className={`music-toggle ${musicPlaying ? 'is-playing' : ''}`} type="button" aria-label={musicPlaying ? '暂停背景音乐' : '播放背景音乐'} title={musicPlaying ? '暂停背景音乐' : '播放背景音乐'} onClick={toggleMusic}>
      {musicPlaying ? <Volume2 size={17} strokeWidth={1.8} /> : <VolumeX size={17} strokeWidth={1.8} />}
    </button>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
````

## `src/styles.css`

````src/styles.css
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,500;1,600&display=swap');
:root{font-family:Manrope,Arial,sans-serif;color:#ebeae5;background:#171817;--bg:#171817;--line:#40413d;--muted:#9a9a93;--acid:#d8ff54;font-synthesis:none}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg)}a{color:inherit;text-decoration:none}.shell{width:min(1700px,calc(100% - 96px));margin:auto}.hero{height:100svh;min-height:700px;position:relative;overflow:hidden;background:#20211f}.hero-video{position:absolute;width:100%;height:100%;object-fit:cover;opacity:.48;filter:grayscale(1) contrast(1.15)}.hero-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(16,17,16,.9),rgba(16,17,16,.28) 68%,rgba(16,17,16,.62)),linear-gradient(0deg,rgba(16,17,16,.72),transparent 50%)}.nav{height:92px;display:flex;align-items:center;position:relative;z-index:2;border-bottom:1px solid rgba(220,220,211,.3)}.mark{font-size:23px;font-weight:700;letter-spacing:-.08em}.mark span{color:var(--acid);font-size:13px;margin-left:3px}.nav-links{display:flex;gap:36px;margin-left:75px;font:11px 'DM Mono',monospace;text-transform:uppercase;color:#d9d9d2}.nav-links a,.top-contact,.footer-bottom a{transition:color .2s}.nav-links a:hover,.top-contact:hover,.footer-bottom a:hover{color:var(--acid)}.top-contact{margin-left:auto;display:flex;align-items:center;gap:10px;font:11px 'DM Mono',monospace;text-transform:uppercase}.menu-button{display:none;border:0;background:transparent;color:#fff}.hero-content{position:relative;z-index:1;padding-top:clamp(100px,17vh,190px)}.eyebrow,.kicker,.section-label,small,.hero-index{font:11px 'DM Mono',monospace;letter-spacing:.08em;text-transform:uppercase}.eyebrow{color:var(--acid);margin:0 0 30px}.hero h1{font-size:clamp(76px,11vw,180px);font-weight:500;letter-spacing:-.095em;line-height:.86;margin:0}.hero h1 em,.profile h2 i,.strength-intro h2 i,.footer h2 i{font-family:'Playfair Display',serif;letter-spacing:-.05em}.hero-foot{max-width:1040px;margin-top:clamp(110px,18vh,230px);display:flex;justify-content:space-between;align-items:end;color:#c4c4bd;font-size:13px;line-height:1.8}.scroll-cue{display:flex;gap:12px;align-items:center}.hero-index{position:absolute;right:48px;bottom:37px;color:#a2a39c}.hero-index span{margin:0 7px;color:#555}.section{padding-top:170px}.section-label{display:flex;justify-content:space-between;width:220px;color:#acada5}.section-label span:first-child{color:var(--acid)}.profile-grid{display:grid;grid-template-columns:minmax(300px,1fr) minmax(500px,1.5fr);gap:clamp(50px,10vw,190px);margin-top:75px}.portrait{position:relative;max-width:470px}.portrait img{width:100%;aspect-ratio:.78;object-fit:cover;filter:grayscale(.9);display:block}.portrait>span{position:absolute;right:-48px;bottom:30px;writing-mode:vertical-rl;color:var(--acid);font:11px 'DM Mono',monospace;line-height:1.5}.kicker{color:var(--acid);margin:8px 0 36px}.profile h2,.strength-intro h2{font-size:clamp(50px,5.6vw,86px);font-weight:500;line-height:.96;letter-spacing:-.075em;margin:0 0 40px}.lead{max-width:620px;font-size:19px;line-height:1.65;margin:0 0 17px}.copy{color:#a3a39c;font-size:14px;line-height:1.9;max-width:610px;margin:0}.facts{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;border-top:1px solid var(--line);margin-top:58px;padding-top:18px}.facts small{display:block;color:#777871;margin-bottom:15px}.facts b{font-size:12px;line-height:1.7;font-weight:500}.timeline{display:grid;grid-template-columns:repeat(3,1fr);gap:35px;border-top:1px solid var(--line);margin-top:110px;padding-top:18px}.timeline small{display:block;color:#777871;margin-bottom:14px}.timeline b{display:block;font-size:13px;font-weight:500;margin-bottom:8px}.timeline span{color:#898a83;font-size:12px}.section-head{display:flex;justify-content:space-between;align-items:start;margin-bottom:65px}.section-head p{width:320px;margin:0;color:#aaa9a1;font-size:13px;line-height:1.8}.work-list{display:grid;gap:88px}.work-card:nth-child(2){width:78%;margin-left:auto}.work-image{position:relative;overflow:hidden;background:#262725}.work-image img{display:block;width:100%;height:clamp(300px,48vw,710px);object-fit:cover;filter:saturate(.78);transition:transform .65s cubic-bezier(.2,.65,.3,1)}.work-card:hover .work-image img,.brand-card:hover img{transform:scale(1.04)}.work-image>span{position:absolute;left:23px;top:22px;color:var(--acid);font:11px 'DM Mono',monospace}.work-meta{display:grid;grid-template-columns:1fr 1fr auto;align-items:end;gap:20px;border-top:1px solid var(--line);padding-top:18px}.work-meta small,.brand-card small,.moving-grid small{display:block;color:#81827a;margin-bottom:10px}.work-meta h3{font-size:24px;font-weight:500;letter-spacing:-.05em;margin:0}.work-meta p{color:#888981;font-size:12px;align-self:center}.strengths,.brand-projects,.moving{border-top:1px solid var(--line);margin-top:180px}.strength-intro{display:flex;justify-content:space-between;align-items:end;margin:75px 0 90px}.strength-intro h2{margin:0}.strength-intro p{width:330px;color:#a4a49c;font-size:14px;line-height:1.9;margin:0}.strength-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line)}.strength-grid>div{padding:27px 30px 35px 0;border-right:1px solid var(--line);min-height:245px}.strength-grid>div+div{padding-left:30px}.strength-grid>div:last-child{border:0}.strength-grid>div>span{color:var(--acid);font:11px 'DM Mono',monospace}.strength-grid h3{font-size:31px;line-height:1;letter-spacing:-.06em;font-weight:500;margin:46px 0 20px}.strength-grid p{font-size:12px;line-height:1.8;color:#999a92;max-width:270px}.brand-grid{display:grid;grid-template-columns:1.18fr .82fr;gap:28px}.brand-card{position:relative;min-height:550px;overflow:hidden;background:#252624}.brand-card img{display:block;width:100%;height:100%;min-height:550px;object-fit:cover;filter:saturate(.7);transition:transform .65s cubic-bezier(.2,.65,.3,1)}.brand-card>div{position:absolute;left:28px;right:28px;bottom:28px;display:grid;grid-template-columns:1fr auto;align-items:end}.brand-card small{grid-column:1/-1;color:var(--acid)}.brand-card h3{font-size:31px;font-weight:500;letter-spacing:-.06em;margin:0}.moving-grid{display:grid;grid-template-columns:1.45fr .75fr;gap:28px}.moving-feature,.moving-small{position:relative;min-height:500px;overflow:hidden;background:#222}.moving-feature img,.moving-small img{position:absolute;width:100%;height:100%;object-fit:cover;filter:grayscale(.55);transition:transform .6s}.moving-feature:hover img,.moving-small:hover img{transform:scale(1.04)}.moving-feature button{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:76px;height:76px;border-radius:50%;background:rgba(16,16,15,.35);border:1px solid rgba(255,255,255,.7);color:#fff;display:grid;place-items:center}.moving-feature>div,.moving-small>div{position:absolute;left:27px;bottom:25px}.moving-grid small{color:var(--acid)}.moving-grid h3{font-size:26px;line-height:1.05;font-weight:500;letter-spacing:-.05em;margin:10px 0}.footer{display:flex;align-items:center;min-height:100svh;margin-top:180px;padding:100px 0 30px;background:var(--acid);color:#171817}.footer .section-label,.footer .section-label span:first-child{color:#171817}.footer h2{font-size:clamp(75px,12vw,190px);line-height:.8;font-weight:500;letter-spacing:-.1em;margin:100px 0 110px}.email{display:flex;align-items:center;gap:20px;width:max-content;padding-bottom:9px;border-bottom:2px solid #171817;font-size:clamp(22px,3vw,44px);letter-spacing:-.06em}.footer-bottom{display:flex;justify-content:space-between;border-top:1px solid rgba(23,24,23,.35);margin-top:150px;padding-top:18px;color:#3e4930;font:11px 'DM Mono',monospace;text-transform:uppercase}.footer-bottom div{display:flex;gap:35px}
@media(max-width:800px){.shell{width:calc(100% - 40px)}.hero{min-height:680px}.nav{height:75px}.nav-links{display:none;position:absolute;left:-20px;right:-20px;top:75px;flex-direction:column;gap:20px;padding:25px 20px;background:#1b1c1a;border-bottom:1px solid var(--line)}.nav-links.open{display:flex}.top-contact{display:none}.menu-button{display:block;margin-left:auto}.hero-content{padding-top:130px}.hero h1{font-size:clamp(64px,18vw,110px)}.hero-foot{display:block;margin-top:125px}.scroll-cue{margin-top:33px}.hero-index{right:20px;bottom:20px}.section{padding-top:100px}.profile-grid{display:block;margin-top:45px}.portrait{max-width:72%;margin-bottom:64px}.portrait>span{right:-32px}.profile h2,.strength-intro h2{font-size:52px}.lead{font-size:17px}.facts{grid-template-columns:1fr 1fr;margin-top:45px;gap:28px 12px}.facts div:last-child{grid-column:1/-1}.timeline{display:block;margin-top:70px}.timeline>div{display:grid;grid-template-columns:1fr 1.3fr;gap:15px;padding:16px 0;border-bottom:1px solid var(--line)}.timeline small{margin:0}.timeline span{grid-column:2}.section-head{display:block;margin-bottom:40px}.section-head p{width:auto;margin-top:35px}.work-list{gap:65px}.work-card:nth-child(2){width:100%}.work-image img{height:83vw}.work-meta{grid-template-columns:1fr auto}.work-meta p{grid-column:1/-1;grid-row:2}.strengths,.brand-projects,.moving{margin-top:110px}.strength-intro{display:block;margin:50px 0 55px}.strength-intro p{width:auto;margin-top:35px}.strength-grid{display:block}.strength-grid>div,.strength-grid>div+div{border-right:0;border-bottom:1px solid var(--line);padding:25px 0 30px;min-height:0}.strength-grid h3{margin:35px 0 14px}.brand-grid,.moving-grid{display:block}.brand-card,.brand-card img{min-height:430px}.brand-card+.brand-card{margin-top:18px}.moving-small{margin-top:18px;min-height:400px}.moving-feature{min-height:430px}.footer{min-height:720px;margin-top:110px}.footer h2{font-size:82px;margin:80px 0 90px}.email{font-size:22px}.footer-bottom{display:block;line-height:2;margin-top:100px}.footer-bottom div{gap:18px;flex-wrap:wrap;margin-top:12px}}

/* Hero direction: warm product campaign image + editorial portfolio typography. */
.hero{min-height:760px;background:#b8a184}.hero-product-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 44%;filter:saturate(.86) contrast(.98)}.hero-video{display:none}.hero-shade{background:linear-gradient(180deg,rgba(14,17,16,.36) 0%,rgba(15,16,14,.12) 38%,rgba(13,15,14,.72) 100%),linear-gradient(90deg,rgba(13,15,14,.34),transparent 62%)}.nav{height:80px;margin-top:18px;padding:0 20px;border:1px solid rgba(255,255,255,.27);border-radius:42px;background:linear-gradient(90deg,rgba(35,38,30,.44),rgba(38,39,36,.18));backdrop-filter:blur(16px)}.mark{padding:11px 18px;border-radius:28px;background:#f4f1e8;color:#1c1d1a;letter-spacing:-.1em}.mark span{color:#75941e}.nav-links{margin-left:auto;margin-right:70px;gap:42px;color:rgba(250,249,242,.78);font-size:12px;text-transform:none;letter-spacing:0}.top-contact{padding:13px 22px;border:1px solid rgba(255,255,255,.25);border-radius:28px;color:#f7f5ed;font-size:12px;text-transform:none;letter-spacing:0}.hero-content{padding-top:clamp(80px,12vh,150px);max-width:1700px}.eyebrow{display:inline-flex;padding:11px 17px;border:1px solid rgba(255,255,255,.3);border-radius:25px;color:#f7f5ed;background:rgba(70,72,61,.2);backdrop-filter:blur(10px);font-family:Manrope,sans-serif;font-size:14px;letter-spacing:0;text-transform:none}.hero h1{font-size:clamp(88px,12.5vw,205px);letter-spacing:-.11em;line-height:.8;color:#f7f5ed;margin:39px 0 25px}.hero h1 span{color:var(--acid)}.hero h1 em{display:inline-block;font-family:Manrope,sans-serif;font-style:normal;font-size:.34em;line-height:1;letter-spacing:-.06em;font-weight:600;vertical-align:top;margin-top:16px;margin-left:12px;max-width:470px}.hero-description{font-size:20px;line-height:1.5;color:#f7f5ed;margin:0;max-width:650px}.hero-stats{display:flex;gap:12px;margin-top:34px}.hero-stats>div{display:flex;align-items:center;gap:13px;padding:10px 19px;border:1px solid rgba(255,255,255,.24);border-radius:30px;background:rgba(31,35,29,.22);backdrop-filter:blur(12px);color:#f7f5ed}.hero-stats strong{font-size:25px;line-height:1;color:var(--acid);letter-spacing:-.06em}.hero-stats strong small{display:inline;font-family:Manrope,sans-serif;font-size:12px;letter-spacing:0;color:var(--acid);margin-left:2px}.hero-stats span{font-size:12px;line-height:1.25;color:rgba(250,249,242,.78)}.hero-case{position:absolute;right:max(48px,calc((100vw - 1700px)/2));bottom:70px;text-align:right;color:#f7f5ed}.hero-case small{display:block;color:var(--acid);margin-bottom:12px}.hero-case strong{display:block;font-size:21px;line-height:1.35;font-weight:600}.hero-case .scroll-cue{justify-content:flex-end;margin-top:23px;font-size:12px;color:#f7f5ed}.hero-index{right:48px;bottom:25px;color:rgba(255,255,255,.72)}
@media(max-width:800px){.hero{min-height:760px}.nav{height:64px;margin-top:12px;padding:0 12px}.nav-links{margin:0;top:76px}.hero-content{padding-top:100px}.eyebrow{font-size:12px;padding:9px 13px}.hero h1{font-size:clamp(69px,19vw,120px);margin-top:34px;line-height:.82}.hero h1 em{display:block;font-size:24px;margin:20px 0 0 4px;max-width:none;letter-spacing:-.06em}.hero-description{font-size:15px;max-width:300px;margin-top:32px}.hero-stats{gap:7px;margin-top:28px;flex-wrap:wrap}.hero-stats>div{padding:9px 12px;gap:8px}.hero-stats strong{font-size:20px}.hero-stats span{font-size:10px}.hero-case{left:20px;right:auto;bottom:51px;text-align:left}.hero-case .scroll-cue{justify-content:flex-start}.hero-index{right:20px;bottom:20px}}
.hero-shade{background:linear-gradient(180deg,rgba(14,17,16,.36) 0%,rgba(15,16,14,.12) 38%,rgba(13,15,14,.64) 60%,rgba(13,15,14,.94) 84%,rgba(13,15,14,1) 100%),linear-gradient(90deg,rgba(13,15,14,.34),transparent 62%)}
.hero-slides{position:absolute;inset:0;overflow:hidden;background:#b8a184}.hero-slides .hero-product-bg{opacity:0;transition:opacity 1.2s ease,transform 7s ease;transform:scale(1.035)}.hero-slides .hero-product-bg.is-active{opacity:1;transform:scale(1)}.hero-progress{position:absolute;left:max(48px,calc((100vw - 1700px)/2));bottom:34px;z-index:3;display:flex;gap:8px}.hero-progress button{width:44px;height:2px;padding:0;border:0;background:rgba(255,255,255,.38);cursor:pointer;transition:background .25s,width .25s}.hero-progress button.active{width:72px;background:var(--acid)}
@media(max-width:800px){.hero-progress{left:20px;bottom:20px}.hero-progress button{width:28px}.hero-progress button.active{width:46px}}
.mark{font-family:Manrope,sans-serif;font-size:16px;letter-spacing:-.04em}.hero h1{letter-spacing:-.095em}.hero-slogan{margin:0;color:#f7f5ed;font-size:clamp(19px,2vw,30px);line-height:1.2;font-weight:600;letter-spacing:-.045em}.hero-case strong{font-size:15px;line-height:1.35}.hero-case small{font-size:9px;margin-bottom:8px}.hero-case .scroll-cue{margin-top:15px;font-size:10px}
@media(max-width:800px){.mark{font-size:15px}.hero-slogan{font-size:18px;max-width:300px}.hero-case strong{font-size:13px}.hero-case small{font-size:8px}.hero-case .scroll-cue{font-size:10px}}
.hero-case{bottom:190px}.hero-gallery{position:absolute;left:max(48px,calc((100vw - 1700px)/2));right:410px;bottom:28px;z-index:3;overflow:hidden}.hero-gallery-track{display:flex;gap:14px;width:max-content;animation:hero-gallery-loop 34s linear infinite}.hero-thumb{position:relative;flex:0 0 158px;height:128px;overflow:hidden;border:1px solid rgba(255,255,255,.3);border-radius:17px;background:rgba(28,30,27,.45);box-shadow:0 12px 30px rgba(0,0,0,.18)}.hero-thumb img{width:100%;height:100%;display:block;object-fit:cover;filter:saturate(.8);transition:transform .45s ease,filter .45s ease}.hero-thumb:hover img{transform:scale(1.07);filter:saturate(1)}.hero-thumb span{position:absolute;left:12px;bottom:10px;color:#fff;font-size:10px;letter-spacing:.02em;text-shadow:0 1px 8px rgba(0,0,0,.8)}@keyframes hero-gallery-loop{from{transform:translateX(0)}to{transform:translateX(-50%)}}.hero-progress{left:auto;right:max(48px,calc((100vw - 1700px)/2));bottom:26px}
@media(max-width:800px){.hero-case{left:auto;right:20px;bottom:180px;max-width:190px;text-align:right}.hero-case .scroll-cue{justify-content:flex-end}.hero-gallery{left:20px;right:20px;bottom:26px}.hero-thumb{flex-basis:125px;height:102px;border-radius:13px}.hero-thumb span{font-size:9px;left:9px;bottom:8px}.hero-gallery-track{gap:10px;animation-duration:28s}.hero-progress{right:20px;bottom:9px}}
.hero-gallery{left:max(48px,calc((100vw - 1700px)/2));right:max(48px,calc((100vw - 1700px)/2))}.hero-thumb{flex-basis:clamp(132px,10vw,178px)}
@media(max-width:800px){.hero-gallery{left:20px;right:20px}.hero-thumb{flex-basis:125px}}
@media(min-width:801px){.hero h1{font-size:clamp(54px,7.5vw,124px);line-height:.88;margin:30px 0 18px;color:var(--acid)}.hero h1 span{color:var(--acid)}.hero-slogan{font-size:clamp(12px,1.2vw,18px);max-width:420px}.hero-content{padding-top:clamp(95px,14vh,145px)}}
.page-theme-warm{color:#2d2925;background:#c9b8aa}
body{background:#c9b8aa;color:#2d2925}main{background:#c9b8aa}.section-label{color:#675d55}.section-label span:first-child{color:#758b20}.section-head p,.copy,.timeline span,.work-meta p,.strength-intro p,.strength-grid p{color:#665c54}.facts small,.timeline small,.work-meta small,.brand-card small,.moving-grid small{color:#78695f}.timeline,.work-meta,.strengths,.brand-projects,.moving{border-color:#9d8d7f}.work-image,.brand-card,.moving-feature,.moving-small{background:#b4a091}.work-meta h3,.brand-card h3,.moving-grid h3{color:#2d2925}.strength-grid{border-color:#9d8d7f}.strength-grid>div{border-color:#9d8d7f}.hero-progress button{background:rgba(45,41,37,.32)}.hero-progress button.active{background:var(--acid)}
button,.top-contact{transition:transform .28s ease,background-color .28s ease,border-color .28s ease,box-shadow .28s ease,color .28s ease}.top-contact:hover{background:var(--acid);border-color:var(--acid);color:#20221c;transform:translateY(-2px);box-shadow:0 10px 24px rgba(42,35,25,.2)}.hero-progress button:hover{transform:scaleY(2.5);background:var(--acid)}.moving-feature button:hover{background:var(--acid);color:#20221c;border-color:var(--acid);transform:translate(-50%,-50%) scale(1.08);box-shadow:0 12px 30px rgba(0,0,0,.24)}.menu-button:hover{color:var(--acid);transform:scale(1.08)}.hero-thumb:hover{border-color:var(--acid)}
.nav.is-sticky{position:fixed;top:18px;left:50%;z-index:50;width:min(1700px,calc(100% - 96px));margin:0;transform:translateX(-50%);background:rgba(38,38,35,.58);border-color:rgba(255,255,255,.3);box-shadow:0 14px 42px rgba(35,28,20,.2);backdrop-filter:blur(20px) saturate(125%);-webkit-backdrop-filter:blur(20px) saturate(125%);animation:nav-settle .35s ease both}@keyframes nav-settle{from{opacity:0;transform:translate(-50%,-12px)}to{opacity:1;transform:translate(-50%,0)}}
@media(max-width:800px){.nav.is-sticky{top:12px;width:calc(100% - 40px)}@keyframes nav-settle{from{opacity:0;transform:translate(-50%,-10px)}to{opacity:1;transform:translate(-50%,0)}}}
.page-theme-warm{color:#ebeae5;background:#171817}body,main{background:#171817;color:#ebeae5}.section-label{color:#acada5}.section-label span:first-child{color:var(--acid)}.section-head p,.copy,.timeline span,.work-meta p,.strength-intro p,.strength-grid p{color:#a3a39c}.facts small,.timeline small,.work-meta small,.brand-card small,.moving-grid small{color:#777871}.timeline,.work-meta,.strengths,.brand-projects,.moving{border-color:#40413d}.work-image,.brand-card,.moving-feature,.moving-small{background:#262725}.work-meta h3,.brand-card h3,.moving-grid h3{color:#ebeae5}.strength-grid{border-color:#40413d}.strength-grid>div{border-color:#40413d}.hero-progress button{background:rgba(255,255,255,.38)}
main{position:relative;isolation:isolate;overflow:hidden}main::before{content:"";position:absolute;z-index:0;top:max(100svh,760px);left:0;width:100%;height:600px;pointer-events:none;background:radial-gradient(circle at 17% 34%,rgba(36,57,45,.95) 0,rgba(36,57,45,.5) 24%,transparent 52%),radial-gradient(circle at 82% 67%,rgba(27,10,27,.98) 0,rgba(27,10,27,.62) 28%,transparent 58%),linear-gradient(115deg,#1b0a1b 0%,#24392d 49%,#1b0a1b 100%);background-size:150% 150%;background-position:50% 50%;animation:grainient-drift 18s ease-in-out infinite alternate;will-change:transform}@keyframes grainient-drift{0%{transform:scale(1)}50%{transform:scale(1.035)}100%{transform:scale(1)}}main::after{content:"";position:absolute;z-index:0;top:max(100svh,760px);left:0;width:100%;height:600px;pointer-events:none;opacity:.14;mix-blend-mode:screen;background-image:radial-gradient(rgba(255,255,255,.7) .6px,transparent .7px),radial-gradient(rgba(0,0,0,.6) .6px,transparent .7px);background-size:4px 4px,7px 7px;background-position:0 0,2px 3px}.hero,.section,.footer{position:relative;z-index:1}.profile{background:transparent}
main::before,main::after{top:max(100svh,760px);height:max(100svh,760px)}
.grainient-scope{position:relative}main::before,main::after{bottom:0;height:auto}.footer{background:transparent;color:#ebeae5}.footer .section-label{color:#acada5}.footer .section-label span:first-child{color:var(--acid)}.footer .email{color:#ebeae5;border-color:#ebeae5}.footer-bottom{border-color:rgba(235,234,229,.3);color:#b8b9b2}.footer-bottom a{color:#b8b9b2}
main::before{background:radial-gradient(circle at 17% 34%,rgba(43,47,44,.9) 0,rgba(43,47,44,.48) 24%,transparent 52%),radial-gradient(circle at 82% 67%,rgba(18,19,18,.98) 0,rgba(18,19,18,.68) 28%,transparent 58%),linear-gradient(115deg,#171817 0%,#252925 49%,#171817 100%)}main::after{display:none}
.nav-links a,.scroll-cue,.hero-case strong,.hero-slogan,.work-meta h3,.strength-grid h3,.brand-card h3,.moving-grid h3,.timeline b,.footer h2{transition:color .3s ease,transform .3s ease,text-shadow .3s ease}.nav-links a:hover,.scroll-cue:hover{color:var(--acid);transform:translateY(-2px)}.hero h1{transition:color .45s ease,text-shadow .45s ease,transform .45s ease}.hero h1:hover{color:var(--acid);text-shadow:0 0 30px rgba(216,255,84,.22);transform:translateX(3px)}.hero-slogan:hover,.hero-case strong:hover{color:var(--acid);transform:translateX(4px)}.work-meta h3:hover,.strength-grid h3:hover,.brand-card h3:hover,.moving-grid h3:hover,.timeline b:hover,.footer h2:hover{color:var(--acid);transform:translateX(5px);text-shadow:0 0 18px rgba(216,255,84,.16)}
.profile-name{width:max-content;padding-bottom:7px;border-bottom:1px solid var(--acid);margin-bottom:34px}.profile-name:hover{color:#f2ffad;transform:translateX(4px)}.facts>div{position:relative;padding:22px 20px 24px;border:1px solid rgba(235,234,229,.18);border-radius:12px;background:rgba(255,255,255,.035);transition:transform .35s ease,border-color .35s ease,background-color .35s ease,box-shadow .35s ease}.facts>div:hover{transform:translateY(-8px);border-color:var(--acid);background:rgba(216,255,84,.08);box-shadow:0 16px 30px rgba(0,0,0,.18)}.facts>div:hover small{color:var(--acid)}
.profile-copy h2{font-family:Arial,sans-serif}.profile-copy h2 i{font-family:Arial,sans-serif;font-style:normal;font-weight:800}

/* Profile layout follows the editorial reference: headline, contact matrix, then proof points. */
.profile-name{margin:8px 0 28px;padding:0;border:0;font-size:11px;color:var(--acid);font-weight:500}
.profile-grid{align-items:start}
.portrait{justify-self:center;align-self:center;margin:0 auto}
.profile>.section-label{position:relative;top:75px;z-index:2}
.portrait>span{bottom:0;z-index:3}
.portrait img{position:relative;z-index:1;transition:transform .65s cubic-bezier(.2,.65,.3,1),filter .65s ease,box-shadow .65s ease}
.portrait::after{display:none}
.portrait:hover img{transform:scale(1.045);filter:grayscale(.65) brightness(.88);box-shadow:0 20px 45px rgba(0,0,0,.24)}
.profile h2{font-family:Arial,sans-serif;font-size:clamp(46px,5vw,78px);line-height:.98;letter-spacing:-.075em;margin-bottom:32px;white-space:nowrap}
.profile h2 i{font-family:Arial,sans-serif;font-style:normal;font-weight:800;letter-spacing:-.085em}
.profile-details{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line);margin-top:44px}
.profile-details>div{min-height:78px;padding:18px 24px 16px 0;border-bottom:1px solid var(--line)}
.profile-details>div:nth-child(even){padding-left:28px;border-left:1px solid var(--line)}
.profile-details small,.profile-building>small{display:block;color:var(--acid);font:11px 'DM Mono',monospace;margin-bottom:13px}
.profile-details b{font-size:13px;font-weight:500;color:#ebeae5}
.profile-metrics{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--line)}
.profile-metrics>div{display:flex;align-items:center;gap:15px;min-height:122px;border-right:1px solid var(--line)}
.profile-metrics>div+div{padding-left:28px}.profile-metrics>div:last-child{border-right:0}
.profile-metrics strong{font-size:50px;line-height:1;color:var(--acid);letter-spacing:-.08em}.profile-metrics strong span{font-size:17px;letter-spacing:-.03em}
.profile-metrics small{font-size:11px;line-height:1.45;color:#a3a39c}
.profile-building{position:relative;padding-top:24px;min-height:90px}.profile-building>small{margin-bottom:14px}.profile-building>div{display:flex;gap:8px;flex-wrap:wrap}.profile-building span{padding:8px 13px;border:1px solid rgba(216,255,84,.25);border-radius:18px;color:#c7c9b7;font-size:11px;transition:color .25s,border-color .25s,background-color .25s,transform .25s}.profile-building span:hover{color:var(--acid);border-color:var(--acid);background:rgba(216,255,84,.08);transform:translateY(-3px)}.profile-building>b{position:absolute;right:0;top:28px;color:#8d9084;font-size:13px;font-weight:500}
.blur-text{display:flex;flex-wrap:wrap}.blur-word{display:inline-block;opacity:0;filter:blur(10px);transform:translateY(var(--blur-from-y));transition:opacity .7s ease,filter .7s ease,transform .7s cubic-bezier(.2,.65,.3,1);transition-delay:var(--blur-delay);will-change:transform,filter,opacity}.blur-text.is-visible .blur-word{opacity:1;filter:blur(0);transform:translateY(0)}
.profile-metrics>div>strong,.profile-metrics>div>small{opacity:0;filter:blur(10px);transform:translateY(26px);transition:opacity .7s ease,filter .7s ease,transform .7s cubic-bezier(.2,.65,.3,1);will-change:transform,filter,opacity}.profile-metrics.is-visible>div>strong,.profile-metrics.is-visible>div>small{opacity:1;filter:blur(0);transform:translateY(0)}.profile-metrics.is-visible>div:nth-child(1)>strong{transition-delay:80ms}.profile-metrics.is-visible>div:nth-child(1)>small{transition-delay:150ms}.profile-metrics.is-visible>div:nth-child(2)>strong{transition-delay:230ms}.profile-metrics.is-visible>div:nth-child(2)>small{transition-delay:300ms}.profile-metrics.is-visible>div:nth-child(3)>strong{transition-delay:380ms}.profile-metrics.is-visible>div:nth-child(3)>small{transition-delay:450ms}
.profile-details>div>small,.profile-building>small,.profile-building>b{opacity:0;filter:blur(10px);transform:translateY(20px);transition:opacity .65s ease,filter .65s ease,transform .65s cubic-bezier(.2,.65,.3,1)}.profile-details.is-visible>div>small,.profile-building.is-visible>small,.profile-building.is-visible>b{opacity:1;filter:blur(0);transform:translateY(0)}.profile-details.is-visible>div:nth-child(1)>small{transition-delay:90ms}.profile-details.is-visible>div:nth-child(2)>small{transition-delay:170ms}.profile-building.is-visible>small{transition-delay:520ms}.profile-building.is-visible>b{transition-delay:610ms}
.timeline>div{position:relative;isolation:isolate;overflow:hidden;padding:24px 22px 28px;border:1px solid rgba(235,234,229,.16);border-radius:16px;background:linear-gradient(135deg,rgba(255,255,255,.075),rgba(255,255,255,.025));backdrop-filter:blur(16px) saturate(120%);-webkit-backdrop-filter:blur(16px) saturate(120%);box-shadow:inset 0 1px rgba(255,255,255,.12),0 16px 34px rgba(0,0,0,.12);transition:transform .45s cubic-bezier(.2,.65,.3,1),border-color .45s ease,background .45s ease,box-shadow .45s ease}.timeline>div::before{content:"";position:absolute;z-index:-1;inset:-45% 35% 30% -25%;background:radial-gradient(circle,rgba(216,255,84,.13),transparent 68%);filter:blur(22px);opacity:0;transform:translateX(-16%);transition:opacity .45s ease,transform .65s ease}.timeline>div::after{content:"";position:absolute;z-index:-1;top:-30%;left:-20%;width:38%;height:170%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent);transform:rotate(18deg) translateX(-240%);transition:transform .8s ease}.timeline>div:hover{transform:translateY(-8px);border-color:rgba(216,255,84,.58);background:linear-gradient(135deg,rgba(216,255,84,.12),rgba(255,255,255,.04));box-shadow:inset 0 1px rgba(255,255,255,.18),0 20px 42px rgba(0,0,0,.24),0 0 28px rgba(216,255,84,.1)}.timeline>div:hover::before{opacity:1;transform:translateX(10%)}.timeline>div:hover::after{transform:rotate(18deg) translateX(520%)}
.timeline-detail{max-height:0;opacity:0;overflow:hidden;margin:0;color:#b9bbb2;font-size:12px;line-height:1.8;transform:translateY(8px);transition:max-height .55s ease,opacity .35s ease,transform .45s ease,margin-top .45s ease}.timeline>div:hover .timeline-detail{max-height:260px;opacity:1;margin-top:18px;transform:translateY(0)}
.hero h1{font-family:Arial,sans-serif;border-radius:4px;margin-top:0;margin-bottom:17px;letter-spacing:-.075em}
@media(max-width:800px){.profile h2{font-size:clamp(42px,12vw,60px);white-space:normal}.profile-details{margin-top:36px}.profile-details>div{min-height:72px;padding-right:10px}.profile-details>div:nth-child(even){padding-left:16px}.profile-details b{font-size:12px}.profile-metrics>div{display:block;padding:20px 0!important;min-height:112px}.profile-metrics>div+div{padding-left:12px!important}.profile-metrics strong{display:block;font-size:32px;margin-bottom:10px}.profile-metrics small{font-size:10px}.profile-building{padding-bottom:8px}.profile-building>b{position:static;display:block;margin-top:18px;font-size:12px}.profile>.section-label{top:0}.hero h1{margin-top:34px;margin-bottom:25px}}
.profile{padding-top:70px}
@media(max-width:800px){.profile{padding-top:65px}}

.work-modules{display:grid;gap:150px}.work-module{border-top:1px solid var(--line);padding-top:28px}.module-heading{display:grid;grid-template-columns:1fr 360px;align-items:end;gap:40px;margin-bottom:42px}.module-heading small{display:block;color:var(--acid);margin-bottom:14px}.module-heading h3{font-size:clamp(32px,4vw,60px);font-weight:500;letter-spacing:-.075em;margin:0}.module-heading p{color:#a3a39c;font-size:13px;line-height:1.8;margin:0}.main-image-frame{position:relative;overflow:hidden;background:#e7e7e3;aspect-ratio:1.78}.main-image-frame>img{display:block;width:100%;height:100%;object-fit:cover;transition:opacity .65s ease,transform .8s cubic-bezier(.2,.65,.3,1);animation:work-image-in .7s ease both}.main-image-frame:hover>img{transform:scale(1.035)}@keyframes work-image-in{from{opacity:.35;transform:scale(1.04)}to{opacity:1;transform:scale(1)}}.module-glass{position:absolute;left:24px;right:24px;bottom:24px;display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:15px 18px;border:1px solid rgba(255,255,255,.38);border-radius:14px;background:rgba(22,24,22,.55);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);color:#f7f5ed}.module-glass small{color:var(--acid)}.module-glass b{font-size:12px;font-weight:500;letter-spacing:.08em}.work-thumbs{display:grid;grid-template-columns:repeat(8,1fr);gap:10px;margin-top:14px}.work-thumbs button{position:relative;min-width:0;height:86px;padding:0;border:1px solid rgba(235,234,229,.2);border-radius:10px;overflow:hidden;background:#262725;cursor:pointer;transition:transform .3s,border-color .3s,opacity .3s}.work-thumbs button:not(.is-active){opacity:.68}.work-thumbs button:hover,.work-thumbs button.is-active{transform:translateY(-5px);border-color:var(--acid);opacity:1}.work-thumbs img{width:100%;height:100%;display:block;object-fit:cover}.work-thumbs span{position:absolute;left:8px;right:8px;bottom:7px;text-align:left;color:#fff;font-size:9px;text-shadow:0 1px 8px rgba(0,0,0,.8);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ap-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.ap-grid article{position:relative;min-height:260px;overflow:hidden;background:#252624}.ap-grid article.ap-hero{grid-column:span 2;grid-row:span 2;min-height:536px}.ap-grid img{width:100%;height:100%;display:block;object-fit:cover;filter:saturate(.75);transition:transform .65s ease,filter .45s ease}.ap-grid article:hover img{transform:scale(1.06);filter:saturate(1)}.ap-grid article>div{position:absolute;left:18px;right:18px;bottom:16px;display:flex;justify-content:space-between;align-items:end;gap:12px}.ap-grid small{color:var(--acid);font:10px 'DM Mono',monospace}.ap-grid b{color:#f4f3ed;font-size:12px;font-weight:500;text-align:right;text-shadow:0 1px 10px rgba(0,0,0,.8)}.packaging-gallery{display:flex;gap:14px;overflow-x:auto;padding:4px 0 18px;scrollbar-width:thin;scrollbar-color:var(--acid) transparent}.packaging-gallery article{position:relative;flex:0 0 clamp(230px,22vw,340px);height:410px;overflow:hidden;border:1px solid rgba(235,234,229,.16);border-radius:15px;background:#242523;transition:flex-basis .45s ease,transform .45s ease,border-color .35s ease,box-shadow .35s ease}.packaging-gallery article.is-active,.packaging-gallery article:hover{flex-basis:clamp(270px,27vw,420px);transform:translateY(-6px);border-color:rgba(216,255,84,.6);box-shadow:0 18px 38px rgba(0,0,0,.24)}.packaging-gallery img{width:100%;height:100%;display:block;object-fit:cover;filter:saturate(.76);transition:transform .65s ease,filter .45s ease}.packaging-gallery article:hover img,.packaging-gallery article.is-active img{transform:scale(1.045);filter:saturate(.98)}.packaging-gallery article>div{position:absolute;left:18px;right:18px;bottom:18px;display:flex;justify-content:space-between;align-items:end;padding:12px;border:1px solid rgba(255,255,255,.22);border-radius:10px;background:rgba(22,24,22,.48);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}.packaging-gallery small{color:var(--acid);font:11px 'DM Mono',monospace}.packaging-gallery b{color:#f4f3ed;font-size:11px;font-weight:500}
@media(max-width:800px){.work-modules{gap:90px}.module-heading{display:block;margin-bottom:28px}.module-heading h3{font-size:42px}.module-heading p{margin-top:24px}.main-image-frame{aspect-ratio:.92}.module-glass{left:12px;right:12px;bottom:12px;grid-template-columns:1fr auto;gap:8px;padding:12px}.module-glass b{grid-column:1/-1;grid-row:2;font-size:10px}.work-thumbs{grid-template-columns:repeat(4,1fr);gap:8px}.work-thumbs button{height:72px}.ap-grid{grid-template-columns:1fr 1fr;gap:10px}.ap-grid article,.ap-grid article.ap-hero{grid-column:span 1;grid-row:span 1;min-height:190px}.ap-grid article.ap-hero{grid-column:span 2;min-height:310px}.packaging-gallery article{flex-basis:72vw;height:390px}.packaging-gallery article.is-active,.packaging-gallery article:hover{flex-basis:78vw}}
.main-image-constellation{display:grid;grid-template-columns:40px minmax(110px,.34fr) minmax(0,1.32fr) minmax(110px,.34fr) 40px;gap:14px;align-items:center}.gallery-side{display:grid;gap:14px}.gallery-side button{position:relative;min-width:0;height:174px;padding:0;overflow:hidden;border:1px solid rgba(235,234,229,.2);border-radius:13px;background:#272927;cursor:pointer;opacity:.72;transition:transform .35s ease,opacity .35s ease,border-color .35s ease}.gallery-side button:hover{transform:scale(1.035);opacity:1;border-color:var(--acid)}.gallery-side img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .5s ease}.gallery-side button:hover img{transform:scale(1.1)}.gallery-side span{position:absolute;left:10px;right:8px;bottom:8px;color:#fff;text-align:left;font-size:9px;text-shadow:0 1px 8px rgba(0,0,0,.9);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gallery-arrow{width:42px;height:42px;display:grid;place-items:center;padding:0;border:1px solid rgba(235,234,229,.24);border-radius:50%;background:rgba(255,255,255,.04);color:#ebeae5;cursor:pointer;transition:transform .3s ease,color .3s ease,border-color .3s ease,background .3s ease}.gallery-arrow:hover{transform:scale(1.12);color:#20221c;background:var(--acid);border-color:var(--acid)}
@media(max-width:800px){.main-image-constellation{grid-template-columns:36px minmax(0,1fr) 36px;gap:8px}.gallery-side{display:none}.gallery-arrow{width:34px;height:34px}.main-image-frame{grid-column:2}.gallery-arrow-left{grid-column:1;grid-row:1}.gallery-arrow-right{grid-column:3;grid-row:1}}
.main-image-canvas{position:relative;min-height:680px;overflow:hidden;background:radial-gradient(circle at 50% 45%,#f6f5f0 0,#e9e9e3 48%,#d8d9d2 100%);border:1px solid rgba(235,234,229,.18)}.main-collage-card{position:absolute;width:13%;height:160px;padding:0;overflow:hidden;border:1px solid rgba(30,32,29,.12);border-radius:15px;background:#f4f3ed;box-shadow:0 10px 24px rgba(23,25,22,.1);cursor:pointer;transition:transform .45s cubic-bezier(.2,.65,.3,1),box-shadow .45s ease,filter .45s ease,opacity .45s ease;opacity:.87}.main-collage-card img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .55s cubic-bezier(.2,.65,.3,1),filter .4s ease}.main-collage-card span{position:absolute;left:10px;right:8px;bottom:8px;color:#fff;font-size:9px;text-align:left;text-shadow:0 1px 8px rgba(0,0,0,.9);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.main-collage-card:hover,.main-collage-card.is-active{z-index:3;opacity:1;border-color:var(--acid);box-shadow:0 18px 36px rgba(25,28,24,.22),0 0 0 4px rgba(216,255,84,.14);transform:translateY(-8px) scale(1.075)}.main-collage-card:hover img,.main-collage-card.is-active img{transform:scale(1.09);filter:saturate(1.1)}.main-collage-card:nth-child(1){left:2%;top:25%}.main-collage-card:nth-child(2){left:11%;top:7%;height:150px}.main-collage-card:nth-child(3){left:11%;top:47%;height:150px}.main-collage-card:nth-child(4){left:21%;top:17%;height:158px}.main-collage-card:nth-child(5){left:30%;top:5%;height:140px}.main-collage-card:nth-child(6){left:39%;top:17%;height:150px}.main-collage-card:nth-child(7){right:30%;top:6%;height:140px}.main-collage-card:nth-child(8){right:21%;top:19%;height:158px}.main-collage-card:nth-child(9){right:11%;top:7%;height:150px}.main-collage-card:nth-child(10){right:2%;top:25%}.main-collage-card:nth-child(11){left:2%;top:54%;height:150px}.main-collage-card:nth-child(12){left:21%;bottom:6%;height:145px}.main-collage-card:nth-child(13){right:21%;bottom:6%;height:145px}.main-collage-card:nth-child(14){right:11%;top:49%;height:150px}.main-collage-card:nth-child(15){right:2%;top:54%;height:150px}.main-image-copy{position:absolute;z-index:4;left:50%;top:50%;width:min(430px,38%);transform:translate(-50%,-50%);text-align:center;color:#171817}.main-image-copy small{display:inline-block;margin-bottom:22px;color:#5f7a19;font:10px 'DM Mono',monospace;letter-spacing:.12em}.main-image-copy h4{font-size:clamp(36px,4.5vw,70px);line-height:.9;letter-spacing:-.08em;font-weight:600;margin:0 0 22px}.main-image-copy h4 em{font-style:normal;color:#74786e}.main-image-copy p{margin:0 auto 24px;max-width:280px;color:#61645d;font-size:13px;line-height:1.7}.main-image-copy>button{display:inline-flex;align-items:center;gap:12px;padding:12px 17px;border:0;border-radius:24px;background:#171817;color:#f5f4ee;font-size:11px;cursor:pointer;transition:transform .3s,background .3s,color .3s}.main-image-copy>button:hover{transform:translateY(-3px);background:var(--acid);color:#171817}.main-image-canvas>.gallery-arrow{position:absolute;z-index:5;bottom:28px}.main-image-canvas>.gallery-arrow-left{left:28px}.main-image-canvas>.gallery-arrow-right{right:28px}.main-image-count{position:absolute;z-index:5;right:32px;bottom:39px;color:#4f544d;font:11px 'DM Mono',monospace}.main-image-count span{color:#969b91}
@media(max-width:800px){.main-image-canvas{min-height:650px}.main-collage-card{width:24%;height:105px;border-radius:11px}.main-collage-card:nth-child(1){left:2%;top:14%}.main-collage-card:nth-child(2){left:34%;top:4%;height:92px}.main-collage-card:nth-child(3){left:2%;top:70%;height:100px}.main-collage-card:nth-child(4){left:18%;top:22%;height:100px}.main-collage-card:nth-child(5){left:38%;top:17%;height:88px}.main-collage-card:nth-child(6){left:70%;top:16%;height:96px}.main-collage-card:nth-child(7){right:2%;top:32%;height:100px}.main-collage-card:nth-child(8){right:38%;top:60%;height:92px}.main-collage-card:nth-child(9){right:17%;top:52%;height:96px}.main-collage-card:nth-child(10){right:2%;top:68%;height:100px}.main-collage-card:nth-child(11),.main-collage-card:nth-child(12),.main-collage-card:nth-child(13),.main-collage-card:nth-child(14),.main-collage-card:nth-child(15){display:none}.main-image-copy{width:70%;top:46%}.main-image-copy small{margin-bottom:14px;font-size:9px}.main-image-copy h4{font-size:42px;margin-bottom:16px}.main-image-copy p{font-size:12px;margin-bottom:18px}.main-image-copy>button{font-size:10px;padding:10px 13px}.main-image-canvas>.gallery-arrow{bottom:18px}.main-image-canvas>.gallery-arrow-left{left:18px}.main-image-canvas>.gallery-arrow-right{right:18px}.main-image-count{right:50%;transform:translateX(50%);bottom:31px;font-size:10px}}
.main-image-canvas{background:transparent;border:0}.main-collage-card{height:auto!important;aspect-ratio:3 / 4;background:#252725;border-color:rgba(235,234,229,.18);box-shadow:0 12px 26px rgba(0,0,0,.2)}.main-collage-card img{object-fit:contain;background:#252725}.main-image-copy{color:#ebeae5}.main-image-copy h4 em{color:#a8ad9f}.main-image-copy p{color:#a3a39c}.main-image-copy>button{background:var(--acid);color:#171817}.main-image-copy>button:hover{background:#f0ffad}.main-collage-card:nth-child(1){left:0}.main-collage-card:nth-child(10){right:0}.main-collage-card:nth-child(11){left:0}.main-collage-card:nth-child(15){right:0}
.accordion-gallery{position:relative;display:flex;gap:10px;height:520px;overflow:hidden;padding-right:54px;perspective:900px}.ag-panel{position:relative;flex:1 1 0;min-width:0;height:100%;padding:0;border:1px solid rgba(235,234,229,.18);border-radius:16px;overflow:hidden;background:#252725;cursor:pointer;transform:rotateY(-6deg);transform-origin:center;opacity:.62;filter:grayscale(1);transition:flex-grow .6s cubic-bezier(.2,.65,.3,1),transform .6s cubic-bezier(.2,.65,.3,1),opacity .45s ease,filter .45s ease,border-color .45s ease,box-shadow .45s ease}.ag-panel--active{flex-grow:4.4;transform:rotateY(0);opacity:1;filter:grayscale(0);border-color:rgba(216,255,84,.6);box-shadow:0 20px 40px rgba(0,0,0,.22),0 0 25px rgba(216,255,84,.08)}.ag-panel__frame{position:absolute;inset:0;display:block;overflow:hidden}.ag-panel__media{position:absolute;inset:-3%;display:block;transition:transform .7s cubic-bezier(.2,.65,.3,1)}.ag-panel__media img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .7s cubic-bezier(.2,.65,.3,1)}.ag-panel:hover .ag-panel__media{transform:scale(1.045)}.ag-panel:hover .ag-panel__media img{transform:scale(1.055)}.ag-panel__overlay{position:absolute;inset:0;display:block;background:linear-gradient(180deg,rgba(8,10,9,.05),rgba(8,10,9,.72));pointer-events:none}.ag-panel__label{position:absolute;left:18px;right:18px;bottom:20px;display:flex;align-items:end;gap:12px;color:#f4f4ee;text-align:left}.ag-panel__bar{width:3px;height:42px;background:var(--acid);display:block;opacity:0;transform:translateX(-10px);transition:opacity .35s,transform .35s}.ag-panel__text{font-size:12px;line-height:1.35;opacity:0;transform:translateX(-14px);transition:opacity .35s .04s,transform .35s .04s;white-space:nowrap}.ag-panel--active .ag-panel__bar,.ag-panel--active .ag-panel__text,.ag-panel:hover .ag-panel__bar,.ag-panel:hover .ag-panel__text{opacity:1;transform:translateX(0)}.accordion-arrow{position:absolute;z-index:5;bottom:18px;width:38px;height:38px;display:grid;place-items:center;padding:0;border:1px solid rgba(235,234,229,.35);border-radius:50%;background:rgba(20,22,20,.65);color:#ebeae5;cursor:pointer;transition:transform .3s,background .3s,color .3s,border-color .3s}.accordion-arrow:hover{background:var(--acid);color:#171817;border-color:var(--acid);transform:scale(1.1)}.accordion-arrow-left{right:104px}.accordion-arrow-right{right:56px}.accordion-count{position:absolute;right:58px;top:18px;color:#c4c6bc;font:10px 'DM Mono',monospace;z-index:5}.accordion-count span{color:#747a70}
@media(max-width:800px){.accordion-gallery{height:430px;padding-right:0;gap:7px}.ag-panel{transform:rotateY(-4deg);border-radius:12px}.ag-panel--active{flex-grow:3.5}.ag-panel__label{left:10px;right:10px;bottom:14px}.ag-panel__text{font-size:10px}.accordion-arrow{bottom:13px;width:32px;height:32px}.accordion-arrow-left{right:54px}.accordion-arrow-right{right:14px}.accordion-count{top:13px;right:14px}}
.accordion-gallery{height:650px;padding:26px 22px;border:1px solid #332d3d;border-radius:3px;background:#100e16;gap:10px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.015)}.ag-panel{border-radius:22px;background:#17151e;transform:rotateY(0);opacity:.5;filter:grayscale(1) brightness(.62);transition:flex-grow .7s cubic-bezier(.2,.65,.3,1),opacity .5s ease,filter .5s ease,border-color .5s ease,box-shadow .5s ease}.ag-panel--active{flex-grow:6.5;opacity:1;filter:grayscale(0) brightness(1);border-color:rgba(255,255,255,.08);box-shadow:0 16px 34px rgba(0,0,0,.35)}.ag-panel__media{inset:0}.ag-panel__media img{object-fit:cover}.ag-panel__overlay{background:linear-gradient(180deg,rgba(8,7,12,.02) 45%,rgba(8,7,12,.82) 100%)}.ag-panel__label{left:30px;right:26px;bottom:30px;gap:14px}.ag-panel__bar{width:4px;height:39px;background:#fff}.ag-panel__text{font-size:24px;font-weight:700;letter-spacing:-.05em}.ag-panel:hover{opacity:1}.accordion-arrow{bottom:38px;background:rgba(16,14,22,.72);border-color:rgba(255,255,255,.22)}.accordion-count{top:36px;right:34px;color:rgba(255,255,255,.68)}
@media(max-width:800px){.accordion-gallery{height:500px;padding:16px 12px;gap:6px;border-radius:3px}.ag-panel{border-radius:15px}.ag-panel--active{flex-grow:4.6}.ag-panel__label{left:16px;right:12px;bottom:20px}.ag-panel__text{font-size:16px}.accordion-arrow{bottom:22px;width:32px;height:32px}.accordion-count{top:24px;right:20px}}
.accordion-gallery{width:100%;margin:0 auto;padding:26px 0;background:transparent;border:0;box-shadow:none}.ag-panel{box-shadow:0 8px 24px rgba(0,0,0,.16)}.ag-panel--active{box-shadow:0 12px 28px rgba(0,0,0,.2),0 0 18px rgba(216,255,84,.05)}
@media(max-width:800px){.accordion-gallery{padding:16px 0}}
.work-module-main-image,.work-module-main-image .main-image-stage,.work-module-main-image .accordion-gallery{width:100%;max-width:100%;min-width:0;box-sizing:border-box;overflow:hidden}.work-module-main-image .accordion-gallery{margin-left:0;margin-right:0}
.ag-panel:hover .ag-panel__media,.ag-panel:hover .ag-panel__media img{transform:none}.ag-panel:hover{opacity:.5;box-shadow:none}.ag-panel--active:hover{opacity:1;box-shadow:0 20px 40px rgba(0,0,0,.22),0 0 25px rgba(216,255,84,.08)}.main-image-footer{position:relative;margin-top:14px}.main-image-thumbs{display:grid;grid-template-columns:repeat(8,1fr);gap:8px;padding-right:320px}.main-image-thumbs button{position:relative;height:72px;min-width:0;padding:0;overflow:hidden;border:1px solid rgba(235,234,229,.16);border-radius:9px;background:#252725;cursor:pointer;opacity:.58;transition:opacity .3s,border-color .3s}.main-image-thumbs button.is-active{opacity:1;border-color:var(--acid)}.main-image-thumbs img{width:100%;height:100%;display:block;object-fit:cover}.main-image-thumbs span{position:absolute;left:7px;right:7px;bottom:6px;overflow:hidden;color:#fff;font-size:9px;text-align:left;text-overflow:ellipsis;white-space:nowrap;text-shadow:0 1px 8px rgba(0,0,0,.9)}.main-image-glass{position:absolute;right:0;bottom:0;width:300px;min-height:72px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:6px 12px;padding:13px 16px;border:1px solid rgba(255,255,255,.23);border-radius:13px;background:rgba(25,27,25,.58);backdrop-filter:blur(16px) saturate(120%);-webkit-backdrop-filter:blur(16px) saturate(120%);color:#ebeae5}.main-image-glass small{grid-column:1/-1;color:var(--acid);font-size:11px}.main-image-glass b{font-size:11px;font-weight:500;letter-spacing:.08em}.main-image-glass svg{justify-self:end;color:var(--acid)}
@media(max-width:800px){.main-image-thumbs{grid-template-columns:repeat(4,1fr);padding-right:0}.main-image-thumbs button{height:58px}.main-image-glass{position:relative;right:auto;bottom:auto;width:100%;margin-top:10px;min-height:64px}.main-image-glass small{font-size:10px}}
.accordion-gallery{height:auto;min-height:0;align-items:flex-start}.ag-panel,.ag-panel--active{flex:1 1 0;flex-grow:1;height:auto;aspect-ratio:3 / 4;transform:none}.ag-panel--active{filter:grayscale(0) brightness(1)}
.accordion-gallery{overflow:clip}.ag-panel,.ag-panel--active{width:0;min-width:0;max-width:100%;box-sizing:border-box;flex-basis:0}
.accordion-gallery{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));grid-auto-rows:auto;align-items:stretch;height:auto;overflow:hidden}.ag-panel,.ag-panel--active{width:100%;height:auto;min-width:0;aspect-ratio:3 / 4;flex:none}
@media(max-width:800px){.accordion-gallery{grid-template-columns:repeat(4,minmax(0,1fr));gap:7px}.ag-panel,.ag-panel--active{width:100%;height:auto;aspect-ratio:3 / 4}}
.work-module-main-image .ag-panel,.work-module-main-image .ag-panel--active{aspect-ratio:3 / 4}.work-module-main-image .ag-panel__media img{object-fit:contain;background:var(--bg)}
.work-module-main-image .accordion-gallery{display:flex;grid-template-columns:none;height:650px;min-height:0;align-items:stretch;gap:10px;overflow:hidden;padding:26px 0}.work-module-main-image .ag-panel,.work-module-main-image .ag-panel--active{width:auto;height:100%;aspect-ratio:auto;flex:1 1 0;flex-basis:0;min-width:0;transform:none}.work-module-main-image .ag-panel--active{flex-grow:6.5}.work-module-main-image .ag-panel__media img{object-fit:cover;background:transparent}.work-module-main-image .ag-panel:hover .ag-panel__media,.work-module-main-image .ag-panel:hover .ag-panel__media img{transform:none}
@media(max-width:800px){.work-module-main-image .accordion-gallery{height:500px;padding:16px 0;gap:6px}.work-module-main-image .ag-panel,.work-module-main-image .ag-panel--active{height:100%;aspect-ratio:auto}.work-module-main-image .ag-panel--active{flex-grow:4.6}}

/* Main image: contained four-column waterfall with the page background retained. */
.work-module-main-image .main-image-stage{
  width:100%;
  max-width:100%;
  min-width:0;
  overflow:hidden;
}
.work-module-main-image .main-image-waterfall{
  width:100%;
  max-width:100%;
  min-width:0;
  columns:4;
  column-gap:16px;
  column-fill:balance;
}
.work-module-main-image .main-image-card{
  display:block;
  width:100%;
  max-width:100%;
  min-width:0;
  break-inside:avoid;
  margin:0 0 16px;
  padding:0;
  overflow:hidden;
  border:1px solid rgba(235,234,229,.16);
  border-radius:14px;
  background:transparent;
  box-shadow:0 8px 24px rgba(0,0,0,.14);
}
.work-module-main-image .main-image-card-media{
  position:relative;
  width:100%;
  aspect-ratio:3 / 4;
  overflow:hidden;
}
.work-module-main-image .main-image-card img{
  display:block;
  width:100%;
  height:100%;
  object-fit:contain;
  background:var(--bg);
}
.work-module-main-image .main-image-card-index{
  position:absolute;
  top:14px;
  left:14px;
  color:var(--acid);
  font:10px 'DM Mono',monospace;
}
.work-module-main-image .main-image-card-label{
  position:absolute;
  right:14px;
  bottom:14px;
  left:14px;
  color:#fff;
  font-size:11px;
  line-height:1.35;
  text-shadow:0 1px 8px rgba(0,0,0,.85);
}
.work-module-main-image .main-image-card:hover{
  border-color:rgba(216,255,84,.48);
  box-shadow:0 12px 28px rgba(0,0,0,.22);
}
@media(max-width:1000px){
  .work-module-main-image .main-image-waterfall{columns:2;column-gap:12px}
  .work-module-main-image .main-image-card{margin-bottom:12px}
}
@media(max-width:560px){
  .work-module-main-image .main-image-waterfall{columns:1}
}

/* Lock the work grid to the shell so four cards cannot create an intrinsic overflow. */
.work-modules{grid-template-columns:minmax(0,1fr)}
.work-module-main-image{width:100%;max-width:100%;min-width:0}
.work-module-main-image .main-image-waterfall{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:16px;
  columns:auto;
}
.work-module-main-image .main-image-card{margin:0;min-width:0}
@media(max-width:1000px){
  .work-module-main-image .main-image-waterfall{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
}
@media(max-width:560px){
  .work-module-main-image .main-image-waterfall{grid-template-columns:minmax(0,1fr)}
}

/* Brand project long-form pages scroll inside their fixed modules. */
.brand-card{
  height:550px;
  min-height:0;
}
.brand-card>.brand-card-scroll{
  position:relative;
  inset:auto;
  width:100%;
  height:100%;
  min-height:0;
  overflow-x:hidden;
  overflow-y:auto;
  overscroll-behavior:contain;
  scrollbar-width:thin;
  scrollbar-color:var(--acid) transparent;
  background:#252624;
  cursor:ns-resize;
}
.brand-card>.brand-card-scroll img{
  position:relative;
  width:100%;
  height:auto;
  min-height:0;
  object-fit:contain;
  filter:saturate(.7);
  transform:none;
  transition:none;
}
.brand-card>div:last-child{
  z-index:2;
  pointer-events:none;
}
.brand-card:hover .brand-card-scroll img{transform:none}

/* Keep the moving-image frames fixed while the original videos scale proportionally inside them. */
.moving-feature video,
.moving-small video{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  display:block;
  object-fit:cover;
  background:var(--bg);
  filter:grayscale(.55);
  cursor:pointer;
  transition:transform .6s;
}
.moving-feature:hover video,
.moving-small:hover video{transform:scale(1.04)}
.moving-play{
  position:absolute;
  top:50%;
  left:50%;
  z-index:2;
  transform:translate(-50%,-50%);
  width:76px;
  height:76px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:rgba(16,16,15,.35);
  border:1px solid rgba(255,255,255,.7);
  color:#fff;
}
.moving-play:hover{transform:translate(-50%,-50%) scale(1.08)}
.moving-feature>div,
.moving-small>div{z-index:2}
@media(max-width:800px){
  .brand-card{height:430px}
  .brand-card>.brand-card-scroll img{min-height:0}
}

/* Image frames finish flush with the artwork; only card 07 keeps its current fit for replacement. */
.work-module-main-image .main-image-card{
  border:0;
  border-radius:14px;
  background:transparent;
  box-shadow:0 8px 20px rgba(0,0,0,.14);
}
.work-module-main-image .main-image-card-media{
  border-radius:inherit;
  background:transparent;
}
.work-module-main-image .main-image-card img{
  object-fit:cover;
  background:transparent;
}
.work-module-main-image .main-image-card:nth-child(7) img{
  object-fit:contain;
}
.work-module-main-image .main-image-card-label{display:none}

/* Main image 2 assets are native 1200x1500, so keep the original 4:5 frame ratio. */
.work-module-main-image .main-image-card,
.work-module-main-image .main-image-card-media{
  border-radius:8px;
}
.work-module-main-image .main-image-card-media{
  aspect-ratio:4 / 5;
}
.work-module-main-image .main-image-card img,
.work-module-main-image .main-image-card:nth-child(7) img{
  object-fit:contain;
}

/* Match the packaging motion language without changing the four-column grid geometry. */
.work-module-main-image .main-image-card{
  position:relative;
  transition:transform .45s cubic-bezier(.2,.65,.3,1),box-shadow .35s ease,border-color .35s ease;
}
.work-module-main-image .main-image-card img{
  transition:transform .65s ease,filter .45s ease;
}
.work-module-main-image .main-image-card:hover{
  z-index:2;
  transform:translateY(-6px);
  box-shadow:0 18px 38px rgba(0,0,0,.24),0 0 18px rgba(216,255,84,.08);
}
.work-module-main-image .main-image-card:hover img{
  transform:scale(1.045);
  filter:saturate(.98);
}

/* Give the brand pages room to scroll while preserving their fixed-width layout. */
.brand-card{height:825px}
.brand-card>.brand-card-scroll{height:100%;overflow-y:auto}

/* The play control becomes a pause control during playback and fades until interaction. */
.moving-play{
  opacity:1;
  transition:opacity .2s ease,transform .28s ease,background-color .28s ease;
}
.moving-play.is-hidden{
  opacity:0;
  pointer-events:none;
}

/* Editorial footer lockup with intentional scale and weight contrast. */
.footer-creative-title{
  display:flex;
  flex-wrap:wrap;
  align-items:baseline;
  gap:.02em .16em;
  max-width:1160px;
  font-size:clamp(58px,9vw,150px);
  line-height:.82;
  letter-spacing:-.09em;
  font-weight:600;
}
.footer-creative-title span:first-child{font-size:.72em;font-weight:500}
.footer-creative-title i{
  font-family:'Playfair Display',serif;
  font-size:1.18em;
  font-style:italic;
  font-weight:500;
  letter-spacing:-.08em;
}
.footer-creative-title span:nth-of-type(2){font-size:.62em;font-weight:500;letter-spacing:-.06em}
.footer-creative-title strong{font-size:.92em;font-weight:800;letter-spacing:-.1em}

@media(max-width:800px){
  .brand-card{height:645px}
  .footer-creative-title{font-size:clamp(48px,15vw,92px);gap:.04em .13em}
}

/* Keep the long A+ artwork in a real wheel-scroll container. */
.brand-card>.brand-card-scroll{
  display:block;
  height:100% !important;
  min-height:0 !important;
  max-height:100%;
  overflow-x:hidden;
  overflow-y:auto;
  overscroll-behavior:contain;
  -webkit-overflow-scrolling:touch;
}
.brand-card>.brand-card-scroll img{
  display:block;
  width:100%;
  height:auto;
  min-height:0;
  max-width:none;
}

/* Footer lockup: reduce the desktop scale while preserving its typographic rhythm. */
.footer-creative-title{
  font-size:clamp(46px,7.2vw,120px);
  gap:.02em .18em;
}
.footer-creative-title span:first-child{
  font-family:Arial,sans-serif;
  font-size:.9em;
  padding-top:4px;
  padding-right:45px;
  margin-right:-5px;
}
.footer-creative-title span:nth-of-type(2){padding-right:14px}
.footer-creative-title strong{
  font-family:Arial,sans-serif;
  font-weight:500;
  padding-right:45px;
}
@media(max-width:800px){
  .footer-creative-title{
    font-size:clamp(42px,12vw,74px);
    gap:.04em .13em;
  }
  .footer-creative-title span:first-child{padding-right:22px}
  .footer-creative-title strong{padding-right:22px}
}

/* Core strengths follows the reference's editorial, asymmetric card composition. */
.strength-intro h2{
  display:grid;
  gap:16px;
  letter-spacing:-.08em;
}
.strength-intro h2 span{
  display:block;
  font-family:Arial,sans-serif;
  font-size:clamp(58px,8vw,132px);
  font-weight:700;
  line-height:.84;
  letter-spacing:-.08em;
}
.strength-intro h2 i{
  display:block;
  font-family:Arial,sans-serif;
  font-size:clamp(20px,2vw,32px);
  font-style:normal;
  font-weight:500;
  line-height:1;
  letter-spacing:0;
  color:#a7aaa2;
}
.strength-grid{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(0,1.12fr) minmax(0,1fr);
  grid-template-rows:repeat(2,minmax(250px,1fr));
  gap:16px;
  border-top:0;
}
.strength-card{
  position:relative;
  display:flex;
  flex-direction:column;
  min-width:0;
  min-height:250px;
  overflow:hidden;
  padding:28px 30px 24px;
  border:1px solid rgba(235,234,229,.16);
  border-radius:24px;
  background:linear-gradient(135deg,#151615,#0f100f 68%,#1d2414);
  transition:transform .38s cubic-bezier(.2,.65,.3,1),background-color .35s ease,color .35s ease,border-color .35s ease,box-shadow .38s ease;
}
.strength-card-brand{grid-column:1;grid-row:1}
.strength-card-ai{grid-column:2 / 4;grid-row:1}
.strength-card-growth{grid-column:1;grid-row:2}
.strength-card-system{grid-column:2;grid-row:2}
.strength-card-team{grid-column:3;grid-row:2}
.strength-card::after{
  content:'';
  position:absolute;
  width:220px;
  height:220px;
  right:-80px;
  bottom:-110px;
  border-radius:50%;
  background:rgba(216,255,84,.05);
  filter:blur(22px);
  pointer-events:none;
  transition:background-color .35s ease,transform .45s ease;
}
.strength-index{
  position:relative;
  z-index:1;
  color:var(--acid);
  font:11px 'DM Mono',monospace;
}
.strength-card h3{
  position:relative;
  z-index:1;
  margin:48px 0 0;
  font-size:clamp(28px,2.7vw,46px);
  line-height:.95;
  letter-spacing:-.075em;
  font-weight:600;
}
.strength-card h3 span{color:var(--acid)}
.strength-card p{
  position:relative;
  z-index:1;
  max-width:690px;
  margin:20px 0 0;
  color:#b7bbb0;
  font-size:12px;
  line-height:1.75;
  opacity:0;
  max-height:0;
  transform:translateY(10px);
  transition:opacity .3s ease,transform .35s ease,max-height .35s ease,color .35s ease;
}
.strength-tags{
  position:relative;
  z-index:1;
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:auto;
  padding-top:24px;
}
.strength-tags span{
  padding:8px 12px;
  border-radius:999px;
  background:rgba(255,255,255,.08);
  color:#d7d9d2;
  font-size:11px;
  font-weight:600;
  transition:background-color .35s ease,color .35s ease;
}
.strength-card:hover{
  z-index:2;
  transform:translateY(-8px);
  border-color:var(--acid);
  background:var(--acid);
  color:#12140f;
  box-shadow:0 20px 42px rgba(0,0,0,.28),0 0 30px rgba(216,255,84,.16);
}
.strength-card:hover::after{background:rgba(255,255,255,.25);transform:scale(1.2)}
.strength-card:hover .strength-index,
.strength-card:hover h3 span{color:#12140f}
.strength-card:hover p{
  color:#242a1b;
  opacity:1;
  max-height:130px;
  transform:translateY(0);
}
.strength-card:hover .strength-tags span{background:rgba(18,20,15,.12);color:#12140f}
@media(max-width:800px){
  .strength-intro h2 span{font-size:clamp(48px,14vw,82px)}
  .strength-intro h2 i{font-size:22px}
  .strength-grid{display:grid;grid-template-columns:1fr;grid-template-rows:none;gap:12px}
  .strength-card,.strength-card-brand,.strength-card-ai,.strength-card-growth,.strength-card-system,.strength-card-team{grid-column:auto;grid-row:auto;min-height:230px;padding:24px 22px 20px}
  .strength-card h3{margin-top:38px;font-size:34px}
  .strength-card p{opacity:1;max-height:130px;transform:none;margin-top:16px}
  .strength-card:hover{transform:translateY(-4px)}
}

/* Final content scale and section rhythm for the selected-work sequence. */
.work-section-label{
  justify-content:flex-start;
  width:auto;
}
.section-head>p,
.module-heading>p,
.strength-intro>p{
  font-size:11px;
}
.work-modules{gap:100px}
.strengths,.brand-projects,.moving{margin-top:110px}
.strength-intro h2 span{font-size:clamp(48px,6.3vw,90px)}

/* Keep the annotated footer word sizes independent and responsive. */
.footer-creative-title span:first-child{font-size:clamp(52px,9.9vw,141.8px)}
.footer-creative-title i{font-size:clamp(64px,11.93vw,170.96px)}
.footer-creative-title span:nth-of-type(2){font-size:clamp(46px,6.6vw,94.64px);padding-right:25px}
.footer-creative-title strong{
  font-size:clamp(48px,7.06vw,101.24px);
  width:min(613.4px,100%);
  height:121px;
  min-height:121px;
  display:inline-flex;
  align-items:center;
  border:0 !important;
  padding-right:0;
}
@media(max-width:800px){
  .work-modules{gap:72px}
  .strengths,.brand-projects,.moving{margin-top:80px}
  .footer-creative-title span:first-child{font-size:clamp(44px,12vw,82px)}
  .footer-creative-title i{font-size:clamp(54px,15vw,102px)}
  .footer-creative-title span:nth-of-type(2){font-size:clamp(40px,9vw,64px)}
  .footer-creative-title strong{font-size:clamp(42px,9.5vw,68px);height:auto;min-height:82px;width:100%;padding-right:0}
}

.music-toggle{
  position:fixed;
  right:24px;
  bottom:24px;
  z-index:30;
  width:40px;
  height:40px;
  display:grid;
  place-items:center;
  padding:0;
  border:1px solid rgba(235,234,229,.32);
  border-radius:50%;
  background:rgba(23,24,23,.66);
  color:#ebeae5;
  backdrop-filter:blur(12px);
  -webkit-backdrop-filter:blur(12px);
  cursor:pointer;
  transition:transform .35s cubic-bezier(.16,1,.3,1),background-color .3s ease,color .3s ease,border-color .3s ease,box-shadow .35s ease;
}
.music-toggle:hover,
.music-toggle:focus-visible{
  transform:translateY(-4px) scale(1.05);
  border-color:var(--acid);
  background:var(--acid);
  color:#171817;
  box-shadow:0 12px 28px rgba(0,0,0,.24),0 0 20px rgba(216,255,84,.14);
  outline:none;
}
.music-toggle.is-playing{color:var(--acid)}
.music-toggle.is-playing::after{
  content:'';
  position:absolute;
  inset:-5px;
  border:1px solid rgba(216,255,84,.2);
  border-radius:50%;
  animation:music-pulse 2.6s ease-in-out infinite;
  pointer-events:none;
}
@keyframes music-pulse{
  0%,100%{opacity:.2;transform:scale(.92)}
  50%{opacity:.75;transform:scale(1.04)}
}
@media(max-width:800px){
  .music-toggle{right:16px;bottom:16px;width:36px;height:36px}
}
@media(prefers-reduced-motion:reduce){
  .music-toggle.is-playing::after{animation:none}
}

/* Added editorial portfolio modules: restrained typography, intrinsic image ratios and snap-scrolling. */
.work-module-basic-vi,.work-module-brochure,.work-module-new-video{position:relative}
.work-module-basic-vi::before,.work-module-brochure::before,.work-module-new-video::before{content:'✳';position:absolute;right:3%;top:3%;font-size:clamp(34px,5vw,72px);font-weight:300;color:var(--acid);opacity:.72;pointer-events:none}
.snap-carousel-wrap{position:relative;margin-top:30px}
.snap-carousel{display:flex;gap:18px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:0 max(4vw,calc((100vw - 1120px)/2)) 16px;scrollbar-width:none}
.snap-carousel::-webkit-scrollbar{display:none}
.snap-slide{flex:0 0 min(82vw,1060px);min-width:0;scroll-snap-align:center;scroll-snap-stop:always;background:rgba(255,255,255,.025);border:1px solid rgba(235,234,229,.12);padding:clamp(10px,2vw,24px);display:flex;flex-direction:column;justify-content:space-between;min-height:400px}
.snap-image-button{width:100%;height:min(65vh,720px);min-height:270px;border:0;padding:0;background:transparent;display:grid;place-items:center;cursor:zoom-in;overflow:hidden}
.snap-image-button img{display:block;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;transition:transform .55s cubic-bezier(.2,.8,.2,1)}
.snap-image-button:hover img{transform:scale(1.025)}
.snap-caption{display:flex;align-items:center;gap:18px;padding-top:18px;color:rgba(235,234,229,.62);font-size:10px;letter-spacing:.12em;text-transform:uppercase}
.snap-caption b{font-size:12px;font-weight:500;letter-spacing:.04em;color:#ebeae5;text-transform:none}
.snap-view{margin-left:auto;color:var(--acid)}
.snap-placeholder{height:min(65vh,720px);min-height:270px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;border:1px dashed rgba(235,234,229,.24);color:rgba(235,234,229,.6);text-align:center}
.snap-placeholder>span{font-size:42px;color:var(--acid);font-weight:200}
.snap-placeholder b{font-size:16px;font-weight:500;color:#ebeae5}
.snap-placeholder small{font-size:11px;max-width:300px;line-height:1.7}
.snap-controls{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px 4vw 0;color:rgba(235,234,229,.48);font-size:9px;letter-spacing:.12em;text-transform:uppercase}
.snap-dots{display:flex;align-items:center;justify-content:center;gap:7px;max-width:55%;overflow-x:auto;padding:8px}
.snap-dots button{width:6px;height:6px;flex:0 0 6px;border:0;border-radius:20px;padding:0;background:rgba(235,234,229,.3);cursor:pointer;transition:width .25s,background .25s}
.snap-dots button.is-active{width:22px;background:var(--acid)}
.new-video-stage{max-width:1040px;margin:42px auto 0;padding:0 clamp(14px,3vw,38px)}
.new-video-stage video{display:block;width:100%;max-height:76vh;aspect-ratio:16/9;object-fit:contain;background:#0d0e0d;border:1px solid rgba(235,234,229,.14)}
.video-ornament,.video-caption{display:flex;align-items:center;justify-content:space-between;gap:16px;color:rgba(235,234,229,.56);font-size:9px;letter-spacing:.14em;text-transform:uppercase}
.video-ornament{margin-bottom:12px}
.video-ornament i{font-size:20px;font-style:normal;color:var(--acid)}
.video-caption{padding-top:15px;flex-wrap:wrap}
.video-caption b{font-size:clamp(13px,1.5vw,18px);font-weight:400;letter-spacing:.02em;color:#ebeae5;text-transform:none}
.image-lightbox{position:fixed;inset:0;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:5vh 5vw;background:rgba(10,11,10,.94);backdrop-filter:blur(12px);cursor:zoom-out}
.image-lightbox img{max-width:min(90vw,1500px);max-height:82vh;width:auto;height:auto;object-fit:contain;cursor:default}
.image-lightbox p{margin:0;color:#ebeae5;font-size:12px;letter-spacing:.08em}
.lightbox-close{position:absolute;top:22px;right:24px;width:44px;height:44px;border:1px solid rgba(235,234,229,.3);border-radius:50%;display:grid;place-items:center;background:transparent;color:#ebeae5;cursor:pointer}
.lightbox-close:hover{background:var(--acid);color:#171817;border-color:var(--acid)}
@media(max-width:800px){
  .snap-carousel{gap:10px;padding:0 5vw 12px}
  .snap-slide{flex-basis:90vw;min-height:280px;padding:10px}
  .snap-image-button,.snap-placeholder{height:54vh;min-height:230px}
  .snap-caption{gap:9px;padding-top:12px;font-size:8px}
  .snap-caption b{font-size:11px}
  .snap-controls{padding:12px 5vw 0;gap:8px;font-size:8px}
  .snap-controls>span:first-child{max-width:82px;line-height:1.5}
  .snap-dots{gap:5px;max-width:56%;padding:6px 2px}
  .snap-dots button{width:5px;height:5px;flex-basis:5px}
  .snap-dots button.is-active{width:15px}
  .new-video-stage{margin-top:28px;padding:0}
  .video-caption{gap:8px}
  .video-caption>span:last-child{display:none}
  .image-lightbox{padding:4vh 4vw}
  .image-lightbox img{max-width:92vw;max-height:78vh}
}
@media(prefers-reduced-motion:reduce){.snap-carousel{scroll-behavior:auto}.snap-image-button img{transition:none}}

/* Direct pointer dragging complements touch scrolling and the pagination dots. */
.snap-carousel{cursor:grab;touch-action:pan-y;user-select:none;-webkit-user-select:none}
.snap-carousel.is-pointer-dragging{cursor:grabbing;scroll-snap-type:none;scroll-behavior:auto}
.snap-carousel .snap-image-button{width:fit-content;max-width:100%;height:auto;min-height:0;margin:0 auto;display:flex;align-items:center;justify-content:center;cursor:grab;overflow:visible}
.snap-carousel.is-pointer-dragging .snap-image-button{cursor:grabbing}
.snap-carousel .snap-image-button img{width:auto;height:auto;max-width:100%;max-height:min(65vh,720px);object-fit:contain;-webkit-user-drag:none}
.snap-slide{min-height:0;justify-content:flex-start}
.snap-slide-placeholder{min-height:0}
@media(max-width:800px){
  .snap-slide{min-height:0}
  .snap-carousel .snap-image-button{height:auto;min-height:0}
  .snap-carousel .snap-image-button img{max-height:54vh}
}

/* Third film card in the closing motion gallery. */
.moving-grid{grid-template-columns:1.25fr .75fr;align-items:stretch}
.moving-product{grid-column:1/-1;display:grid;grid-template-columns:minmax(0,1.6fr) minmax(260px,.8fr);min-height:0;border:1px solid rgba(235,234,229,.18);background:#20211f;overflow:hidden}
.moving-product-media{position:relative;min-width:0;aspect-ratio:16/9;background:#0d0e0d}
.moving-product-media video{display:block;width:100%;height:100%;object-fit:contain;background:#0d0e0d}
.moving-product-media>span{position:absolute;top:18px;right:22px;color:var(--acid);font-size:24px;pointer-events:none}
.moving-product-copy{display:flex;flex-direction:column;justify-content:center;padding:clamp(24px,5vw,76px)}
.moving-product-copy small{color:var(--acid);font:11px 'DM Mono',monospace;letter-spacing:.1em}
.moving-product-copy h3{font-size:clamp(25px,3.5vw,48px);line-height:1.12;font-weight:500;letter-spacing:-.055em;margin:25px 0 16px}
.moving-product-copy p{color:#a3a39c;font-size:13px;line-height:1.8;margin:0}
@media(max-width:800px){.moving-product{grid-template-columns:1fr}.moving-product-copy{padding:24px 20px 28px}.moving-product-copy h3{font-size:28px;margin:17px 0 10px}}

/* Directional, draggable image rails for the social advertising module. */
.module-heading h3{font-size:clamp(26px,3.2vw,48px)}
@media(max-width:800px){.module-heading h3{font-size:34px}}
.directional-gallery-wrap{min-width:0;position:relative;margin:0 0 12px}
.directional-gallery{touch-action:pan-x;cursor:grab;scroll-behavior:auto;scrollbar-width:thin;scrollbar-color:var(--acid) transparent;overscroll-behavior-x:contain}
.directional-gallery.is-pointer-dragging{cursor:grabbing}
.directional-gallery .directional-gallery-card{flex:0 0 clamp(230px,22vw,340px);height:410px;transform:none;border-color:rgba(235,234,229,.16);box-shadow:none}
.directional-gallery .directional-gallery-card:hover{flex-basis:clamp(230px,22vw,340px);transform:translateY(-4px);border-color:rgba(216,255,84,.6);box-shadow:0 18px 38px rgba(0,0,0,.24)}
.directional-gallery-card>button{position:relative;display:block;width:100%;height:100%;padding:0;border:0;background:transparent;text-align:left;cursor:inherit}
.directional-gallery-card img{pointer-events:none}
.directional-gallery-card>button>span{position:absolute;left:18px;right:18px;bottom:18px;display:flex;justify-content:space-between;align-items:end;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.22);border-radius:10px;background:rgba(22,24,22,.54);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:#f4f3ed}
.directional-gallery-card small{color:var(--acid);font:10px 'DM Mono',monospace;white-space:nowrap}
.directional-gallery-card b{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;font-weight:500}
.directional-gallery-card i{color:var(--acid);font:10px 'DM Mono',monospace;font-style:normal;white-space:nowrap}
.gallery-hint{margin:6px 0 0;color:#8d8e86;font:10px 'DM Mono',monospace;letter-spacing:.08em}
@media(max-width:800px){.directional-gallery .directional-gallery-card{flex-basis:72vw;height:390px}.directional-gallery .directional-gallery-card:hover{flex-basis:72vw}.gallery-hint{font-size:9px}}

/* Portrait 3:4 cards for both rows in section 05. */
.directional-gallery .directional-gallery-card{height:auto;aspect-ratio:3/4;min-height:0}
@media(max-width:800px){.directional-gallery .directional-gallery-card{height:auto;aspect-ratio:3/4}}

/* Brand project labels sit above artwork; requested long descriptions stay out of the image area. */
.brand-card-heading{position:absolute!important;top:18px!important;left:18px!important;right:auto!important;bottom:auto!important;z-index:3;display:block!important;pointer-events:none;padding:9px 13px;border:1px solid rgba(255,255,255,.38);border-radius:999px;background:rgba(22,24,22,.6);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
.brand-card-heading small{display:block;margin:0!important;color:var(--acid)!important;font:11px 'DM Mono',monospace;letter-spacing:.08em}
.brand-card-action{position:absolute!important;left:auto!important;right:18px!important;bottom:18px!important;z-index:3;display:grid!important;place-items:center;width:42px;height:42px;border:1px solid rgba(255,255,255,.45);border-radius:50%;background:rgba(22,24,22,.55);color:#fff;pointer-events:none}

/* Lastar visual identity application mockup beneath the VI carousel. */
.vi-application-showcase{margin-top:34px;padding:clamp(22px,4vw,52px);border:1px solid rgba(235,234,229,.16);border-radius:22px;background:linear-gradient(135deg,rgba(235,234,229,.055),rgba(235,234,229,.012));overflow:hidden}
.vi-application-heading{display:flex;justify-content:space-between;align-items:end;gap:28px;margin-bottom:26px}
.vi-application-heading small{display:block;color:var(--acid);font:10px 'DM Mono',monospace;letter-spacing:.14em;margin-bottom:12px}
.vi-application-heading h4{margin:0;font-size:clamp(25px,3vw,40px);font-weight:500;letter-spacing:-.055em}
.vi-application-heading h4 i{margin-left:12px;color:var(--acid);font:italic 500 .72em 'Playfair Display',serif;letter-spacing:-.025em}
.vi-application-heading p{max-width:350px;margin:0;color:#a3a39c;font-size:12px;line-height:1.8}
.vi-application-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:14px;align-items:stretch}
.vi-application-mosaic{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:12px;min-height:0}
.vi-application-mosaic button,.vi-application-feature{position:relative;display:block;min-width:0;min-height:0;padding:0;border:1px solid rgba(235,234,229,.14);overflow:hidden;background:#f4f3ed;color:#272825;cursor:zoom-in}
.vi-application-mosaic button{border-radius:12px}
.vi-application-mosaic img{display:block;width:100%;height:100%;object-fit:contain;transition:transform .45s ease}
.vi-application-mosaic button:hover img{transform:scale(1.035)}
.vi-application-mosaic button span{position:absolute;left:8px;bottom:8px;padding:6px 8px;border-radius:6px;background:rgba(23,24,23,.72);color:var(--acid);font:8px 'DM Mono',monospace;letter-spacing:.06em}
.vi-application-feature{min-height:390px;aspect-ratio:1.42;border-radius:14px;display:grid;place-items:center}
.vi-application-feature>img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.vi-feature-mark{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:.08em .22em .16em;color:#f5a900;background:rgba(255,255,255,.74);font-size:clamp(55px,10vw,128px);line-height:.88;letter-spacing:-.08em;font-weight:500;pointer-events:none}
.vi-feature-mark>span{font-size:.2em;vertical-align:top;letter-spacing:0}
.vi-application-feature>small{position:absolute;left:18px;bottom:16px;padding:8px 10px;background:rgba(23,24,23,.76);color:var(--acid);font:9px 'DM Mono',monospace;letter-spacing:.09em}
.amazon-video-heading{margin:42px 0 28px;padding-top:26px;border-top:1px solid var(--line)}
.amazon-video-heading h3{font-size:clamp(26px,3.2vw,48px)}
/* Use one sans-serif family and consistent spacing for the closing headline. */
.footer-creative-title,.footer-creative-title span,.footer-creative-title i,.footer-creative-title strong{font-family:Manrope,Arial,sans-serif;font-size:inherit;font-style:normal;font-weight:500;letter-spacing:-.065em}
.footer-creative-title{display:flex;flex-wrap:wrap;align-items:baseline;gap:.08em .22em;max-width:1040px;font-size:clamp(54px,8vw,118px);line-height:1.02;letter-spacing:-.065em;font-weight:500}
.footer-creative-title span:first-child,.footer-creative-title span:nth-of-type(2),.footer-creative-title i,.footer-creative-title strong{font-size:inherit;font-weight:500;letter-spacing:inherit}
@media(max-width:800px){.vi-application-showcase{padding:18px;margin-top:26px}.vi-application-heading{display:block}.vi-application-heading p{margin-top:12px}.vi-application-layout{grid-template-columns:1fr;gap:12px}.vi-application-mosaic{grid-template-columns:1fr 1fr;grid-template-rows:repeat(2, minmax(110px, 1fr));min-height:260px}.vi-application-feature{min-height:0;aspect-ratio:1.42}.amazon-video-heading{margin:32px 0 22px;padding-top:20px}.footer-creative-title{font-size:clamp(42px,12vw,72px);gap:.12em .18em;line-height:1.05}}

/* AI design productivity section, aligned with the portfolio's dark editorial system. */
.ai-design-system{position:relative;border-top:1px solid var(--line);margin-top:80px;padding-top:42px}
.ai-design-system>.section-label{width:260px}
.ai-system-intro{display:flex;justify-content:space-between;align-items:end;gap:36px;margin:54px 0 48px}
.ai-system-intro .kicker{margin:0 0 16px}
.ai-system-intro h2{max-width:760px;margin:0;font-size:clamp(40px,6vw,84px);line-height:1.03;letter-spacing:-.075em;font-weight:500}
.ai-system-intro h2 i{display:block;margin-top:12px;color:var(--acid);font:500 clamp(24px,3.2vw,42px) 'DM Mono',monospace;letter-spacing:-.05em}
.ai-system-slogan{flex:0 0 310px;margin:0 0 6px;color:#bfc0b8;font-size:clamp(15px,1.7vw,21px);line-height:1.8}
.ai-capability-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.ai-capability-grid article{position:relative;min-height:230px;padding:22px 22px 26px 0;border-right:1px solid var(--line)}
.ai-capability-grid article+article{padding-left:22px}
.ai-capability-grid article:last-child{border-right:0}
.ai-capability-grid article>span,.ai-panel-heading small,.ai-comparison article>small,.ai-scenarios small,.ai-system-conclusion>span{color:#8f9088;font:10px 'DM Mono',monospace;letter-spacing:.1em}
.ai-capability-grid article>i{position:absolute;top:16px;right:20px;color:var(--acid);font-size:20px;font-style:normal}
.ai-capability-grid h3{margin:48px 0 12px;font-size:clamp(19px,2vw,26px);font-weight:500;letter-spacing:-.05em}
.ai-capability-grid p{max-width:240px;margin:0;color:#a3a39c;font-size:12px;line-height:1.8}
.ai-efficiency-panel{margin-top:76px;padding:clamp(24px,4vw,48px);border:1px solid rgba(235,234,229,.16);border-radius:18px;background:linear-gradient(140deg,rgba(235,234,229,.045),rgba(235,234,229,.012))}
.ai-panel-heading{display:flex;justify-content:space-between;align-items:end;gap:24px;margin-bottom:26px}
.ai-panel-heading h3{margin:0;font-size:clamp(20px,2.5vw,32px);font-weight:500;letter-spacing:-.055em}
.ai-comparison{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:24px}
.ai-comparison article{padding:24px;border-radius:12px;background:rgba(255,255,255,.035);border:1px solid rgba(235,234,229,.1)}
.ai-comparison article>small{color:#92938b}
.ai-comparison h4{margin:12px 0 18px;font-size:20px;font-weight:500}
.ai-comparison ul{display:grid;grid-template-columns:1fr 1fr;gap:12px 20px;margin:0;padding:0;list-style:none}
.ai-comparison li{position:relative;padding-left:14px;color:#a3a39c;font-size:12px;line-height:1.6}
.ai-comparison li::before{content:'—';position:absolute;left:0;color:var(--acid)}
.ai-comparison-next{border-color:rgba(216,255,84,.28)!important;background:rgba(216,255,84,.035)!important}
.ai-comparison-next>small{color:var(--acid)!important}
.ai-comparison-arrow{color:var(--acid);font-size:24px}
.ai-scenarios{display:flex;justify-content:space-between;align-items:center;gap:30px;margin-top:64px;padding:24px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.ai-scenarios h3{margin:12px 0 0;font-size:clamp(18px,2.3vw,27px);font-weight:500;letter-spacing:-.04em}
.ai-scenario-tags{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:9px}
.ai-scenario-tags span{padding:9px 13px;border:1px solid rgba(216,255,84,.25);border-radius:999px;color:#c8d99b;font-size:11px}
.ai-system-conclusion{display:flex;justify-content:center;align-items:center;gap:18px;margin:36px 0 0;color:#ebeae5;font-size:clamp(17px,2.5vw,28px);letter-spacing:-.04em;text-align:center}
.ai-system-conclusion>span{color:var(--acid);font-size:9px}
.ai-system-conclusion i{color:var(--acid);font-style:normal}
@media(max-width:800px){.ai-design-system{margin-top:55px;padding-top:28px}.ai-system-intro{display:block;margin:38px 0 32px}.ai-system-intro h2{font-size:clamp(38px,11vw,60px)}.ai-system-intro h2 i{font-size:clamp(21px,6vw,30px)}.ai-system-slogan{margin-top:22px}.ai-capability-grid{grid-template-columns:1fr 1fr}.ai-capability-grid article{min-height:205px;padding:18px 14px 20px 0;border-bottom:1px solid var(--line)}.ai-capability-grid article+article{padding-left:14px}.ai-capability-grid article:nth-child(2){border-right:0}.ai-capability-grid article:nth-child(n+3){border-bottom:0}.ai-capability-grid h3{margin-top:42px;font-size:20px}.ai-capability-grid p{font-size:11px}.ai-panel-heading{display:block}.ai-panel-heading h3{margin-top:12px}.ai-comparison{grid-template-columns:1fr;gap:12px}.ai-comparison-arrow{justify-self:center;transform:rotate(90deg)}.ai-comparison article{padding:19px}.ai-comparison ul{gap:10px}.ai-scenarios{display:block;margin-top:42px}.ai-scenario-tags{justify-content:flex-start;margin-top:20px}.ai-system-conclusion{flex-wrap:wrap;gap:10px;font-size:18px}}

/* Match the AI system title and subtitle to the portfolio's project heading scale. */
.ai-system-intro h2{font-size:clamp(26px,3.2vw,48px);line-height:1.1;letter-spacing:-.075em;font-weight:500}
.ai-system-intro h2 i{display:block;margin-top:10px;color:inherit;font-family:Manrope,Arial,sans-serif;font-size:inherit;font-style:normal;font-weight:500;letter-spacing:inherit}
@media(max-width:800px){.ai-system-intro h2{font-size:34px}.ai-system-intro h2 i{font-size:inherit}}

/* AI packaging rollout showcase before the brand project chapter. */
.packaging-impact{border-top:1px solid var(--line);margin-top:150px;padding-top:42px}
.packaging-impact .module-heading{margin-top:48px}
.packaging-impact-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-auto-rows:clamp(170px,20vw,290px);gap:14px}
.packaging-impact-grid>div{position:relative;display:block;min-width:0;min-height:0;padding:0;overflow:hidden;border:1px solid rgba(235,234,229,.14);border-radius:14px;background:#252624;cursor:default}
.packaging-impact-grid>div.packaging-impact-feature{grid-column:span 2;grid-row:span 2}
.packaging-impact-grid img{display:block;width:100%;height:100%;object-fit:contain;background:#222321;transition:transform .5s ease}
.packaging-impact-grid>div:hover img{transform:scale(1.025)}
.packaging-impact-grid>div>span{position:absolute;left:12px;right:12px;bottom:12px;display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 12px;border:1px solid rgba(255,255,255,.2);border-radius:9px;background:rgba(22,24,22,.62);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);text-align:left}
.packaging-impact-grid small{color:var(--acid);font:9px 'DM Mono',monospace;letter-spacing:.08em}
.packaging-impact-grid b{color:#f3f2ec;font-size:11px;font-weight:500}
@media(max-width:800px){.packaging-impact{margin-top:100px;padding-top:28px}.packaging-impact .module-heading{margin-top:34px}.packaging-impact-grid{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:clamp(150px,45vw,240px);gap:10px}.packaging-impact-grid>div.packaging-impact-feature{grid-column:span 2;grid-row:span 2}.packaging-impact-grid>div>span{left:8px;right:8px;bottom:8px;padding:8px;gap:6px}.packaging-impact-grid small{font-size:8px}.packaging-impact-grid b{font-size:10px}}

@media(prefers-reduced-motion:reduce){main::before{animation:none;transform:none;will-change:auto}.hero-gallery-track{animation:none}}
````

## `vite.config.js`

````vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/public/moving/**'],
    },
  },
});
````
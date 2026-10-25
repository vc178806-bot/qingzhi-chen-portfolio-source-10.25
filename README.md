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

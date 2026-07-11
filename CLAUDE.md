# CLAUDE.md — 白空個人品牌網站(personal-page）

## 專案是什麼
曾唯誠(白空 Haku)的 Personal Brand Hub 官網。集中展示個人介紹、六大專長、專案作品、得獎與新聞、經歷、品牌與社群連結。目前為 MVP 階段,內容多為 placeholder,尚未接上正式網域與線上部署。

## 技術棧與部署鏈
Astro 4 + Tailwind CSS → GitHub `exhakuoho/personal-page`(main 分支)→ Cloudflare Pages(Haku 自行建立)→ `haku.designjarvis.com`(子網域,**確定**,不佔用根網域 `designjarvis.com`,不影響現有 email routing 與 `home.designjarvis.com` 的既有網站)

- 本機開發:`npm install && npm run dev`(http://localhost:4321)
- 建置:`npm run build`,產出於 `dist/`
- Cloudflare Pages 設定(建立時填):Build command `npm run build`,Output directory `dist`,自訂網域填 `haku.designjarvis.com`
- 目前狀態:程式碼已可本機建置(12 頁全通過)且已推送 GitHub;Cloudflare Pages 專案由 Haku 自行建立與綁定,尚待完成。

## 檔案地圖
```
src/
├── layouts/BaseLayout.astro     全站 HTML 骨架、SEO meta、深淺模式初始化、捲動動畫腳本
├── components/
│   ├── Header.astro             導覽列 + 深淺模式切換按鈕
│   ├── Footer.astro             聯絡區塊 + 社群連結(多數為 placeholder #)
│   └── Hero.astro               首頁 Hero:系統狀態列、粒子網絡 canvas、終端機打字動畫、數據跑馬燈
├── data/expertise.ts            六大專長的文字內容(intro/能力清單/highlight)—— 純程式檔,不是內容集合
├── content/
│   ├── config.ts                Content Collections 的 zod schema 定義(projects / awards / experience)
│   ├── projects/*.md            8 個專案卡片,frontmatter 含 title/tagline/tags/tech/status/expertise/featured/order/link
│   ├── awards/*.md               得獎/新聞/發表/活動,kind 限定 Award/News/Event/Publication,目前 4 篇皆為 placeholder
│   └── experience/*.md          經歷,category 限定 教育/工作/顧問/教學/研究/創業
├── pages/
│   ├── index.astro              首頁(Hero + 六大專長模組 + 專案索引表 + 得獎新聞 + 品牌矩陣)
│   ├── about.astro / projects.astro / awards-news.astro / experience.astro / links.astro
│   └── expertise/[slug].astro   六大專長頁動態路由,資料源自 src/data/expertise.ts
└── styles/global.css            全域樣式:字體、深淺模式 CSS 變數、HUD 角框/規格行/跑馬燈等元件 class

public/
├── favicon.svg
└── images/                      目前是空的,個人照/專案照片待補
```

## 工作規則
- 新增專案卡片:在 `src/content/projects/` 新增一個 `.md`,依現有 frontmatter 格式填寫
- 新增得獎/新聞/發表/活動:`src/content/awards/`,`kind` 只能是 `Award`/`News`/`Event`/`Publication` 其中之一
- 新增經歷:`src/content/experience/`,`category` 只能是 教育/工作/顧問/教學/研究/創業 其中之一
- 六大專長的文案改在 `src/data/expertise.ts`,不是在 content collection 裡
- 目前所有 placeholder(得獎新聞、社群連結、個人照)在對應檔案裡都標了「待補」或 `#`,補資料時直接取代,不用改版面結構
- commit 訊息用中文簡述本次變更

## 不准動的東西
- `astro.config.mjs` 的 `site: 'https://haku.designjarvis.com'`——已確定用子網域,不是根網域。改動前務必跟 Haku 確認,因為根網域 `designjarvis.com` 已有 email routing 與 `home.designjarvis.com` 網站在跑,子網域是刻意選擇避免衝突。
- `src/content/config.ts` 的 zod schema **可以改,但改的時候要注意**:欄位名稱或列舉值(例如 `kind`/`category` 的允許值)一旦變動,現有的 8 個專案 + 4 個得獎 + 6 個經歷 Markdown 檔案會跟新規則對不上,build 直接失敗。改 schema 時必須同一次 commit 內把所有既有內容檔案一起改完,不能只改 schema 檔案本身。
- 深淺模式機制(`localStorage.getItem('theme')` + BaseLayout 的 inline script)**確定要延續給 LOOK / Formosa31 等未來網站共用**,所以這套 key 命名與判斷邏輯是共用元件的雛形,改動時要考慮跨站一致性,不要只從這個 repo 的角度改。

## 已知地雷
（目前無 — 全新專案,尚未踩過坑。之後若遇到 Astro / Cloudflare Pages / Content Collections 相關問題,在此累積記錄）

## 相關文件
- 進度.md(目前進度與下一步)
- docs/01-決策紀錄/(目前無 ADR;Astro vs 純 HTML 等選型理由若要追溯記錄,可之後補)

# 白空 Haku 個人品牌網站

曾唯誠(白空 Haku)的 Personal Brand Hub,以 Astro + Tailwind CSS 建置,部署於 Cloudflare Pages(designjarvis.com)。

## 開發

```bash
npm install
npm run dev      # 本機開發 http://localhost:4321
npm run build    # 產出 dist/
```

## 新增內容(全部用 Markdown)

- 專案:`src/content/projects/*.md`
- 得獎/新聞/發表/活動:`src/content/awards/*.md`(kind: Award / News / Event / Publication)
- 經歷:`src/content/experience/*.md`(category: 教育/工作/顧問/教學/研究/創業)
- 專長頁內容:`src/data/expertise.ts`

## 待補清單(placeholder)

- [ ] 個人照 / OG image(public/images/)
- [ ] 得獎正式名稱、日期、連結
- [ ] 新聞報導連結
- [ ] LinkedIn / IG / FB / YouTube / Threads 連結
- [ ] LOOK、Formosa31 官網連結
- [ ] 傳統加工公司名稱、教育顧問機構名稱
- [ ] PDF 履歷

## 部署

推上 GitHub main 分支,Cloudflare Pages 自動建置。
Build command: `npm run build`,Output: `dist`

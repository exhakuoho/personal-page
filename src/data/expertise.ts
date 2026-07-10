export interface Expertise {
  slug: string;
  en: string;
  zh: string;
  icon: string;
  intro: string;
  items: string[];
  highlight: string;
}

export const expertiseList: Expertise[] = [
  {
    slug: 'mechanical-design',
    en: 'Mechanical Design',
    zh: '機械設計',
    icon: '⚙️',
    intro:
      '從概念草圖到可製造的結構。3D 建模、機構設計與產品打樣,是所有專案落地的起點。',
    items: [
      '3D 建模',
      '機構設計',
      '教具設計',
      '鐘錶零件設計',
      '模具與產品整合',
      '產品打樣與結構規劃',
    ],
    highlight: '從鐘錶零件的精密尺度,到教具與產品的量產結構,設計始終以「能被做出來」為前提。',
  },
  {
    slug: 'manufacturing',
    en: 'Manufacturing',
    zh: '製造加工',
    icon: '🔩',
    intro:
      '精密 CNC、傳統加工與 3D 列印並用,熟悉金屬材料特性,擅長小量製造與快速打樣。',
    items: [
      '精密 CNC 加工',
      '傳統加工',
      '3D 列印',
      '金屬材料應用',
      '304 不鏽鋼、7075 鋁合金等材料應用',
      '小量製造與打樣',
    ],
    highlight: '同時理解設計端與現場端,能在圖面階段就避開加工風險,縮短從概念到成品的距離。',
  },
  {
    slug: 'electronics-firmware',
    en: 'Electronics & Firmware',
    zh: '電控與韌體',
    icon: '⚡',
    intro:
      '以 ESP32 與 Arduino 為核心的電控系統設計,整合感測器、馬達控制與 AIoT 裝置開發。',
    items: [
      'ESP32 開發',
      'Arduino',
      '感測器整合',
      '馬達控制',
      '電控系統設計',
      '韌體協作開發',
      'AIoT 裝置開發',
    ],
    highlight: '讓機構「動起來、連上網」——從單顆感測器到整套 AIoT 裝置的軟硬整合。',
  },
  {
    slug: 'ai-smart-systems',
    en: 'AI & Smart Systems',
    zh: 'AI 與智慧系統',
    icon: '🧠',
    intro:
      '把 AI 從概念變成決策工具:智慧工廠、資料分析、自動化決策與智慧場域應用。',
    items: [
      'AI 應用規劃',
      '智慧工廠概念',
      '資料分析',
      '自動化決策系統',
      '校園午餐數據決策系統',
      '智慧家庭 / 智慧場域應用',
    ],
    highlight: '重點不是模型多大,而是資料如何被收集、被理解、最後變成一個可以執行的決定。',
  },
  {
    slug: 'steam-education',
    en: 'STEAM Education',
    zh: 'STEAM 教育',
    icon: '🎓',
    intro:
      '從 LEGO 到人形機器人,設計課程、教材與教具,讓孩子用做得到的方式理解科技。',
    items: [
      'LEGO 教育課程',
      '3D 列印課程',
      '自走車課程',
      '人形機器人課程',
      '科技營隊規劃',
      '教具設計',
      '課程教材設計',
    ],
    highlight: '教育品牌 LOOK 的核心:把真實的工程知識,轉譯成孩子能動手、能理解的課程體驗。',
  },
  {
    slug: 'project-integration',
    en: 'Project Integration',
    zh: '專案整合',
    icon: '🧩',
    intro:
      '跨領域專案管理與技術顧問,從報價、成本規劃到前端、後端、韌體與機構的整合協作。',
    items: [
      '跨領域專案管理',
      '技術顧問',
      '教育品牌經營',
      '報價與成本規劃',
      '產品從概念到落地',
      '前端 / 後端 / 韌體 / 機構設計整合協作',
    ],
    highlight: '一個產品要落地,需要的不只是技術,而是讓不同專業在同一條時間軸上協作的能力。',
  },
];

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "chinese": [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "Microsoft Yahei",
          "Hiragino Sans GB",
          "Heiti SC",
          "WenQuanYi Micro Hei",
          "sans-serif",
        ],
        // 黑体
        "helvetica": [
          "-apple-system",
          "Noto Sans",
          "Helvetica Neue",
          "Helvetica",
          "Nimbus Sans L",
          "Arial",
          "Liberation Sans",
          "PingFang SC",
          "Hiragino Sans GB",
          "Noto Sans CJK SC",
          "Source Han Sans SC",
          "Source Han Sans CN",
          "Microsoft YaHei",
          "Wenquanyi Micro Hei",
          "WenQuanYi Zen Hei",
          "ST Heiti",
          "SimHei",
          "WenQuanYi Zen Hei Sharp",
          "sans-serif",
        ],
        // 楷体
        "italics": [
          "Baskerville",
          "Georgia",
          "Liberation Serif",
          "Kaiti SC",
          "STKaiti",
          "AR PL UKai CN",
          "AR PL UKai HK",
          "AR PL UKai TW",
          "AR PL UKai TW MBE",
          "AR PL KaitiM GB",
          "KaiTi",
          "KaiTi_GB2312",
          "DFKai-SB",
          "TW-Kai",
          "serif",
        ],
        // 宋体
        "song": [
          "Georgia",
          "Nimbus Roman No9 L",
          "Songti SC",
          "Noto Serif CJK SC",
          "Source Han Serif SC",
          "Source Han Serif CN",
          "STSong",
          "AR PL New Sung",
          "AR PL SungtiL GB",
          "NSimSun",
          "SimSun",
          "TW-Sung",
          "WenQuanYi Bitmap Song",
          "AR PL UMing CN",
          "AR PL UMing HK",
          "AR PL UMing TW",
          "AR PL UMing TW MBE",
          "PMingLiU",
          "MingLiU",
          "serif",
        ],
        // 仿宋体
        "imitation-song": [
          "Baskerville",
          "Times New Roman",
          "Liberation Serif",
          "STFangsong",
          "FangSong",
          "FangSong_GB2312",
          "CWTEX-F",
          "serif",
        ],
      },
    },
  },
  plugins: [
    // require("@tailwindcss/aspect-ratio"), //提供可组合API的插件，用于为元素提供固定的宽高比
    // require("@tailwindcss/line-clamp"), //行数控制插件
    // require("@tailwindcss/typography"), //实现排版样式的Tailwind CSS 插件
    // require("@tailwindcss/forms"), //Tailwind CSS 表单样式插件
    // require("daisyui"),
    function ({ addBase }) {
      addBase({
        ".el-button": {
          "background-color": "var(--el-button-bg-color,var(--el-color-white))",
        },
      });
    },
  ],
  // daisyUI config (optional)
  // daisyui: {
  //   styled: true,
  //   themes: true,
  //   base: true,
  //   utils: true,
  //   logs: true,
  //   rtl: false,
  //   prefix: "",
  //   darkTheme: "dark",
  // },
};

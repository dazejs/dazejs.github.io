(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{227:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),t("p",[s._v("我们从这里开始创建一个 "),t("code",[s._v("Daze.js")]),s._v(" 应用。")]),s._v(" "),t("h2",{attrs:{id:"环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境","aria-hidden":"true"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),t("p",[s._v("为了更好的性能与稳定性，我们推荐使用 "),t("code",[s._v("LTS")]),s._v(" 版本的 "),t("code",[s._v("Node.js")])]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("版本")]),s._v(" "),t("h4",{attrs:{id:"node-js-10-15-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-10-15-x","aria-hidden":"true"}},[s._v("#")]),s._v(" Node.js > 10.15.x")])]),s._v(" "),t("h2",{attrs:{id:"构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建","aria-hidden":"true"}},[s._v("#")]),s._v(" 构建")]),s._v(" "),t("p",[s._v("使用我们提供的 "),t("code",[s._v("Daze CLI")]),s._v(" 工具，可以快速建立应用，使用 "),t("code",[s._v("npm")]),s._v(" 安装命令行工具：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 CLI 工具")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g @dazejs/cli\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 Daze.js 工程")]),s._v("\n$ daze create daze-example\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("支持选择 typescript 和 javascript 开发环境")])]),s._v(" "),t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行","aria-hidden":"true"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("p",[s._v("安装成功之后，执行以下命令来启动应用服务：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入工程 目录")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" daze-example\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启服务，默认 8080 端口")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("打开浏览器并访问 "),t("code",[s._v("http://localhost:8080")]),s._v(" 即可看到默认展示信息。")]),s._v(" "),t("h2",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".\n├── dist                        // \b\b打包目标目录\n├── logs                        // 日志目录\n├── package.json\n├── public                      // 静态资源目录\n├── src                         // 源码目录\n│   ├── app                     // 应用目录\n│   │   ├── controllers          // 控制器目录（推荐）\n│   │   ├── middlewares          // 中间件目录（推荐）\n│   │   ├── services             // 服务类目录（推荐）\n│   │   ├── resources            // API 资源目录（推荐）\n│   │   ├── components           // 通用组件目录（推荐）\n│   │   ├── validators           // 验证器目录（推荐）\n│   ├── config                  // 应用配置目录\n│   │   ├── app.js\n│   │   ├── cookie.js\n│   │   ├── database.js\n│   │   ├── logger.js\n│   │   ├── messenger.js\n│   │   ├── middleware.js\n│   │   └── session.js\n│   └── index.js                // 应用入口文件\n└── views                       // 视图文件目录\n    └── hello.html\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("框架约定了默认的目录结构，但是可以通过获取 "),t("code",[s._v("Application")]),s._v(" 实例的时候指定目录结构")])])])}],!1,null,null,null);a.default=e.exports}}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Cookie\n\n可以通过 `Cookie` 类操作 `cookie`\n\n## 读取 Cookie\n\n通过 `request` 对象获取：\n\n```ts {8}\nimport { controller, http, BaseController } from '@dazejs/framework'\n\n@controller('users')\nexport class User extends BaseController {\n    @http.get()\n    index() {\n      const key = 'username';\n      console.log(this.request.cookieValue(key)) // this.request.cookie 的别名方法\n    }\n}\n```\n\n使用注入：\n```ts {6,8}\nimport { controller, http, BaseController, cookieValue } from '@dazejs/framework'\n\n@controller('users')\nexport class User extends BaseController {\n    @http.get()\n    index(@cookieValue('username') usernameCookie: string) {\n      console.log(usernameCookie)\n    }\n}\n```\n\n---\n\n## 响应 Cookie\n`cookie` 是跟随响应一起发送的，我们我们需要将 `Cookie` 实例附加在响应对象上来设置 `cookie`\n\n```ts {7,8,9,10}\nimport { controller, http, BaseController, Cookie } from '@dazejs/framework'\n\n@controller('users')\nexport class User extends BaseController {\n    @http.get()\n    index() {\n      const cookie = new Cookie('username', 'Dazejs')\n      return this.response().withCookie(cookie).success({\n        data: 'im data'\n      })\n    }\n}\n```\n\n`response` 对象上还添加了简便方法 `cookie(name, value [, options])` 来设置 `cookie`：\n\n```ts {7,8,9}\nimport { controller, http, BaseController } from '@dazejs/framework'\n\n@controller('users')\nexport default class User extends BaseController {\n    @http.get()\n    index() {\n      return this.response().cookie('username', 'Dazejs').OK({\n        data: 'im data'\n      })\n    }\n}\n```\n\n---\n\n## 配置 Cookie\n\n框架提供了 `cookie` 的默认配置，配置文件位于 `src/config/cookie.js`，默认使用该配置文件的配置来设置 `cookie`:\n\n也可以使用自定义配置作为参数传入构造函数:\n\n```ts {7,8,9}\nimport { controller, http, BaseController, Cookie } from '@dazejs/framework'\n\n@controller('users')\nexport default class User extends BaseController {\n    @http.get()\n    index() {\n      const cookie = new Cookie('username', 'Dazejs', {\n        // options\n      })\n      return this.response().withCookie(cookie).OK({\n        data: 'im data'\n      })\n    }\n}\n```\n\n> 单独设置 `signed` 配置后，获取 `cookie` 的时候需要传入一致的 `signed` 配置: `this.request.cookieValue('username', { signed: false })`");

/***/ })

}]);
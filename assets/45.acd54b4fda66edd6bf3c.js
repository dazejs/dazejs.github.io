(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# 自动加载\n\n`Daze.js` 会自动扫描 `src/app` 目录，按功能分类加载，我们可以通过继承不同类型的基类，来进行功能分类\n\n---\n\n## 模块分类\n### 控制器类\n\n继承 `Controller` 基础类\n\n```ts\nimport { route, Controller } from '@daze/framework'\n\n@route('/example')\nexport default class Example extends Controller {\n  // ...\n}\n\n```\n\n### 中间件类\n继承 `Middleware` 基础类\n\n```ts\nimport { Middleware } from '@daze/framework'\n\nexport default class Example extends Middleware {\n  resolve(request, next) {\n    // ...\n    return next()\n  }\n}\n\n```\n> 中间件类必须实现 resolve 方法\n\n### 服务类\n\n继承 `Service` 基础类\n\n```ts\nimport { Service } from '@daze/framework'\n\nexport default class Example extends Service {\n  // ...\n}\n```\n\n### 验证器类\n\n继承 `Validator` 基础类\n\n```ts\nimport { Validator } from '@daze/framework'\n\nexport default class Example extends Validator {\n  resolve(data) {\n    return data;\n  }\n}\n```\n\n### 资源类\n\n继承 `Resource` 基础类\n\n```ts\nimport { Resource } from '@daze/framework'\n\nexport default class Example extends Resource {\n  // ...\n}\n\n```\n\n### 通用类\n\n```ts\nexport default class Example {\n  // ...\n}\n\n```\n\n---\n\n## 忽略加载\n\n有时候我们不希望自动加载机制加载某个模块，可以使用 `@Ignore()` 标识\n\n```ts\nimport { ignore } from '@daze/framework'\n\n@ignore()\nexport default class Example {\n  // ...\n}\n```\n\n---\n\n## 模块重命名\n\n框架提供了 `@component()` 装饰器来为模块进行重命名操作（实际上增加了绑定到容器的 `key`）。\n\n```ts\nimport { Service, component } from '@daze/framework'\n\n@component('exampleService')\nexport default class Example extends Service {\n  // ...\n}\n```\n\n自动识别变量名进行注入 (根据注入的变量名找到自定义的模块名称进行注入)\n\n```ts {5}\nimport { route, http, Controller, inject } from '@dazejs/framework';\nimport ExampleService from '../service/example'\n\n@route('/examples')\nexport default class Example extends Controller {\n  @inject() exampleService: ExampleService;\n\n  @http.get()\n  index() {\n    // this.exampleService.foo()\n  }\n}\n```\n\n> `@inject()` 的使用方法和依赖注入详见 [依赖注入](#/docs/core/di) 章节");

/***/ })

}]);
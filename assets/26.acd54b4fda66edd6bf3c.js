(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# 提供者\n\n框架底层是一个容器，所有的功能都是由提供者提供，提供者即提供能力的服务/模块，可以通过提供者文件将提供者注册到框架，自定义提供者位于 `src/app/provider` 文件夹\n\n## 定义提供者\n\n提供者需要继承 `Provider` 基础类\n\n```ts\nimport { Provider } from '@dazejs/framework'\n\nexport default class CustomProvider extends Provider {\n  // ...\n}\n```\n\n## 加载提供者\n\n定义好提供者后，我们需要配置框架让框架加载该提供者\n\n加载提供者的配置在 `src/config/app.js` 配置文件中：\n\n```ts\nexport default {\n  // ...\n  providers: [\n    // 加载自定义文件\n    require.resolve('../provider/example.js'), \n    // 加载第三方模块\n    require.resolve('some_module')\n  ],\n  // ...\n}\n```\n\n\n## Hooks\n\n框架在运行提供者的时候，会执行两个 `Hook` (`register` 和 `launch`):\n\n### `register()`\n\n每次注册提供者框架都会调用提供者的 `register` 方法\n\n```ts\nimport { Provider } from '@dazejs/framework'\n\nexport default class CustomProvider extends Provider {\n  register() {\n    // todo\n  }\n}\n\n```\n\n::: tip\n`register` 方法支持异步\n:::\n\n### `lanuch()`\n\n框架会在执行完所有提供者的 `register Hook` 之后执行 `launch`, 所以我们可以在 `launch` 方法中获取到所有已注册的提供者，而无需关心注册顺序\n\n\n```ts\nimport { Provider } from '@dazejs/framework'\n\nexport default class CustomProvider extends Provider {\n  lanuch() {\n    // todo\n  }\n}\n```\n::: tip\n`lanuch` 方法支持异步\n:::\n\n\n## 服务提供\n\n在 `Provider` 中使用 `@provide` 来向容器注册内容\n\n```ts\nimport { Provider, provide } from '@dazejs/framework'\n\nexport default class CustomProvider extends Provider {\n  @provide()\n  example() {\n    return new Example()\n  }\n}\n```\n\n上诉例子相当于\n\n```ts\nimport { Provider } from '@dazejs/framework'\n\nexport default class CustomProvider extends Provider {\n  register() {\n    this.app.singleton('example', () => {\n      return new Example()\n    }, true)\n  }\n}\n\n```\n\n## 注册时绑定\n\n绝大部分情况我们都可以在 `register` 方法中进行绑定容器操作\n\n```ts\nimport { Provider } from '@dazejs/framework'\n\nexport default class CustomProvider extends Provider {\n  constructor(app) {\n    this.app = app\n  }\n\n  register() {\n    this.app.singleton('some_key', (app) => {\n      return new SomeCustomClass(app);\n    }, true);\n  }\n}\n```\n\n");

/***/ })

}]);
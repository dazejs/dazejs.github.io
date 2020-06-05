(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# 请求\n很多情况，我们都需要根据请求的详细信息来进行逻辑处理，我们可以使用 `Request` 的实例来进行请求相关操作。\n\n\n## 请求对象\n\n### 调用\n\n在控制器中，可以直接使用控制器的实例属性获取 `Request` 实例：\n```ts {7}\nimport { Controller, Route, Http } from '@dazejs/framework;\n\n@Route('/posts')\nexport default class Post extends Controller {\n    @Http.Get()\n    index() {\n        console.log(this.request)\n    }\n}\n\n```\n\n\n## 请求信息\n\n可以通过 `Request` 实例获取当前请求的信息\n\n### `request.getHeaders()`\n\n请求消息头对象。消息头的名称和值的键值对。 消息头的名称都是小写的。\n\n```js\n// 打印类似以下：\n//\n// { 'user-agent': 'curl/7.22.0',\n//   host: '127.0.0.1:8000',\n//   accept: '*/*' }\nconsole.log(request.headers);\n```\n\n### `request.getHeader(name)`\n\n根据 `name` 获取消息头，不区分大小写\n```js\n// 打印类似以下：\n// 'application/json'\nconsole.log(request.getHeader('accept'))\n```\n\n### `request.getBody()`\n\n获取请求体 `body`\n\n### `request.getFiles()`\n\n获取请求发送文件列表\n\n### `request.getMethod()`\n\n获取请求方法。\n\n请求方法为字符串。 示例：'GET'、 'DELETE'。\n\n### `request.getLength()`\n\n请求消息头的 `Content-Length` 的值或者 `undefiend`\n\n### `request.getUrl()`\n\n请求的 `URL` 字符串。 它仅包含实际 `HTTP` 请求中存在的 `URL`。\n\n例如请求地址： `GET /status?name=daze HTTP/1.1`\n\n则 `request.url` 的值等于 `/status?name=daze`\n\n### `request.getOrigin()`\n\n获取 `URL` 的来源，包括 `protocol` 和 `host`\n\n### `request.getHref()`\n\n获取完整的请求URL，包括 `protocol`，`host` 和 `url`\n\n### `request.getPath()`\n\n请求路径名。\n\n### `request.getQuery()`\n\n根据 `?` 获取原始查询对象\n\n### `request.getQuerystring()`\n\n根据 `?` 获取原始查询字符串 (结果不包含 `?`)\n\n### `request.getSearch()`\n\n根据 `?` 获取原始查询字符串 (结果包含 `?`)\n\n### `request.getProtocol()`\n\n获取请求协议: `http` 或者 `https`\n\n### `request.getHost()`\n\n获取请求的 `host`\n\n### `request.getType()`\n\n获取请求 `Content-Type` 不含参数 `charset`\n\n\n### `request.acceptsTypes(types)`\n\n返回最佳匹配的 `types`，否则为 `false`。 `type` 值可能是一个或多个 `mime` 类型的字符串，如 `application/json`，扩展名称如 `json`，或数组 `[\"json\", \"html\", \"text/plain\"]`。\n\n```js\n// Accept: text/html\nrequest.acceptsTypes('html');\n// => \"html\"\n\n// Accept: text/*, application/json\nrequest.acceptsTypes('html');\n// => \"html\"\nrequest.acceptsTypes('text/html');\n// => \"text/html\"\nrequest.acceptsTypes('json', 'text');\n// => \"json\"\nrequest.acceptsTypes('application/json');\n// => \"application/json\"\n```\n\n### `request.acceptsEncodings(encodings)`\n\n返回最佳匹配的 `Accept-Encoding`，否则为 `false`\n\n::: tip\n应该将identity 作为编码之一\n:::\n\n```js\n// Accept-Encoding: gzip\nrequest.acceptsEncodings('gzip', 'deflate', 'identity');\n// => \"gzip\"\n\nrequest.acceptsEncodings(['gzip', 'deflate', 'identity']);\n// => \"gzip\"\n```\n\n### `request.acceptsCharsets(charsets)`\n\n返回最佳匹配的 `charsets`，否则为 `false`。\n\n```js\n// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5\nrequest.acceptsCharsets('utf-8', 'utf-7');\n// => \"utf-8\"\n\nrequest.acceptsCharsets(['utf-7', 'utf-8']);\n// => \"utf-8\"\n```\n\n### `request.acceptsLanguages(langs)`\n\n返回最佳匹配的 `langs`，否则为 `false`。\n\n```js\n// Accept-Language: en;q=0.8, es, pt\nrequest.acceptsLanguages('es', 'en');\n// => \"es\"\n\nrequest.acceptsLanguages(['en', 'es']);\n// => \"es\"\n```\n\n### `request.cookieValue(name [, options])`\n\n根据名称获取 `cookie` 的值\n\n### `request.sessionValue(name)`\n\n根据名称获取 `session` 的值\n\n\n## 请求方法\n\n框架封装了用于判断常用的请求方法的方式\n\n### `request.isGet()`\n\n判断请求是否 `GET` 类型\n\n### `request.isPost()`\n\n判断请求是否 `POST` 类型\n\n### `request.isPut()`\n\n判断请求是否 `PUT` 类型\n\n### `request.isPatch()`\n\n判断请求是否 `PATCH` 类型\n\n### `request.isDelete()`\n\n判断请求是否 `DELETE` 类型\n\n### `request.isHead()`\n\n判断请求是否 `HEAD` 类型\n\n### `request.isOptions()`\n\n判断请求是否 `OPTIONS` 类型\n\n## 参数获取\n\n### 获取参数\n\n#### `Request#getParam([name [,default]])`\n请求对象提供了 `getParam` 和 `getParams` 方法来获取变量值：\n\n::: tip\nparam方法可以获取body，url参数的输入变量，所有参数可以通过param方法统一获取\n:::\n\n```js {8,10}\nconst { Controller, Route, Http } = require('@dazejs/framework')\n\n@Route('posts')\nclass Post extends Controller {\n    @Http.Get(':id')\n    show(id) {\n        // 获取 name 参数，如未获取到则默认返回值 daze\n        const name = this.request.getParam('name', 'daze')\n        // 获取所有输入变量\n        const all =  this.request.getParams()\n    }\n}\n```\n#### getter\n```js {7,8}\nconst { Controller, Route, Http } = require('@dazejs/framework')\n\n@Route('posts')\nclass Post extends Controller {\n  @Http.Get(':id')\n  show(id) {\n    const name1 = this.request.name1\n    const name2 = this.request.name2\n  }\n}\n```\n\n## 参数筛选\n\n通过 `only` 与 `except` 方法筛选需要或者不需要的输入变量\n\n```ts {8,10}\nimport { Controller, Route, Http }from '@dazejs/framework'\n\n@Route('posts')\nexport default class Post extends Controller {\n    @Http.Get()\n    show(id) {\n        // 只获取name与age变量\n        const params1 = this.request.only(['name', 'age'])\n        // 排除name与age，获取剩余变量\n        const params2 = this.request.except(['name', 'age'])\n    }\n}\n```\n\n");

/***/ })

}]);
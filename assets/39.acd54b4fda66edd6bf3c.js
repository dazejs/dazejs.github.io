(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# 资源层\n\n资源层就是在服务接口与返回给用户的 `JSON` 之间添加一层转换层\n\n---\n\n## 资源定义\n\n资源是一种特殊的组件，通过继承 `Resource` 基础类来表示这是一个资源类\n\n```ts\nimport { Resource } from '@dazejs/framework';\n\nexport default class User extends Resource {\n  resolve(data) {\n    return {\n      ...data,\n    };\n  }\n}\n\n```\n\n> 每个资源类都需要实现 `resolve` 方法 \n\n---\n\n## 核心概念\n\n资源类本质上是一个对象或数组的转换规则，可以将某一类数据以抽象的方式定义成一类资源，在需要的地方调用资源类进行数据转换，好处是可以抽象化资源数据，方便管理\n\n每一个资源类都必须实现一个 `resolve` 方法，该方法接收一个对象参数，表示单个资源数据 \n\n## 资源转换\n\n在控制器中，我们可以直接返回 `this.resource()` 生成的 `Resource` 实例，框架会自动处理\n\n```ts\nimport { Controller, route,  http } from '@dazejs/framework';\nimport UserResource from '../resources/user'\n\n@route('/users')\nexport default class User extends Controller {\n  @http.get('/:id')\n  show() {\n    return this.resource(UserResource).item({\n      username: 'Dazejs',\n    })\n  }\n}\n\n```\n\n如果不是在控制器中，我们可以调用 `Resource` 实例的 `transform()` 方法来手动转换\n\n\n```ts\nimport { Service } from '@dazejs/framework';\nimport UserResource from '../resources/user'\n\nexport default class User extends Service {\n  getItemById(id) {\n    const user = {\n      id,\n      username: 'Dazejs',\n    };\n    return this.resource(UserResource).item(user).transform();\n  }\n}\n\n```\n\n> 也可以使用 `this.item(data, validator)` 来调用\n\n---\n\n## 单个资源\n\n可以使用 `item(data)` 方法来生成单个资源的转换对象\n\n```ts\nimport { Controller, Route, Http } from '@dazejs/framework';\nimport UserResource from '../resources/user'\n\n@route('/users')\nexport default class User extends Controller {\n  @http.get('/:id')\n  show() {\n    return this.resource(UserResource).item({\n      username: 'Dazejs',\n    })\n  }\n}\n\n```\n\n---\n\n## 资源集合\n\n使用 `collection(data)` 方法来生成资源集合的转换对象\n\n```ts\nimport { Controller, route, http } from '@dazejs/framework';\nimport UserResource from '../resources/user'\n\n@Route('/users')\nexport default class User extends Controller {\n  @http.get()\n  index() {\n    const users = [{\n        age,\n        name: 'Dazejs',\n      },{\n        age,\n        name: 'Zewail',\n      }];\n    return this.resource(UserResource).collection(users)\n  }\n}\n\n```\n\n## 数据包装\n\n默认情况下，被转换的数据被包裹到 `data` 属性中：\n\n```json\n{\n  \"data\": [{\n    \"age\": 18,,\n    \"name\": \"Dazejs\",\n  },{\n    \"age\": 18,\n    \"name\": \"Zewail\",\n  }]\n}\n```\n\n如果想要禁止包装最外层资源，可以调用资源类提供的 `withoutKey()` 方法\n\n```ts\nimport { Controller, route, http } from '@dazejs/framework';\nimport UserResource from '../resources/user'\n\n@Route('/users')\nexport default class User extends Controller {\n  @http.get()\n  index() {\n    const users = [{\n        age: 18,\n        name: 'Dazejs',\n      },{\n        age: 18,\n        name: 'Zewail',\n      }];\n    return this.resource(UserResource).collection(users).withoutKey();\n  }\n}\n\n```\n\n如果想修改包装属性，可以调用资源类提供的 `setKey(key)` 方法\n\n---\n\n## 资源嵌套\n\n有时候我们需要在一个资源中调用另一个资源做为资源，我们可以使用 `资源嵌套` 的方式，例如我们转换 `user` 数据的嵌套 `comments` 资源：\n\n`comment` 资源定义:\n\n```ts {7}\nimport { Resource } from '@dazejs/framework';\n\nexport default class Comment extends Resource {\n  resolve(data) {\n    return {\n      cid: data.id,\n      content: data.content,\n      /// ...more\n    };\n  }\n}\n\n```\n\n`user` 资源定义:\n\n```ts {8}\nimport { Resource } from '@dazejs/framework';\nimport CommentResource from './comment'\n\nexport default class User extends Resource {\n  resolve(user) {\n    return {\n      username: user.username,\n      sex: user.sex == 1 ? 'man' : 'woman',\n      comments: this.resource(CommentResource).collection(user.comments),\n    };\n  }\n}\n\n```\n\n输入数据：\n\n```json\n{\n  \"username\": \"Dazejs\",\n  \"sex\": 1,\n  \"comments\": [\n    {\n      \"id\": 100,\n      \"content\": \"im comment\"\n    }\n  ]\n}\n```\n\n输出数据：\n\n```json {3,6}\n{\n  \"username\": \"Dazejs\",\n  \"sex\": \"man\",\n  \"comments\": [\n    {\n      \"cid\": 100,\n      \"content\": \"im comment\"\n    }\n  ]\n}\n```\n\n---\n\n## \b自定义名称\n\n使用通用的 `@component()` 装饰器为 `Resource` 类命名\n\n```ts\nimport { Resource, component } from '@dazejs/framework';\n\n@component('userResource')\nexport default class User extends Resource {\n  resolve(data) {\n    return {\n      ...data,\n    };\n  }\n}\n\n```\n\n使用自定义名称注入\n\n```ts\nimport { Controller, route, http, inject } from '@dazejs/framework';\nimport UserResource from '../resources/user'\n\n@Route('/users')\nexport default class User extends Controller {\n\n  @inject() userResource: UserResource;\n\n  @http.get()\n  index() {\n    const users = [{\n        age: 18,\n        name: 'Dazejs',\n      },{\n        age: 18,\n        name: 'Zewail',\n      }];\n    return this.userResource.collection(users);\n  }\n}\n\n```\n\n> 当需要注入的属性名与自定义名称一致的时候，可以省略参数\n");

/***/ })

}]);
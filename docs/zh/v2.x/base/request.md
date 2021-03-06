# 请求

很多情况，我们都需要根据请求的详细信息来进行逻辑处理，我们可以使用 `Request` 的实例来进行请求相关操作。

---


## 请求对象

### 调用

在控制器中，可以直接使用控制器的实例属性获取 `Request` 实例：
```ts {7}
import { Controller, route, http } from '@dazejs/framework';

@route('/posts')
export default class Post extends Controller {
    @http.get()
    index() {
        console.log(this.request)
    }
}

```

---


## 请求信息

可以通过 `Request` 实例获取当前请求的信息

### `request.getHeaders()`

请求消息头对象。消息头的名称和值的键值对。 消息头的名称都是小写的。

```js
// 打印类似以下：
//
// { 'user-agent': 'curl/7.22.0',
//   host: '127.0.0.1:8000',
//   accept: '*/*' }
console.log(request.getHeaders());
```

### `request.getHeader(name)`

根据 `name` 获取消息头，不区分大小写
```js
// 打印类似以下：
// 'application/json'
console.log(request.getHeader('accept'))
```

### `request.getBody()`

获取请求体 `body`

> 框架默认启用 `body` 解析，如果不需要可以在入口文件使用 `app.disableBodyParser()` 来关闭该功能

### `request.getFiles()`

获取请求发送文件列表

### `request.getMethod()`

获取请求方法。

请求方法为字符串。 示例：'GET'、 'DELETE'。

### `request.getLength()`

请求消息头的 `Content-Length` 的值或者 `undefiend`

### `request.getUrl()`

请求的 `URL` 字符串。 它仅包含实际 `HTTP` 请求中存在的 `URL`。

例如请求地址： `GET /status?name=daze HTTP/1.1`

则 `request.url` 的值等于 `/status?name=daze`

### `request.getOrigin()`

获取 `URL` 的来源，包括 `protocol` 和 `host`

### `request.getHref()`

获取完整的请求URL，包括 `protocol`，`host` 和 `url`

### `request.getPath()`

请求路径名。

### `request.getQuery()`

根据 `?` 获取原始查询对象

### `request.getQuerystring()`

根据 `?` 获取原始查询字符串 (结果不包含 `?`)

### `request.getSearch()`

根据 `?` 获取原始查询字符串 (结果包含 `?`)

### `request.getProtocol()`

获取请求协议: `http` 或者 `https`

### `request.getHost()`

获取请求的 `host`

### `request.getType()`

获取请求 `Content-Type` 不含参数 `charset`


### `request.acceptsTypes(types)`

返回最佳匹配的 `types`，否则为 `false`。 `type` 值可能是一个或多个 `mime` 类型的字符串，如 `application/json`，扩展名称如 `json`，或数组 `["json", "html", "text/plain"]`。

```ts
// Accept: text/html
request.acceptsTypes('html');
// => "html"

// Accept: text/*, application/json
request.acceptsTypes('html');
// => "html"
request.acceptsTypes('text/html');
// => "text/html"
request.acceptsTypes('json', 'text');
// => "json"
request.acceptsTypes('application/json');
// => "application/json"
```

### `request.acceptsEncodings(encodings)`

返回最佳匹配的 `Accept-Encoding`，否则为 `false`

> 应该将identity 作为编码之一

```ts
// Accept-Encoding: gzip
request.acceptsEncodings('gzip', 'deflate', 'identity');
// => "gzip"

request.acceptsEncodings(['gzip', 'deflate', 'identity']);
// => "gzip"
```

### `request.acceptsCharsets(charsets)`

返回最佳匹配的 `charsets`，否则为 `false`。

```ts
// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5
request.acceptsCharsets('utf-8', 'utf-7');
// => "utf-8"

request.acceptsCharsets(['utf-7', 'utf-8']);
// => "utf-8"
```

### `request.acceptsLanguages(langs)`

返回最佳匹配的 `langs`，否则为 `false`。

```ts
// Accept-Language: en;q=0.8, es, pt
request.acceptsLanguages('es', 'en');
// => "es"

request.acceptsLanguages(['en', 'es']);
// => "es"
```

### `request.cookieValue(name [, options])`

根据名称获取 `cookie` 的值

### `request.sessionValue(name)`

根据名称获取 `session` 的值

---

## 请求方法

框架封装了用于判断常用的请求方法的方式

### `request.isGet()`

判断请求是否 `GET` 类型

### `request.isPost()`

判断请求是否 `POST` 类型

### `request.isPut()`

判断请求是否 `PUT` 类型

### `request.isPatch()`

判断请求是否 `PATCH` 类型

### `request.isDelete()`

判断请求是否 `DELETE` 类型

### `request.isHead()`

判断请求是否 `HEAD` 类型

### `request.isOptions()`

判断请求是否 `OPTIONS` 类型

---

## 参数获取

### 获取参数

#### `Request#getParam([name [,default]])`

请求对象提供了 `getParam` 和 `getParams` 方法来获取变量值：

> `getParam` 方法可以获取 `body`，`url` 参数的输入变量，所有参数可以通过 `getParam` 方法统一获取

```ts {8,10}
const { Controller, route, http } = require('@dazejs/framework')

@route('posts')
class Post extends Controller {
    @http.get(':id')
    show(id) {
        // 获取 name 参数，如未获取到则默认返回值 daze
        const name = this.request.getParam('name', 'daze')
        // 获取所有输入变量
        const all =  this.request.getParams()
    }
}
```
#### getter
```ts {7,8}
const { Controller, route, http } = require('@dazejs/framework')

@route('posts')
class Post extends Controller {
  @http.get(':id')
  show(id) {
    const name1 = this.request.name1
    const name2 = this.request.name2
  }
}
```

---

## 参数筛选

通过 `only` 与 `except` 方法筛选需要或者不需要的输入变量

```ts {8,10}
import { Controller, route, http }from '@dazejs/framework'

@route('posts')
export default class Post extends Controller {
    @http.get()
    show(id) {
        // 只获取name与age变量
        const params1 = this.request.only(['name', 'age'])
        // 排除name与age，获取剩余变量
        const params2 = this.request.except(['name', 'age'])
    }
}
```

---

## 请求装饰器

框架提供了许多请求相关的装饰器

### `@http.query(key?: string, defaultValue?: any)`

根据 `query` 名称注入请求的 `query` 参数

```ts
import { Controller, route, http }from '@dazejs/framework'

@route('posts')
export default class Post extends Controller {
    @http.get()
    index(
        @http.query('name') name: string
    ) {
        return name;
    }
}
```

### `@http.params(key?: string, defaultValue?: any)`

根据参数名称注入请求的任何参数，包括 `query`, `body` 等

```ts
import { Controller, route, http }from '@dazejs/framework'

@route('posts')
export default class Post extends Controller {
    @http.get()
    index(
        @http.params('name') name: string
    ) {
        return name;
    }
}
```

### `@http.header(key?: string, defaultValue?: any)`

根据 `header` 名称注入请求的 `header` 值, 不加参数获取所有 `header` 头

```ts
import { Controller, route, http }from '@dazejs/framework'

@route('posts')
export default class Post extends Controller {
    @http.get()
    index(
        @http.header('content-type') contentType: string
    ) {
        return contentType;
    }
}
```

### `@http.body(key?: string, defaultValue?: any)`

根据 `body` 名称注入请求的 `body` 值, 不加参数获取所有 `body`

```ts
import { Controller, route, http }from '@dazejs/framework'

@route('posts')
export default class Post extends Controller {
    @http.post()
    index(
        @http.body('name') name: string
    ) {
        return name;
    }
}
```

### `@http.cookieValue(key?: string, defaultValue?: any)`

根据 `cookie` 名称注入请求的 `cookie` 值, 不加参数获取所有 `cookie`

```ts
import { Controller, route, http }from '@dazejs/framework'

@route('posts')
export default class Post extends Controller {
    @http.get()
    index(
        @http.cookieValue('user_id') userId: string
    ) {
        return userId;
    }
}
```


### `@http.sessionValue(key?: string, defaultValue?: any)`

根据 `session` 名称注入请求的 `session` 值, 不加参数获取所有 `session`

```ts
import { Controller, route, http }from '@dazejs/framework'

@route('posts')
export default class Post extends Controller {
    @http.get()
    index(
        @http.sessionValue('user_id') userId: string
    ) {
        return userId;
    }
}
```

### `@http.req()` / `@http.originalReq()`

获取 `Node.js` 原始的请求上下文 `req` 对象

```ts
import { Controller, route, http }from '@dazejs/framework'
import { IncomingMessage } from 'http'

@route('posts')
export default class Post extends Controller {
    @http.get()
    index(
        @http.req() req: IncomingMessage
    ) {
        console.log(req)
    }
}
```


### `@http.res()` / `@http.originalRes()`

获取 `Node.js` 原始的请求上下文 `res` 对象

```ts
import { Controller, route, http }from '@dazejs/framework'
import { ServerResponse } from 'http'

@route('posts')
export default class Post extends Controller {
    @http.get()
    index(
        @http.res() res: ServerResponse
    ) {
        console.log(res)
    }
}
```

### `@http.request()`

获取框架提供的人上下文 `Request` 实例, 在控制器中等同于 `this.request`

```ts
import { Controller, route, http, Request }from '@dazejs/framework'

@route('posts')
export default class Post extends Controller {
    @http.get()
    index(
        @http.request() request: Request
    ) {
        console.log(request)
    }
}
```

本项目是一个基于 Vite3 搭建的 Vue3 项目模板，集成了 TypeScript、Vue Router、Pinia、Axios、Less、ESLint、Prettier、Husky、lint-staged 等等

运行环境： VSCode、**Node16+**、
VSCode 插件：TypeScript Vue Plugin (Volar)、Vue Language Features (Volar)、Prettier - Code formatter
**注：需要关闭 Vetur 插件**

## 创建 Vite 项目

[Vite 官方中文文档](https://cn.vitejs.dev/guide/)

### 项目目录结构

```bash
│  ├─public # 静态资源目录
│  │      favicon.ico
│  │
│  ├─src
│  │  │  App.vue # 入口vue文件
│  │  │  main.ts # 入口文件
│  │  │  vite-env.d.ts # vite环境变量声明文件
│  │  │
│  │  ├─assets # 资源文件目录
│  │  │      logo.png
│  │  │
│  │  └─components # 组件文件目录
│  │         HelloWorld.vue
│  │
│  │ .gitignore
│  │ index.html # Vite项目的入口文件
│  │ package.json
│  │ README.md
│  │ tsconfig.json # tsconfig配置文件
│  │ vite.config.ts # vite配置文件
```

**配置别名**
在开发中，我们经常会通过 @/view/xxx.vue 的方式去书写我们的文件路径，我们可以通过配置 vite.config.ts 和 tsconfig.json 来实现别名。

**vite.config.ts**



// 无用依赖
better-scroll
vue-i18n
vant 应该用不着


// 业务流程
未登录



已登录



// 项目
1. 封装axios
2. 封装路由
3. 封装pinia
4. 封装路由守卫
5. 封装全局方法
6. 封装全局组件
7. 封装全局指令
8. 封装全局过滤器
9. 封装全局混入
10. 封装全局插件
11. 封装全局配置
12. 封装全局hooks
13. 封装全局常量
14. 封装全局枚举
15. 封装全局工具类
16. 封装全局错误处理
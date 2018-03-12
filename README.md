### Vue全家桶 + axios + ElementUi + mockjs搭建的后台管理系统

#### 项目预览地址：[https://guixianleng.github.io/vue-admin/dist/index.html](https://guixianleng.github.io/vue-admin/dist/index.html?_blank)

#### 项目目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── filtres                // 全局filter
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   │── view                   // 业务模块根目录
│   │	  ├── components         // 公共业务模块组件目录
│   │	  ├── module             // 具体模块目录
│   │	  │   ├── components         // 公共业务模块组件目录
│   │		│   └── index.vue          // 页面组件
│   │		└── index.vue          // 页面组件modules                // 业务模块根目录
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
│   ├── jquery
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
├── package.json               // package.json
├── READERME.md                // 文档说明
```
## 占坑
1. 全局scss设置问题
- 导入scss绝对/相对路径没有问题:

  ![](https://github.com/guixianleng/vue-admin/blob/master/static/errorImages/relative_path.png)
  
  但是就是会报错如下：
  
  ![](https://github.com/guixianleng/vue-admin/blob/master/static/errorImages/errorMsg.png)

- 解决方法:
 首先安装sass-resources-loader：
```
$ npm install sass-resources-loader --save
```
- 其次删除/注释webpack.base.conf.js中module的编译scss的loader
  ![](https://github.com/guixianleng/vue-admin/blob/master/static/errorImages/resolve.png)


## 项目执行

``` bash
# project clone
git clone https://github.com/guixianleng/vue-admin.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build:prod

# build for production and view the bundle analyzer report
npm run build --report

```

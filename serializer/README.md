# 配置文件压缩工具


## 准备工作

* 执行 ```npm install``` ，安装相关依赖

## 核心原理

### 将配置文件生成为二进制文件


利用白鹭团队定制修改的[ts-binary-serializer](https://www.npmjs.com/package/@egret/ts-binary-serializer) 项目，将配置文件从JSON文件调整为二进制文件，具体步骤如下

1. 用户在 src 文件夹中添加自定义配置文件所对应的类以及装饰器
2. 在 ```src/index.ts``` 中导出添加的新配置文件，行如```export * from './NewZoneRushItemClientConfig';```
3. 调用 ```npm run build``` 命令，生成 dist/config.js 和 dist/config.d.ts ，检查生成的文件，应包含了在 src 文件夹中添加的内容
4. 在 config 文件夹中放置后缀为 .json 的配置文件
5. 调用 ```npm run bundle``` 命令，会生成后缀为 .bin 的配置文件
6. 在 egret 项目中通过第三方库的方式集成 ```dist/config.js```，并通过 gameConfig.getConfig API 进行配置文件读取
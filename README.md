# blog

> 利用Hexo生成静态网页。


## 安装

```bash
 npm install
```

## 使用

### 创建一篇新的文章

```bash
npx hexo new simple <文章标题> # 默认 simple
# 或者
npm new <文章标题>
```

### 生成静态文件

```bash
npx hexo generate #简写 npx hexo g
# 或者
npm run g
```

### 部署

```bash
# 部署
npx hexo deploy # npx hexo g -d
# 生成文件部署
npx hexo generate --deploy  # npx hexo g -d

# 或者
npm run publish 

```

### 启动服务

```bash
npx hexo server
# 或者
npm run server
```

### 清除缓存

```bash
npx hexo clean # 发现对站点的更改无效时（更换主题时），清除缓存。
# 或者
npm run clean
```






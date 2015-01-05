hexo-generator-mypage
=====================

custom page generator plugin for hexo

渲染你自定义ejs页面的hexo插件

安装/install
```
npm install hexo-generator-mypage --save
```

使用方法/usage

在_config.yml中添加插件mypage
```
mypage:
	tags/index.html: tags
    categories/index.html: categories
	about.html: about
```
mypage 配置项键为生成后的静态文件地址，也是最终URL的相对地址。
值为layout，注意layout没有会报错，需要您自己创建layout文件或使用已有的layout,该文件必须放在layout目录下
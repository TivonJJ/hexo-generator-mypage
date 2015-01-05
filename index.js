var generator = hexo.extend.generator;

if (generator.register.length === 1){
  generator.register(require('./mypageGenerator'));
} else {
  generator.register('mypage', require('./mypageGenerator'));
}
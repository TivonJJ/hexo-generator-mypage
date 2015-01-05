/**
 * Created by Jee on 2015/1/4.
 */

module.exports = function(locals, render, callback){
    var config = hexo.config.mypage;
    for(var k in config){
        var path = k;
        var layout = config[k].split(",");
        render(path,layout,locals);
    }

    callback();
};

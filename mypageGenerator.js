/**
 * Created by Jee on 2015/1/4.
 */

module.exports = function(locals){
    var config = this.config.mypage;
    var data = [];
    for(var k in config){
        var path = k;
        var layout = config[k].split(",");
        data.push({path:path,data:locals,layout:layout});
    }
    return data;
};

var exec = require('cordova/exec');


exports.addTag  = function(tag,callBack,error) {
    cordova.exec(callBack, error, "umengPush","addTag", [tag]);
},
exports.delTag  = function(tag,callBack,error) {
    cordova.exec(callBack, error, "umengPush","delTag", [tag]);
},
exports.listTag  = function(callBack,error) {
    cordova.exec(callBack, error, "umengPush","listTag", []);
},
exports.addAlias  = function(alias,type,callBack,error) {
    cordova.exec(callBack, error, "umengPush","addAlias", [alias,type]);
},
exports.delAlias  = function(alias,type,callBack,error) {
    cordova.exec(callBack, error, "umengPush","delAlias", [alias,type]);
},
exports.setAlias  = function(alias,type,callBack,error) {
    cordova.exec(callBack, error, "umengPush","setAlias", [alias,type]);
};

var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
}

/**
 * 获取封装对象的最终值.
 */
_.prototype.value = function(){
	return this._wrapped;
};

//test
/*var result = _([1, 2, 3]).value();
console.log(result);*/

_.chain = function(obj){
	var instance = _(obj);
	instance._chain = true;
	return instance;
};

//test
var lyrics = [
  {line: 1, words: "I'm a lumberjack and I'm okay"},
  {line: 2, words: "I sleep all night and I work all day"},
  {line: 3, words: "He's a lumberjack and he's okay"},
  {line: 4, words: "He sleeps all night and he works all day"}
];
var result = _.chain(lyrics).value();
console.log(result);

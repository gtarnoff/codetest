if (typeof define !== 'function') {
    var define = require('amdefine')(module);
};
define(function(require) {
    return function($data){
      var $regex = /(@[a-zA-Z0-9])+/g;
      return $regex.test($data);
  };
});

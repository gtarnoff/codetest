if (typeof define !== 'function') {
    var define = require('amdefine')(module);
};
define(function(require) {
    return function($data, $json){
      var $count =[];
      $data = $data.split('@');
      for(var i=0;i<$json.length;i++){
        var $regex = new RegExp( '^'+$data[1].replace('@',''), 'gi' );
        if($regex.test($json[i].username)){
          $count.push($json[i]);
        };
      };
      return $count;
  };
});

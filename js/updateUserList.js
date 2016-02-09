if (typeof define !== 'function') {
    var define = require('amdefine')(module);
};
define(function(require) {
    return function($data){
      var $users = '';
      for(var i = 0; i<$data.length; i++){
        $users += '<div class="user" data-rel="@'+ $data[i].username +'">';
        $users += '<img src="'+ $data[i].avatar_url +'" alt="" class="user__img"/>';
        $users += '<div class="name__user">';
        $users += '<p class="name">'+ $data[i].name +'</p>';
        $users += '<p class="username">'+ $data[i].username +'</p></div></div>';

      };
      return $users;
  };
});


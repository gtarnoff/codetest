var loadUserList = require('../js/loadUserList.js')
  testInput = require('../js/testInput.js'), 
  updateUserList = require('../js/updateUserList.js');

(function(doc, win){
  "use strict";
  var  doc = document,
    $list = doc.querySelector('#userList'),
    $data = '../data/data.json',
    $ac = doc.querySelector('#autocomplete1');
  function hideList(){
    if($('#userList').children().length > 0){
      $('#userList').removeClass('hidden');
    } else {
      $('#userList').addClass('hidden');
    };
  };

  function init(){
    $.ajax({
      url: $data,
      context: doc.body,
      dataType: 'json',
      crossDomain: true
    }).success(function(response){
       $ac.addEventListener( 'keyup', function($e){
        var $input = $ac.value;
        if(testInput($input)){
           var users = loadUserList($input, response),
             html = updateUserList(users);
           $list.innerHTML = html;
           hideList();
        };
        
        $('.user').on('click', function(e){
            var $name = $(this).data('rel'),
                $newVal,
                $oldVal = $ac.value,
                $username = $oldVal.split('@'),
                $username = $username[1].split(' '),
                $replace = new RegExp('@'+ $username[0],'gi');
            $newVal = $oldVal.replace($replace, $name);
            $ac.value = $newVal; 
        });

      
 
 });

    });
  };
  init();

})(document, window);

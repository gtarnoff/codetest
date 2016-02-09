var assert = require('assert'),
  loadUserList = require('../js/loadUserList'),
  testInput = require('../js/testInput'),
  updateUserList = require('../js/updateUserList');


  var $a,$b,$c;
describe('Autocomplete', function() {
  beforeEach(function(){
    $a = "this is a string with a @username",
    $b = "this is a string without a username",
    $d = "this should test @pd",
    $p = "this should test @p",
    $n = "this should test @n",
    $c = [
        {
          "username": "pturner0",
          "avatar_url": "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
          "name": "Paula Turner"
        },
        {
          "username": "pdixon1",
          "avatar_url": "https://secure.gravatar.com/avatar/be09ed96613495dccda4eeffc4dd2daf?d=mm",
          "name": "Patrick Dixon"
        },
      ],
    $u = '<div class="user"><img src="https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm" alt="" class="user__img"/><div class="name__user"><p class="name">Paula Turner</p><p class="username">pturner0</p></div></div><div class="user"><img src="https://secure.gravatar.com/avatar/be09ed96613495dccda4eeffc4dd2daf?d=mm" alt="" class="user__img"/><div class="name__user"><p class="name">Patrick Dixon</p><p class="username">pdixon1</p></div></div>';
  });

describe('When user presses key in the textarea', function(){
  it("and the input contains @p the test should pass", function(){
     assert.equal(testInput($a),true);
  });
  it("and the input doesn't have @p the test should fail", function(){
    assert.equal(testInput($b), false);
  });
  describe('We get a json response when we pass a string', function(){

    it('given "@p" there should be 2 responses', function(){
      assert.equal(loadUserList($p, $c).length, 2);
    });
    it('given "@pd" there should be 1 response', function(){
      assert.equal(loadUserList($d, $c).length, 1);
    });

    it('given "@n" there should be 0 responses', function(){
      assert.equal(loadUserList($n, $c).length, 0);
    });

  });
  describe('With a JSON response,', function(){
    it("Build a user list", function(){
      assert.equal(updateUserList($c), $u);
    });
  });
 });
});

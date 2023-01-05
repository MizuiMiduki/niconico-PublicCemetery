/*COPYRIGHT (c) 2022 BlossomsArchive (C)2022 MizuiMiduki*/

//ローカルストレージ呼び出し
$(function(){
  chrome.storage.local.get(["mode"], function(pattern) {
    var select_mode = pattern.mode;

if($('.ErrorMessage').length){
  //通常モード
    if("normal" == select_mode){
        window.location.href = "https://nico.ms/sm38213757?from=0";
    }

  //ランダムモード
    if("random" == select_mode){
        f_redirect();
        function f_redirect() {
          var arr = [
            'https://nico.ms/sm19139061?from=0',
            'https://nico.ms/sm27404927?from=0',
            'https://nico.ms/sm38213757?from=0',
            'https://nico.ms/sm21764448?from=0',
            'https://nico.ms/sm21764440?from=0',
            'https://nico.ms/sm21764424?from=0',
            'https://nico.ms/sm19668914?from=0',
            'https://nico.ms/sm19668700?from=0',
            'https://nico.ms/sm19668547?from=0',
            'https://nico.ms/sm19557682?from=0',
            'https://nico.ms/sm19140178?from=0',
            'https://nico.ms/sm27404936?from=0',
            'https://nico.ms/sm27404931?from=0',
            'https://nico.ms/sm19139071?from=0',
            'https://nico.ms/sm19139067?from=0'
          ];
        var num = arr.length;
        if (arr.length == 0) return false;        
          var num = Math.floor(Math.random() * arr.length);
          location.href = arr[num];
        }
      }
    }
  });
});
/*COPYRIGHT (c) 2022 BlossomsArchive (C)2022 MizuiMiduki*/

//ローカルストレージ呼び出し
$(function () {
  $('.common-header-1o7v8vg').after('<div style="color:white!important;"><p>お使いのブラウザ拡張機能"ニコニコ共同墓地"は2023/12/31をもってサポートされなくなります。後継の"<a href="https://github.com/MizuiMiduki/nicominabe" style="text-decoration:underline; color:white;">ニコ見なべ</a>"をご利用ください</p></div>');

  chrome.storage.local.get(["mode"], function (pattern) {
    var select_mode = pattern.mode;
    chrome.storage.local.get(["count"], function (pattern) {
      var count = pattern.count;

      if ($('.ErrorMessage').length) {
        if ("manual" == select_mode) {
          if (count == 1) {
            window.location.href = "https://nico.ms/sm38213757?from=0";
          } else if (count < 1) {
            chrome.storage.local.get(["manual_id"], function (pattern) {
              var id = pattern.manual_id;
              chrome.storage.local.get(["manual_url"], function (pattern) {
                var url = pattern.manual_url;
                window.location.href = "https://nico.ms/" + id + url + "?from=0";
              })
            });
          }
        } else if (count < 1) {
          //通常モード
          if ("normal" == select_mode) {
            window.location.href = "https://nico.ms/sm38213757?from=0";
          } else if ("random" == select_mode) {
            //ランダムモード
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
          } else {
            window.location.href = "https://nico.ms/sm38213757?from=0";
          }
        }
        chrome.storage.local.set(
          {
            "count": count + 1,
          }
        );
      } else {
        chrome.storage.local.set(
          {
            "count": 0,
          }
        );
      }
    });
  })
});
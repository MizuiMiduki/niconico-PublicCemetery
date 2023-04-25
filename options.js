$(function () {
  //ノーマルモード保存
  $("#normal_save").click(function () {
    chrome.storage.local.set(
      {
        "mode": "normal",
      }
    );
    location.reload()
  });
});

$(function () {
  //ランダムモード保存
  $("#random_save").click(function () {
    chrome.storage.local.set(
      {
        "mode": "random",
      }
    );
    location.reload()
  });
});

$(function () {

  //マニュアルモード保存
  $("#manual_save").click(function () {
    var value = $('#id_select').val();
    if (value) {
      var value = $('#manual_url_box').val();
      if (value) {
        chrome.storage.local.set(
          {
            "mode": "manual",
          }
        );
        let id = document.getElementById('id_select').value;
        let url = document.getElementById('manual_url_box').value;
        chrome.storage.local.set(
          {
            "manual_id": id,
            "manual_url": url,
          }
        );
        location.reload()
      } else {
        alert("動画IDを入力してください")
      }
    } else {
      alert("動画IDを選択してください")
    }


  });
});


$(function () {
  //ステータス表示
  chrome.storage.local.get(["mode"], function (pattern) {
    var select_mode = pattern.mode;
    if ("normal" == select_mode) {
      $("#status-mode").text("ノーマル");
    } else if ("random" == select_mode) {
      $("#status-mode").text("ランダム");
    } else if ("manual" == select_mode) {
      $("#status-mode").text("マニュアル");
    } else {
      $("#status-mode").text("モードを選択してください");
    }
  });
  chrome.storage.local.get(["manual_id"], function (pattern) {
    var id = pattern.manual_id;
    chrome.storage.local.get(["manual_url"], function (pattern) {
      var url = pattern.manual_url;
      iframe_manual_url = "https://ext.nicovideo.jp/thumb/" + id + url;
      $('#manual_iframe').attr('src', iframe_manual_url);
      var select = document.getElementById("id_select");
      if (id == "sm"){
        select.options[1].selected = true
      }else if(id == "nm"){
        select.options[2].selected = true
      }
      if (url){
        $("#manual_url_box").attr("Value", url)
      }
    })
  });
});

$(function () {
  $("#year1").text(new Date().getFullYear());
  $("#year2").text(new Date().getFullYear());
});

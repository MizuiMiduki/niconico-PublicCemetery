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
    chrome.storage.local.set(
      {
        "mode": "manual",
      }
    );
    location.reload()
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
});

$(function () {
  $("#year1").text(new Date().getFullYear());
  $("#year2").text(new Date().getFullYear());
});

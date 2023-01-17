$(function () {
  $("#open_options").click(function () {
    chrome.runtime.openOptionsPage();
  });

  $("#open_niconico").click(function () {
    window.open('https://www.nicovideo.jp/video_top?cmnhd_ref=device%3Dpc%26site%3Dniconico%26pos%3Dheader_servicelink%26page%3Dvideo_top', '_blank')
  });

  //ステータス表示
  chrome.storage.local.get(["mode"], function (pattern) {
    var select_mode = pattern.mode;
    if ("normal" == select_mode) {
      $("#status-mode-popup").text("ノーマル");
    } else if ("random" == select_mode) {
      $("#status-mode-popup").text("ランダム");
    } else if ("manual" == select_mode) {
      $("#status-mode-popup").text("マニュアル");
    } else {
      $("#status-mode-popup").text("設定からモードを選択してください");
    }
  });
});

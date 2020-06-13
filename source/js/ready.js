hljs.initHighlightingOnLoad();
// hljs.initLineNumbersOnLoad();
hljs.initLineNumbersOnLoad();
$(document).ready(function () {
  // use clipboard.js to copy code
  var clipboard = new ClipboardJS(".code-caption-copy", {
    target: function (trigger) {
      console.log(trigger);
      var code = $(trigger).parent().next("pre").children("code").get(0);
      return code;
    },
  });
});

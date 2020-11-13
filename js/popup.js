function getUniqueName() {
  $('.btn').hide();
  chrome.tabs.getSelected(null, function (tab) {
    var href = tab.url;
    var re = /problems?\/(.*?)\//i;
    var result = href.match(re);
    if (result) {
      var uniqueName = result[1];
      $('#search-result').text('正在为您寻找'+uniqueName+'的题解...');
      $.ajax({
        type: 'GET',
        url: 'http://www.jiuzhang.com/api/solution/get_solution/',
        data: {
          unique_name: uniqueName,
        },
        success: function(data) {
          if(data.url) {
            $('#search-result').text('已为您找到'+uniqueName+'的题解');
            $('#go-button').attr('href', data.url).show();
            $('#discuss-button').attr('href' ,'https://www.lintcode.com/problem/' + uniqueName + '/discuss').show();
            $('html').keydown(function(event) {
              console.log(event.keyCode);
              if (event.keyCode == 32) {
                window.open(data.url);
            };
            })
          } else {
            $('#search-result').text('很抱歉，本题题解九章算法暂未收录');
            $('#submit-button').show();
          }
        },
        error: function() {
          $('#search-result').text('服务异常，请检查您的网络连接');
        }
      })
    }
  });
}

console.log('Hi，你在找什么？当你看着这段字的时候，我就知道，你是我们要找的人！加入九章算法吧，请发邮件至hr@ninechapter.com，标题注明「来自console」。期待和你的相遇。');
getUniqueName();

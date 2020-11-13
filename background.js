chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          //leetcode
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: 'leetcode.com', pathContains: '/problems/' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: 'leetcodechina.com', pathContains: '/problems/' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: 'leetcode-cn.com', pathContains: '/problems/' },
          }),
          //lintcode
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: 'lintcode.com', pathContains: '/problem/' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: 'lintcode.cn', pathContains: '/problem/' },
          }),
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

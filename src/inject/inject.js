'use strict';
var Search = require('./search');

chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);

    // ----------------------------------------------------------
    // This part of the script triggers when page is done loading
    console.log("Hello. This message was sent from scripts/inject.js");
    // ----------------------------------------------------------

  }
  }, 10);
});

$(document).ready(function(){
  $('.phabricator-nav-content')
    .prepend('<div class="phabhub-homepage-container aphront-panel-plain aphront-panel-view">Test</div>');
});

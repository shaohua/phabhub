'use strict';
var React = require('react');
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
  // create placeholder
  $('.phabricator-nav-content')
    .prepend('<div class="phabhub-homepage-container aphront-panel-plain aphront-panel-view">Test</div>');

  // render React components into placeholder
  React.render(
    <Search />,
    $('.phabhub-homepage-container')[0]
  );

});

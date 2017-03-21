var video = (function (window, $) {
  var player;

  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api'
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('video-ad-index', {
      height: '315',
      width: '560',
      videoId: 'S8CF_Mo3X-M',
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  function onPlayerReady () {
    $(document).on('closed', '.remodal', function (e) {
      player.stopVideo();
    });
  }

	function init (){
    var htmlClass = document.documentElement.className;
    var isLTIE9 = htmlClass.indexOf('lt-ie9') !== -1;
	}

	module.exports = {
	    init: init
	};

})(window, jQuery);

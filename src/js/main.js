/**
 * This file is bundled with browserify
 *
 */
var navigation = require('./components/navigation');
var video = require('./components/video');

navigation.init();
video.init();

require('./init');


/**
 * 	MSP Slackin
 * 	:: wrapper for Guillermo Rauch' Slackin library
 *
 * 	@author Richard Neil Ilagan
 * 	@license MIT
 * 	@version 0.1.0
 */

var server = require('slackin')({
  token : 'xoxp-8874777431-8889439922-8890749104-e34e7c',
  org : 'hpegdpmsp',
  interval : 1000,
  silent : false
});

server.listen(3000);

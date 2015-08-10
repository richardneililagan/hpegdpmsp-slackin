/**
 * 	MSP Slackin
 * 	:: wrapper for Guillermo Rauch' Slackin library
 *
 * 	@author Richard Neil Ilagan
 * 	@license MIT
 * 	@version 0.1.0
 */

var server = require('slackin')({
  token : process.env.SLACK_API_TOKEN,
  org : process.env.SLACK_API_ORGANIZATION,
  interval : 1000,
  silent : false
});

server.listen(process.env.PORT || 3000);

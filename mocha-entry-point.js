const {
  url,
  'lax-mode': laxMode,
  'speed-mode': speedMode
} = require('minimist')(process.argv.slice(2))

require('./test').todoMVCTest(url, speedMode, laxMode, 'chrome')

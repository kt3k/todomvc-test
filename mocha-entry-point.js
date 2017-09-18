// mocha entry point
const { todoMVCTest } = require('./test')

require('minimisted')(({
  url,
  'lax-mode': laxMode,
  'speed-mode': speedMode
}) => todoMVCTest(url, speedMode, laxMode, 'chrome'))

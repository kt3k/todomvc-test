#!/usr/bin/env node

const { spawn } = require('child_process')
const { dirname, join } = require('path')
const usage = require('./usage')
const pkg = require('./package')

const getMochaPath = () => join(dirname(require.resolve('mocha')), 'bin', 'mocha')
const mochaEntryPoint = join(__dirname, 'mocha-entry-point.js')

require('minimisted')(
  argv => {
    if (argv.version) {
      console.log(`${pkg.name}@${pkg.version}`)
      process.exit(0)
    }

    if (argv.help) {
      usage()
      process.exit(0)
    }

    if (argv._.length === 0) {
      console.log('Error: No url is given')
      process.exit(1)
    }

    if (argv._.length > 1) {
      console.log('Error: More than 1 urls are given')
      process.exit(1)
    }

    const url = argv._[0]

    const args = [getMochaPath(), mochaEntryPoint, `--url=${url}`]

    if (argv['lax-mode']) { args.push('--lax-mode') }
    if (argv['speed-mode']) { args.push('--speed-mode') }
    args.push('--timeout=10000')

    spawn(process.execPath, args, { stdio: 'inherit' })
      .on('exit', function (code, signal) {
        if (signal) {
          process.kill(process.pid, signal)
        } else {
          process.exit(code)
        }
      })
  },
  {
    boolean: ['help', 'version', 'lax-mode', 'speed-mode'],
    default: {
      help: false,
      version: false,
      'lax-mode': false,
      'speed-mode': true
    },
    alias: {
      v: 'version',
      h: 'help',
      l: 'lax-mode',
      s: 'speed-mode'
    }
  }
)

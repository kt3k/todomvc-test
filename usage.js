const usage = () => {
  console.log(`
Usage: todomvc-test [options] <url>

Options:
  -h, --help          Show help message and exit
  -v, --version       Show version number and exit
  -l, --lax-mode      Run tests with lax mode. Default is false.
  -s, --speed-mode    Run tests with speed mode. Default is true.

Examples:
  $ todomvc-test http://localhost:8000
                                            # Test app on the local server
  $ todomvc-test http://todomvc.com/examples/backbone
                                            # Test app on the internet
  `)
}

module.exports = usage

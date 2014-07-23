var color = {
  'red':    '\033[0;31m',
  'green':  '\033[0;32m',
  'yellow': '\033[0;33m',
  'blue':   '\033[0;34m',
  'reset':  '\033[0m'
}

function puts(json, send)
{
  return (send)
    ? console.log(JSON.stringify(json))
    : null;
}

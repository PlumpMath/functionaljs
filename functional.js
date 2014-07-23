
/* start.js */

;(function()
{

  var root = this;

  var Functional = {};

/* debugging.js */

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

/* importGlobals.js */

var global = function(f,n)
{
  if (f.prototype[n]) {
    return function(a)
    {
      var argv = Array.prototype.slice.call(arguments, 1);

      if (f === Function)
        argv.unshift(null);

      return f.prototype[n].apply(a, argv);
    }
  }
}

var map     = Functional.map     = global(Array, 'map');
var fold    = Functional.fold    = global(Array, 'reduce');
var concat  = Functional.concat  = global(Array, 'concat');
var slice   = Functional.slice   = global(Array, 'slice');
var find    = Functional.find    = global(Array, 'find');
var filter  = Functional.filter  = global(Array, 'filter');

var apply   = Functional.apply   = global(Function, 'apply');
var bind    = Functional.bind    = global(Function, 'bind');
var call    = Functional.call    = global(Function, 'call');

/* higherOrder.js */

var bindRight = Functional.bindRight = function(f)
{
  return bind(function ()
  {
    return apply(f, concat(slice(arguments, 1), arguments[0]));
  }, slice(arguments, 1));
}

var array = Functional.array = bindRight(slice, 0);

var binder = Functional.binder = function(f1)
{
  return function ()
  {
    puts(arguments);
    return bindRight(f1, array(arguments));
  }
}

var compose = Functional.compose = function(f, g)
{
  return function ()
  {
    return call(f, apply(g, arguments));
  }
}

var mapper    = Functional.mapper    = binder(map);
var folder    = Functional.folder    = binder(fold);
var concater  = Functional.concater  = binder(concat);
var slicer    = Functional.slicer    = binder(slice);
var finder    = Functional.finder    = binder(find);
var filterer  = Functional.filterer  = binder(filter);

/* nativeOperations.js */

Functional.get = function(a, n)
{
  return a[n];
}

Functional.not = function(a)
{
  return !a;
}

Functional.bitwise = {};

Functional.bitwise.or = function(a, b)
{
  return a | b;
}

Functional.bitwise.and = function(a, b)
{
  return a & b;
}

Functional.multiply = function(a, b)
{
  return a*b;
}

Functional.negate = bind(Functional.multiply, -1);

Functional.divide = function(a, b)
{
  return a/b;
}

Functional.reciprocal = bind(Functional.divide, 1);

Functional.add = function(a, b)
{
  return a + b;
}

Functional.increment = bindRight(Functional.add, 1);

Functional.subtract = function(a, b)
{
  return this.add(this.negate(b), a);
}

Functional.decrement = bindRight(Functional.subtract, 1);

Functional.or = function(a, b)
{
  return a || b;
}

Functional.and = function(a, b)
{
  return a && b;
}

Functional.type = {};

Functional.type.float = function(x)
{
  return +x;
}

Functional.type.int     = bindRight(Functional.bitwise.or, 0);
Functional.type.string  = bindRight(Functional.add, '');
Functional.type.bool    = compose(Functional.not, Functional.not);

Functional.array = {};

Functional.array.sum = folder(Functional.add);
Functional.array.len = folder(Functional.increment);

/* end.js */

  module.export = Functional;
})();

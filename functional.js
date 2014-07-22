
/* start.js */

;(function()
{ 

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

var map     = global(Array, 'map');
var fold    = global(Array, 'reduce');
var concat  = global(Array, 'concat');
var slice   = global(Array, 'slice');
var find    = global(Array, 'find');
var filter  = global(Array, 'filter');

var apply   = global(Function, 'apply');
var bind    = global(Function, 'bind');
var call    = global(Function, 'call');

/* higherOrder.js */

function bindRight(f)
{
  return bind(function ()
  {
    console.log(concat(slice(arguments, 1), arguments[0]));
    return apply(f, concat(slice(arguments, 1), arguments[0]));
  }, slice(arguments, 1));
}

var array = bindRight(slice, 0);

function binder(f1)
{
  return function ()
  {
    return bindRight(f1, array(arguments));
  }
}

function compose(f, g)
{
  return function ()
  {
    return call(f, apply(g, arguments));
  }
}

var mapper    = binder(map);
var folder    = binder(fold);
var concater  = binder(concat);
var slicer    = binder(slice);
var finder    = binder(find);
var filterer  = binder(filter);

/* nativeOperations.js */

function get(a, n)
{
  return a[n];
}

function not(a)
{
  return !a;
}

function OR(a, b)
{
  return a | b;
}

function AND(a, b)
{
  return a & b;
}

function multiply(a, b)
{
  return a*b;
}

var negative = bind(multiply, -1);

function divide(a, b)
{
  return a/b;
}

var reciprocal = bind(divide, 1);

function add(a, b)
{
  return a + b;
}

var increment = bindRight(add, 1);

function subtract(a, b)
{
  return add(negative(b), a);
}

var decrement = bindRight(subtract, 1);

function or(a, b)
{
  return a || b;
}

function and(a, b)
{
  return a && b;
}

function FLOAT(x)
{
  return +x;
}

var INT       = bindRight(OR, 0);
var STRING    = bindRight(add, '');
var BOOL      = compose(not, not);

var sum = folder(add);

/* end.js */

})();

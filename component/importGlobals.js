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

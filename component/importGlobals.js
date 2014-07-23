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

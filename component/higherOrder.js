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

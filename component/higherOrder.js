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

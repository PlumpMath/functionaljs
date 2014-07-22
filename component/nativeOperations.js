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

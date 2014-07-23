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

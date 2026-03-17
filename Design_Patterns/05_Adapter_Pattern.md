# Adapter Pattern

## Question (Easy)
Implement the Adapter design pattern.

The Adapter is a structural design pattern that allows incompatible interfaces to work together. It wraps an existing class with a new interface so that it becomes compatible with the client's interface.

You are given completed `SquareHole`, `Square` and `Circle` classes. A `Square` fits into a `SquareHole` if the `Square`'s side length is less than or equal to the `SquareHole`'s length. A `Circle` has a radius and a `Circle` fits into a `SquareHole` if the `Circle`'s diameter is less than or equal to the `SquareHole`'s length.

Complete the implementation of the `CircleToSquareAdapter` class such that it adapts a `Circle` to a `Square`.

![Diagram](./public.avif)

### Example 1:
```
SquareHole squareHole = new SquareHole(5);

Square square = new Square(5);
squareHole.canFit(square);            // true

Circle circle = new Circle(5);
CircleToSquareAdapter circleAdapter = new CircleToSquareAdapter(circle);
squareHole.canFit(circleAdapter);     // false
```

### Example 2:
```
SquareHole squareHole = new SquareHole(5);

Square square = new Square(6);
squareHole.canFit(square);            // false

Circle circle = new Circle(2);
CircleToSquareAdapter circleAdapter = new CircleToSquareAdapter(circle);
squareHole.canFit(circleAdapter);     // true
```
# Prototype Pattern

## Question (Easy)
Implement the Prototype design pattern.

The Prototype is a creational design pattern that allows an object to copy itself. It is particularly useful when the creation of an object is more convenient through copying an existing object than through creation from scratch.

Your are given a `Shape` prototype interface that supports cloning itself within the `Rectangle` and `Square` classes.

You need to implement the following:

- The `clone()` method in the `Rectangle` class which returns a new instance of the `Rectangle` class.
- The `clone()` method in the `Square` class which returns a new instance of the `Square` class.
- The `cloneShapes()` method in the `Test` class which returns a list of cloned shapes.

### Example 1:
```
Shape square = new Square(10); // 10 is the length
Shape anotherSquare = square.clone(); // Clone with length 10
square == anotherSquare; // false 

Shape rectangle = new Rectangle(10, 20); // 10 is width, 20 is height
Shape anotherRectangle = rectangle.clone(); // Clone with width 10 and height 20
rectangle == anotherRectangle; // false 

Test test = new Test();
List<Shape> shapes = Arrays.asList(square, rectangle, anotherSquare, anotherRectangle);
List<Shape> clonedShapes = test.cloneShapes(shapes);

shapes == clonedShapes; // false
shapes.size() == clonedShapes.size(); // true
shapes.get(0) == clonedShapes.get(0); // false
shapes.get(0).getLength() == clonedShapes.get(0).getLength(); // true
```

Note: Each clone should have the same attributes as the original shape, but they should not be the same object instance.
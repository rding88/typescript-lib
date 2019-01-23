type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}

type Container<T> = { value: T };

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;

type Yikes = Array<Yikes>; // error


type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

//this type

class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

let v = new BasicCalculator(2)
            .multiply(5)
            .add(1)
            .currentValue();

            function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
                return names.map(n => o[n]);
              }
              
              interface Person {
                  name: string;
                  age: number;
              }
              let person: Person = {
                  name: 'Jarid',
                  age: 35
              };
              let strings: string[] = pluck(person, ['name']); // ok, string[]
              function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
                return o[name]; // o[name] is of type T[K]
            }
            let name: string = getProperty(person, 'name');
            let age: number = getProperty(person, 'age');
            
            interface Map<T> {
                [key: string]: T;
            }
            let keys: keyof Map<number>; // string
            let value: Map<number>['foo']; // number
                        
              
interface PersonPartial {
    name?: string;
    age?: number;
}

interface PersonReadonly {
    readonly name: string;
    readonly age: number;
}

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial<T> = {
    [P in keyof T]?: T[P];
}

type PersonPartial = Partial<Person>;
type ReadonlyPerson = Readonly<Person>;

type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean ;

type Flags = {
    option1: boolean;
    option2: boolean;
}

type NullablePerson = { [P in keyof Person]: Person[P] | null }
type PartialPerson = { [P in keyof Person]?: Person[P] }

type Nullable<T> = { [P in keyof T]: T[P] | null }
type Partial<T> = { [P in keyof T]?: T[P] }

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}
function proxify<T>(o: T): Proxify<T> {
   // ... wrap proxies ...
}
let proxyProps = proxify(props);

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}
type Record<K extends string, T> = {
    [P in K]: T;
}

type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>

function unproxify<T>(t: Proxify<T>): T {
    let result = {} as T;
    for (const k in t) {
        result[k] = t[k].get();
    }
    return result;
}

let originalProps = unproxify(proxyProps);



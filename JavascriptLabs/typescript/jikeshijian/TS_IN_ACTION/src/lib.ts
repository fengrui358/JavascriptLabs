interface T {
  a: number;
  b: string;
  c?: Date;
}

type ReadonlyType<T> = {
  readonly [P in keyof T]: P;
};

// 将属性变为只读属性
type readonlyType = ReadonlyType<T>;

// 将属性变为可选属性
type partialType = Partial<T>;

// 将属性变为必须
type RequiredType = Required<T>;

// 筛选属性
type PickObj = Pick<T, 'a' | 'c'>;

// Record
type RecordObj = Record<'x' | 'y', string>

// 条件类型
type TypeName<T> = 
    T extends string? 'string' :
    T extends number? 'number':
    T extends boolean? 'boolean':
    T extends undefined? 'undefined':
    T extends null? 'null':
    T extends Function? 'function':
    'object';

type T1 = TypeName<string>;
type T2 = TypeName<string[]>;

type Diff<T, U> = T extends U ? never : T // == Exclude

type T4 = Diff<'a' | 'b' | 'd', 'a' | 'b' | 'c'>

type NotNull<T> = Diff<T, undefined | null> // == NonNullable<T>
type T5 = NotNull<string | number | null>

// Extract<T, U>
type T6 = Extract<string | number | null, string>


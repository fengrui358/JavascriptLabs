import Location from './types/location';

interface Item {
  id: string
  location: Location | null
  value?: string
}

interface Items {
  data: Item[]
  [index: number]: Item // 索引签名
}

function render(result: Items | null) {
  result?.data.forEach((item) => {
    console.log(item.id, item.location, item.value);
  });
}

let result = {
  data: [{ id: '1', location: { lat: 435.4353, lng: 3435.345 } }],
};

render(result);

interface Lib {
    (): void
    version: string
    dosomething(): void
}

function getLib(): Lib {
    let lib: Lib = (() => {}) as Lib
    lib.version = '1.0'
    lib.dosomething = () => {}

    return lib
}

export { render, getLib }

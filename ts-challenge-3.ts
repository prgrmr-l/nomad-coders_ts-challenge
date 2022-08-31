interface Geo<T, V, M> {
  getCurrentPosition(
    successFn: T | V | M,
    errorFn?: T | V,
    optionsObj?: T
  ): void;
  watchPosition(success: T | V | M, error?: T | V, options?: T): void;
  clearWatch(id: T): void;
}

// ---------------------------------------------------------------------------------------

abstract class SStorage<Key, Value> {
  storage: any;
  setItem(key: Key, value: Value) {
    this.storage[key] = value;
  }
  getItem(key: Key): Value {
    return this.storage[key];
  }
  clearItem(key: Key) {
    return delete this.storage[key];
  }
  clear() {
    this.storage = [];
  }
}

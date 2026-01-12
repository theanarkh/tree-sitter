export class Disposable<T> {
  protected finalizationRegistry: FinalizationRegistry<T>;

  constructor(handler: (value: T) => void) {
    this.finalizationRegistry = new FinalizationRegistry(handler);
  }

  register(key: WeakKey, value: T): void {
    this.finalizationRegistry.register(key, value, key);
  }

  unregister(key: WeakKey): void {
    this.finalizationRegistry.unregister(key);
  }
}

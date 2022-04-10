export class Clone {
  static clone<T extends Record<string | number | symbol, unknown>> (clonedObject: T): T {
    return Object.create(clonedObject);
  }
}
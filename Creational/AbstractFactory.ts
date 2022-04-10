// Use the Abstract Factory when your code needs to work with various families of related products,
// but you don’t want it to depend on the concrete classes of those products—they might be unknown beforehand
// or you simply want to allow for future extensibility.

interface AbstractCar {
  readonly speed: number;
  drive(): void;
  stop(): void;
}

class BudgetCar implements AbstractCar {
  private _speed: number = 0;

  get speed(): number {
    return this._speed;
  };

  drive(): void {
    this._speed = 40;
  }

  stop(): void {
    this._speed = 0;
  }
}
class PremiumCar implements AbstractCar {
  private _speed: number = 0;

  get speed(): number {
    return this._speed;
  };

  drive(): void {
    this._speed = 25;
  }

  stop(): void {
    this._speed = 0;
  }
}

interface AbstractPlane {
  start(): void;
}

class BudgetPlane implements AbstractPlane {
  _state: 'ON_LAND' | 'IN_FLIGHT' = 'ON_LAND'
  
  start(): void {
    setTimeout(() => this._state = 'IN_FLIGHT', 500);
  }
}
class PremiumPlane implements AbstractPlane {
  _state: 'ON_LAND' | 'IN_FLIGHT' = 'ON_LAND'

  start(): void {
    setTimeout(() => this._state = 'IN_FLIGHT', 1_000);
  }
}

interface CarFactory {
  createCar(): AbstractCar;
  createPlane(): AbstractPlane;
}

export class BudgetTransportFactory implements CarFactory {
  createPlane(): AbstractPlane {
    return new BudgetPlane();
  };
  createCar(): AbstractCar {
    return new BudgetCar();
  };
}

export class PremiumTransportFactory implements CarFactory {
  createPlane(): AbstractPlane {
    return new PremiumPlane();
  };
  createCar(): AbstractCar {
    return new PremiumCar();
  };
}

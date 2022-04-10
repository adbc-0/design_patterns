// Factory Method is a creational design pattern that provides an interface for creating objects in a superclass,
// but allows subclasses to alter the type of objects that will be created.

export enum DeviceType {
  DESKTOP = 'DESKTOP',
  LAPTOP = 'LAPTOP'
}

interface DeviceI {
  cpu: string;
  gpu: string | null;
  motherboard: string;
  ram: string;
}
class Device {
  protected cpu: string;
  protected gpu: string | null;
  protected motherboard: string;
  protected ram: string;

  constructor(deviceProperties: DeviceI) {
    this.cpu = deviceProperties.cpu;
    this.gpu = deviceProperties.gpu;
    this.motherboard = deviceProperties.motherboard;
    this.ram = deviceProperties.ram;
  };

  get specification() {
    return {
      cpu: this.cpu,
      gpu: this.gpu,
      ram: this.ram,
    };
  };
}

interface DesktopI extends DeviceI {
  powerSupply: string;
}
export type DesktopSpec = DesktopI;
class Desktop extends Device {
  private powerSupply: string;

  constructor(desktopProperties: DesktopI) {
    super(desktopProperties);
    this.powerSupply = desktopProperties.powerSupply;
  };

  get specification() {
    return {
      ...super.specification,
      type: DeviceType.DESKTOP,
      psu: this.powerSupply,
    };
  };
}

interface LaptopI extends DeviceI {
  screenSize: string;
}
export type LaptopSpec = LaptopI;
class Laptop extends Device {
  private screenSize: string;

  constructor(desktopProperties: LaptopI) {
    super(desktopProperties);
    this.screenSize = desktopProperties.screenSize;
  };

  get specification() {
    return {
      ...super.specification,
      type: DeviceType.LAPTOP,
      screenSize: this.screenSize,
    };
  };
}

export class DeviceFactory {
  static createDevice(deviceType: DeviceType.DESKTOP, deviceProperties: DesktopI): Desktop
  static createDevice(deviceType: DeviceType.LAPTOP, deviceProperties: LaptopI): Laptop
  static createDevice(deviceType: DeviceType, deviceProperties: LaptopI & DesktopI) {
    switch (deviceType) {
      case DeviceType.DESKTOP:
        return new Desktop(deviceProperties);
      case DeviceType.LAPTOP:
        return new Laptop(deviceProperties);
      default: 
        throw new Error('unknown device type');
    }
  };
}

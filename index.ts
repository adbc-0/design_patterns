import { DesktopSpec, DeviceFactory, DeviceType, LaptopSpec } from "./Creational/FactoryMethod.js";

const laptopSpec: LaptopSpec = {
  cpu: 'Intel',
  gpu: 'Nvidia',
  motherboard: 'Asus',
  ram: 'HyperX',
  screenSize: '15.6inch',
};

const desktopSpec: DesktopSpec = {
  cpu: 'AMD',
  gpu: 'AMD',
  motherboard: 'Asus',
  ram: 'HyperX',
  powerSupply: 'BeQuiet'
};

const laptop = DeviceFactory.createDevice(DeviceType.LAPTOP, laptopSpec);
const desktop = DeviceFactory.createDevice(DeviceType.DESKTOP, desktopSpec);
console.log(laptop.specification);
console.log(desktop.specification);


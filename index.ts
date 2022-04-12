import { BudgetTransportFactory, PremiumTransportFactory } from "./Creational/AbstractFactory.js";
import { AssignmentBuilder, AssignmentDifficulty } from "./Creational/Builder.js";
import { DesktopSpec, DeviceFactory, DeviceType, LaptopSpec } from "./Creational/FactoryMethod.js";
import { Clone } from "./Creational/Prototype.js";
import { Database } from "./Creational/Singleton.js";
import { NewWriter, OriginalWriter, WriterAdapter } from "./Structural/Adapter.js";

// ---------------- Factory method ----------------

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

// ---------------- Abstract Factory ----------------

const budgetTransport = new BudgetTransportFactory();
const premiumTransport = new PremiumTransportFactory();

const meansOfTransport = [];
meansOfTransport.push(budgetTransport.createCar());
meansOfTransport.push(premiumTransport.createCar());
meansOfTransport.push(budgetTransport.createPlane());
meansOfTransport.push(budgetTransport.createPlane());
meansOfTransport.push(premiumTransport.createPlane());
console.log(meansOfTransport);

// ---------------- Builder ----------------

const assignment = new AssignmentBuilder('Physics assignment I')
  .setDifficulty(AssignmentDifficulty.EASY)
  .setDueDate(new Date('1995-12-17T03:13:00'))
  .build();

console.log(assignment);

// ---------------- Prototype ----------------

const node = {
  value: 'original node'
};

const nodeCopy = Clone.clone(node);
console.log(Boolean(node === nodeCopy));

// ---------------- Singleton ----------------

const db = Database.getInstance();
console.log(db.query('SELECT * FROM DATE'));

// ---------------- Adapter ----------------

// get the same result (thanks to adapter) as you would get from oldWriter 
const oldWriter = new OriginalWriter();
const newWriter = new NewWriter();
const writerAdapter = new WriterAdapter(newWriter);
console.log(oldWriter.getRequest());
console.log(newWriter.getSpecialRequest())
console.log(writerAdapter.getRequest());

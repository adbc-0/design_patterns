import { BudgetTransportFactory, PremiumTransportFactory } from "./Creational/AbstractFactory.js";
import { AssignmentBuilder, AssignmentDifficulty } from "./Creational/Builder.js";
import { DesktopSpec, DeviceFactory, DeviceType, LaptopSpec } from "./Creational/FactoryMethod.js";
import { Clone } from "./Creational/Prototype.js";
import { Database } from "./Creational/Singleton.js";
import { NewWriter, OriginalWriter, WriterAdapter } from "./Structural/Adapter.js";
import { EpsonPrinter, HpPrinter, WindowsPc } from "./Structural/Bridge.js";
import { Directory, SysFile } from "./Structural/Composite.js";

// ---------------- Factory method ----------------
console.log('\n--Factory Method--\n');

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
console.log('\n--Abstract Factory--\n');

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
console.log('\n--Builder--\n');

const assignment = new AssignmentBuilder('Physics assignment I')
  .setDifficulty(AssignmentDifficulty.EASY)
  .setDueDate(new Date('1995-12-17T03:13:00'))
  .build();

console.log(assignment);

// ---------------- Prototype ----------------
console.log('\n--Prototype--\n');

const node = {
  value: 'original node'
};

const nodeCopy = Clone.clone(node);
console.log(Boolean(node === nodeCopy));

// ---------------- Singleton ----------------
console.log('\n--Singleton--\n');

const db = Database.getInstance();
console.log(db.query('SELECT * FROM DATE'));

// ---------------- Adapter ----------------
console.log('\n--Adapter--\n');

// get the same result (thanks to adapter) as you would get from oldWriter 
const oldWriter = new OriginalWriter();
const newWriter = new NewWriter();
const writerAdapter = new WriterAdapter(newWriter);
console.log(oldWriter.getRequest());
console.log(newWriter.getSpecialRequest())
console.log(writerAdapter.getRequest());

// ---------------- Bridge ----------------
console.log('\n--Bridge--\n');

const hpPrinter = new HpPrinter();
const epsonPrinter = new EpsonPrinter();
 
const winPc = new WindowsPc(epsonPrinter);
winPc.print();
 
winPc.printer = hpPrinter;
winPc.print();
winPc.scan();


// ---------------- Composite ----------------
console.log('\n--Composite--\n');

const rootDir = new Directory('root');
const sadFrogsDir = new Directory('frogs');
 
const untitledPhoto = new SysFile('untitled.jpg');
const frogPhoto = new SysFile('sadgefrog.jpg');
 
rootDir.add(sadFrogsDir);
rootDir.add(untitledPhoto);
sadFrogsDir.add(frogPhoto);

console.log(rootDir.listFiles());
// Bridge is a structural design pattern that lets you split a large class or a set of closely related classes
// into two separate hierarchies—abstraction and implementation—which can
// be developed independently of each other.
 
// Abstraction hierarchy: computers
// Implementation hierarchy: printers
 
// Printers must have one common interface (so they are interchangeable for computers)
interface Printer {
  scan(): void;
  printFile(): void;
}
 
// Devices can have different unique methods (for example MacPc has no scan option)
export class WindowsPc {
  private _printer: Printer

  constructor(newPrinter: Printer) {
    this._printer = newPrinter;
  };
 
  set printer(newPrinter: Printer) {
    this._printer = newPrinter;
  };
 
  print(): void {
    console.log('print from windows pc');
    this._printer.printFile();
  };
 
  scan(): void {
    console.log('scanning from windows pc');
  };
}
 
export class MacPc {
  private _printer: Printer;
 
  constructor(newPrinter: Printer) {
    this._printer = newPrinter;
  };

  set printer(newPrinter: Printer) {
    this._printer = newPrinter;
  };
 
  print(): void {
    console.log('print from mac');
    this._printer.printFile();
  };
}
 
export class HpPrinter implements Printer {
  scan(): void {
    console.log('scanning done by hp printer');
  };
 
  printFile(): void {
    console.log('printing done by hp printer');
  };
}
 
export class EpsonPrinter implements Printer {
  scan(): void {
    console.log('scanning done by epson printer');
  };
 
  printFile(): void {
    console.log('printing done by epson printer');
  };
}

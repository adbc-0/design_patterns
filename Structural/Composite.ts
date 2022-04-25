// Composite is a structural design pattern that lets you compose objects into tree structures
// and then work with these structures as if they were individual objects.

abstract class Component {
  protected _parent: Component | null;
  protected _name: string;
 
  constructor (name: string) {
    this._parent = null;
    this._name = name;
  };
 
  public set parent(parent: Component | null) {
    this._parent = parent;
  };
 
  public get parent(): Component | null {
    return this._parent;
  };

  public get name(): string {
    return this._name;
  };
 
  public isComposite(): boolean {
    return false;
  };
}
 
export class Directory extends Component {
  protected children: Component[] = [];
 
  public add(component: Component): void {
    this.children.push(component);
    component.parent = this;
  };
 
  public remove(): void {
    this.parent = null;
  };

  public listFiles(): string {
    const files = [];
    for (const child of this.children) {
      if (child instanceof SysFile) {
        files.push(child.name);
      } else if (child instanceof Directory) {
        files.push(child.listFiles());
      }
    }
    return `${this.name}(${files.join(', ')})`;
  };
}
 
export class SysFile extends Component {
  public remove() {
    this.parent = null;
  };
}

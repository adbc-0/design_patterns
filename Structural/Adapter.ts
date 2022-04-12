// The Adapter acts as a wrapper between two objects. It catches calls for one object and transforms them to format and interface recognizable by the second object.

interface OriginalWriterI {
  getRequest(): string;
}

export class OriginalWriter implements OriginalWriterI {
  public getRequest(): string {
    return 'Data request';
  };
}

interface NewWriterI {
  getSpecialRequest(): string;
}

export class NewWriter implements NewWriterI {
  public getSpecialRequest(): string {
    return 'tseuqer ataD';
  };
}

export class WriterAdapter extends OriginalWriter {
  private writer: NewWriterI;
  
  constructor(writer: NewWriterI) {
    super();
    this.writer = writer;
  };

  public getRequest(): string {
    return this.writer.getSpecialRequest()
      .split('')
      .reverse()
      .join('');
  };
}

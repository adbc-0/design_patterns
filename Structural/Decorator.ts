// Decorator is a structural design pattern that lets you attach new behaviors
// to objects by placing these objects inside special wrapper objects that contain the behaviors.

interface INotifier {
  send(): string;
}

export class Notifier implements INotifier {
  send(): string {
    console.log('send app notification');
    return 'send app notification';
  };
}

class NotifierDecorator implements INotifier {
  protected notifier: INotifier;

  constructor(notifier: INotifier) {
    this.notifier = notifier;
  };

  send(): string {
    return this.notifier.send();
  };
}

export class EmailDecorator extends NotifierDecorator {
  send(): string {
    super.send();
    console.log('send email notification');
    return 'send email notification';
  };
}

export class SmsDecorator extends NotifierDecorator {
  send(): string {
    super.send();
    console.log('send SMS notification');
    return 'send SMS notification';
  };
}

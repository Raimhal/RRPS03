// оновлюєш головний, оновлюється все що від нього залежить
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyAll(message) {
    this.observers.forEach((observer) => observer.notify(message));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  notify(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyAll("Hello, observers!");

// гарантує що клас має тільки 1 екземпляр та надає глобальну точку доступу до цього екземпляру
const Singleton = (function () {
  let instance;

  function createInstance() {
    return {
      sayHello: function () {
        console.log("Hello, world!");
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // true

singletonInstance1.sayHello(); // Hello, world!

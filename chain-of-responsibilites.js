class Handler {
  constructor(next = null) {
    this.next = next;
  }

  setNext(handler) {
    this.next = handler;
    return handler; // Для зручного ланцюжка викликів
  }

  handle(request) {
    if (this.next) {
      return this.next.handle(request);
    }

    return null;
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (!request.isAuthenticated) {
      console.log("Користувач не авторизований.");
      return "Помилка: Не авторизований.";
    }
    console.log("Авторизацію пройдено успішно.");
    return super.handle(request);
  }
}

class RoleHandler extends Handler {
  handle(request) {
    if (!request.roles.includes("admin")) {
      console.log("У користувача немає прав доступу.");
      return "Помилка: Недостатньо прав.";
    }
    console.log("Права доступу підтверджено.");
    return super.handle(request);
  }
}

class RequestHandler extends Handler {
  handle(request) {
    console.log("Обробка запиту...");
    return "Запит оброблено успішно!";
  }
}

// Створюємо ланцюжок
const authHandler = new AuthHandler();
const roleHandler = new RoleHandler();
const requestHandler = new RequestHandler();

authHandler.setNext(roleHandler).setNext(requestHandler);

// Приклади запитів
const request1 = { isAuthenticated: false, roles: ["user"] };
const request2 = { isAuthenticated: true, roles: ["user"] };
const request3 = { isAuthenticated: true, roles: ["admin"] };

console.log(authHandler.handle(request1)); // "Помилка: Не авторизований."
console.log(authHandler.handle(request2)); // "Помилка: Недостатньо прав."
console.log(authHandler.handle(request3)); // "Запит оброблено успішно!"

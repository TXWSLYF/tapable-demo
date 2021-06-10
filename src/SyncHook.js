const { SyncHook } = require("tapable");

class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(["a"]),
    };
  }
}

const myCar = new Car();

myCar.hooks.accelerate.intercept({
  name: "aaa",
  call: function (call) {
    console.log("call", call);
  },
  tap: function (tap) {
    console.log("tap", tap);
  },
});

myCar.hooks.accelerate.tap("LoggerPlugin", (newSpeed) =>
  console.log(`Accelerating to ${newSpeed}`)
);

myCar.hooks.accelerate.tap("LoggerPlugin", (newSpeed) =>
  console.log(`${newSpeed}`)
);

myCar.hooks.accelerate.call(1);
// myCar.hooks.accelerate.call(1);

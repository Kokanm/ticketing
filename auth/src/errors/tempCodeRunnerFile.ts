class ColorConsole {
  log(text: string) {
    console.log(text);
  }
}

class RedConsole extends ColorConsole {
  log(text: string) {
    console.log("\x1b[31m", text);
  }
}
class BlueConsole extends ColorConsole {
  log(text: string) {
    console.log("\x1b[34m", text);
  }
}
class GreenConsole extends ColorConsole {
  log(text: string) {
    console.log("\x1b[32m", text);
  }
}

function factory(color: "red" | "blue" | "green") {
  if (color === "red") {
    return new RedConsole();
  } else if (color === "blue") {
    return new BlueConsole();
  } else if (color === "green") {
    return new GreenConsole();
  } else {
    return new ColorConsole();
  }
}

const crven = factory("red");
crven.log("CRVENA");
const plav = factory("blue");
plav.log("PLAV");
const zelen = factory("green");
zelen.log("ZELEN");
const nikakov = factory("nsdf");
nikakov.log("NIKAKOV");

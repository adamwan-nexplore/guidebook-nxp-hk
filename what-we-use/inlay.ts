class Inlay {
  static readonly NUMBER_INLAY = 100_000_000;
  constructor() {
    console.log("Inlay");
  }
}

function main(stringText: string, anyArg) {
  console.log("Inlay.NUMBER_INLAY:", Inlay.NUMBER_INLAY, stringText, anyArg);
}

[1, 2, 3].map((_number) => main("Hello", new Inlay()));

abstract class Melon {
  public weight: number;
  public melonSort: string;

  constructor(weight: number, melonSort: string) {
    this.weight = weight;
    this.melonSort = melonSort;
  }
}

class Watermelon extends Melon {
  public element: string = "Water";

  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    // elementIndex is getter and we call it as object property not as function
    return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
  }
}

class Firemelon extends Melon {
  public element: string = "Fire";

  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
  }
}

class Earthmelon extends Melon {
  public element: string = "Earth";

  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
  }
}

class Airmelon extends Melon {
  public element: string = "Air";

  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
  }
}

class Melolemonmelon extends Watermelon {
  public _elements: string[];
  public element: string;

  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
    this._elements = ['Water', 'Fire', 'Earth', 'Air'];
    this.morph();
  }

  morph(): void {
    let current = this._elements.shift();
    this.element = current;
    this._elements.push(current);
  }
}

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// if you get accessors error for ES version run with this command: 'tsc --target es6 yourFileName.ts'

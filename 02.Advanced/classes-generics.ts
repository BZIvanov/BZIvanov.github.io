class Box<T> {
  private _boxes = [];

  public add(element: T) {
    this._boxes.push(element);
  }

  public remove(): void {
    this._boxes.pop();
  }

  get count(): number {
    return this._boxes.length;
  }
}

const box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
box.remove();
console.log(box.count);

// if you get accessors error for ES version run with this command: 'tsc --target es6 file-name.ts'

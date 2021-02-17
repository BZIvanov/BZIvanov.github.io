class Box<T> {
  private _boxes = [];

  public add(el: T) {
    this._boxes.push(el);
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

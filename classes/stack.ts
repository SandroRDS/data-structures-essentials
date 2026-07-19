class Stack<T> {
  private elements: { [key: number]: T } = {};
  private length: number = 0;

  public push(element: T) {
    this.elements[this.length++] = element;
  }

  public pop() {
    if (this.isEmpty()) return undefined;

    const indexToDelete = this.length--;
    const elementToDelete = this.elements[indexToDelete - 1];
    delete this.elements[indexToDelete];

    return elementToDelete;
  }

  public peek() {
    return this.elements[this.length - 1];
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public clear() {
    this.elements = {};
    this.length = 0;
  }

  public size() {
    return this.length;
  }

  public toString() {
    return `[${Object.values(this.elements).join(", ")}]`;
  }
}

export default Stack;

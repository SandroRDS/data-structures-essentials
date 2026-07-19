class Queue<T> {
  private elements: { [key: number]: T } = {};
  private startIndex: number = 0;
  private endIndex: number = 0;

  public enqueue(element: T) {
    this.elements[this.endIndex++] = element;
  }

  public dequeue() {
    if (this.isEmpty()) return;

    const element = this.elements[this.startIndex];

    delete this.elements[this.startIndex++];

    return element;
  }

  public peek() {
    if (this.isEmpty()) return;

    return this.elements[this.startIndex];
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public size() {
    return this.endIndex - this.startIndex;
  }

  public clear() {
    this.elements = {};
    this.startIndex = 0;
    this.endIndex = 0;
  }
}

export default Queue;

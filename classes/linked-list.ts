class Node<T> {
  public value: T;
  public next?: Node<T>;
  public previous?: Node<T>;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  private head?: Node<T>;
  private tail?: Node<T>;
  private length: number = 0;

  public push(element: T) {
    const node = new Node<T>(element);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      [this.tail!.next, node.previous] = [node, this.tail];
      this.tail = node;
    }

    this.length++;
  }

  public unshift(element: T) {
    if (this.isEmpty()) this.push(element);

    const node = new Node<T>(element);

    [this.head!.previous, node.next] = [node, this.head];
    this.head = node;
  }

  public insert(element: T, index: number) {}

  public getElementAt(index: number) {
    if (this.isEmpty() || index < 0 || index >= this.length) return;

    const startFromTail = Math.ceil(this.length / 2) <= index;
    let currentNode = startFromTail ? this.tail : this.head;

    for (
      let i = startFromTail ? this.length - 1 : 0;
      startFromTail ? i > index : i < index;
      startFromTail ? i-- : i++
    ) {
      if (startFromTail) console.log(currentNode);
      currentNode = startFromTail ? currentNode?.previous : currentNode?.next;
    }

    return currentNode?.value;
  }

  public removeAt(index: number) {}

  public isEmpty() {
    return this.size() === 0;
  }

  public size() {
    return this.length;
  }
}

export default LinkedList;

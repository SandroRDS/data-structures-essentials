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

  public enqueue(element: T) {
    if (this.isEmpty()) {
      this.push(element);
      return;
    }

    const node = new Node<T>(element);

    [this.head!.previous, node.next] = [node, this.head];
    this.head = node;

    this.length++;
  }

  public insert(element: T, index: number) {
    if (index < 0 || index > this.size())
      throw new RangeError("Índice não permitido.");

    if (index === 0) {
      this.enqueue(element);
      return;
    }

    if (index === this.size()) {
      this.push(element);
      return;
    }

    const node = new Node<T>(element);
    const oldNode = this.getNodeAt(index)!;

    [node.previous, node.next] = [oldNode.previous, oldNode];
    [oldNode.previous!.next, oldNode.previous] = [node, node];

    this.length++;
  }

  public pop() {
    if (this.isEmpty()) return;

    const elementToRemove = this.tail?.value;

    if (this.size() === 1) {
      this.clear();
      return elementToRemove;
    }

    [this.tail!.previous!.next, this.tail] = [undefined, this.tail?.previous];

    this.length--;

    return elementToRemove;
  }

  public dequeue() {
    if (this.isEmpty()) return;

    const elementToRemove = this.head?.value;

    if (this.size() === 1) {
      this.clear();
      return elementToRemove;
    }

    [this.head!.next!.previous, this.head] = [undefined, this.head?.next];

    this.length--;

    return elementToRemove;
  }

  public removeAt(index: number) {
    if (index < 0 || index > this.size() - 1)
      throw new RangeError("Índice não permitido.");

    const nodeToRemove = this.getNodeAt(index);

    if (index === 0) {
      this.dequeue();
      return nodeToRemove?.value;
    }

    if (index === this.size() - 1) {
      this.pop();
      return nodeToRemove?.value;
    }

    [nodeToRemove!.previous!.next, nodeToRemove!.next!.previous] = [
      nodeToRemove?.next,
      nodeToRemove?.previous,
    ];

    this.length--;

    return nodeToRemove?.value;
  }

  private getNodeAt(index: number) {
    if (this.isEmpty() || index < 0 || index >= this.length) return;

    const startFromTail = Math.ceil(this.length / 2) <= index;
    let currentNode = startFromTail ? this.tail : this.head;

    for (
      let i = startFromTail ? this.length - 1 : 0;
      startFromTail ? i > index : i < index;
      startFromTail ? i-- : i++
    ) {
      currentNode = startFromTail ? currentNode?.previous : currentNode?.next;
    }

    return currentNode;
  }

  public getElementAt(index: number) {
    return this.getNodeAt(index)?.value;
  }

  public getIterator() {
    let currentNode = this.head;

    return {
      next() {
        const result = {
          done: !currentNode,
          value: currentNode?.value,
        };

        currentNode = currentNode?.next;

        return result;
      },
      [Symbol.iterator]: function () {
        return this;
      },
    };
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public size() {
    return this.length;
  }

  public clear() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }
}

export default LinkedList;

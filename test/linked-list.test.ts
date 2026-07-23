import { beforeEach, describe, expect, test } from "vitest";
import { LinkedList } from "../classes";

let linkedList: LinkedList<string>;

beforeEach(() => {
  linkedList = new LinkedList<string>();
});

describe("Testing to push elements in the Linked List", () => {
  test("Pushing one element", () => {
    linkedList.push("first");

    expect(linkedList.size()).toBe(1);
    expect(linkedList.getElementAt(0)).toBe("first");
  });

  test("Pushing multiple elements", () => {
    linkedList.push("first");
    linkedList.push("second");
    linkedList.push("third");

    expect(linkedList.size()).toBe(3);
    expect(linkedList.getElementAt(0)).toBe("first");
    expect(linkedList.getElementAt(1)).toBe("second");
    expect(linkedList.getElementAt(2)).toBe("third");
  });
});

describe("Testing to enqueue elements in the Linked List", () => {
  test("Enqueuing one element", () => {
    linkedList.enqueue("first");

    expect(linkedList.size()).toBe(1);
    expect(linkedList.getElementAt(0)).toBe("first");
  });

  test("Enqueuing multiple elements", () => {
    linkedList.enqueue("first");
    linkedList.enqueue("second");
    linkedList.enqueue("third");

    expect(linkedList.size()).toBe(3);
    expect(linkedList.getElementAt(0)).toBe("third");
    expect(linkedList.getElementAt(1)).toBe("second");
    expect(linkedList.getElementAt(2)).toBe("first");
  });
});

describe("Testing to insert elements in the Linked List", () => {
  test("Inserting one element in an empty list", () => {
    linkedList.insert("first", 0);

    expect(linkedList.size()).toBe(1);
    expect(linkedList.getElementAt(0)).toBe("first");
  });

  test("Inserting one element in the start of a filled list", () => {
    linkedList.push("first");
    linkedList.push("second");
    linkedList.push("third");

    linkedList.insert("fourth", 0);

    expect(linkedList.size()).toBe(4);
    expect(linkedList.getElementAt(0)).toBe("fourth");
    expect(linkedList.getElementAt(1)).toBe("first");
    expect(linkedList.getElementAt(2)).toBe("second");
    expect(linkedList.getElementAt(3)).toBe("third");
  });

  test("Inserting one element in the end of a filled list", () => {
    linkedList.push("first");
    linkedList.push("second");
    linkedList.push("third");

    linkedList.insert("fourth", 3);

    expect(linkedList.size()).toBe(4);
    expect(linkedList.getElementAt(0)).toBe("first");
    expect(linkedList.getElementAt(1)).toBe("second");
    expect(linkedList.getElementAt(2)).toBe("third");
    expect(linkedList.getElementAt(3)).toBe("fourth");
  });

  test("Inserting one element in the middle of a filled list", () => {
    linkedList.push("first");
    linkedList.push("second");
    linkedList.push("third");

    linkedList.insert("fourth", 1);

    expect(linkedList.size()).toBe(4);
    expect(linkedList.getElementAt(0)).toBe("first");
    expect(linkedList.getElementAt(1)).toBe("fourth");
    expect(linkedList.getElementAt(2)).toBe("second");
    expect(linkedList.getElementAt(3)).toBe("third");
  });

  test("Inserting multiple elements in the middle of a filled list", () => {
    linkedList.push("first");
    linkedList.push("second");
    linkedList.push("third");

    linkedList.insert("fourth", 1);
    linkedList.insert("fifth", 2);
    linkedList.insert("sixth", 1);

    expect(linkedList.size()).toBe(6);
    expect(linkedList.getElementAt(0)).toBe("first");
    expect(linkedList.getElementAt(1)).toBe("sixth");
    expect(linkedList.getElementAt(2)).toBe("fourth");
    expect(linkedList.getElementAt(3)).toBe("fifth");
    expect(linkedList.getElementAt(4)).toBe("second");
    expect(linkedList.getElementAt(5)).toBe("third");
  });

  test("Trying to insert a element in a position less the zero", () => {
    linkedList.push("first");
    linkedList.push("second");

    expect(() => linkedList.insert("third", -1)).toThrow(RangeError);
    expect(linkedList.size()).toBe(2);
    expect(linkedList.getElementAt(0)).toBe("first");
    expect(linkedList.getElementAt(1)).toBe("second");
  });

  test("Trying to insert a position greather then the list size", () => {
    linkedList.push("first");
    linkedList.push("second");

    expect(() => linkedList.insert("third", 3)).toThrow(RangeError);
    expect(linkedList.size()).toBe(2);
    expect(linkedList.getElementAt(0)).toBe("first");
    expect(linkedList.getElementAt(1)).toBe("second");
  });
});

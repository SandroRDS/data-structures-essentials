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

  test.only("Pushing multiple elements", () => {
    linkedList.push("first");
    linkedList.push("second");
    linkedList.push("third");

    expect(linkedList.size()).toBe(3);
    expect(linkedList.getElementAt(0)).toBe("first");
    expect(linkedList.getElementAt(1)).toBe("second");
    expect(linkedList.getElementAt(2)).toBe("third");
  });
});

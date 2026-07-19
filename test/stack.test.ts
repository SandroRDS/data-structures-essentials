import { describe, expect, test, beforeEach } from "vitest";
import { Stack } from "../classes";
import { faker } from "@faker-js/faker";
import _ from "lodash";

let stack: Stack<string>;

beforeEach(() => {
  stack = new Stack<string>();
});

describe("Testing to add elements in the Stack", () => {
  test("Adding one element", () => {
    stack.push("first");

    expect(stack.size()).toBe(1);
  });

  test("Adding random elements quantity", { repeats: 3 }, () => {
    const count = faker.number.int({ min: 3, max: 8 });

    for (const index in _.range(count)) stack.push(index.toString());

    expect(stack.size()).toBe(count);
  });
});

describe("Testing to remove elements of the Stack", () => {
  test("Trying to pop in a empty stack", () => {
    expect(stack.pop()).toBe(undefined);
  });

  test("Trying to pop in a stack with one element", () => {
    stack.push("First");

    expect(stack.pop()).toBe("First");
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  test("Trying to pop in a stack with multiple element", () => {
    stack.push("First");
    stack.push("Second");
    stack.push("Third");

    expect(stack.pop()).toBe("Third");
    expect(stack.pop()).toBe("Second");
    expect(stack.size()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
  });
});

describe("Testing to peek the element at the top of the Stack", () => {
  test("Peeking an empty stack", () => {
    expect(stack.peek()).toBe(undefined);
  });

  test("Peeking an stack with one element", () => {
    stack.push("First");

    expect(stack.peek()).toBe("First");
  });

  test("Peeking an stack with multiple elements", () => {
    stack.push("First");
    stack.push("Second");
    stack.push("Third");

    expect(stack.peek()).toBe("Third");
  });
});

describe("Testing to clear the Stack", () => {
  test("Clearing stack with one element", () => {
    stack.push("First");
    stack.clear();

    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  test("Clearing stack with multiple elements", () => {
    stack.push("First");
    stack.push("Second");
    stack.push("Third");
    stack.clear();

    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});

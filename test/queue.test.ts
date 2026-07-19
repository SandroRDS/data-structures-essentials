import { describe, expect, test, beforeEach } from "vitest";
import { Queue } from "../src/classes";
import { faker } from "@faker-js/faker";
import _ from "lodash";

let queue: Queue<string>;

beforeEach(() => {
  queue = new Queue<string>();
});

describe("Testing to add elements in the Queue", () => {
  test("Adding one element", () => {
    queue.enqueue("first");

    expect(queue.size()).toBe(1);
  });

  test("Adding random elements quantity", { repeats: 3 }, () => {
    const count = faker.number.int({ min: 3, max: 8 });

    for (const index in _.range(count)) queue.enqueue(index.toString());

    expect(queue.size()).toBe(count);
  });
});

describe("Testing to remove elements of the Queue", () => {
  test("Trying to dequeue in a empty queue", () => {
    expect(queue.dequeue()).toBe(undefined);
  });

  test("Trying to dequeue in a queue with one element", () => {
    queue.enqueue("First");

    expect(queue.dequeue()).toBe("First");
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  test("Trying to dequeue in a queue with multiple element", () => {
    queue.enqueue("First");
    queue.enqueue("Second");
    queue.enqueue("Third");

    expect(queue.dequeue()).toBe("First");
    expect(queue.dequeue()).toBe("Second");
    expect(queue.size()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
  });
});

describe("Testing to peek the element at the init of the Queue", () => {
  test("Peeking an empty queue", () => {
    expect(queue.peek()).toBe(undefined);
  });

  test("Peeking an queue with one element", () => {
    queue.enqueue("First");

    expect(queue.peek()).toBe("First");
  });

  test("Peeking an queue with multiple elements", () => {
    queue.enqueue("First");
    queue.enqueue("Second");
    queue.enqueue("Third");

    expect(queue.peek()).toBe("First");
  });
});

describe("Testing to clear the Queue", () => {
  test("Clearing queue with one element", () => {
    queue.enqueue("First");
    queue.clear();

    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  test("Clearing queue with multiple elements", () => {
    queue.enqueue("First");
    queue.enqueue("Second");
    queue.enqueue("Third");
    queue.clear();

    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });
});

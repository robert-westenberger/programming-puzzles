import { ListNode } from "./utils";

/*
Given the head of a singly linked list, reverse the list,
 and return the reversed list.
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let previous = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  head = previous;
  return head;
};
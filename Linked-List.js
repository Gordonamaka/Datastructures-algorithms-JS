//  Singly & Doubly Linked Lists


//  A linked list is a sequential list of nodes that hold data which point to other nodes also containing data.

/* 
- Used in many List, queue & stack implementations. 
- Great for creating circular lists.
- Can easily model real world objects such as trains.
- Used in separate chaining, which is persent in certain Hashtable implementations to deal with hashing collisions.
- Often used in the implementation of adjacency lists for graphs.

Singly linked lists only hold a reference to the next node. In the implementation you always maintain a reference to the head to the linked list and a reference to the tail node for quick additions/removals.

3 > 84 > 85 > 21 > 90 > 29 > 44 > 30

Complexity?

Search is O(n) for both

Remove at tail for singly is O(n) but O(1) for doubly
Remove in middle is O(n) for both
*/

// Single Linked list - Class Structure Example
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head); // Insert first at the head - Push if head already exists
    this.size++;
    // The size accessor property of Set instances returns the number of (unique) elements in this set.
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;
      
      while(current.next) {
        current = current.next;
      }

      current.next = node;

    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    // If index is out of range
    if(index > 0 && index > this.size) {
      return
    }

    // If first index - could reuse this.insertFirst(data) here
    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;
  
    while(count < index) { // less than one is the first instance
      previous = current; // Node before the index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++; // If we add we want to increase the size - the ll has a set size
  }


  // Get at index
  getAt(index) {
    let current = this.head; // Start at the head
    let count = 0;

    while(current) {
      if(count == index) {
        console.log(current.data);
      }

      count++;
      current = current.next; // Handles endless loop
    }

    return null;
  }


  // Remove at index
  removeAt(index) {
    if(index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if(index === 0) {
      this.head = current.next; // Setting the head what the next is
    } else {
      while(count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--; // if we remove we want to decrease the size
  }

  // Clear list
  clearList() {
    // If there is nothing at the head it clears the list
    this.head = null;
    this.size = 0;
  }


  // Remove First

  // Remove Last

  // Print list data
  printListData() {
    let current = this.head;

    while(current) {
      console.log(current.data);
      current = current.next;
    }

  }


}


const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

// ll.removeAt(0);
// ll.insertAt(500, 0); // Insert at the first index


ll.printListData();
/* 
With a doubly linked list each node holds a reference to the next and previous node. In the implementation you always maintain a reference to the head and the tail of the doubly linked list to do quick additions / removals from both ends of your list.

Search is O(n) for both

Remove at tail for singly is O(n) but O(1) for doubly
Remove in middle is O(n) for both
*/

// Draw your nodes and connections to visualize it easier.

// Creat the node
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

// Create the Double linked List
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Push Method for insertion
  push (val) {
    let node = new Node(val) // New node with a value passed in
    if(!this.head) { // If there is no head, it means it's empty
  
      this.head = node;
      this.tail = node;
  
    } else { // not empty
  
      let temp = this.tail;
      this.tail = node;
      node.prev = temp;
      temp.next = node;
    }
  
    this.length++; // Always increase when adding in
    return this;
  }

  // Take the last element
  pop() {
    
    if(!this.head) return undefined; // Empty returns undefined
    
    let temp = this.tail;

    if(this.length === 1) { // At least 1
      
      this.head = null;
      this.tail = null;
    
    } else {

      this.tail = temp.prev; // prev for pop
      this.tail.next = null;
      temp.prev = null;

    }

    this.length--;
    return this;
  
  }

  // Push to the front
  unshift(val) {
    
    let node = new Node(val);
    
    if(!this.head) {

      this.head = node;
      this.tail = node;
    
    } else {
    
      let temp = this.head;
      this.head = node;
      node.next = temp;
      temp.prev = node;
    
    }

    this.length++;
    return this;
  }

  // Take one off the front of the ll
  shift() {

    if(!this.head) return undefined; // Empty 

    let temp = this.head;

    if(this.length === 0) {

      this.head = null;
      this.tail = null;

    } else {

      this.head = temp.next; // temp is the new head - .next for shift
      this.head.prev = null;
      temp.next = null;

    }

    this.length--; //decrement
    return this;

  }

  // Insert
  insert(index, val) {

    if(index < 0 || index > this.length) return false // Can't do anything if the list is 0

    let node = new Node(val);

    // !! returns a boolean (if not NOT)
    if(index === 0) return !!this.unshift(node);
  
    // If we wanted to insert something at the first index, it's the same as unshift
  
    if (index === this.length) return !!this.push(node);

    let current = this.head;
    let counter = 0;

    while(counter !== index) {
      current = current.next; // Move down the chain
      counter++; // Increment the counter
    } // Current will be at the index we want it to be

    let temp = current;
    let prev = temp.prev;
    prev.next = node;
    node.next = temp;
    node.prev = prev;
    this.length++;
    return true;
  }

  // Remove at index
  remove(index) {

    if(index < 0 || index > this.length) { 
      return false;
    }
    if(index === 0) return !!this.shift();
    if(index === this.length - 1) return !!this.pop();

    let current = this.head;
    let counter = 0;

    while(counter !== index) {
      current = current.next;
      counter++;
    }

    let prev = current.prev;
    let next = current.next;
    // We have the two nodes on either side of current
    prev.next = next;
    next.prev = prev;
    this.length--;
    return true;

  }

  // Reverse Doubly Linked List
  reverse() {
    if(!this.head) return undefined;

    // Flip head & tail - still need to flip the next & prev of each node
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let counter = 0; // iterate all instances
    let prev = null;
    let next;

    /* Start from the head, if the node = the original, and if it now = this.head, we want to make it node.next, so it's one away from now and then node.prev is going to = next, so we're going to flip them, then we set was previous was to null & set prev to what the node was/is now & we move node to where next is & we increment our counter to put next where node is the next one & we start walking down as long as counter < this.length. */

    while(counter < this.length) {
      next = node.next; // The node is still at the original head, we need to change that
      node.prev = next // this was the head, but now it's gonna be previous (flipped)
      node.next = prev;
      prev = node;
      node = next;
      counter++;
    }
    return this;
  }


  // Print list data
  printListData() {
    let current = this.head;

    while(current) {
      console.log(current);
      current = current.next;
    }

  }

  printListarr() {
    let arr = [];
    let current = this.head;
    let counter = 0;

    while(counter < this.length) {
      arr.push(current.val);
      current = current.next;
      counter++;
    }
    console.log(arr);
  }


}

// Circular means: It is a number indicating which object it is referencing. next: Node circular with prev circular *1 means it is pointing to the value of 1.

let list = new DoublyLinkedList;
list.push(1);
list.push(2);
list.push(3);
list.reverse();
list.printListData();
list.printListarr();
// list.shift();
// list.pop();
// console.log(list)
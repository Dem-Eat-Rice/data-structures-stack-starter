// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

class Stack {
  constructor() {
    this.top = null;
    this.store = [];
    this.length = 0;
  }

  push(value){
    let node = new Node(value);
    this.store.push(node);
    this.length++;
    this.top = this.store[this.length -1];
    if(this.length > 1) {
      this.store[this.length-1].next = this.store[this.length-2];
    }
    return this.length;
  }

  pop() {
    if (this.length === 0) return null;
    let popNode = this.store.pop();
    this.length--;
    if (this.length === 1) {
      this.store[this.length -1].next = null;
    }
    this.top = this.store[this.length -1];
    return popNode;
  }

  size() {
    return this.length;
  }


}

exports.Node = Node;
exports.Stack = Stack;

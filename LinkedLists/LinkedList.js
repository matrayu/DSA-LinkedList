const LinkedListNode = require('./LinkedListNode')

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        this.size += 1;

        const newNode = newLinkedListNode(value, this.head);

        this.head = newNode;
        if (!this.tail) this.tail = newNode;
        return this
    }

    append(value) {
        this.size += 1;
        const newNode = new LinkedListNode(value);
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
          return this;
        };
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
      }

    fromArray(values) {
    values.forEach(value => this.append(value));
    return this;
    }

    toArray(useNodes = false) {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
        nodes.push(useNodes ? currentNode : currentNode.value);
        currentNode = currentNode.next;
    };
    return nodes;
    }
}

module.exports = LinkedList

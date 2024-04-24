
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  push(val) {
	let nodd = new Node(val);
	
	if (!this.head){
		this.head = nodd;
		this.tail = this.head;
	}else{
		this.tail.next = nodd;
		this.tail = nodd;
	}
  }

  unshift(val) {
	let nodd = new Node(val);
	
	if (!this.head){
		this.head = nodd;
	}else{
		nodd.next = this.head;
		this.head = nodd;
	}
	if (this.length === 0) this.tail = this.head;
	
	this.length += 1;
  }

  pop() {
	return this.removeAt(this.length - 1);
  }

  shift() {
	return this.removeAt(0);
  }

  getAt(idx) {
    return this._get(idx).val;
  }

  setAt(idx, val) {
    let kh = this._get(idx);
    kh.val = val;
  }

  insertAt(idx, val) {

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let prev = this._get(idx - 1);

    let nodd = new Node(val);
    nodd.next = prev.next;
    prev.next = nodd;

    this.length += 1;
  }

  removeAt(idx) {
    if (idx === 0) {
      let valuee = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return valuee;
    }

    let prev = this._get(idx - 1);

    if (idx === this.length - 1) {
      let valuee = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return valuee;
    }

    let valuee = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return valuee;
  }

  average() {
	if (this.length === 0) return 0;

    let ttl = 0;
    let cur = this.head;

    while (current) {
      ttl += cur.val;
      cur = cur.next;
    }

    return ttl / this.length;
  }
}

module.exports = LinkedList;

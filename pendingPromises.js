class PendingPromises {
	constructor() {
	  this.pending = new Map();
	}
  
	add(id, promise) {
	  this.pending.set(id, promise);
	}
  
	remove(id) {
	  this.pending.delete(id);
	}
  
	get(id) {
	  return this.pending.get(id);
	}
  
	getAll() {
	  return Array.from(this.pending.values());
	}
  
	getCount() {
	  return this.pending.size;
	}
  
	clearFromPending(id) {
	  this.remove(id);
	}
  
	getPendingPromises() {
	  return this.getAll().map(promise => ({
		executor: promise.executor.toString(),
		stack: promise.stack
	  }));
	}
  }
  
  module.exports = new PendingPromises();

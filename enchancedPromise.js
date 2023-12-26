class EnhancedPromise extends Promise {
	constructor(executor) {
		const id = Symbol();
		const wrappedExecutor = (resolve, reject) => {
		const wrappedResolve = () => {
			pendingPromises.remove(id);
			return resolve(...arguments);
		};
		const wrappedReject = () => {
			pendingPromises.remove(id);
			return reject(...arguments);
		};
		
		return executor(wrappedResolve, wrappedReject);
	};

		super(wrappedExecutor);

		pendingPromises.add(id, this);
		this.executor = executor;

		 // Измененный вывод стека вызова без информации об ошибке
		const captureStackTrace = {};
		Error.captureStackTrace(captureStackTrace, EnhancedPromise);
		const { stack } = captureStackTrace;
		const stackLines = stack.split('\n');
		const filteredStack = stackLines
			.filter(line => !line.includes('Error'));
	
		this.stack = ['', ...filteredStack].join('\n');
	}
}

const pendingPromises = {
	pending: new Map(),
	add(id, promise) {
		this.pending.set(id, promise);
	},
	remove(id) {
		this.pending.delete(id);
	},
	getAll() {
		return Array.from(this.pending.values());
	},
	getCount() {
		return this.pending.size;
	},
	getPendingPromises() {
		return this.getAll().map(promise => ({
			executor: promise.executor.toString(),
			stack: promise.stack
		}));
	}
};

module.exports = {
	EnhancedPromise,
	pendingPromises
};

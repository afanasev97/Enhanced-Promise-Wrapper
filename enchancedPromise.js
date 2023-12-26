const pendingPromises = require('./pendingPromises');

class EnhancedPromise extends Promise {
  constructor(executor) {
    const id = Symbol();
    const wrappedExecutor = (resolve, reject) => {
      const wrappedResolve = () => {
        pendingPromises.clearFromPending(id);
        return resolve(...arguments);
      };
      const wrappedReject = () => {
        pendingPromises.clearFromPending(id);
        return reject(...arguments);
      };
      
      return executor(wrappedResolve, wrappedReject);
    };

    super(wrappedExecutor);

    pendingPromises.add(id, this);
    this.executor = executor;

    Error.captureStackTrace(this, EnhancedPromise);
  }
}

module.exports = EnhancedPromise;

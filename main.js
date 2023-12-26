// const EnhancedPromise = require('./enchancedPromise');
globalThis.Promise = require('./enchancedPromise');
const pendingPromises = require('./pendingPromises');

// Пример использования

async function test() {
//   const pendingPromise1 = new EnhancedPromise(resolve => setTimeout(resolve, 3000));
//   const pendingPromise2 = new EnhancedPromise(resolve => setTimeout(resolve, 5000));
//   const pendingPromise3 = new EnhancedPromise(() => {});
  const pendingPromise1 = new Promise(resolve => setTimeout(resolve, 3000));
  const pendingPromise2 = new Promise(resolve => setTimeout(resolve, 5000));
  const pendingPromise3 = new Promise(() => {});

  console.log('Number of Pending Promises Before:', pendingPromises.getCount());
  console.log('Pending Promises Before:', pendingPromises.getPendingPromises());
  
  await Promise.all([pendingPromise1, pendingPromise2]);

  console.log('Number of Pending Promises After:', pendingPromises.getCount());
  console.log('Pending Promises After:');
  pendingPromises.getPendingPromises().forEach(({ executor, stack }) => {
    console.log(executor, stack);
  });
}

test();

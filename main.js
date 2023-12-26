const { EnhancedPromise, pendingPromises } = require('./enchancedPromise');
globalThis.Promise = EnhancedPromise;

function test(){
	// Создание промисов с расширенной функциональностью
	const pendingPromise1 = new Promise(resolve => setTimeout(resolve, 3000));
	const pendingPromise2 = new Promise(resolve => setTimeout(resolve, 5000));
	const pendingPromise3 = new Promise(() => {});
	
	console.log('Number of Pending Promises Before:', pendingPromises.getCount());
	console.log('Pending Promises Before:', pendingPromises.getPendingPromises());
	// Дожидаемся завершения промисов
	Promise.all([pendingPromise1, pendingPromise2]);
	
	console.log('Number of Pending Promises After:', pendingPromises.getCount());
	console.log('Pending Promises After:');
	pendingPromises.getPendingPromises().forEach(({ executor, stack }) => {
    	console.log(executor, stack);
		});
}

test();
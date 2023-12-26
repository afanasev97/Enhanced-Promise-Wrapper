const s = new Map();
let i = 0;

class P extends Promise {
	constructor(f) {
		const wrapF = (resolve, reject) => {
			const wrapresolve = () => {
				// console.log("resolve", this.f.toString());

				s.delete(this.n);

				return resolve(...arguments);
			};
			const wrapreject = () => {
				// console.log("reject", this.f.toString());

				s.delete(this.n);

				return reject(...arguments);
			};
			
			return f(wrapresolve, wrapreject);
		};

		super(wrapF);

		i++;

		this.n = i;

		s.set(this.n, this);

		this.f = f;

		// console.log("start", this.f.toString());
	}
}

global.Promise = P;

async function test() {
  const pendingPromise1 = new Promise((resolve) => setTimeout(resolve, 3000));
  const pendingPromise2 = new Promise((resolve) => setTimeout(resolve, 5000));
  const pendingPromise3 = new Promise((resolve) =>  { } );

  console.log('Pending Promises:', Array.from(s.values()).map(p => p.f.toString()));

  // Ждем завершения промисов
  await Promise.all([pendingPromise1, pendingPromise2]);

  console.log('Pending Promises:', Array.from(s.values()).map(p => p.f.toString()));
}

test();
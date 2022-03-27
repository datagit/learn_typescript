const GLOBAL_MY = {
  days: ['2022-01-01', '2022-01-02'],
  expiredDate: '2022-10-10',
};

const returnOrigiObject = () => {
  return GLOBAL_MY;
}

let r = returnOrigiObject();
r.days = ['returnOrigiObject'];
console.log(GLOBAL_MY); // { days: [ 'returnOrigiObject' ], expiredDate: '2022-10-10' }

//
const getXWithReferrenceParams = (my: {days: Array<string>, expiredDate: string, }) => {
  my.days = ['getXWithReferrenceParams'];
}

// getXWithReferrenceParams(GLOBAL_MY);
// console.log(GLOBAL_MY); // { days: [ 'getXWithReferrenceParams' ], expiredDate: '2022-10-10' }

getXWithReferrenceParams({...GLOBAL_MY});
console.log(GLOBAL_MY); // { days: [ 'returnOrigiObject' ], expiredDate: '2022-10-10' }
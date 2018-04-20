// code here! :)

// 1a. - Done, ok
function five(){ return 5; }
// 1b. - Done, ok
function seven(){ return 7; }
// 2. - Done, ok
function add(num1,num2){ return num1 + num2; }
// 3. - Done, ok
function add2(fn1,fn2){ return add( fn1(), fn2() ); }

// 4. - Done, ok
function makeASpitterFn(value){
  return function(){ return value; }
}

// 5a. - Done, ok
function addnLoop(fnsArray){
  const result = fnsArray[0](); // result will be a value first
  for(let i=1;i<fnsArray.length;i++){
    // add2 takes 2 functions, and returns 1 value
    // result is a value, so make it a function using spitter
    // the result of calling makeASpitterFn with result is a fn
    // that will output result as a value when called
    // fnsArray is a function
    result = add2(makeASpitterFn(result),fnsArray[i]);
  }
  return result; // a value
}

// 5b. - Done, ok
function addNRecur([fn1,fn2,...fnRest]){
    if (fnRest === 0) { return add2(fn1, fn2); }
    return addNRecur([
                    function(){ return add2(fn1, fn2); } ,
                    ...fns
                  ]);
}

// 5c. - Done, ok
function addResultsOfFns(holder,next,index,array){
  return function(){
    return add2(holder,next);
  };
}

function addn(arrOfFns,callback){
  // dog balls added since we are returning a function from reduce
  // that when invoked as here with the (), returns the result of add2()
  // the first arg to add2 is a nest of functions with the first and second
  // fns  of the array inside add2  at its core - add2(add2(fn1, fn2),fn3) etc.
  return arrOfFns.reduce(callback)();
}

// 6. - Done, ok
function notADuplicate(item,index,array){
  // if (index === array.indexOf(item)) return true;
  //return false;
  const restOfArray = array.slice(index+1);
  return !(restOfArray.includes(item));
}

function reduceNotADuplicate(prev,curr,index,array){
  if (prev.includes(curr)) return prev;
  return prev.concat(curr);
}

// 7. - Done, ok
function isEven(value){
  return (value % 2 === 0);
}

// 8a + 8b. - Done, ok
const array1 = [1,2,3,4,5,5,5,6,6,7,8,9,9];
const setOfArray1 = array1.filter(notADuplicate)
                        //.reduce(reduceNotADuplicate,[])
                          .filter(isEven)
                          .map(makeASpitterFn)
                          .reduce(addResultsOfFns);
















End of Exercises

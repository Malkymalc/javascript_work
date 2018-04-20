// const grid = [[1,2,3,5,4,8,9,6,7]];
// const newArray = [];

//===================  Get Num That Fits  ===========================//

function numsIn(arr){
  return arr.slice();
}

function numsAbove(parentGrid, newArray){
  const xIndex = newArray.length;
  const result =  parentGrid.map(row => row[xIndex]);
  // console.log(`Parent grid is`);
  // console.log(parentGrid)
  // console.log(`New array is ${newArray}`);
  // console.log(`Nums above are ${result}`);
  return result;
}

function numsInSquare(parentGrid, newArray){
  const xIndex = newArray.length;
  const yIndex = parentGrid.length;
  const numsBehind = newArray.slice((xIndex - xIndex%3), xIndex);
   const numsHigher = parentGrid.slice((yIndex - yIndex%3), yIndex)
                               .reduce((arr, row) => {
                                 let start = (xIndex - xIndex%3);
                                 let aboveSlice = row.slice(start, start+3);
                                 return arr.concat(aboveSlice);
                               },[]);

  const result = numsBehind.concat(numsHigher);
  // console.log(`Nums in square are ${result}`);
  return result;
}

function get1To9(){
  return [1,2,3,4,5,6,7,8,9];
}

function randElemFrom(arr){
  const randIndex = Math.ceil(Math.random() * arr.length-1);
  return arr[randIndex];
}


function numThatFits(parentGrid,newArray){
  const numsAboveArr = numsAbove(parentGrid, newArray);
  const numsInSquareArr = numsInSquare(parentGrid, newArray);
  const excludeList = [].concat(
    numsIn(newArray),numsAboveArr,numsInSquareArr
    );
  // console.log(`excludeList is ${excludeList}`);
  const options = get1To9().filter(num => !excludeList.includes(num));
  return randElemFrom(options);
}

function addNumThatFits(parentGrid, newArray){
  return newArray.push(numThatFits(parentGrid.slice(), newArray.slice()));
}

//===================  Get Row That Fits  ===========================//

function makeRowThatFits(parentGrid){
  const rowThatFits =[];
  for (i=1; i<=9; i++) {
    addNumThatFits(parentGrid, rowThatFits);
  }
  return rowThatFits;
}


//=================  Get Starting Row   ====================//
const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
     }
   }
 }

 permute(inputArr)
 return result;
}


const oneToNine = [1,2,3,4,5,6,7,8,9];
const permutations = permutator(oneToNine);


function getPermutation(){
  const permutationNum = Math.ceil(Math.random() * 362879);
  return permutations[permutationNum];
}

//==========================  Make Grid  ====================//


function makeGrid(){
  const parentGrid = [];
  parentGrid.push(getPermutation());
    let i = 1;
  while (parentGrid.length < 9) {
    let newRow = makeRowThatFits(parentGrid);
    // var timeoutKey = setTimeout(() => makeGrid(), 50);
    if ( !newRow.includes(undefined) ) {
      parentGrid.push(newRow)
    } else {
      attempt(makeRowThatFits(),10,[undefinded]);
    }
   }
  return parentGrid;
}

function attempt(fn, times, test, fallback){

}


//=============================================================//

function makeLotsOfGrids(){
  let lotsOfGrids = [];
let i = 1;
  while(lotsOfGrids.length < 50){
    lotsOfGrids.push(makeGrid());
    console.log(`Grid number ${i}`);
    i++;
  }
  return lotsOfGrids;
}

console.time("get 50 grids");
console.log(makeLotsOfGrids());
console.timeEnd("get 50 grids");

















//

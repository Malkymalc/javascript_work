//========= [DONE] Get Permutations of [1,2,3,4,5,6,7,8,9] =========//

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

// const gridPermutations = permutator(permutations);


//=======  [DONE] Generate Grid from Random Permutation Arrays  ======//

function getPermutation(){
  const permutationNum = Math.ceil(Math.random() * 362879);
  return permutations[permutationNum];
}

// Make yeild a grid with ok rows and columns?
function gridGen(){
  const grid = [];

  for (let i = 1; i<=9; i++){
    let arr = getPermutation().slice();
    if ( arr.every((cell, index) => cell !== grid[0]/*another for each*/[index]) ) grid.push(arr);
  }
  return grid;
}

//================== [DONE] Test Individual Arrays ===================//

function containsOneThruNine(arr){
  return arr.length == 9 && arr.sort()
                               .every((num, i) => num == i+1);
}

//================== [DONE] Get Column / Square  ====================//
function getColumn(grid, columnIndex){
  return grid.reduce((prev,curr) => {
    return prev.concat(curr[columnIndex-1]);
  },[]);
}

function getSquare(grid, squareNumber){
  const y = (Math.ceil(squareNumber / 3) - 1) * 3;
  const x = squareNumber % 3 == 0 ? 6: ((squareNumber % 3) - 1) * 3;
  return [].concat( grid[y].slice(x,x+3),
                    grid[y+1].slice(x,x+3),
                    grid[y+2].slice(x,x+3)
                  );
}


//===================  [DONE] Test Columns / Squares  ==============//
function testColumns(grid){
  for (let i = 1; i<=9; i++){
    let column = getColumn(grid,i);
    if(!containsOneThruNine(column)) return false;
  }
  return true;
}

function testSquares(grid){
  for (let i = 1; i<=9; i++){
    let square = getSquare(grid,i);
    if(!containsOneThruNine(square)) return false;
  }
  return true;
}

//==========================  [DONE] Test Grid  ====================//

function testGrid(grid){
    return !testColumns(grid) ? false
    : !testSquares(grid) ? false
    : true;
}

//===============  [DONE] Generate 100 Suitable Grids  ===========//

function getSomeGrids(){
  const suitableGrids = [];
  let countNumber = 0;
  while (suitableGrids.length < 2) {
      countNumber += 1;
      console.log(`testing grid ${countNumber}`);
      let grid = gridGen();
      if (testGrid(grid)) {
        suitableGrids.push(grid);
        console.log(`Now at ${suitableGrids.length} grids found`);
      }
  }
  return suitableGrids;
}

console.log(permutations);

//

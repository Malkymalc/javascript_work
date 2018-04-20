`To do:

================== MVP ==================
[1.DONE] Add methods to move robot around mars - removeCurrent() and addNew().
[2.DONE] Configure fallOfEdgeGiven() 'if' statements.
[3.DONE] Create addScent() method on mars.
[4.STARTED] Test Constructors and methods incrementally in repl.it.

=============== EXTENSION ===============
[5.DONE] Work some on interface - game logic and basic HTML and DOM interaction.
6. Work on interface - Render a grid?

======= IF HAVE TIME =======
[7. DONE] Work on interface - CSS.
`

// ============= ROBOT============== //

const Robot = function(name, position){
    this.alive = true;
    this.name = name;
    this.position = {
      location: [position[0],position[1]],
      orientation: position[2]
    };
    this.compass = ['N','E','S','W'];
    this.audience = document.getElementById('messageBar');
}

// 1
Robot.prototype.runInstructions = function(instructionString) {
  console.log('1 in run instructions');
  const instArr = this.splitInstructions(instructionString);
  let counter = 1;
  instArr.forEach(instruction => {
    console.log('******* MOVE ' + counter + '. INSTRUCTION: ' + instruction + ' *******');
    counter += 1;
    if (this.alive) this.move(instruction)
  });
  if (this.alive) { this.talk() };
}
// 1.1
Robot.prototype.splitInstructions = function(instructionString) {
    console.log('1.1 in split instructions');
  return  instructionString.split('');
}
// 1.2
Robot.prototype.move = function(singleInstruction) {
    console.log('1.2 IN MOVE');
    console.log('orientation is ' + this.position.orientation);
    console.log('POSITION IS X:' + this.position.location[0] + 'Y: ' + this.position.location[1]);
    switch(singleInstruction) {
      case 'L':
        this.rotateLeft();
        break;
      case 'R':
        this.rotateRight();
        break;
      case 'F':
        this.moveForward();
        break;
      default:
        this.talk(`instruction ${inst} is not known.`);
    }
}

//1.2.1
Robot.prototype.rotateLeft = function() {
    console.log('1.2.1 in rotateLeft');
    console.log('--> TURNING LEFT');
  let orientationIndex = this.compass.indexOf(this.position.orientation);
  if (orientationIndex !== 0) {
    this.position.orientation = this.compass[orientationIndex-1];
  } else{
    this.position.orientation = this.compass[3];
  }
}
//1.2.2
Robot.prototype.rotateRight = function() {
  console.log('1.2.1 in rotateRight');
  console.log('--> TURNING RIGHT');
  let orientationIndex = this.compass.indexOf(this.position.orientation);
  if (orientationIndex !== 3) {
    this.position.orientation = this.compass[orientationIndex+1];
  } else{
    this.position.orientation = this.compass[0];
  }
}
//1.2.3
 Robot.prototype.moveForward = function(){
  console.log('1.2.1 in moveForward');
  const loc = this.position.location;
  const orient = this.position.orientation;
  if (this.scentAhead(loc,orient)) {
    this.talk("no way, Jose!");
    console.log("no way, Jose!");
    return;
  }
  else if(this.fallOffEdgeGiven(loc,orient)) {
      this.leaveScent(loc);
      this.talk('ohDear');
      mars.deleteRobot(this.robotsName,loc[0],loc[1]);
      this.alive = false;
      return;
  } else {
      mars.deleteRobot(this.robotName,loc[0],loc[1]);
      this.step(orient);
      const locNew = this.position.location;
      mars.addRobot(this.robotName, locNew[0], locNew[1]);
  }
}
//1.2.x.1
Robot.prototype.fallOffEdgeGiven = function(loc,orient) {
  console.log('1.2.x.1 checking if fall Of Edge');
  const xCoord = loc[0];
  const yCoord = loc[1];
  const map = mars.getMap();
  const planetXEdge = (map.length) - 1;
  console.log('planet X edge is: ' + planetXEdge);
  const planetYEdge = (map[0].length) - 1;
  console.log('planet Y edge is: ' + planetYEdge);
  if (xCoord == 0 && orient == 'W') {return true;}
  if (xCoord == planetXEdge && orient == 'E') {return true;}
  if (yCoord == 0 && orient == 'S') {return true;}
  if (yCoord == planetYEdge && orient == 'N') {return true;}
  return false;
}

//TODO: Write logic for this
Robot.prototype.scentAhead = function(loc,orient) {
  console.log('1.2.x.1 checking if scent ahead');
  let xCoord = loc[0];
  let yCoord = loc[1];
  const map = mars.getMap();
  console.log(map);
  if (orient === 'E') { xCoord += 1;};
  if (orient === 'W') { xCoord -= 1;};
  if (orient === 'N') { yCoord += 1;};
  if (orient === 'S') { yCoord -= 1;};
  console.log(xCoord);
  console.log(yCoord);
  const stepAhead = (map[xCoord][yCoord] == undefined) ? false : map[xCoord][yCoord];
  if (stepAhead && stepAhead.scent) {return true;}
  return false;
}

//1.2.x.2
Robot.prototype.leaveScent = function(loc){
  console.log('LEAVING SCENT');
  mars.addScent(loc[0],loc[1]);
}

//1.2.x.3
Robot.prototype.talk = function(words){
  console.log('1.2.x.3 talking');
  if (words == undefined) {
    this.audience.innerHTML = `My final grid position is:
      X: ${this.position.location[0]}
      Y: ${this.position.location[1]}
      Orientation: ${this.position.orientation}
      `;
  } else {
    this.audience.innerHTML = words;
  }
}

Robot.prototype.step = function(orientation){
  console.log('1.2.x.3 stepping');
  console.log('orientation passed in is ' + orientation);
  console.log('orientation of robot is ' + this.position.orientation);
  console.log('POSITION IS X:' + this.position.location[0] + 'Y: ' + this.position.location[1]);
  if (orientation === 'E') {
    this.position.location[0] += 1;
    console.log('--> MOVING EAST');
  };
  if (orientation === 'W') {
    this.position.location[0] -= 1;
    console.log('--> MOVING WEST');
  };
  if (orientation === 'N') {
    this.position.location[1] += 1;
    console.log('--> MOVING NORTH');
  };
  if (orientation === 'S') {
    this.position.location[1] -= 1;
    console.log('--> MOVING SOUTH');
  };
  console.log('orientation now is ' + this.position.orientation);
  console.log('POSITION  NOW IS X:' + this.position.location[0] + 'Y: ' + this.position.location[1]);
}

// ============= MARS ============== //

const Mars = function(){
  this.marsMap = [[{}]];
}

Mars.prototype.makeMars = function(xLength,yLength) {
  const columnMaker = () => {
    const cellMaker = () => {
      return {scent: false, robots: []};
    }
  const column = Array.from({length: 4},cellMaker);
  return column;
  }
  const grid = Array.from({length: 6}, columnMaker);
  this.marsMap = grid;
}

Mars.prototype.getMap = function() {
  return this.marsMap;
}

Mars.prototype.addRobot = function(robotName,x,y) {
  // console.log('robot is ' + robotName + ' at ' + x + y);
  // console.log(this.getMap());
  // console.log(this.marsMap[x][y]);
  const robotArray = this.marsMap[x][y].robots;
  robotArray.push(robotName);
}

Mars.prototype.deleteRobot = function(robotName,x,y) {
  const map = this.marsMap;
  console.log(map);
  console.log(x);
  console.log(y);
  console.log(map[x][y]);
  map[x][y].robots.filter(robotName => robotName !== robotName);
}

Mars.prototype.addScent = function(x,y) {
  console.log('***** leaving scent with arguments x: ' + x + 'and y: ' + y);
  console.log(x);
  console.log(y);
  console.log(this.marsMap);
  this.marsMap[x][y].scent = true;
  // map[x][y] = {scent:true,robots:[]};
  console.log('The map now is:')
  console.log(this.marsMap);
}

// ============= INSTRUCTIONS ============== //

const InstructionList = function(){
  this.instructions = {
    a: {
      xLength:5,
      yLength: 3,
      robotStart: [1, 1, 'E'],
      robotInstructions: "RFRFRFRF"
    },
    b: {
      xLength: 5,
      yLength: 3,
      robotStart: [3, 2, 'N'],
      robotInstructions: "FRRFLLFFRRFLL"
    },
    c: {
      xLength: 5,
      yLength: 3,
      robotStart: [0, 3, 'W'],
      robotInstructions: "LLFFFLFLFL"
    }
  }
}
InstructionList.prototype.getInstruction = function(instructionKey){
  return this.instructions[instructionKey];
}
InstructionList.prototype.addInstructions = function(name, instructionsObj){
  this.instructions[name] = instructionsObj;
}
// ============= STATE ============== //

const instructionList = new InstructionList();
const mars = new Mars();
mars.makeMars(5, 3);
// ============= INTERFACE ============== //

document.addEventListener("DOMContentLoaded", function() {
  const messageBar1 = document.getElementById('messageBar');
  messageBar1.innerHtml = "This is a test!"
  const run = document.getElementById('run');
  run.addEventListener('click', function(){
    // Get Instuctions from instructions obj, based on user selection
    const instructionKey = document.getElementById('select-scenario').value;
    const instruction = instructionList.getInstruction(instructionKey);
    // Add mars map from instructions, based on user selection
    const xLength = instruction.xLength;
    const yLength = instruction.yLength;
    // Make new Robot - pass in name, and position on planet, place on planet
    const robotStartPosition = instruction.robotStart;
    const robot = new Robot('bob', robotStartPosition);
  console.log(mars.getMap());
    // mars.addRobot(robot.name, robotStartPosition[0],robotStartPosition[1]);
  console.log(mars.getMap());
    // Give robot it's instructions
    const robotInstructions = instruction.robotInstructions;
    robot.runInstructions(robotInstructions);
  });

});

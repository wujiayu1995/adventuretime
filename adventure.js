//Define the size of the game play area
var maxX = 5
var maxY = 5
//user starts at x0, y0 (bottom left of board)

var userX = 0
var userY = 0

//Hide the treasure, also with X Y values
var treasureX = 2
var treasureY = 1





//flag that controls loop

var treasureFound = false

//get users name
var name = prompt ("You are here! So tell me what are you called?")

while (!treasureFound)
    {var direction = prompt ("which direction would you like to go in?(north, south, east, west)")
    console.log(direction)
     
     //tmp vars, only used for checking validity of new user location after move
     var newX
     var newY
     
     // see what new user location should be
     //check if new user location is valid 
     // check if new user location is treasure
     
     
  if (direction == "north") {
    newX = userX
    newY = userY + 1
      // neither value < 0, neitheris > max
      if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX
        userY = newY  
      } else { alert ('Try another time!');
        console.log("There is a forbiding moutain range in that direction, you cannot go")
    }
      
     window.alert("It seems like it won't work.....") 
    
      
      
  } else if (direction == "east") {
    newX = userX + 1
    newY = userY
      // neither value < 0, neitheris > max
      if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX
        userY = newY
      } else {
        console.log("There is a forbiding moutain range in that direction, you cannot go")
    }
      window.alert("It seems like it won't work.....") 
      
      
      
      
  } else if (direction == "south") {
    newX = userX 
    newY = userY - 1
      // neither value < 0, neitheris > max
      if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX
        userY = newY
      } else { 
        console.log("There is a forbiding moutain range in that direction, you cannot go")
      }
      
      window.alert("OMG " + name +"you found it!");
     

      window.location.href = "win.html";
    
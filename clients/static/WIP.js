//failed attempts

//trumpman can move up if scoreboard is entered into middle of arena
              if([trumpman.y-1][trumpman.x] == [10][15]){
                trumpman.y--;
                world[trumpman.y][trumpman.x] = 0;
                console.log(trumpman.x)
              }
              console.log(trumpman.x)


//trumpman can move automatically once button is pressed but while loop calculates faster than setTimeout trumpman.x--
              while(world[trumpman.y][trumpman.x - 1] != 1 && world[trumpman.y][trumpman.x - 1] != 8)
              setTimeout(() => trumpman.x--,300); 
              console.log(trumpman.x);
              drawTrumpman();
              mapLevel();

              //event listener
              window.addEventListener("online",onFunction);


//setInterval
function onFunction() {setInterval((roamHilly) => hillary.y--,1500);
}

              ///trumpman faces the direction you pressed


      function drawTrumpman(){

        if(direction == 'trumpman'){
          document.getElementById(direction).style.left = trumpman.x *  4 + 'vw'
          document.getElementById(direction).style.top = trumpman.y * 5 + 'vh'}
        else {
          document.getElementById("trumpman").setAttribute('id',direction)
          console.log(document.getElementById("trumpmanR"))
          document.getElementById(direction).style.left = trumpman.x *  4 + 'vw'
          document.getElementById("trumpman").style.top = trumpman.y *  5 + 'vh'
        }}


//Investigate what this does
        parseInt(sprite.style.left) + hillary.x + 'vw';



        //old Hilly move
        async function spriteHilly() {
          drawHillary();
          for(var i = 0; i< 100; i++){
            if(hillary.direction == "down") {
              await sleep(200);
              hillary.y++;
              drawHillary();
              if(i%20 == 5){hillary.direction = 'right'};
              console.log(hillary.direction, hillary.y)
            }
            if(hillary.direction == 'right'){
              await sleep(200);
                hillary.x++;
                drawHillary();
              if(i%20==8){hillary.direction = 'up'};
            }
            if(hillary.direction == 'up'){
              await sleep(200);
                hillary.y--;
                drawHillary();
              if(i%20==13){hillary.direction = 'left'};
            }
            if(hillary.direction == 'left'){
              await sleep(200);
                hillary.x--;
                drawHillary();
              if(i%20==16){hillary.direction = 'down'};
            }
          }
        }


        //a type of working loop around for bottom left corner of main trump man page
        async function spriteArnie() {
          while(world[arnold.y][arnold.x] != world[trumpman.y][trumpman.x]){
          while(arnold.direction == "down" && j < 6){
            drawArnold();
              await sleep(300);
              arnold.y++;
              drawArnold();
              j++;
              if(j == 6){
                arnold.direction = "right"; 
                j = 0;
              }
          }
          while(arnold.direction == "right" && j < 4){
              // console.log(arnold.direction, arnold.x)
              await sleep(300);
                arnold.x++;
                drawArnold();
                j++
              if(j == 3){arnold.direction = 'up'; j = 0};
            }
          while(arnold.direction == 'up' && j < 7){
            // console.log(arnold.direction, arnold.x)
              await sleep(300);
                arnold.y--;
                drawArnold();
                j++;
              if(j == 6){arnold.direction = 'left'; j = 0};
            }
            while(arnold.direction == 'left' && j < 3){
              await sleep(300);
                arnold.x--;
                drawArnold();
                j++;
              if(j==3){arnold.direction = 'down'; j = 0};
            }
          }
        }     



        //Ghost AI Beacons
        var hBeacon = { x:0, y:0}; 
        var beBeacon = { x:0, y:20}; 
        var baBeacon = { x:20, y:0}; 
        var ABeacon = { x:25, y:0};//beacons for ghosts in scatter mode
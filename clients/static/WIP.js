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
              setTimeout(() => trumpman.x--,300); console.log(trumpman.x);
              drawTrumpman();
              mapLevel();
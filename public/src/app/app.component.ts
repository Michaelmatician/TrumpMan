import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'public';

  world = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,1],
    [1,2,8,8,8,2,8,8,8,2,8,0,8,2,8,0,0,0,8,2,8,8,8,2,1],
    [1,2,0,8,0,2,8,6,8,2,8,0,8,2,8,8,0,8,8,2,8,6,8,2,1],
    [1,2,0,8,0,2,8,8,8,2,8,0,8,2,8,0,8,0,8,2,8,8,8,2,1],
    [1,2,0,8,0,2,8,8,0,2,8,0,8,2,8,0,3,0,8,2,8,2,2,2,1],
    [1,2,0,8,0,2,8,3,8,2,8,8,8,2,8,0,0,0,8,2,8,2,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,2,1,1,1,2,1,4,5,4,1,2,1,1,1,2,1,1,1,1,1],
    [0,0,0,0,0,2,2,2,2,2,1,0,0,0,1,2,2,2,2,2,0,0,0,0,0],
    [1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1],
    [1,3,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,3,1],
    [1,2,1,1,2,8,0,0,0,8,2,2,8,2,2,8,0,0,0,8,2,1,1,2,1],
    [1,2,1,1,2,8,8,0,8,8,2,8,6,8,2,8,8,0,0,8,2,1,1,2,1],
    [1,2,1,1,2,8,0,8,0,8,2,8,8,8,2,8,0,8,0,8,2,1,1,2,1],
    [1,2,1,1,2,8,0,0,0,8,2,8,3,8,2,8,0,0,8,8,2,1,1,2,1],
    [1,2,1,1,2,8,0,0,0,8,2,8,2,8,2,8,0,0,0,8,2,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];

  worldDict = {//map graphics
    0: 'empty',
    1: 'brick',
    2: 'snowflake',
    3: 'coin',
    4: 'ghostLid',
    5: 'ghostGate',
    6: 'burningmoney',
    7: 'scorebox',
    8: 'letters',
    9: 'score'};

  ngOnInit(){
    this.mapLevel()
  }


  mapLevel(){//maps the game using the array and 'graphics' from the dictionary
    var output = '';
    for (var i = 0; i< this.world.length; i++){
      output += "<div class = 'row'>";
      for(var j= 0; j< this.world[i].length; j++){
        output += "<div class = '" + this.worldDict[this.world[i][j]] + "'></div>";}
        output += "</div>";// console.log(output);
      };
    document.getElementById('world').innerHTML = output;
  }

}

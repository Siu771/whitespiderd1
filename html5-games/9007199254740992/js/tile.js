function Tile(t,e){this.x=t.x,this.y=t.y,this.value=e||2,this.previousPosition=null,this.mergedFrom=null}Tile.prototype.savePosition=function(){this.previousPosition={x:this.x,y:this.y}},Tile.prototype.updatePosition=function(t){this.x=t.x,this.y=t.y}

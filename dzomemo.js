let b1;

function setup() {
  createCanvas(1024,512);
  b1=new Board();
}

function draw() {
  background(240)
  b1.squarise();
  b1.drawy();
}
class Board{
  constructor(){
 　 this.tilePressed=false,
 　　 this.board=[],
  　　this.x=1,this.y=1,this.dx=width,this.dy=height,this.cx=16,this.cy=16;
    for (let n=0;n<256;n++){
      this.board.push(0);
    }
  }
  setup(x,y,dx,dy,cx,cy){
    this.x=x;
    this.y=y;
    this.dx=x+dx-1;
    this.dy=y+dy-1;
    this.cx=cx;
    this.cy=cy;
    board=[];
    for (let n=0;n<cx*cy;n++){
      board.push(0.0);
    }
  }
  drawy(){
    let fx=(float)(this.dx-this.x+1)/this.cx;
    let fy=(float)(this.dy-this.y+1)/this.cy;
    let bx=floor((mouseX-this.x)/fx);
    let by=floor((mouseY-this.y)/fy);
    let bn=by*this.cx+bx;
    if(this.x<=mouseX&&mouseX<=this.dx&&this.y<=mouseY&&mouseY<=this.dy){
      fill(128);
      noStroke();
      rect(bx*fx+this.x,by*fy+this.y,fx,fy);
      if(mouseIsPressed){
        if(!this.tilePressed){
          this.board[bn]=1;
          this.tilePressed=true;
        }
      }else{
        this.tilePressed=false;
      }
    }
    {
      let n=0;
      for(let ny=0;ny<this.cy;ny++){
        for(let nx=0;nx<this.cx;nx++){
          if(this.board[n]==1){
            noStroke();
            rect(floor(nx*fx+this.x),floor(ny*fy+this.y),fx,fy);
          }
          n++;
        }
      }
    }
    stroke(0);
    line(this.x,this.y,this.dx,this.y);
    line(this.x,this.y,this.x,this.dy);
    for(let n=1;n<this.cx;n++){
      let gx=floor(fx*n+this.x);
      line(gx,this.y,gx,this.dy);
    }
    for(let n=1;n<this.cy;n++){
      let gy=floor(fy*n+this.y);
      line(this.x,gy,this.dx,gy);
    }
    line(this.x,this.dy,this.dx,this.dy);
    line(this.dx,this.y,this.dx,this.dy);
  }
  squarise(){
    if(this.dx>this.dy){
      this.dx=(this.dy-this.y+1)/this.cy*this.cx+this.x-1;
    }else{
      this.dy=(this.dx-this.x+1)/this.cx*this.cy+this.y-1;
    }
  }
}

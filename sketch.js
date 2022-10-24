function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
 
  rectMode(CENTER)//設定方框的座標點為中心點
  noFill()//不充滿顏色
  //stroke(255)
 
  background(0)
  for(var j=0;j<int(height/(49));j++)
		{
  for(var i=0;i<int(width/(48));i++)
      {
	stroke(	"#FFAAD5")
	ellipse(25+(i*50),25+(j*50),50+(mouseX+mouseY)/100)
	stroke("#46A3FF")
  rect(25+(i*50),25+(j*50),50+(mouseX+mouseY)/10)
	stroke(	"#B15BFF")
  ellipse(50+(i*50),50+(j*50),20+(mouseX+mouseY)/50)
	    }
	  }		
	}
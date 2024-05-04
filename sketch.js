//2023
function preload(){
//jan 02, 7 
  song = loadSound("missedcalls.mp3")
//Jan 05, 9 
//Jan 06, 3
  playing = false  
  song.onended(() => {playing = false;
  document.getElementById("audio").innerText = "Play"; a = 0})
//Jan 12, 2
//Jan 13, 6
  fr = 60 
//Jan 30, 4  
}

function setup() {
//Feb 21, 13  
  createCanvas(500, 500);
//Mar 14, 5
  layer = createGraphics(width, height)
  
//Mar 28, 5
  fft = new p5.FFT(0, 256);
  
//Mar 30, 24  
  a = 360/((song.duration()) * fr)
//Apr 15, 3  
  b = a
//Apr 24, 3
  frameRate(fr)

}

function draw() {
//May 07, 5  
  
  background('white');
//May 22, 2  
  layer.noFill()
//May 27, 3  
  layer.colorMode(RGB)
//June 08, 4  
  
  var spectrumA = fft.analyze()
//June 16, 4  
  var spectrumB = spectrumA.reverse()
//June 20, 8
  spectrumB.splice(0, 40)
//June 27, 3  
  
  push()
//July 04, 3  
  translate(250, 250)
//July 10, 5
  noFill()
//July 20, 3
  stroke('black')
//July 25, 1  
  
  beginShape()
//Aug 04, 3  
    
    for(let i = 0; i < spectrumB.length; i++){
//Aug 18, 3      
      var amp = spectrumB[i]
//Aug 30, 13
      var x = map(amp, 0, 256, -2, 2)
//Sep 01, 8      
      var y = map(i, 0, spectrumB.length, 30, 315)
//Sep 07, 5      
      
      vertex(x, y)
//Sep 08, 1      
    }
  endShape()
//Sep 13, 7
  
  pop()
//Oct 01, 7
  
  push()
//Oct 02, 5
    
    translate(width/2, height/2)
//Oct 03, 2
    rotate(radians(a))
//Oct 05, 1  
  
    layer.push()
//Oct 11, 1
      layer.translate(width/2, height/2)
//Oct 12, 3
      layer.rotate(radians(-a))
//Oct 13, 1
      
      for(let i = 0; i < spectrumB.length; i++){
//Oct 19, 4
      
      layer.strokeWeight(0.010 * spectrumB[i])
//Oct 24, 2        
      layer.stroke('black',0,0 + spectrumB[i], spectrumB[i]/8)
//Oct 29, 2
      layer.line(0, i, 0, i)
//Oct 30, 1
    }
  
    layer.pop()
//Nov 05, 4  
    
    image(layer, -width/2, -height/2)
//Nov 08, 10
  pop()
//Nov 13, 7  
  if(playing)a += b
  
}

function toggleAudio(){
//Nov 15, 3 
  if(!playing){
//Nov 25, 5    
    song.play()
//Nov 26, 4    
    console.log("playing")
//Nov 27, 5    
    document.getElementById("audio").innerText = "Pause"
//Nov 28, 1    
  }
  else{
//Dec 04, 3    
    song.pause()
//Dec 11, 2    
    console.log("pasued")
//Dec 16, 4    
    document.getElementById("audio").innerText = "Play"
  }
  
  playing = !playing
//Please leave your message after the tone.  
}

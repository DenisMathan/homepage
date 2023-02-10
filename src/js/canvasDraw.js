let canvas, ctx, anim, cancelAnimTimeout, pos; 
let drawpoints = [];
let te = [{date:100, t:'t'},{date:20, t:'t'},{date:40, t:'t'},{date:200, t:'t'},{date:2500, t:'t'},{date:70, t:'t'}];
let interval;
let animationFrame;
let initCanvas = (element)=>{
    canvas = element;
    canvas.width = element.clientWidth;
    canvas.height = element.clientHeight;
    ctx = canvas.getContext("2d");
    window.addEventListener('mousemove', getPosition);
    window.addEventListener('resize', resize)
    document.addEventListener('mouseleave', cancelAnim);
    updateSmoke()
    //interval = requestAnimationFrame(updateSmoke)

};

let smoke = [];
let maxSmoke = 50;

let particles = [];
let particleCount = 20;
let maxParticles = 10000;

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < smoke.length; i++) {
    smoke[i].x += smoke[i].dx;
    smoke[i].y += smoke[i].dy;
    smoke[i].radius *= 0.96;
    smoke[i].alpha *= 0.96;
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, 1)`// ${smoke[i].alpha})`;
    ctx.arc(smoke[i].x, smoke[i].y, smoke[i].radius, 0, Math.PI * 2);
    ctx.fill();
  }

  while (smoke.length > maxSmoke) {
    smoke.shift();
  }
};
const updateSmoke = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length -1; i >= 0; i--) {
      particles[i].x -= particles[i].dx;
      particles[i].y -= particles[i].dy;
      particles[i].dx *= 0.96;
      particles[i].dy *= 0.96;
      particles[i].alpha *= 0.96;
      
    if(particles[i].alpha < 0.1) {
        particles.splice(0, i + 1);
        break;
    }
      ctx.beginPath();
      ctx.fillStyle = `rgba(0, 255, 188,  ${particles[i].alpha})`;
      ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, Math.PI * 2);
      ctx.fill();
    }
  
    while (particles.length > maxParticles) {
      particles.shift();
    }
    animationFrame = requestAnimationFrame(updateSmoke)
  };

  const addParticles = (x, y) => {
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: x,
        y: y,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 1,
        alpha: 1,
      });
    }
  };
/* const addSmoke = (x, y) => {
    smoke.push({
      x: x,
      y: y,
      dx: (Math.random() - 0.5) * 10,
      dy: (Math.random() - 0.5) * 10,
      radius: 30,
      alpha: 1,
    });
  }; */

  const addSmoke = (x, y) => {
    smoke.push({
      x: x,
      y: y,
      dx: (Math.random() - 0.5) * 10,
      dy: (Math.random() - 0.5) * 10,
      radius: 30 + Math.random() * 50,
      alpha: 1,
    });
  };

  
let resize = ()=>{
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}
let cancelAnim = ()=>{
    cancelAnimTimeout = setTimeout(()=>{
        window.cancelAnimationFrame(anim);
        anim = undefined;
        cancelAnimTimeout = undefined;
    },1010)
}
let getPosition = (e)=>{
    if(cancelAnimTimeout){
        clearTimeout(cancelAnimTimeout)
    }
    pos = {x: e.pageX , y: e.pageY - window.scrollY}
    setDrawing(pos)
    if(!anim){
        /* animateCanvas() */
        addParticles(pos.x, pos.y)
    }
}
let setDrawing = (pos)=>{
    let date = Date.now()
    drawpoints.push({pos: pos, date: date}) 
}
let destroyCanvas = ()=>{
    window.removeEventListener('mousemove', getPosition)
    window.removeEventListener('resize', resize)
    document.removeEventListener('mouseleave', cancelAnim)
    window.cancelAnimationFrame(animationFrame);
    anim = undefined;
}
let animateCanvas = ()=>{
    draw()
    anim = window.requestAnimationFrame(animateCanvas);
}
let cleanCanvas = ()=>{
    ctx.fillStyle="#0D0C0B"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}
let emulateDrawpoints = (input)=>{
    for (let i = 1; i<input.length; i++){
        let pointBefore = input[i-1]
        let point = input[i]
    }
}
let draw = ()=>{
    let date = Date.now()
    drawpoints= drawpoints.filter((a)=>{return  date - a.date <= 1000})
    cleanCanvas();
    if(drawpoints.length>0){
        ctx.beginPath();
        ctx.lineCap = 'round';      
        ctx.lineWidth = 2;
        ctx.strokeStyle='#00FFBC'
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#21FFFD'//#399951';
        ctx.moveTo(drawpoints[0].pos.x,drawpoints[0].pos.y)
        for (let i = 1; i< drawpoints.length; i++){
            ctx.beginPath();
            let drawpoint = drawpoints[i];
            let size = (drawpoints.length-i)*10/drawpoints.length;
            ctx.arc(drawpoint.pos.x, drawpoint.pos.y,size, 0, 2 * Math.PI, true);            
            ctx.stroke();
            // ctx.lineTo(drawpoint.pos.x,drawpoint.pos.y)
        }
        
    }
}
let draw2 = ()=>{
    let date = Date.now()
    drawpoints= drawpoints.filter((a)=>{return  date - a.date <= 1000})
    cleanCanvas();
    if(drawpoints.length>0){
        ctx.beginPath();
        ctx.lineCap = 'round';      
        ctx.lineWidth = 2;
        ctx.strokeStyle='#4BC96A'
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#399951';
        ctx.moveTo(drawpoints[0].pos.x,drawpoints[0].pos.y)
        for (let i = 1; i< drawpoints.length; i++){
            let drawpoint = drawpoints[i];
            let size = (drawpoints.length-i)*10/drawpoints.length;
            ctx.lineTo(drawpoint.pos.x,drawpoint.pos.y)
        }
        ctx.stroke();
    }
}
let draw1 = ()=>{
    let date = Date.now()
    drawpoints= drawpoints.filter((a)=>{return  date - a.date <= 1000})
    cleanCanvas();
    for (let i = 0; i< drawpoints.length; i++){
        let drawpoint = drawpoints[i];
        let size = (drawpoints.length-i)*10/drawpoints.length;
        ctx.beginPath();
        let grd = ctx.createRadialGradient(drawpoint.pos.x, drawpoint.pos.y,size/5,drawpoint.pos.x, drawpoint.pos.y, size);
        // grd.addColorStop(0, "rgba(75,201,106,"+(i)/drawpoints.length+")");
        // grd.addColorStop(1, "rgba(11,20,8,"+(i)/drawpoints.length+")");
        grd.addColorStop(0, "rgba(75,201,106,1)");
        grd.addColorStop(1, "rgba(11,20,8,1)");
        ctx.fillStyle = grd;
        ctx.arc(drawpoint.pos.x, drawpoint.pos.y,size, 0, 2 * Math.PI, true);
        ctx.fill()
        // for(let part = 0; part<=size/2; part++){
            
        //     let randomX = (part/(size *2))*((Math.random()*200)-100);
        //     let randomY = (part/(size *2))*((Math.random()*200)-100);
        //     grd = ctx.createRadialGradient(drawpoint.pos.x + randomX, drawpoint.pos.y + randomY,size/5,drawpoint.pos.x+randomX, drawpoint.pos.y+randomY, size);
        //     grd.addColorStop(0, "rgba(75,201,106,"+(i)/drawpoints.length+")");
        //     grd.addColorStop(1, "rgba(11,20,8,"+(i)/drawpoints.length+")");
        //     ctx.beginPath();
        //     ctx.arc(drawpoint.pos.x+ randomX, drawpoint.pos.y+randomY,size, 0, 2 * Math.PI, true);
            
        //     ctx.fillStyle = grd;
            
        //     ctx.fill()
        // }
        // ctx.arc(drawpoint.pos.x, drawpoint.pos.y+size,size, 0, 2 * Math.PI, true);
        // ctx.arc(drawpoint.pos.x, drawpoint.pos.y-size,size, 0, 2 * Math.PI, true);
    }
}

export{initCanvas, destroyCanvas}
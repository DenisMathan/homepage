let canvas, ctx, animationFrame;
let particles = [];
const particleCount = 20;
const maxParticles = 10000;

let initCanvas = (element)=>{
    canvas = element;
    resize();
    ctx = canvas.getContext("2d");
    window.addEventListener('mousemove', getPosition);
    window.addEventListener('resize', resize)
};

// Runs only while particles are alive; getPosition restarts it on the next mouse move.
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
    animationFrame = particles.length > 0 ? requestAnimationFrame(updateSmoke) : undefined
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

let resize = ()=>{
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}
let getPosition = (e)=>{
    addParticles(e.clientX, e.clientY)
    if(!animationFrame){
        animationFrame = requestAnimationFrame(updateSmoke)
    }
}
let destroyCanvas = ()=>{
    window.removeEventListener('mousemove', getPosition)
    window.removeEventListener('resize', resize)
    window.cancelAnimationFrame(animationFrame);
    animationFrame = undefined;
    particles = [];
}

export{initCanvas, destroyCanvas}

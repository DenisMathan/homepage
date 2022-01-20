let canvas, ctx, anim, cancelAnimTimeout, pos; 
let drawpoints = [];
let te = [{date:100, t:'t'},{date:20, t:'t'},{date:40, t:'t'},{date:200, t:'t'},{date:2500, t:'t'},{date:70, t:'t'}];
let initCanvas = (element)=>{
    canvas = element;
    canvas.width = element.clientWidth;
    canvas.height = element.clientHeight;
    ctx = canvas.getContext("2d");
    window.addEventListener('mousemove', getPosition);
    window.addEventListener('resize', resize)
    document.addEventListener('mouseleave', cancelAnim);

    // ctx.beginPath();
    // let grd = ctx.createRadialGradient(50,50,10,50,50,50);
    // grd.addColorStop(0, "rgba(75,201,106,1)");
    // grd.addColorStop(1, "rgba(237,237,237,1)");
    // ctx.fillStyle = grd;
    // ctx.arc(50, 50,50, 0, 2 * Math.PI, true);
    // ctx.fill()
};
let resize = ()=>{
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}
let test = ()=>{
    te = te.filter((a)=>{return a.date+31<=100})
    console.log(te)
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
        animateCanvas()
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
            let length = 
            ctx.arc(drawpoint.pos.x, drawpoint.pos.y,size, 0, 2 * Math.PI, true);
            let size = (drawpoints.length-i)*10/drawpoints.length;
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
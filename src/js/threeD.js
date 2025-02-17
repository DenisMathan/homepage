// import * as THREE from 'three';
import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, Object3D } from 'three';
import {Text} from 'troika-three-text';
let scene, camera, renderer, group, anim;
let radius;
let maxSpeed = 0.015;
let speed = 0;
let position = {
    x: 0,
    y: 0,
    distance: 0
};
let br = false;
const points = [
    {name: 'JS', x:0, y:0, z:0},
    {name: 'Java', x:0, y:0, z:0},
    {name: 'Illustrator', x:0, y:0, z:0},
    {name: '3Ds Max', x:0, y:0, z:0},
    {name: 'git', x:0, y:0, z:0},
    {name: 'Threejs', x:0, y:0, z:0},
    {name: 'Vuejs', x:0, y:0, z:0},
    {name: 'firebase', x:0, y:0, z:0},
    {name: 'wordpress', x:0, y:0, z:0},
    {name: 'Golang', x:0, y:0, z:0},
    {name: 'Python', x:0, y:0, z:0},
    {name: 'ableton', x:0, y:0, z:0},
    {name: 'react', x:0, y:0, z:0},
    {name: 'gulp', x:0, y:0, z:0},
    {name: 'nunjucks', x:0, y:0, z:0},
    {name: 'tailwindCSS', x:0, y:0, z:0},
    {name: 'AWS', x:0, y:0, z:0},
    {name: 'Angular', x:0, y:0, z:0},
    {name: 'Docker', x:0, y:0, z:0},
    {name: 'ChromaDB', x:0, y:0, z:0},
    {name: 'C', x:0, y:0, z:0},
]

let init = (box)=>{
    scene = new Scene();
    camera = new PerspectiveCamera( 75, 1, 0.1, 1000 );
    renderer = new WebGLRenderer({alpha: true});    
    radius = 10;
    renderer.setPixelRatio(4);
    renderer.setSize(box.offsetWidth, box.offsetWidth);
    renderer.setClearColor(0x000000, 0);
    scene.background = null;
    box.appendChild(renderer.domElement);
    camera.position.z = 20;
    camera.position.y = 0; 
    box.addEventListener('mousemove', direction);
    box.addEventListener('mouseout', breaky);
    group = new Object3D();
    scene.add(group);
    distributePointsOnSphere(radius)
    group.rotateOnAxis(new Vector3(1,0,0), 0.45)
    setTimeout(animate, 200)
    // animate();
}

function distributePointsOnSphere(radius) {
    const pointsCount = points.length;
    for (let i = 0; i < pointsCount; i++) {
        const point = points[i];
        const theta = Math.acos(1 - 2 * (i / pointsCount));
        const phi = (Math.sqrt(pointsCount * Math.PI) * theta) % (2 * Math.PI);
        point.x = radius * Math.sin(theta) * Math.cos(phi);
        point.y = radius * Math.sin(theta) * Math.sin(phi);
        point.z = radius * Math.cos(theta);
        addText(point.name, point.x, point.y, point.z)
    }
}

let animate = ()=>{
    let x = position.x;
    let y = position.y;
    let axis = new Vector3(y,x,0)
    if (br){
        speed *= 0.95;
    }
    group.rotateOnWorldAxis(axis,speed * position.distance)
    for (let i=0; i<group.children.length; i++){
        const element = group.children[i];
        element.rotateOnAxis(axis, -speed * position.distance);
    }
    renderer.render(scene, camera)
    if(speed > 0.000001) {
        anim = requestAnimationFrame(animate);
    } else {
        stopAnimation()
    }
}
let stopAnimation= ()=>{
    window.cancelAnimationFrame(anim);
    speed = 0;
}
let startAnimation = () => {
    if(speed === 0) {
        speed = maxSpeed;
        animate()
    }
}
let resize = (box)=>{
    renderer.setSize(box.offsetWidth, box.offsetWidth)
}
let addText = (word, x, y, z)=> {
    const text = new Text();
    text.text = word;
    text.fontSize = 1;
    text.color = 0x00FFBC;
    text.anchorX = 'center'
    text.anchorY = 'middle';
    text.position.x= x;
    text.position.y = y;
    text.position.z = z;
    text.sync();
    text.rotateOnAxis(new Vector3(1,0,0), -0.45)
    group.add(text)
    renderer.render(scene, camera)
}

let test = ()=>{
    position.x = 0;
    position.y = 0;
}
let breaky = ()=>{
    br = true;
}
let direction = (e)=>{
    let norm
    position.x = -1 + e.offsetX/(e.target.offsetWidth/2);
    position.y = -1 + e.offsetY/(e.target.offsetHeight/2);
    position.distance = Math.sqrt(sqr(position.x,2) + sqr(position.y,2))
    norm = Math.sqrt(sqr(position.x,2)+sqr(position.y,2))
    if(norm == 0) {
        norm = 0.0001
    }
    position.x = position.x/norm;
    position.y = position.y/norm;
    if(br){
        br = false;
        speed = maxSpeed
    }
}
let sqr = (x,pot)=>{
    let val = x;
    for(let i = 2; i<=pot; i++){
      val *= x;
    }
    return val;
  }
export {init, resize, startAnimation}
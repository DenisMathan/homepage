import * as THREE from 'three';
import {Text} from 'troika-three-text';
let scene, camera, renderer, group, anim;
let radius;
let maxSpeed = 0.015;
let speed = maxSpeed;
let position = {
    x: 0,
    y: 0,
    distance: 0
};
let br = false;

let init = (box)=>{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer({alpha: true});
    radius = 10;
    renderer.setPixelRatio(4);
    renderer.setSize(box.offsetWidth, box.offsetWidth);
    renderer.setClearColor(0x000000, 0);
    scene.background = null;
    // scene.background = new THREE.Color(0x0D0C0B)
    console.log(box.offsetWidth)
    console.log(box.children.length)
    box.appendChild(renderer.domElement);
    camera.position.z = 20;
    camera.position.y = 0; 
    box.addEventListener('mousemove', direction);
    box.addEventListener('mouseout', breaky);
    group = new THREE.Object3D();
    scene.add(group);
    // addSphere();
    addText('HTML', 0, -radius, 0);
    addText('JS', -radius/1.4142, -radius/1.4142, 0);
    addText('Java', radius/1.4142, radius/1.4142, 0);
    addText('illustrator', radius/1.4142, -radius/1.4142, 0);
    addText('3Ds Max', -radius/1.4142, radius/1.4142, 0);
    addText('git', 0, radius/1.4142, -radius/1.4142,);
    addText('Threejs', 0, -radius/1.4142, radius/1.4142,);
    addText('vuejs', 0, -radius/1.4142, -radius/1.4142,);
    addText('firebase', 0, radius/1.4142, radius/1.4142,);
    addText('wordpress', radius/1.4142, 0,-radius/1.4142);
    addText('Photoshop', -radius/1.4142,0, radius/1.4142);
    addText('Python', -radius/1.4142, 0,-radius/1.4142);
    addText('ableton', radius/1.4142,0, radius/1.4142);
    addText('react',radius, 0, 0);
    addText('gulp',-radius, 0, 0);
    addText('nunjucks', 0, radius, 0);
    addText('tailwind.css',0, 0, radius);
    addText('react',0, 0, -radius);
    
    group.rotateOnAxis(new THREE.Vector3(1,0,0), 0.45)
    animate();
}
let animate = ()=>{
    let x = position.x;
    let y = position.y;
    let axis = new THREE.Vector3(y,x,0)
    if (br){
        speed *= 0.95;
    }
    group.rotateOnWorldAxis(axis,speed * position.distance)
    for (let i=0; i<group.children.length; i++){
        const element = group.children[i];
        element.rotateOnAxis(axis, -speed * position.distance);
    }
    renderer.render(scene, camera)
    anim = requestAnimationFrame(animate);
}
let stopAnimation= ()=>{
    window.cancelAnimationFrame(anim);
}
let resize = (box)=>{
    renderer.setSize(box.offsetWidth, box.offsetWidth)
    // stopAnimation();
    // box.removeChild();
    // scene,camera, renderer, group, anim = undefined;
}
let addText = (word, x, y, z)=> {
    const text = new Text();
    text.text = word;
    text.fontSize = 1;
    text.color = 0xFFFFFF;
    text.anchorX = 'center'
    text.anchorY = 'middle';
    text.position.x= x;
    text.position.y = y;
    text.position.z = z;
    text.sync();
    text.rotateOnAxis(new THREE.Vector3(1,0,0), -0.45)
    group.add(text)
    renderer.render(scene, camera)
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
export {init, resize}
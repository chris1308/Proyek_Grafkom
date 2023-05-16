import * as THREE from "three";
//import controls
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FlyControls } from "three/addons/controls/FlyControls.js";
import { FirstPersonControls } from "three/addons/controls/FirstPersonControls.js";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

//import model
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
let obj1, obj2, obj3, sofa, tv, plant, deer, computerDesk;

loader.load("models/wooden_table/wooden_table_02_4k.gltf", function (gltf) {
  obj1 = gltf.scene;
  gltf.scene.scale.set(4, 2, 4); //ukuran
  scene.add(gltf.scene);

  obj1.translateX(-13).translateY(0).translateZ(0);
  obj1.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2);
  obj1.castShadow = true;
});

loader.load("models/fan/ceiling_fan_new.glb", function (gltf2) {
  obj2 = gltf2.scene;
  gltf2.scene.scale.set(1, 1, 1);
  scene.add(gltf2.scene);
  obj2.position.set(7.5, 5, -7.5);
});

loader.load(
  "models/fan/ceiling_fan_new.glb",
  function (gltf3) {
    obj3 = gltf3.scene;
    gltf3.scene.scale.set(1, 1, 1);
    scene.add(gltf3.scene);
    obj3.position.set(-7.5, 5, -7.5);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "models/modern_sofa.glb",
  function (gltf) {
    sofa = gltf.scene;
    gltf.scene.scale.set(2, 2, 2);
    scene.add(gltf.scene);
    sofa.position.set(-5, 0, 0);
    sofa.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI / 2);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "models/tv.glb",
  function (gltf) {
    tv = gltf.scene;
    gltf.scene.scale.set(2, 2, 2);
    scene.add(gltf.scene);
    tv.position.set(-13, 1.5, 0);
    tv.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2); //memutar object
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "models/deer.glb",
  function (gltf) {
    deer = gltf.scene;
    gltf.scene.scale.set(2, 1.9, 2);
    scene.add(gltf.scene);
    deer.position.set(14, 2.5, 0);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "models/computer_desk.glb",
  function (gltf) {
    computerDesk = gltf.scene;
    gltf.scene.scale.set(0.4, 0.4, 0.4);
    scene.add(gltf.scene);
    computerDesk.position.set(13.4, 0, 3);
    computerDesk.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI); //memutar object
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "models/plant_in_pot.glb",
  function (gltf) {
    plant = gltf.scene;
    gltf.scene.scale.set(0.3, 0.3, 0.3);
    scene.add(gltf.scene);
    plant.position.set(-13, 0, 4);
    plant.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let kulkas;
loader.load("models/refrigerator/scene.gltf", function (gltf) {
  kulkas = gltf.scene;
  gltf.scene.scale.set(2, 2, 2);
  scene.add(gltf.scene);
  kulkas.position.set(-2, 0, -13);
  // kulkas.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2);
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// scene.background = texture1;
// scene.background = new THREE.Color(0xffffff);

camera.position.z = 8;
camera.position.y = 2.5;
camera.position.x = 0;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//helper koordinat
const axesHelper = new THREE.AxesHelper(5); //garis bantu axis
scene.add(axesHelper);

//light
const pointLightA = new THREE.PointLight(0xffffff, 1, 100);
pointLightA.position.set(7.5, 3.8, -7.5);
const pointLightB = new THREE.PointLight(0xffffff, 1, 100);
pointLightB.position.set(-7.5, 3.8, -7.5);
const pointLightC = new THREE.PointLight(0xffffff, 1, 10);
pointLightC.position.set(7.5, 2.5, 7.5);
const pointLightD = new THREE.PointLight(0xffffff, 1, 100);
pointLightD.position.set(-7.5, 2.5, 7.5);
scene.add(pointLightA, pointLightB, pointLightC, pointLightD);

// pointLightA.castShadow = true;
// pointLightB.castShadow = true;
// pointLightC.castShadow = true;
// pointLightD.castShadow = true;

const ambientLight = new THREE.AmbientLight(0xffffff);

// const pointLightHelper = new THREE.PointLightHelper(pointLight2, 1, 0xff0000);
// scene.add(pointLightHelper);

// const helper = new THREE.CameraHelper( camera );
// scene.add( helper );

//texture
const texture1 = new THREE.TextureLoader().load("texture/floor.jpg");
texture1.wrapS = THREE.RepeatWrapping; //horizontal nyamping
texture1.wrapT = THREE.RepeatWrapping; //vertikal lurus
texture1.repeat.set(6, 3); //ukuran

const texture2 = new THREE.TextureLoader().load("texture/brick2.jpg");
texture2.wrapS = THREE.RepeatWrapping;
texture2.wrapT = THREE.RepeatWrapping;
texture2.repeat.set(2, 6);

const texture3 = new THREE.TextureLoader().load("texture/wall.jpg");
texture3.wrapS = THREE.RepeatWrapping;
texture3.wrapT = THREE.RepeatWrapping;
texture3.repeat.set(1, 6);

const textureTechno = new THREE.TextureLoader().load("texture/techno.jpg");
const textureGlass = new THREE.TextureLoader().load("texture/stainedglass.jpg");

const texture4 = new THREE.TextureLoader().load("texture/tesseract.jpg");

//floor
const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30, 20, 20), new THREE.MeshPhongMaterial({ map: texture1, side: THREE.DoubleSide }));
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

//atap
const planeGeometry1 = new THREE.PlaneGeometry(30, 30, 20, 20);
const planeMaterial1 = new THREE.MeshPhongMaterial({ map: texture1, side: THREE.DoubleSide });
const atap = new THREE.Mesh(planeGeometry1, planeMaterial1);
atap.rotation.x = -Math.PI / 2;
atap.translateZ(5);
scene.add(atap);

//tembok kiri (tinggi, tebal, panjang)
const cubeGeometry1 = new THREE.BoxGeometry(5, 1, 30);
const cubeMaterial1 = new THREE.MeshBasicMaterial({ map: texture3 });
const tembokKiri = new THREE.Mesh(cubeGeometry1, cubeMaterial1);
scene.add(tembokKiri);

tembokKiri.translateX(-15.5).translateY(2.5).translateZ(0);
tembokKiri.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);

//tembok kanan
const cubeGeometry2 = new THREE.BoxGeometry(5, 1, 30);
const cubeMaterial2 = new THREE.MeshBasicMaterial({ map: texture3 });
const tembokKanan = new THREE.Mesh(cubeGeometry2, cubeMaterial2);
scene.add(tembokKanan);

tembokKanan.translateX(15.5).translateY(2.5).translateZ(0);
tembokKanan.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);

//tembok belakang
const cubeGeometry3 = new THREE.BoxGeometry(5, 1, 30);
const cubeMaterial3 = new THREE.MeshBasicMaterial({ map: texture2 });
const tembokBelakang = new THREE.Mesh(cubeGeometry3, cubeMaterial3);
scene.add(tembokBelakang);

tembokBelakang.translateX(0).translateY(2.5).translateZ(-15.5);
tembokBelakang.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2);
tembokBelakang.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);

//tembok depan
const cubeGeometry4 = new THREE.BoxGeometry(5, 1, 30);
const cubeMaterial4 = new THREE.MeshBasicMaterial({ map: texture2 });
const tembokDepan = new THREE.Mesh(cubeGeometry4, cubeMaterial4);
scene.add(tembokDepan);

tembokDepan.translateX(0).translateY(2.5).translateZ(15.5);
tembokDepan.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2);
tembokDepan.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);

//kubus di tengah
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ map: texture4 });
// const material = new THREE.MeshBasicMaterial(new THREE.Color("rgb(255, 0, 0)"));
const cube = new THREE.Mesh(geometry, material);
cube.position.y = 2.5;
scene.add(cube);

//lamp at center
// const box = new THREE.BoxGeometry(1, 1, 1);
// let boxMat = new THREE.MeshPhysicalMaterial({map: textureTechno, shininess: 50, reflectivity: 0.5, emissive: 0x0071c7, emissiveIntensity: 0.7});
// let cube = new THREE.Mesh(box, boxMat);
// cube.position.y = 2.5;
// cube.name = "kubus";
// scene.add(cube);

const geometry2 = new THREE.CylinderGeometry(1, 1, 2.5);
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material2 = new THREE.MeshMatcapMaterial(new THREE.Color("rgb(255, 0, 0)"));
material2.transparent = true;
material2.opacity = 0.2;
const cylinder2 = new THREE.Mesh(geometry2, material2);
scene.add(cylinder2);
cylinder2.position.x = 0;
cylinder2.position.y = 2.5;
cylinder2.position.z = 0;

//tambah
const cylinderGeometry1 = new THREE.CylinderGeometry(1, 1, 1.25);
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cylinderMaterial1 = new THREE.MeshMatcapMaterial(new THREE.Color("rgb(255, 0, 0)"));
const upperCylinder = new THREE.Mesh(cylinderGeometry1, cylinderMaterial1);
upperCylinder.position.y = 4.37;
const bottomCylinder = new THREE.Mesh(cylinderGeometry1, cylinderMaterial1);
bottomCylinder.position.y = 0.627;
scene.add(upperCylinder, bottomCylinder);
// upperCylinder.castShadow = true;
// bottomCylinder.castShadow = true;

const bentuk = new THREE.TorusGeometry(10, 4, 18, 50);
const material3 = new THREE.MeshBasicMaterial({ color: 0xabdbe3 });
const torus = new THREE.Mesh(bentuk, material3);
torus.position.x = -20;
torus.position.y = -1;
torus.position.z = -50;
scene.add(torus);

const controls = new PointerLockControls(camera, renderer.domElement);
// const controls2 = new OrbitControls(camera, renderer.domElement);
// const controls = new FlyControls(camera, renderer.domElement);
// const controls = new FirstPersonControls(camera, renderer.domElement);
let clock = new THREE.Clock();
let keyboard = [];

addEventListener("click", (e) => {
  controls.lock();
});

addEventListener("keydown", (e) => {
  keyboard[e.key] = true;
});

addEventListener("keyup", (e) => {
  keyboard[e.key] = false;
});

let lampSwitch = false;
let kubus;
let cekKubus = false;
function receiveKeyboard(delta) {
  const kecepatan = 5;
  const kecepatanActual = kecepatan * delta;
  if (keyboard["w"]) {
    controls.moveForward(kecepatanActual);
    if (camera.position.z <= -13) {
      //tembok depan
      camera.position.z = -12.99;
    }
    if (camera.position.z >= 13) {
      //tembok belakang
      camera.position.z = 12.99;
    }
    if (camera.position.x <= -13) {
      //tembok kiri
      camera.position.x = -12.99;
    }
    if (camera.position.x >= 13) {
      //tembok kanan
      camera.position.x = 12.99;
    }
    // console.log(camera.position.z);
  }
  if (keyboard["s"]) {
    controls.moveForward(-kecepatanActual);
    if (camera.position.z <= -13) {
      //tembok depan
      camera.position.z = -12.99;
    }
    if (camera.position.z >= 13) {
      //tembok belakang
      camera.position.z = 12.99;
    }
    if (camera.position.x <= -13) {
      //tembok kiri
      camera.position.x = -12.99;
    }
    if (camera.position.x >= 13) {
      //tembok kanan
      camera.position.x = 12.99;
    }
    // console.log(camera.position.z);
  }
  if (keyboard["a"]) {
    controls.moveRight(-kecepatanActual);
    if (camera.position.z <= -13) {
      //tembok depan
      camera.position.z = -12.99;
    }
    if (camera.position.z >= 13) {
      //tembok belakang
      camera.position.z = 12.99;
    }
    if (camera.position.x <= -13) {
      //tembok kiri
      camera.position.x = -12.99;
    }
    if (camera.position.x >= 13) {
      //tembok kanan
      camera.position.x = 12.99;
    }
  }
  if (keyboard["d"]) {
    controls.moveRight(kecepatanActual);
    if (camera.position.z <= -13) {
      //tembok depan
      camera.position.z = -12.99;
    }
    if (camera.position.z >= 13) {
      //tembok belakang
      camera.position.z = 12.99;
    }
    if (camera.position.x <= -13) {
      //tembok kiri
      camera.position.x = -12.99;
    }
    if (camera.position.x >= 13) {
      //tembok kanan
      camera.position.x = 12.99;
    }
  }
  if (keyboard["o"]) {
    lampSwitch = !lampSwitch;
    if (lampSwitch) {
      // saat true
      const pointLightCenter = new THREE.PointLight(0xff0000, 1, 10);
      pointLightCenter.position.set(0, 2.5, 0);
      pointLightCenter.castShadow = true;
      pointLightCenter.name = "pointLightCenter";
      scene.add(pointLightCenter);
    } else {
      scene.remove(scene.getObjectByName("pointLightCenter"));
    }
    keyboard["o"] = false;
  }

  if (keyboard["x"]) {
    scene.remove(scene.getObjectByName("kubus"));
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    let material;
    if (cekKubus == false) {
      material = new THREE.MeshBasicMaterial(new THREE.Color("rgb(255, 0, 0)"));
      cekKubus = true;
    } else {
      material = new THREE.MeshBasicMaterial({ map: texture4 });
      cekKubus = false;
    }
    keyboard["x"] = false;
    kubus = new THREE.Mesh(geometry, material);
    kubus.position.y = 2.5;
    kubus.name = "kubus";
    scene.add(kubus);
  }
}

// ----------------------------------------------------------------------
// scene.add( camera );

// const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
// scene.add( directionalLight );
// scene.add(light.cube);

//--- loading  model
// const loader = new GLTFLoader();

// loader.load( 'path/to/model.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // cylinder2.rotation.x += 0.02;
  // cylinder2.rotation.y += 0.01;
  // cylinder2.rotation.z += 0.01;
  if (kubus) {
    kubus.rotation.x += 0.01;
    kubus.rotation.y += 0.01;
  }
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  if (obj2) {
    obj2.rotation.y += 0.04;
  }
  if (obj3) {
    obj3.rotation.y += 0.04;
  }

  // controls2.update();
  let delta = clock.getDelta();
  receiveKeyboard(delta);
  renderer.render(scene, camera);
}

animate();

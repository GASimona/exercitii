// variabile:
// dimensiunile jocului
var sceneWidth
var sceneHeight
var camera
var scene
var renderer
var hero
var sun
var ground
var orbitControl
var heroRadius = 0.2
var heroBaseY = 1.8
var worldRadius = 26
var sphericalHelper 
var rollingSpeed = 0.008
var heroRollingSpeed 
var gravity = 0.005
var bounceValue = 0.1
var leftLane = -1
var middLane = 0
var rightLane = 1
var currentLane = 0
var clock 
var hasCollided = false
var jumping
var treesInPath = []
var treesPool = []
var treeReleaseInterval = 0.5
var pathAngleValues

init()

// initializeaza jocul
function init() {
    createScene()
    update()
}

function createScene() {
    sphericalHelper = new THREE.Spherical()
    heroRollingSpeed = (rollingSpeed * worldRadius / heroRadius) / 5
    pathAngleValues = [1.52, 1.57, 1.62]
    clock = new THREE.Clock()
    clock.start()

    sceneWidth = window.innerWidth
    sceneHeight = window.innerHeight
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(60, sceneWidth / sceneHeight, 0.1, 1000)
    renderer = new THREE.WebGLRenderer({alpha:true})
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSofShadowMap
    renderer.setSize(sceneWidth, sceneHeight)
    document.body.appendChild(renderer.domElement)

    // adauga elementele din scena
    createTreesPool()
    addHero()
    addWorld()
    addLight()
    addOrbitControl()

    camera.position.z = 6.5
    camera.position.y = 2.5


    window.addEventListener('resize', onWindowResize, false)
}

function createTreesPool() {
    var maxTreesInPool = 10
    var newTree 
    for ( var i=0; i<maxTreesInPool; i++) {
        newTree = createTree()
        treesPool.push(newTree)
    }
}



function addHero() {
    var heroGeometry = new THREE.DodecahedronGeometry(heroRadius, 1)
    var heroMaterial = new THREE.MeshStandardMaterial(
        {color: 0xe5f2f2, shading: THREE.FlatShading}
    )
    heroSphere = new THREE.Mesh(heroGeometry, heroMaterial)
    heroSphere.castShadow = true
    heroSphere.receiveShadow = true
    scene.add(heroSphere)

    // heroSphere.position.y = 2
    heroSphere.position.y = heroBaseY 
    heroSphere.position.z = 4.8
    heroSphere.position.x = currentLane

}

// function addGround() {
//     var planeGeometry = new THREE.PlaneGeometry(5, 5, 4, 4)
//     var planeMaterial = new THREE.MeshStandardMaterial({color: 0x000fff})
//     ground = new THREE.Mesh(planeGeometry, planeMaterial)
//     heroSphere.castShadow = false
//     heroSphere.receiveShadow = true
//     ground.rotation.x = -Math.PI /2
//     scene.add(ground)
// }
function addWorld(){
	var sides=40;
	var tiers=40;
	var sphereGeometry = new THREE.SphereGeometry( worldRadius, sides,tiers);
	var sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xfffafa ,shading:THREE.FlatShading} )
	
	var vertexIndex;
	var vertexVector= new THREE.Vector3();
	var nextVertexVector= new THREE.Vector3();
	var firstVertexVector= new THREE.Vector3();
	var offset= new THREE.Vector3();
	var currentTier=1;
	var lerpValue=0.5;
	var heightValue;
	var maxHeight=0.07;
	for(var j=1;j<tiers-2;j++){
		currentTier=j;
		for(var i=0;i<sides;i++){
			vertexIndex=(currentTier*sides)+1;
			vertexVector=sphereGeometry.vertices[i+vertexIndex].clone();
			if(j%2!==0){
				if(i==0){
					firstVertexVector=vertexVector.clone();
				}
				nextVertexVector=sphereGeometry.vertices[i+vertexIndex+1].clone();
				if(i==sides-1){
					nextVertexVector=firstVertexVector;
				}
				lerpValue=(Math.random()*(0.75-0.25))+0.25;
				vertexVector.lerp(nextVertexVector,lerpValue);
			}
			heightValue=(Math.random()*maxHeight)-(maxHeight/2);
			offset=vertexVector.clone().normalize().multiplyScalar(heightValue);
			sphereGeometry.vertices[i+vertexIndex]=(vertexVector.add(offset));
		}
	}
	rollingGroundSphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
	rollingGroundSphere.receiveShadow = true;
	rollingGroundSphere.castShadow=false;
	rollingGroundSphere.rotation.z=-Math.PI/2;
	scene.add( rollingGroundSphere );
	rollingGroundSphere.position.y=-24;
	rollingGroundSphere.position.z=2;
	addWorldTrees();
}
function addWorldTrees(){
	var numTrees=36;
	var gap=6.28/36;
	for(var i=0; i<numTrees; i++){
		addTree(false, i * gap, true);
		addTree(false, i * gap, false);
	}
}

function addPathTree() {
    var option = [0, 1, 2]
    var lane = Math.floor(Math.random() * 3)
    addTree(true, lane)
    option.splice(lane, 1)
    if (Math.random() > 0.5) {
        lane = Math.floor(Math.random() * 2)
        addTree(true, option[lane])
    }
}

function addTree(inPath, row, isLeft){
	var newTree;
	if(inPath){
		if(treesPool.length==0)return;
		newTree=treesPool.pop();
		newTree.visible=true;
		//console.log("add tree");
		treesInPath.push(newTree);
		sphericalHelper.set( worldRadius-0.3, pathAngleValues[row], -rollingGroundSphere.rotation.x+4 );
	}else{
		newTree=createTree();
		var forestAreaAngle=0;//[1.52,1.57,1.62];
		if(isLeft){
			forestAreaAngle=1.68+Math.random()*0.1;
		}else{
			forestAreaAngle=1.46-Math.random()*0.1;
		}
		sphericalHelper.set( worldRadius-0.3, forestAreaAngle, row );
	}
	newTree.position.setFromSpherical( sphericalHelper );
	var rollingGroundVector=rollingGroundSphere.position.clone().normalize();
	var treeVector=newTree.position.clone().normalize();
	newTree.quaternion.setFromUnitVectors(treeVector,rollingGroundVector);
	newTree.rotation.x+=(Math.random()*(2*Math.PI/10))+-Math.PI/10;
	
	rollingGroundSphere.add(newTree);
}
function createTree(){
	var sides=8;
	var tiers=6;
	var scalarMultiplier=(Math.random()*(0.25-0.1))+0.05;
	var midPointVector= new THREE.Vector3();
	var vertexVector= new THREE.Vector3();
	var treeGeometry = new THREE.ConeGeometry( 0.5, 1, sides, tiers);
	var treeMaterial = new THREE.MeshStandardMaterial( { color: 0x33ff33,shading:THREE.FlatShading  } );
	var offset;
	midPointVector=treeGeometry.vertices[0].clone();
	var currentTier=0;
	var vertexIndex;
	blowUpTree(treeGeometry.vertices,sides,0,scalarMultiplier);
	tightenTree(treeGeometry.vertices,sides,1);
	blowUpTree(treeGeometry.vertices,sides,2,scalarMultiplier*1.1,true);
	tightenTree(treeGeometry.vertices,sides,3);
	blowUpTree(treeGeometry.vertices,sides,4,scalarMultiplier*1.2);
	tightenTree(treeGeometry.vertices,sides,5);
	var treeTop = new THREE.Mesh( treeGeometry, treeMaterial );
	treeTop.castShadow=true;
	treeTop.receiveShadow=false;
	treeTop.position.y=0.9;
	treeTop.rotation.y=(Math.random()*(Math.PI));
	var treeTrunkGeometry = new THREE.CylinderGeometry( 0.1, 0.1,0.5);
	var trunkMaterial = new THREE.MeshStandardMaterial( { color: 0x886633,shading:THREE.FlatShading  } );
	var treeTrunk = new THREE.Mesh( treeTrunkGeometry, trunkMaterial );
	treeTrunk.position.y=0.25;
	var tree =new THREE.Object3D();
	tree.add(treeTrunk);
	tree.add(treeTop);
	return tree;
}
function blowUpTree(vertices,sides,currentTier,scalarMultiplier,odd){
	var vertexIndex;
	var vertexVector= new THREE.Vector3();
	var midPointVector=vertices[0].clone();
	var offset;
	for(var i=0;i<sides;i++){
		vertexIndex=(currentTier*sides)+1;
		vertexVector=vertices[i+vertexIndex].clone();
		midPointVector.y=vertexVector.y;
		offset=vertexVector.sub(midPointVector);
		if(odd){
			if(i%2===0){
				offset.normalize().multiplyScalar(scalarMultiplier/6);
				vertices[i+vertexIndex].add(offset);
			}else{
				offset.normalize().multiplyScalar(scalarMultiplier);
				vertices[i+vertexIndex].add(offset);
				vertices[i+vertexIndex].y=vertices[i+vertexIndex+sides].y+0.05;
			}
		}else{
			if(i%2!==0){
				offset.normalize().multiplyScalar(scalarMultiplier/6);
				vertices[i+vertexIndex].add(offset);
			}else{
				offset.normalize().multiplyScalar(scalarMultiplier);
				vertices[i+vertexIndex].add(offset);
				vertices[i+vertexIndex].y=vertices[i+vertexIndex+sides].y+0.05;
			}
		}
	}
}
function tightenTree(vertices,sides,currentTier){
	var vertexIndex;
	var vertexVector= new THREE.Vector3();
	var midPointVector=vertices[0].clone();
	var offset;
	for(var i=0;i<sides;i++){
		vertexIndex=(currentTier*sides)+1;
		vertexVector=vertices[i+vertexIndex].clone();
		midPointVector.y=vertexVector.y;
		offset=vertexVector.sub(midPointVector);
		offset.normalize().multiplyScalar(0.06);
		vertices[i+vertexIndex].sub(offset);
	}
}

function addLight() {
    var hemisphereLight = new THREE.HemisphereLight(0xfffafa, 0x000000, 0.9)
    scene.add(hemisphereLight)

    sun = new THREE.DirectionalLight(0xcdc1c5, 0.9)
    sun.position.set(12, 6, -7)
    sun.castShadow = true
    sun.shadow.mapSize.width = 256
    sun.shadow.mapSize.height = 256
    sun.shadow.camera.near = 0.5
    sun.shadow.camera.far = 50
        
    scene.add(sun)

    scene.fog = new THREE.FogExp2(0xf0fff0, 0.14)

}

function addOrbitControl() {
    orbitControl = new THREE.OrbitControls(camera, renderer.domElement)
    orbitControl.addEventListener('change', render)
    orbitControl.enableZoom = false
}

function update() {
    rollingGroundSphere.rotation.x += rollingSpeed
    heroSphere.rotation.x -= heroRollingSpeed

    if (heroSphere.position.y <= heroBaseY) {
        jumping = false
        bounceValue = (Math.random() * 0.04) + 0.05
    }
    heroSphere.position.y += bounceValue
    heroSphere.position.x = THREE.Math.lerp(heroSphere.position.x, currentLane, 2 * clock.getDelta())
    bounceValue -= gravity

    if (clock.getElapsedTime() > treeReleaseInterval) {
        clock.start()
        addPathTree()
    }

    doTreeLogic()

    render()
    requestAnimationFrame(update)
}

function doTreeLogic() {
    var oneTree
    var treePos = new THREE.Vector3
    var treesToRemove = []
    treesInPath.forEach((element, index) => {
        oneTree = treesInPath[index]
        treePos.setFromMatrixPosition(oneTree.matrixWorld)
        // a iesit din zona vizuala
        if (treePos.z > 6 && oneTree.isVisible) {
            treesToRemove.push(oneTree)
        } else {
            if (treePos.distanceTo(heroSphere.position) <= 0.6) {
                hasCollided = true
                explode()
            }
        }
    })
    var fromWhere 
    treesToRemove.forEach((element, index) => {
        oneTree = treesToRemove[index]
        fromWhere = treesInPath.indexOf(oneTree)
        treesInPath.splice(fromWhere, 1)
        treesPool.push(oneTree)
        oneTree.visible = false
    })
}

function explode() {

}
function render() {
    renderer.render(scene, camera)
}

function onWindowResize() {
    sceneHeight = window.innerHeight
    sceneWidth = window.innerWidth
    renderer.setSize(sceneWidth, sceneHeight)
    camera.aspect = sceneWidth / sceneHeight
    camera.updateProjectionMatrix()
}
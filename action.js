 const game = {
   tools:[
     {name:"axe",class : "axe",remove : ["leaf", "trunk"]},
     {name:"pickaxe",class : "pickaxe",remove : ["stone"]},
     {name:"shovel",class : "shovel",remove : ["ground"]},
     {name:"magic-glasses",class : "glasses",remove : ["sun"]},
    
    ],
    material:{
       0: "sky",
       1: "cloud",
       2: "stone",
       3: "trunk",
       4: "leaf",
       5: "ground",
       6: "sun",
    },
    storage: [],
  currentMaterial: "",
  currentTool: "",
  removeTile: false,
    }
    const start = () => {
      createWorld();
      createTools();
    };

  const createWorld = ()=> {
    
      //0.  sky 
      //1.  cloud
      //2.  stone
      //3.   tree
      //4.   leaf
      //5.   ground
      //6.   sun



    const matrixWorld = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0],
        [0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,6,6,6,0,0],
        [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,6,6,6,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0],
        [0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0],
        [2,2,2,2,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
        [2,2,2,2,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
        [2,2,2,2,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
       
    ];
    const myWorld = document.querySelector('#gameWorld');
    myWorld.addEventListener("click", (el)=>{
      console.log('clicked');
      if(game.removeTile && game.currentTool){
         
        removeItem(el);
      } else if(game.currentMaterial && !game.removeTile ){
               addItem(el);
      };

      
    });
     for (let row = 0; row < matrixWorld.length; row++) {
    for (let col = 0; col < matrixWorld[row].length; col++) {
      const tileItem = document.createElement("div");
      
      tileItem.classList.add("tile");
      
      myWorld.appendChild(tileItem);

      const materialType = game.material[matrixWorld[row][col]];
     
      switch (matrixWorld[row][col]) {
        case 0:
          tileItem.classList.add(materialType);
          break;
        case 1:
          tileItem.classList.add(materialType);
          break;
        case 2:
          tileItem.classList.add(materialType);
          break;
        case 3:
         tileItem.classList.add(materialType);
          break;
        case 4:
          tileItem.classList.add(materialType);
          break;
        case 5:
          tileItem.classList.add(materialType);
          break;
        case 6:
          tileItem.classList.add(materialType);
          break;
        default:
          break;
      };
    };
  };
};

const createTools = () => {
  const toolBar = document.querySelector("#gameTools");
  game.tools.forEach((tool) => {
   
    const toolDiv = document.createElement("div");
    const toolWrapper = document.createElement("div");
    
    const title = document.createElement("h5");
    title.textContent = tool.name;
  
    toolDiv.classList.add(tool.class);
    toolDiv.classList.add("tool-item");
    toolWrapper.appendChild(title);
    toolWrapper.appendChild(toolDiv);

    
    toolBar.append(toolWrapper);
    toolDiv.addEventListener("click",(el)=>useTool(el,tool));
  });
};


const useTool = (el, tool) => {
  console.log('using tool');
  game.currentTool = tool;

  const tools = document.querySelectorAll(".tool-item");
  tools.forEach((tool) => {
    tool.classList.remove("selected");
  });
  el.currentTarget.classList.add("selected");
  game.removeTile = true;
};
const addItem = ( el ) => {
  const tileType = el.target.className.split(" ")[1];
  console.log(game.currentMaterial);
  const storageMaterial = game.currentMaterial;
if(game.storage.length){
  el.target.classList.remove(tileType);
  console.log(game.storage);
  game.currentMaterial = "";
  game.currentTool = "";
  el.target.classList.add(storageMaterial);}
  game.removeTile = true;
  game.storage.pop();
  
};
const removeItem = (el) => {
  console.log('removing');
  const materialType = document.querySelector(".material-type");

  const material = el.target.className.split(" ")[1];
  console.log(material);
  console.log(game.currentTool);
  
  game.tools.forEach((tool) => {
    console.log(tool);
    if (tool === game.currentTool && tool.remove.includes(material)) {
      console.log('remove now');
      createStorage(material);
      el.target.classList.remove(material);
      el.target.classList.add(game.material[0]);
      materialType.textContent =
        material.slice(0, 1).toUpperCase() + material.slice(1);
    }
  });
};


  

const createStorage = (material) => {
  game.storage.push(material);
  console.log(game.storage);
  const container = document.querySelector("#gameStorage");
  const materialEl = document.createElement("div");
  materialEl.classList.add("storage-item");
  materialEl.classList.add(material);
  container.appendChild(materialEl);
  materialEl.addEventListener("click", (el) => pickMaterial(el));

  
};
const pickMaterial = ( el ) => {
  console.log(el.target)
  game.removeTile = false;
  const material = el.target.className.split(" ")[1];
  console.log(material);
  game.currentMaterial = material;
   
  const materials = document.querySelectorAll(".storage-item");
  const tools = document.querySelectorAll(".tool-item");

  materials.forEach((material) => {
    material.classList.remove("selected");
  });
  el.currentTarget.classList.add("selected");
  tools.forEach((tool) => {
    tool.classList.remove("selected");
  });
};

const resetWorld = () => {
  const matrix = document.querySelector("#gameWorld");
  const materialType = document.querySelector(".material-type");
  const storage = document.querySelector("#gameStorage");
  matrix.innerHTML = "";
  storage.innerHTML = "";
  materialType.textContent = "";
  game.storage = [];
  game.currentMaterial = "";
  game.currentTool = "";
  game.removeTile = false;
  createWorld();
};
start();

const btn = document.querySelector("#reset");
btn.addEventListener("click",resetWorld);



 const game = {
   tools:[
     {name:"axe",class : "axe",remove : ["leaf", "trunk"]},
     {name:"pickaxe",class : "pickaxe",remove : ["stone"]},
     {name:"shovel",class : "shovel",remove : ["ground"]},
    
    ],
    material:{
       0: "sky",
       1: "cloud",
       2: "stone",
       3: "trunk",
       4: "leaf",
       5: "ground",
    },
    storage: [],
  currentMaterial: "",
  currentTool: "",
  removeTile: false,
    }
 

  const createWorld = ()=> {
     //0.  sky 
    //1.  cloud
      //2.  stone
      //3.   tree
      //4.   leaf
      //5.    ground



    const matrixWorld = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        [0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0]
        [0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0]
        [2,2,2,2,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0]
        [2,2,2,2,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0]
        [2,2,2,2,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0]
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
       
    ];
    const myWorld = document.querySelector('#gameWorld');
    myWorld.addEventListener("click", (el)=>{
      if(game.removeTile && game.currentTool){
        removeItem(el);
      } else if(game.currentMaterial && game.removeTile ){
               addItem(el);
      };

      
    });
    for(let row =0; row < matrixWorld.length;row++){
      for(let col = 0 ; col<matrixWorld[row].length;col++){
        
      }


    }

  }
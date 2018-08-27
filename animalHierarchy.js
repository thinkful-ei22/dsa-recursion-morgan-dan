'use strict';

const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {  //(animalHierarchy, 'Golden Retriever')
  let node = {};
  animalHierarchy.filter(item => item.parent === parent) //[]
                 .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));  //node = {}
  return node;  
}
console.log(traverse(animalHierarchy, null));

/* OUTPUT
node = {
  Animals: {
    Mammals: {
      Dogs: {
        Golden Retriever: {},
        Husky: {}
      },
      Cats: {
        Bengal: {}
      }
    }
  }
}
*/
// const nameTree = [
//   {name: 'Zuckerberg', category: null},
//   { name: 'Schroepfer', category: 'Zuckerberg'},
//   { name: 'Bosworth', category: 'Schroepfer'},
//   { name: 'Steve', category: 'Bosworth'},
//   { name: 'Kyle', category: 'Bosworth'},
//   { name: 'Andra', category: 'Bosworth'},
//   { name: 'Zhao', category: 'Schroepfer' },
//   { name: 'Richie', category: 'Zhao' },
//   { name: 'Sofia', category: 'Zhao' },
//   { name: 'Jen', category: 'Zhao' },
//   { name: 'Schrage', category: 'Zuckerberg' },
//   { name: 'Vandyck', category: 'Schrage' },
//   { name: 'Sabrina', category: 'Vandyck' },
//   { name: 'Michelle', category: 'Vandyck' },
//   { name: 'Josh', category: 'Vandyck' },
//   { name: 'Swain', category: 'Schrage' },
//   { name: 'Blanch', category: 'Swain' },
//   { name: 'Tom', category: 'Swain' },
//   { name: 'Joe', category: 'Swain' },
//   { name: 'Sandberg', category: 'Zuckerberg' },
//   { name: 'Goler', category: 'Sandberg' },
//   { name: 'Eddie', category: 'Goler' },
//   { name: 'Julie', category: 'Goler' },
//   { name: 'Annie', category: 'Goler' },
//   { name: 'Hernandez', category: 'Sandberg' },
//   { name: 'Rowi', category: 'Hernandez' },
//   { name: 'Inga', category: 'Hernandez' },
//   { name: 'Morgan', category: 'Hernandez' },
//   { name: 'Moissinac', category: 'Sandberg' },
//   { name: 'Amy', category: 'Moissinac' },
//   { name: 'Chuck', category: 'Moissinac' },
//   { name: 'Vinni', category: 'Moissinac' },
//   { name: 'Kelly', category: 'Sandberg' },
//   { name: 'Eric', category: 'Kelly' },
//   { name: 'Ana', category: 'Kelly' },
//   { name: 'Wes', category: 'Kelly' }
// ]

let organization = {
  "Zuckerberg": {
    "Schroepfer": {
      "Bosworth": {
        "Steve": {},
        "Kyle": {},
        "Andra": {}
      },
      "Zhao": {
        "Richie": {},
        "Sofia": {},
        "Jen": {}
      },
      "Badros": {
        "John": {},
        "Mike": {},
        "Pat": {}
      },
      "Parikh": {
        "Zach": {},
        "Ryan": {},
        "Tes": {}
      }
    },
    "Schrage": {
      "VanDyck": {
        "Sabrina": {},
        "Michelle": {},
        "Josh": {}
      },
      "Swain": {
        "Blanch": {},
        "Tom": {},
        "Joe": {}
      },
      "Frankovsky": {
        "Jasee": {},
        "Brian": {},
        "Margaret": {}
      }
    },
    "Sandberg": {
      "Goler": {
        "Eddie": {},
        "Julie": {},
        "Annie": {}
      },
      "Hernandez": {
        "Rowi": {},
        "Inga": {},
        "Morgan": {}
      },
      "Moissinac": {
        "Amy": {},
        "Chuck": {},
        "Vinni": {}
      },
      "Kelley": {
        "Eric": {},
        "Ana": {},
        "Wes": {}
      }
    }
  }
};


function orgChart(organization, spaces = '') {
  if (Object.keys(organization).length===0) return;
  Object.keys(organization).forEach(name=>{
    console.log(spaces+name);
    orgChart(organization[name], spaces+'  ');
  });
}
 
orgChart(organization);
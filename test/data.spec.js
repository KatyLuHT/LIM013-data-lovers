import { filterData,sortData,computeStats} from '../src/data.js';


const dataTest=[
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "egg": "2 km",
  },
  {
    "num": "002",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "egg": "5 km",
  },
  {
    "num": "003",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ],
    "spawn-chance": "0.0031",
    "egg": "not in eggs",
  },
  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  },
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  }
]

const dataResultType=[
  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  }
]

const dataResultGeneration=[
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  }
]

const dataResultEgg=[
{
  "num": "002",
  "name": "charmander",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "type": [
    "fire"
  ],
  "spawn-chance": "0.253",
  "egg": "5 km",
},
]

const dataResultSpaw=[
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  }
]

const dataResultAlphaUpward=[

  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "egg": "2 km",
  },
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  },
  {
    "num": "003",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ],
    "spawn-chance": "0.0031",
    "egg": "not in eggs",
  },
  {
    "num": "002",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "egg": "5 km",
  },

  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  },
]


const dataResultAlphafalling=[

  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  },

  {
    "num": "002",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "egg": "5 km",
  },
  {
    "num": "003",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ],
    "spawn-chance": "0.0031",
    "egg": "not in eggs",
  },
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  },

  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "egg": "2 km",
  },
]

const dataResultNumUpward=[
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "egg": "2 km",
  },
  {
    "num": "002",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "egg": "5 km",
  },
  {
    "num": "003",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ],
    "spawn-chance": "0.0031",
    "egg": "not in eggs",
  },
  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  },
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  }
]


const dataResultNumFalling=[

  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  },
  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  },
  {
    "num": "003",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ],
    "spawn-chance": "0.0031",
    "egg": "not in eggs",
  },

  {
    "num": "002",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "egg": "5 km",
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "egg": "2 km",
  },

]

const dataResultCalculate=[
  1, 20


]


//VERIFICANDO QUE SON FUNCIONES
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should return an array for "dataTest","type","water"', () => {
    expect(filterData(dataTest,"tipo","water")).toEqual(dataResultType);
  });
})

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should return an array for "dataTest","generation","johto"', () => {
    expect(filterData(dataTest,"generacion","johto")).toEqual(dataResultGeneration);
  });
})

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should return an array for "dataTest","egg","5 km"', () => {
    expect(filterData(dataTest,"huevo","5 km")).toEqual(dataResultEgg);
  });
})

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should return an array for "dataTest","aparicion","medio"', () => {
    expect(filterData(dataTest,"aparicion","Medio")).toEqual(dataResultSpaw);
  });
})




//

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  it('should return an array for "order-alpha","A-Z"', () => {
      expect(sortData(dataTest,"A-Z")).toEqual(dataResultAlphaUpward);
    });
  });

  describe('sortData', () => {
    it('is a function', () => {
      expect(typeof sortData).toBe('function');
    });
    it('should return an array for "order-falling","Z-A"', () => {
        expect(sortData(dataTest,"Z-A")).toEqual(dataResultAlphafalling);
      });
    });

    describe('sortData', () => {
      it('is a function', () => {
        expect(typeof sortData).toBe('function');
      });
      it('should return an array for "order-num-Upward","1-251"', () => {
          expect(sortData(dataTest,"1-251")).toEqual(dataResultNumUpward);
        });
      });

      describe('sortData', () => {
        it('is a function', () => {
          expect(typeof sortData).toBe('function');
        });
        it('should return an array for "order-num-falling","251-1"', () => {
            expect(sortData(dataTest,"251-1")).toEqual(dataResultNumFalling);
          });
        });

        describe('computeStats', () => {
          it('is a function', () => {
            expect(typeof computeStats).toBe('function');
          });
          it('should return an array for " calcula"', () => {
            expect(computeStats(dataTest,"flying")).toEqual(dataResultCalculate);
          });
        });


        // describe('daTest', () => {
        //   it('is a function', () => {
        //     expect(typeof computeStats).toBe('function');
        //   });
        //   it('should return an array for "order-num-falling","251-1"', () => {
        //     expect(sortData(dataTest,"251-1")).toEqual(dataResultNumFalling);
        //   });
        // });





//Mistest
// verificando que sea funciones
// describe('filterData', () => {
//   it('is a function', () => {
//     expect(typeof filterData).toBe('function');
//   });



// });

// describe('sortData', () => {
//   it('is a function', () => {
//     expect(typeof sortData).toBe('function');
//   });
// });


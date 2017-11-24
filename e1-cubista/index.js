/* config */

const POLY_SIDES = 3
const POLY_ALPHA = 0.5
const CHROMOSOMES = 100
const CHROMOSOME_MUTATION_DELTA = 100
const CHROMOSOME_COLOR_DELTA = 100
const MUTATION_PROBABILITY = 3

/* devuelve la URL de la imagen a copiar */

function getRefImageUrl() {
  return 'http://dantri4.vcmedia.vn/a3HWDOlTcvMNT73KRccc/Image/2013/11/42a-83e38.jpg';
}

function changeColor(ch) {
  const colored = Object.assign({}, ch);

  colored.color.r = rnd(255);
  colored.color.g = rnd(255);
  colored.color.b = rnd(255);

  return colored;
}

function changeSize(ch, w, h) {
  const sized = Object.assign({}, ch);
  const points = [{}, {}, {}];
  
  points[0].x = rnd(w);
  points[0].y = rnd(h);
  points[1].x = rnd(w);
  points[1].y = rnd(h);
  points[2].x = rnd(w);
  points[2].y = rnd(h);

  sized.points = points;
  
  return sized;
}

const chromosomeProto = {
  sides: 3,
  color: {r: 255, g: 255, b: 255, a: POLY_ALPHA},
  points: [{x: 0, y: 10}, {x: 0, y: 50}, {x: 30, y: 50}]
};

function generateCh (w, h) {
  let ch = Object.assign({}, chromosomeProto);
  ch = changeColor(ch);
  ch = changeSize(ch, w, h);

  return ch;
}


/* genera un individuo aleatorio */

function generateRandomIndividual(w, h) {
  const dna = {};

  for (let i = 0; i < CHROMOSOMES; i++) {
    dna[i] = generateCh(w, h);
  }

  return { dna };
}

/* inserta mutaciones en un individuo */

function mutate(individual, w, h) {
  const randIndDna = individual.dna[rnd(CHROMOSOMES)];
  const newRandIndDna = Object.assign(randIndDna);
  const {color} = randIndDna;
  const newInd = Object.assign({}, individual);
  const modColorR = color.r + sample([0, 1, 2, 3, 4]);
  const modColorG = color.g + sample([0, 1, 2, 3, 4]);
  const modColorB = color.b + sample([0, 1, 2, 3, 4]);

  // changeColor(individual.dna[rnd(CHROMOSOMES)]);
  // newInd.dna[randCh] = changeSize(newInd.dna[randCh]);

  newRandIndDna.points = [{x: rnd(w), y: rnd(h)}, {x: rnd(w), y: rnd(h)}, {x: rnd(w), y: rnd(h)}];
  newRandIndDna.color = {r: modColorR, g: modColorG, b: modColorB, a: POLY_ALPHA};

  newInd.dna = newRandIndDna;

  return newInd;
}

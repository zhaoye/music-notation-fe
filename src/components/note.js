
basicNotes = [
  {
    id: 1,
    note: 'c',
    name: 'do'
  },
  {
    id: 2,
    note: 'd',
    name: 're'
  },
  {
    id: 3,
    note: 'e',
    name: 'mi'
  },
  {
    id: 4,
    note: 'f',
    name: 'fa'
  },
  {
    id: 5,
    note: 'g',
    name: 'so'
  },
  {
    id: 6,
    note: 'a',
    name: 'la'
  },
  {
    id: 7,
    note: 'b',
    name: 'si'
  }
]

getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min) 
}

getRandomNote = () => {

}

export default {
  getRandomNote
}
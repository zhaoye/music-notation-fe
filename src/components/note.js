
const basicNotes = [
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

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) 
  //The maximum is inclusive and the minimum is inclusive
}

const getNoteByID = (id) => {
  for (const note of basicNotes) {
    if(note.id === id){
      return note
    }
  }
  return null
}

export const getRandomNote = () => {
  const level = getRandomIntInclusive(3,6)
  console.log(level)
  let noteId = null
  if(level >= 4 && level <= 5){
    noteId = getRandomIntInclusive(1,7)
  }else if(level < 4){
    noteId = getRandomIntInclusive(5,7)
  }else if(level > 5){
    noteId = getRandomIntInclusive(1, 2)
  }
  console.log(noteId)
  const basicNote = getNoteByID(noteId)
  console.log(basicNote)
  return {
    keys: basicNote.note + '/' + level
  }
}

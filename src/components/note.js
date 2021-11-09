
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
  const noteId = getRandomIntInclusive(1,7)
  console.log(noteId)
  const basicNote = getNoteByID(noteId)
  console.log(basicNote)
  const level = getRandomIntInclusive(4,5)
  console.log(level)
  return {
    keys: basicNote.note + '/' + level
  }
}

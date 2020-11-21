let object = {
    name: 'Link',
    hearts: 10,
    isZelda: false,
    weapon: {sword: 'Master Sword'}
  }
  let value = object.name;
  if (typeof value === 'string'){
    console.log('This value is a string')
  } else if (typeof value === 'number') {
    console.log('This value is a number')
  } else if (typeof value === 'boolean'){
    console.log('This value is a boolean')
  } else if (typeof value === 'object'){
    console.log('This value is an object')
  } else {
   console.log('What are you?!')
  }
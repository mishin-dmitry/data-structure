function hashString(input) {
  return input.split("").reduce((acc, cur) => (
    acc += cur.charCodeAt(0)
  ), 0)
}

function hashInt(input) {
  const result = input.split("").reduce((acc, cur) => (
    acc = (typeof acc === 'string' ? +acc : acc) * +cur
  ))

  return `${input.split("").join('*')}=${result}`
}

class Student {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
}

function hashStudent(input) {
  const nameHash = hashString(input.name)
  const ageHash = hashInt(input.age)
  
  return hashString(nameHash + ageHash)
}
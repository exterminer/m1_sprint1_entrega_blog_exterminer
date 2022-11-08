const listDepartment = [
  {
    departamentName: 'Financial',
    employees:
      [
        {
          name: 'Rose',
          age: 26,
          responsibility: 'Financial director',
          salary: 5600
        },
        {
          name: 'Stevem',
          age: 32,
          responsibility: 'Financial manager',
          salary: 4200
        },
        {
          name: 'Beca',
          age: 26,
          responsibility: 'Financial analyst',
          salary: 2800
        }
      ],
    working: true
  },
  {
    departamentName: 'expedition',
    employees:
      [
        {
          name: 'Rooper',
          age: 35,
          responsibility: 'Expedition director',
          salary: 5600
        },
        {
          name: 'Maggie',
          age: 22,
          responsibility: 'Expedition manager',
          salary: 4200
        },
        {
          name: 'Thompson',
          age: 41,
          responsibility: 'Expedition analyst',
          salary: 2800
        }
      ],
    working: true
  },
  {
    departamentName: 'capitation',
    employees:
      [
        {
          name: 'Saory',
          age: 35,
          responsibility: 'Capitation director',
          salary: 5600
        },
        {
          name: 'Silvia',
          age: 22,
          responsibility: 'Capitation manager',
          salary: 4200
        },
        {
          name: 'Sonem',
          age: 41,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Havi',
          age: 41,
          responsibility: 'Trainee Capitation manager',
          salary: 1500
        },
        {
          name: 'Margie',
          age: 25,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Victoria',
          age: 18,
          responsibility: 'Trainee Capitation analyst',
          salary: 1500
        }
      ],
    working: true
  },
]


function howManyDepartments() {
  for (let i = 0; i < listDepartment.length; i++) {
    console.log(listDepartment[i].departamentName)
  }
}


function ChangeDepartmentName(name, newName) {
  name = 'Financial'
  for (let i = 0; i < listDepartment.length; i++) {
    if (name == listDepartment[i].departamentName) {
      name = newName
      return name
    } else {
      return ('Departament not found')
    }
  }
}


ChangeDepartmentName('Financial', 'finance')


function giveTheDepartmentABreak(folga) {
  for (let i = 0; i < listDepartment.length; i++) {
    if (folga == listDepartment[i].departamentName) {
      if (listDepartment[i].working == true) {
        return 'Podem ir descansar'
      } else if (listDepartment[i].working == false) {
        return 'Voltem ao trabalho'
      }
      
    } else {
      return 'Departament not found'
    }
  }
  
}
console.log(giveTheDepartmentABreak('Financial'))


function insertNewDepartament(name) {
  listDepartment.push({
    departamentName: name,
    employees: [],
    working: true
  })
  
}

console.log(insertNewDepartament('marketing'))


function insertNew(obj,funcionario,idade,funcao,salario){
  for(let i = 0; i < listDepartment.length; i++ ){
    
    if(obj == listDepartment[i].departamentName){
       return listDepartment[i].employees.push({
        name: funcionario,
        age: idade,
        responsibility:funcao,
        salary: salario
      })
    }else{
      'Nao foi encontrado '
    }
  } 
}

insertNew('marketing','Igor',24,'Dev',4000)
insertNew('marketing','Igor',24,'Dev',4000)


console.log(listDepartment)


function howManyEmployeesInDepartament(obj){
 for(let i = 0; i < listDepartment.length; i++ ){
    if(obj == listDepartment[i].departamentName){
       return listDepartment[i].employees.length
    }
  } 
  return 'Departament not found'
}

console.log(howManyEmployeesInDepartament('marketing'))
  

function  departamentPayrollCalculation(obj){
  let soma = 0 
  for(let i = 0; i < listDepartment.length; i++ ){
    if(obj == listDepartment[i].departamentName){
       for(let j = 0; j < listDepartment[i].employees.length ;j ++){
         soma += listDepartment[i].employees[j].salary
        } 
      }
    } 
    return (soma)
  
}

console.log(departamentPayrollCalculation('Financial'))


function isTheDepartamentYoungOrOld(obj){
  let soma = 0
  let media = 0    
  for(let i = 0; i < listDepartment.length; i++ ){
    if(obj == listDepartment[i].departamentName){
       for(let j = 0; j < listDepartment[i].employees.length ;j ++){
         soma += listDepartment[i].employees[j].age
         media = soma/listDepartment[i].employees.length
        } 
      }
    }
    
  if (media < 35){
    return 'A media esta abaixo de 35 esse departamento e jovem'

  }else if( media > 35){
    return'esse departamento esta acima de 35 é experiente'
  }
}

console.log(isTheDepartamentYoungOrOld('Financial'))
function createEmployeeRecord (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3], 
        timeInEvents: [],
        timeOutEvents: [], 
    }
}
function createEmployeeRecords (employees) {
   //console.log(employees)
    const records = employees.map((employee) => createEmployeeRecord(employee))
    return records
}
 function createTimeInEvent(employeeRecord, dateStamp) {
//2014-02-28 1400
    //console.log(employeeRecord)
    let hour = dateStamp.split(" ")[1]

    employeeRecord.timeInEvents.push( {
         type: "TimeIn",
         hour: parseInt(hour),
         date: dateStamp.split(" ")[0],  
     })
      return employeeRecord 
 
    
    }

    function createTimeOutEvent(employeeRecord, dateStamp) {
       // console.log(employeeRecord)
       let hour = dateStamp.split(" ")[1]
            employeeRecord.timeOutEvents.push ({
                 type: "TimeOut",
                 hour: parseInt(hour),
                 date: dateStamp.split(" ")[0],  
             })
             return employeeRecord
         
            
            }

let  hoursWorkedOnDate = function (employeeRecord, dateStamp) {
  let inTime = employeeRecord.timeInEvents.find(function (e) {
      return e.date === dateStamp
  })
   
  let outTime = employeeRecord.timeOutEvents.find(function (e) {
      return e.date === dateStamp
  })
  return (outTime.hour - inTime.hour) / 100 
}

function wagesEarnedOnDate (employeeRecord, dateStamp) {
    let pay = employeeRecord.payPerHour
    return (hoursWorkedOnDate(employeeRecord, dateStamp) * pay)
}

function allWagesFor (employeeRecord) {
//console.log(employeeRecord.date)
let array = []
employeeRecord.timeInEvents.forEach(element => array.push(element.date))
const initialValue = 0;
const sumWithInitial = array.reduce(
  (previousValue, currentValue) => previousValue + wagesEarnedOnDate (employeeRecord, currentValue),
  initialValue
);
return sumWithInitial
}

function calculatePayroll (employeeRecord) {
    const initialValue = 0;
    const sumWithInitial =  employeeRecord.reduce(
      (previousValue, currentValue) => previousValue + allWagesFor (currentValue),
      initialValue
    );
    return sumWithInitial
}

function findEmployeeByFirstName(employees, firstName) {
    console.log(employees)
}

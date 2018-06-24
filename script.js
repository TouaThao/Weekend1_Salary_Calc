$(document).ready( ReadyNow );



class Worker{
    constructor(firstName, lastName, ID, title, salary){
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = ID;
      this.title = title;
      this.salary = salary;
    }
}


const Employee = []


function ReadyNow(){
    addClickHandlers()
    for( let Employ of Employee){
        let $row = $('<tr></tr>')
        $row.append('<td>'+ Employ.FirstName +'</td>');
        $row.append('<td>'+ Employ.lastName +'</td>');
        $row.append('<td>'+ Employ.ID +'</td>');
        $row.append('<td>'+ Employ.Title +'</td>');
        $row.append('<td>'+ Employ.AnnualSalary+'</td>');
        $('#EmpInfo').append($row)

    }
 
}

function addClickHandlers(){
    $('#submit').on('click', addBtn)
    $('tbody').on('click', '#delBtn', rmvBtn)
}


function addBtn(){
    Employee.push(new Worker($('#Name').val(),$('#LastName').val(),$('#EmpID').val(),$('#Title').val(),$('#Annual').val()))
    let Name = $('#Name').val()
    let LastName = $('#LastName').val()
    let EmpID = $('#EmpID').val()
    let Title = $('#Title').val()
    let Annual = $('#Annual').val()
    addRow(Name,LastName,EmpID,Title,Annual)
    clearInput()
    CostCal()
}

function CostCal(){
    let Total = 0
    for (let i = 0; i < Employee.length; i++) {
        Total += Employee[i].salary / 12
        
    }
        if (Total < 20000) {
            $('#Total').text(Total.toFixed(2));
        }  else if (Total > 20000){
            $('#Total').text(Total.toFixed(2)).css("background", "red")
        }
       


}



function clearInput(){
    $('#Name').val('')
    $('#LastName').val('')
    $('#EmpID').val('')
    $('#Title').val('')
    $('#Annual').val('')
}

function addRow(Name,LastName,EmpID,Title,Annual){
    let $row1 = $('<tr></tr>');
    $row1.append(`<td id = "name">${Name}</td>`);
    $row1.append(`<td>${LastName}</td>`);
    $row1.append(`<td>${EmpID}</td>`);
    $row1.append(`<td>${Title}</td>`);
    $row1.append(`<td>${Annual}</td>`);
    $row1.append(`<td><button id="delBtn" value ="${EmpID}">Delete</button></td>`);
    $('#EmpInfo').append($row1)
    
}

function rmvBtn(){
   $(this).parent().parent().remove();
   $(this).val()
   let employIndex = -1
   for (let i = 0; i < Employee.length; i++) {
        if (Employee[i].EmpID == $(this).val() ) {
            employIndex = i 
            break
        }
   } Employee.splice(employIndex, 1)
   CostCal()
}


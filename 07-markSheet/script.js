let myForm = document.getElementById('myForm');
let btn = document.getElementById('btn');
const tableBody = document.getElementById('tableBody')
let per = document.getElementById('per')
let input = document.querySelectorAll('input');
let mark = document.querySelectorAll('.mark')
let tMark = document.getElementById('tMark')
let division = document.getElementById('division');
let download = document.getElementById('download')

let formLogic = document.querySelector('.form');
let tableLogic = document.querySelector('.table');


myForm.addEventListener('submit', (event) => {
    event.preventDefault()

    hindi = parseInt(event.target.Hindi.value);
    eng = parseInt(event.target.English.value);
    math = parseInt(event.target.Math.value);
    che = parseInt(event.target.Chemistry.value);
    phy = parseInt(event.target.Physics.value);

    let totalNumber;

    if ((hindi > 100) || (eng > 100) || (math > 100) || (che > 100) || (phy > 100)) {
        alert('Wrong Input field !!')

    } else {
        totalNumber = hindi + eng + math + che + phy;
        formLogic.classList.remove('active')
        formLogic.classList.add('inActive')
        tableLogic.classList.remove('inActive')
        tableLogic.classList.add('active')
    }

    let percentage = (totalNumber * 100) / 500;

    tMark.innerText = totalNumber;
    per.innerText = percentage+'%';

    if(percentage >= 80){
        division.innerText = 'Pass/1st Division'
    } else if(percentage >= 50){
        division.innerText = 'Pass/2nd Division'
    } else if(percentage >= 33){
        division.innerText = 'Pass/3rd Division'
    } else{
        division.innerText = 'Fail/No Division'
    }

    mark[0].innerText = hindi;
    mark[1].innerText = eng;
    mark[2].innerText = math;
    mark[3].innerText = che;
    mark[4].innerText = phy;

    event.target.reset();

})
download.addEventListener('click',()=>{
    window.print()
})
document.querySelector('.download').addEventListener('click',()=>{
    formLogic.classList.add('active')
    formLogic.classList.remove('inActive')
    tableLogic.classList.add('inActive')
    tableLogic.classList.remove('active')
})

// inpData.forEach((item, i)=>{
//     let newTr = `<tr>
//     <td>${i+1}</td>
//     <td>${item.name}</td>
//     <td>${item.value}</td>
// </tr>`
// tableBody.innerHTML += newTr;
// })


import { staffArr } from "./staff.js";


function fillStaff(staffArr) {
let staffOutput = ''
const staffElement = document.getElementById('staff-output')

staffArr.forEach(person =>{
    staffOutput += `<article class='feature staff-card'>
                    <img src='${person.img}'/>
                    <span>${person.staffName}</span>
                    <p>${person.quickBio}</p>
                    <ul class='responsibilities-list'><ul>
                    </article>`
})

staffElement.innerHTML = staffOutput
}

fillStaff(staffArr)
import { staffArr } from "./staff.js";
import { papaArr } from "./staff.js";


function fillStaff(staffArr) {
let staffOutput = ''
const staffElement = document.getElementById('staff-output')

if (!staffElement){
    return;
}

staffArr.forEach(person =>{
    staffOutput += `<section class='feature staff-card'>
                    <div class="staff-image">
                        <img src='${person.img}'/>
                        <span class="staff-name">${person.staffName}</span>
                    </div>
                    <section class="staff-info">
                    <p>${person.quickBio}</p>
                    <ul class='responsibilities-list'><ul>
                    </section>
                    </section>`;
})

staffElement.innerHTML = staffOutput
}

function fillPapa(papaArr) {
    let refactoredArr = papaArr.slice().reverse()
    let papaOutput = ''
    const papaElement = document.getElementById('papa-output')

    if (!papaElement) {
      return;
    }

    refactoredArr.forEach(person => {
        papaOutput += `<section class='feature staff-card'>
                    <div class="staff-image">
                        <img src='${person.img}'/>
                        <span class="staff-name">${person.papaName}</span>
                        <aside class="staff-aka">${person.alsoKnown}</aside>
                    </div>
                    <section class="staff-info">
                    <p>${person.quickBio}</p>
                    <ul class='responsibilities-list'><ul>
                    </section>
                    </section>`;
    })

    papaElement.innerHTML = papaOutput
}

fillStaff(staffArr)
fillPapa(papaArr)
import { staffArr } from "./staff.js";


function fillStaff(staffArr) {
let staffOutput = ''
const staffElement = document.getElementById('staff-output')

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

fillStaff(staffArr)
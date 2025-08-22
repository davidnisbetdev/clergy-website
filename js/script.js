import { staffArr, papaArr, albums } from "./staff.js";


function fillStaff(staffArr) {
let staffOutput = ''
const staffElement = document.getElementById('staff-output')

if (!staffElement || !papaElement){
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

    if (!papaElement || !staffElement) {
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
                    </section>`
    })

    papaElement.innerHTML = papaOutput
}

function fillAlbums(albums){
    const sacredElement = document.getElementById("sacredPsalms");
    const minorElement = document.getElementById("minorPsalms");
    const ritualElement = document.getElementById("rituals");

    const sacredPsalms = albums
        .filter(item => item.category === 'sacred')
        .sort((a,b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    const minorPsalms = albums
        .filter((item) => item.category === "minor")
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    const rituals = albums
        .filter((item) => item.category === "ritualRecording")
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

    function renderAlbumCard(albumList, reqElement) {
            if(reqElement){
                let html = "";
                albumList.forEach(album => {
                    html += `<section class='feature staff-card'>
                        <div class="staff-image">
                            <img src='${album.img}'/>
                            <span class="staff-name">${album.name}</span>
                            <aside class="staff-aka">${album.releaseDate}</aside>
                        </div>
                    <section class="staff-info">
                    <p>${album.blurb}</p>
                    </section>
                    </section>`;
                })
                reqElement.innerHTML = html;
            }
        }
        renderAlbumCard(sacredPsalms, sacredElement);
        renderAlbumCard(minorPsalms, minorElement);
        renderAlbumCard(rituals, ritualElement);

}

fillStaff(staffArr)
fillPapa(papaArr)
fillAlbums(albums)

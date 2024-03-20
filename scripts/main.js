

// ******** LISTE DE VARIABLES ********

let nom = document.querySelector('#nom')
let date = document.querySelector('#date')
let description = document.querySelector('#description')
let taskDone = document.querySelector('.taskdone')
let taskList = document.querySelector('.tasklist')
let add = document.querySelector('.add')
let trier = document.querySelector('.trier')
let span = document.querySelector('span')
let checkBox = document.querySelector('.check')
let cancel = document.querySelector('.cancel')
let none = document.querySelector('.none')
let descript =document.querySelector('.descript')
let descrip =document.querySelector('.descrip')
let tableau = []
let i = 0
let task = document.querySelector('.tache')

// ******** DECLARATION DE FONCTION ET DE METHODE D OBJET ********

let tache = {
    nom: '',
    date: 0,
    description: '',
    show() {
      taskList.innerHTML += `
    <div class="tachemove" draggable="true">
        <div class="tache">
            <input type="checkbox" id="check" class="checkbox"/>
            <h4>Tâche ${i} : </h4>
            <p>${this.nom}</p>
            <p><strong>Date limite :</strong> ${this.date}</p>
            <div class="cancel">❌</div>
        </div>
        <div class="descript">
            <details>
                <summary><strong>Description</strong></summary>
                <p class="descrip">${this.description}</p>
            </details>
        </div>
    </div>`
    }
}

function spanHidden(){
    if (i>0) {
        span.classList.add("hidden")
    }   
}
function dataStorage() {
    localStorage.setItem(`index${i}`, `task${i}`)
    localStorage.setItem(`taskName${i}`, `${nom.value}`)
    localStorage.setItem(`taskDate${i}`, `${date.value}`)
    localStorage.setItem(`taskDescription${i}`, `${description.value}`)
}


// ******** APPEL DE FONCTIONS ET EVENEMENTS ********


add.addEventListener('click', ()=> {
    i++
    spanHidden()
    dataStorage()
    let tachePush = Object.create(tache)
    tachePush.nom = nom.value
    tachePush.date = date.value
    tachePush.description = description.value
    tachePush.show()
    tableau.push(tachePush)
    console.log(tableau);
    console.log(localStorage.getItem(`index${i}`))
    console.log(localStorage.getItem(`taskName${i}`))
    console.log(localStorage.getItem(`taskDate${i}`))
    console.log(localStorage.getItem(`taskDescription${i}`))
    nom.value = ""
    date.value = ""
    description.value = ""
    
})

// Event qui ajoute la tache à la liste des taches faites, et la retire des taches à faire

taskList.addEventListener('click', (event)=> {  
    if (event.target.classList.contains('checkbox')) {
        none.remove()
        taskDone.innerHTML += event.target.parentElement.parentElement.innerHTML
        event.target.parentElement.parentElement.remove()
    }
})

// Event qui retire la tache à faire de la liste

taskList.addEventListener('click', (event)=> {
    if (event.target.classList.contains('cancel')) {
        event.target.parentElement.parentElement.remove()
    }
})



taskDone.addEventListener('click', (event)=> {
    if (event.target.classList.contains('cancel')) {
        event.target.parentElement.nextElementSibling.remove()
        event.target.parentElement.remove()
    }
})


trier.addEventListener('click', ()=> {
    let tri = tableau.sort(function(a,b){
        return a.date - b.date
    })
    console.log(tri)
})


// Brouillon

// .nextElementSibling
// .previsouElementSibling
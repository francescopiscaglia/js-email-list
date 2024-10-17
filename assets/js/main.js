// seleziono l'elemento dalla DOM
const listEl = document.querySelector(".container > ol");
// console.log(listEl);

const buttonEl = document.querySelector(".navbar .btn");
// console.log(buttonEl);


// event listener
buttonEl.addEventListener("click", () => {
    listEl.innerHTML = "";

    for (let i = 0; i < 10; i++) {
    
        // faccio la chiamata all'API di boolean
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        
        // quando il risultato è pronto lo richiamo nella funzione response
        .then(response => {
    
            // salvo response.data, ovvero la email generata in una costante e il valore booleano true 
            const result = response.data
            // console.log(result);
    
            // salvo la mail 
            const resultEmail = result.response;
            // console.log(resultEmail);
    
            const listItemEl = document.createElement("li");
            listItemEl.classList.add("list-group-item")
            listItemEl.innerText = resultEmail
    
            listEl.appendChild(listItemEl);
        })
        .catch(error => console.error(error))
    };
});



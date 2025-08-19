// ❗️ MILESTONE 1 ❗️ //

/*
📌 Milestone 1: Inserire un Componente React
Monta un componente React all’interno dell’elemento con classe .lista-animali.

Il componente deve includere:
Un elemento <details> con titolo "Animali", che contiene:
Una lista <ul> statica che viene creata a partire da un array di stringhe (animals) dove ciascuna stringa rappresenta il nome di un animale.

Obiettivo: Mostrare la struttura base della lista di animali con un <details> che può essere espanso o contratto.
*/

// ❗️ ESECUZIONE LOGICA MILESTONE 1 ❗️ //

// array degli animali //

const animals = [
    "cane",
    "gatto",
    "pappagallo",
    "coniglio",
    "criceto",
    "tartaruga",
    "pesce rosso"
];

// componente react per la lista degli animali //

function ListaAnimali() {
    return (
        <details>
            <summary>animali</summary>
            <ul>
                {animals.map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))}
            </ul>
        </details>
    );
}

// monto il componente nell'elemento con la classe .lista-animali //

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.lista-animali');
    if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(<ListaAnimali />)
    }
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ❗️ MILESTONE 2 ❗️ //

/*
📌 Milestone 2: Aggiungere Animali Casuali
Trasforma l’array animals usando useState (l’array è inizialmente vuoto).
Aggiungi un bottone "Aggiungi Animale" sopra il details.
Cliccando il bottone, un animale casuale viene aggiunto alla lista.
Usa un array predefinito per scegliere casualmente:

const animalsChoices = ["Cane", "Gatto", "Pappagallo", "Cavallo", "Panda"];

L’animale selezionato deve essere aggiunto all’interno della lista <ul> come <li>.

Obiettivo: L’utente può vedere gli animali aggiunti dinamicamente nella lista.
*/


// ❗️ ESECUZIONE LOGICA MILESTONE 2 ❗️ //

// array per la scelta casuale //
const animalsChoices = ["Cane", "Gatto", "Pappagallo", "Cavallo", "Panda"];

// componente per la lista di animali //
function ListaAnimali() {
    // useState per gestire l'array degli animali //
    const [amimals, setAnimals] = React.useState([]);

    // funzione per aggiungere un animale casuale //
    const aggiungiAnimale = () => {
        const randomIndex = Math.floor(Math.random() * animalsChoices.length);
        const animaleCasuale = animalsChoices[randomIndex];
        setAnimals(prevAnimals => [...prevAnimals, animaleCasuale]);
    };

    return (
        <div>
            <button onClick={aggiungiAnimale}>aggiungi animale</button>
            <details>
                <summary>Animali</summary>
                <ul>
                    {animals.map((animal, index) => (
                        <li key={index}>{animal}</li>
                    ))}
                </ul>
            </details>
        </div>
    );
}

// monto il componente nell'elemento con la classe .lista-animali //

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.lista-animali');
    if (container) {
        const root = ReactDOM.createRoot(container);
        root.render (<ListaAnimali/>);
    }
});



// ❗️ MILESTONE 3 ❗️ //

/*
📌 Milestone 3: Usare una Modale per Aggiungere Animali
Partendo da questo componente Modal:

function Modal({
      title,
      content,
      show = false,
      onClose = () => {}
  }){
      return show && ReactDOM.createPortal(
          <div className="modal-container">
              <div className="modal">
                  <h2>{title}</h2>
                  <p>{content}</p>
                  <button onClick={onClose}>Annulla</button>
              </div>
          </div>,
          document.body
      )
  }

  .modal-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal{
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}


Espandilo affinché:

La vecchia prop content può essere usata per passare un componente qualsiasi.
Un nuovo div in fondo alla modale contiene il bottone Annulla e un nuovo bottone Conferma.
Una nuova prop onConfirm si aspetta una funzione per gestire l’azione di conferma.
Sostituisci l’aggiunta casuale dell’animale con una modale interattiva:
Cliccando il bottone "Aggiungi Animale," si apre una modale.
La modale include un input di testo (passato al prop content) per inserire il nome di un animale.
Conferma: Aggiunge l’animale alla lista e chiude la modale.
Annulla: Chiude la modale senza modificare la lista.

Obiettivo: L’utente può aggiungere animali specifici utilizzando la modale.
*/


// ❗️ ESECUZIONE LOGICA MILESTONE 3 ❗️ //
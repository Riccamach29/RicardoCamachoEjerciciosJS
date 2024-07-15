let arrayNotas = [
    {
        id: "1",
        titulo: "sacar la basura",
        texto: "mi mama me va a retar si no lo hago",
        realizada: false
    },
    {
        id: "2",
        titulo: "comprar ropa",
        texto: "mi hermano me pidio que comprara una camisa",
        realizada: false
    }
];

let idGlobal = 2;

let saveButton = document.getElementById('saveButton');
let clearButton = document.getElementById('clearButton');
let notesContainer = document.getElementById('notesContainer');
let noteTitleInput = document.getElementById('noteTitle');
let noteContentInput = document.getElementById('noteContent');
let filtroTextoInput = document.getElementById('filtroTexto');
let filtroRealizadas = document.getElementById('filtroRealizadas');

function pintarNotas() {
    notesContainer.innerHTML = ''; 
    let notasFiltradas = arrayNotas;

    
    const textoFiltro = filtroTextoInput.value.trim().toLowerCase();
    if (textoFiltro) {
        notasFiltradas = filtrarPorTexto(notasFiltradas, textoFiltro);
    }

    if (filtroRealizadas.checked) {
        notasFiltradas = filtrarPorRealizada(notasFiltradas);
    }

    if (notasFiltradas.length === 0) {
        const mensaje = document.createElement('div');
        mensaje.classList.add('col-md-12', 'text-center', 'mt-3', 'alert', 'alert-info');
        mensaje.textContent = 'NO HAY NOTAS PARA MOSTRAR';
        notesContainer.appendChild(mensaje);
    } else {
        notasFiltradas.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('col-md-4', 'mb-3');
            noteElement.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${note.titulo}</h5>
                        <p class="card-text ${note.realizada ? 'text-decoration-line-through' : ''}">${note.texto}</p>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="check${note.id}" onclick="marcarRealizada('${note.id}')" ${note.realizada ? 'checked' : ''}>
                            <label class="form-check-label" for="check${note.id}">
                                Realizada
                            </label>
                        </div>
                        <button type="button" class="btn btn-danger btn-sm mt-2" onclick="borrarNota('${note.id}')">Borrar Nota</button>
                    </div>
                </div>
            `;
            notesContainer.appendChild(noteElement);
        });
    }
}


function agregarNota(titulo, texto) {
    idGlobal++;
    const newNote = {
        id: idGlobal.toString(),
        titulo: titulo,
        texto: texto,
        realizada: false
    };
    arrayNotas.push(newNote);
}


function marcarRealizada(id) {
    const nota = arrayNotas.find(note => note.id === id);
    nota.realizada = !nota.realizada;
    pintarNotas();
}


function borrarNota(id) {
    arrayNotas = arrayNotas.filter(note => note.id !== id);
    pintarNotas();
}


function filtrarPorTexto(notas, texto) {
    return notas.filter(nota =>
        nota.titulo.toLowerCase().includes(texto) ||
        nota.texto.toLowerCase().includes(texto)
    );
}


function filtrarPorRealizada(notas) {
    return notas.filter(nota => nota.realizada);
}


pintarNotas();


saveButton.addEventListener('click', () => {
    const noteTitle = noteTitleInput.value;
    const noteContent = noteContentInput.value;

    if (noteTitle && noteContent) {
        agregarNota(noteTitle, noteContent);
        pintarNotas();
   
    } else {
        alert('Por favor, completa todos los campos.');
    }
});


clearButton.addEventListener('click', () => {
    noteTitleInput.value = '';
    noteContentInput.value = '';
});
filtroTextoInput.addEventListener('input', () => {
    pintarNotas();
});


filtroRealizadas.addEventListener('change', () => {
    pintarNotas(); 
});




















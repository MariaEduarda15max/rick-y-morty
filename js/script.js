// Seleccionamos el botón y el contenedor
const button = document.getElementById('loadrym');
const container = document.getElementById('contenedor');

// Función para cargar datos desde la API
const fetchData = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        
        // Limpiamos el contenedor
        container.innerHTML = '';

        // Iteramos sobre los personajes
        data.results.forEach(character => {
            // Creamos una tarjeta para cada personaje
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');
            card.innerHTML = `
                <div class="card">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Estado: ${character.status}</p>
                        <p class="card-text">Especie: ${character.species}</p>
                    </div>
                </div>
            `;
            container.appendChild(card); // Añadimos la tarjeta al contenedor
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        container.innerHTML = '<p>Error al cargar los datos.</p>';
    }
};

// Agregamos el evento al botón
button.addEventListener('click', fetchData);

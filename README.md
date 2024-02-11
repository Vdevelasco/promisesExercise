# Promesas y Async/Await
Esta es una página simple que devuleve requests hechas a una api de pokemon
## Link
https://vdevelasco.github.io/promisesExercise/
## Funcionamiento
### HTML
La estructura de la página es muy sencilla, un contenedor con un header, una imagen, un cuerpo de texto, un textInput y un botón
### CSS
El css estiliza ligeramente el botón y centra la estructura de la página
### JS
- getPokemon es una función asíncrona que se encarga de establecer conexión y comunicarse con la api
- displayData es una función que incorpora los datos recibidos (si todo ha ido bien) en el html, editando su contenido
- fetchData es la función principal que llama a las otras y gestiona la lógica entre ellas

En caso de que no se pueda conectar a la API se recibirá por consola el siguiente error: "Failed to connect to the API"

En caso de que no se pueda encontrar un pokémon se recibirá por consola el siguiente error: "Failed to fetch a Pokémon from the API"

Los dos casos anteriores corresponden a fallos dentro de la función "getRandomPokemon"

En caso de que haya algún error llamando a ésta función se imprimirá el mensaje "Error fetching data, couldn\'t find a pokemon with that ID."

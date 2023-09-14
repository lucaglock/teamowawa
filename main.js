document.getElementById("mostrarFotos1").addEventListener("click", function () {
    const contenedor = document.querySelector(".contenedor-imagenes");



    // Función para obtener una posición aleatoria en el eje X
    function posicionAleatoriaX(max) {
        return Math.floor(Math.random() * max);
    }

    // Crear y agregar imágenes al contenedor
    for (let i = 1; i <= 6; i++) {
        const imagen = document.createElement("img");
        imagen.src = `assets/gato${i}.png`; // Reemplaza con la ruta de tus imágenes
        imagen.classList.add("imagen");

        // Posición aleatoria en el eje X (a lo ancho de la pantalla)
        const x = posicionAleatoriaX(window.innerWidth - 100); // 100 es el ancho de la imagen

        // Establecer la posición inicial de la imagen en la parte superior de la pantalla
        imagen.style.left = `${x}px`;
        imagen.style.top = "0";

        // Voltear horizontalmente aleatoriamente (50% de probabilidad)
        if (Math.random() < 0.5) {
        imagen.style.transform = "scaleX(-1)";
        }

        contenedor.appendChild(imagen);
    }
});


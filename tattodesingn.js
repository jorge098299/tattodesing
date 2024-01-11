document.addEventListener("DOMContentLoaded", function() {
    const toggleLoginBtn = document.getElementById("toggleLoginBtn");
    const loginForm = document.getElementById("loginForm");
    const loginBtn = document.getElementById("loginBtn");

    toggleLoginBtn.addEventListener("click", function() {
        // Cambia la visibilidad del formulario al hacer clic en el botón
        loginForm.classList.toggle("hidden");
    });

    loginBtn.addEventListener("click", function() {
        const username = loginForm.elements.username.value;
        const password = loginForm.elements.password.value;

        // Verificación de usuario y contraseña (implementar seguridad adecuada en producción)
        if (username === "usuario" && password === "contraseña") {
            alert("Inicio de sesión exitoso. ¡Bienvenido!");
            // Aquí podrías redirigir a la página de inicio de sesión exitoso u otras acciones.
        } else {
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    });
});
function changeContent(page) {
    const dynamicContent = document.getElementById("dynamicContent");

    // Cambiar el contenido según la página seleccionada
    switch (page) {
        case 'Inicio':
            dynamicContent.innerHTML = `
                <h2>Bienvenido a TattoDesign</h2>
                <p>Explora nuestra increíble colección de diseños de tatuajes. Encuentra la inspiración para tu próxima obra de arte corporal.</p>
            `;
            break;
        case 'Galeria':
            dynamicContent.innerHTML = `
                <!-- Aquí puedes colocar tu contenido de la galería (imágenes, descripciones, etc.) -->
                <h2>Galería de Tatuajes </h2>
                <img src="/proyecto%20integrador/imajenes/i1.jpg" alt="Tatuaje 1"  width="300" height="200">
                <img src="file:///E:/proyecto%20integrador/imajenes/i2.jpeg" alt="Tatuaje 2"  width="300" height="200">
                <img src="/proyecto%20integrador/imajenes/i3.jpeg" alt="Tatuaje 3" width="300" height="200">
                <img src="/proyecto%20integrador/imajenes/i4.jpeg" alt="Tatuaje 4"  width="300" height="200">
                <img src="/proyecto%20integrador/imajenes/i5.jpeg" alt="Tatuaje 5"  width="300" height="200">
                <img src="/proyecto%20integrador/imajenes/i6.jpeg" alt="Tatuaje 6"  width="300" height="200">

                <!-- Agrega más imágenes según sea necesario -->
            `;
            break;
        case 'Servicios':
            dynamicContent.innerHTML = `
                <!-- Aquí puedes colocar información sobre tus servicios -->
                <h2>Nuestros Servicios</h2>
                <p>Ofrecemos una variedad de servicios, desde diseño de tatuajes personalizados hasta piercings y más.</p>
            `;
            break;
        case 'Contacto':
            dynamicContent.innerHTML = `
                <!-- Agrega tu formulario de contacto u otra información de contacto aquí -->
                <h2>Contacto</h2>
                <p>¡Contáctanos para más información!</p>
            `;
            break;
        default:
            break;
    }
}

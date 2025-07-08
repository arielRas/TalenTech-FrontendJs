# 📱 E-Shop - Proyecto Final | TalentoTech

Este proyecto es la **preentrega final** del curso [**Frontend JS**](https://talentotech.bue.edu.ar/#/) dictado por **TalentoTech**.  
Consiste en una tienda e-commerce especializada en **smartphones**, desarrollada con tecnologías del frontend moderno: HTML, CSS y JavaScript.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|-------------|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="24"/> **HTML5** | Estructura semántica de todo el contenido. |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="24"/> **CSS3** | Estilización visual, responsividad, hover effects y animaciones. |
| 🎨 **Flexbox & Grid** | Distribución y alineación responsive de elementos clave como cards, formularios y layout general. |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="24"/> **JavaScript (vanilla)** | Lógica de negocio: renderizado de productos, carrito dinámico, paginación, eventos, interacción con una API. |
| 🌐 **Fetch API** | Consulta de productos reales desde la API pública [dummyjson.com](https://dummyjson.com/). |
| 💾 **LocalStorage** | Persistencia del carrito de compras en el navegador. |
| 📱 **Media Queries** | Adaptación total a dispositivos móviles, incluyendo menú hamburguesa. |
| 🧾 **Formspree** | Envío de datos del formulario de contacto sin backend propio. |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="24" /> **GitHub Pages** | Hosting gratuito del sitio como página estática. |

---

## ✅ Funcionalidades Implementadas

- ✅ Estructura base del sitio con `HTML5`.
- ✅ Estilos personalizados, modularizados en `common.css` y `style.css`.
- ✅ Diseño **responsive** completo.
- ✅ Sección de **catálogo** con productos renderizados desde API.
- ✅ Lógica de **carrito de compras** persistente con `LocalStorage`.
- ✅ Control de **cantidades**, **paginación**, y **botones interactivos**.
- ✅ Formulario de contacto validado, con envío real mediante **Formspree**.
- ✅ Animaciones visuales suaves y feedback de acciones.
- ✅ Navegación clara, logo, menú hamburguesa y enlaces sociales.
- ✅ Separación de responsabilidades por archivo (`HTML`, `CSS`, `JS`).

---

## 📁 Estructura del Proyecto
```
TalenTech-FrontendJs/
├── img/
├── css/
│ ├── common.css
│ └── style.css
├── js/
│ ├── common.js
│ ├── kart.js
│ └── products.js
├── pages/
│ ├── carrito.html
│ ├── catalogo.html
│ └── contact.html
├── index.html
└── README.md
```
---


## 🌐 Hosting

El sitio se encuentra desplegado en **GitHub Pages**:  
🔗 [https://arielras.github.io/TalenTech-FrontendJs/](https://arielras.github.io/TalenTech-FrontendJs/)

---

## 📌 Notas Finales

Este proyecto representa una **versión funcional de un e-commerce** en su etapa inicial. Se buscó aplicar todas las buenas prácticas enseñadas en el curso: semántica, separación de capas, accesibilidad básica, y una experiencia de usuario fluida.

En futuras etapas se podrá:
- Integrar un backend real.
- Agregar sistema de login.
- Gestionar stock.
- Añadir categorías y filtros avanzados.
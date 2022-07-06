##  Bienvenido al repositorio de mi proyecto de Ecommerce
**Instalación**
Instalar Node Js y una vez clonado el repositorio debes ejecutar el comando:
*npm install*

Dicho comando instalará los los módulos necesarios y se creará la carpeta: *node_modules*

# EcommerceFede.md
#### Introducción
El proyecto es el resultado final del curso de React js en Coderhouse.
El mismo consiste en el desarrollo de un Ecommerce usando React js.

#### Desarrollo
Se utiliza *create-react-app* para el desarrollo de la aplicación.

Para el ruteo se utiliza *react-router-dom*.

Los estilos se implementan utilizando *sass*.
Se utiliza la dependencia  *@mui/icons-material* para los iconos.

El backend se realiza con *firebase*.

#### Contenido
Carpetas:
- public: contiene imágenes y contenido multimedia.
- src:
	- components: componentes específicos de la app.
	- context: contiene los componentes de contextos para el carrito y el buscador.
	- Layout: componentes generales de Layout.
	- pages: páginas de ruteo.
	- scss: archivo *index.scss *principal y subcarpeta con los *partials*.
	- services: archivo *products.services.js* dentro del cual se hacen los llamados a la base de datos de *firestore*.
	- utils: archivo *firebaseConfig.js* para la configuración básica de *firebase*.


![](/public/logoOscuroVerticalFede.png)
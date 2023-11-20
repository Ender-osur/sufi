# sufi
Prueba técnica para el cargo de desarrollador frontend junior para empresa colombiana

# Descripción del Proyecto:

Este proyecto es una aplicación web desarrollada con React y React Router que incluye páginas de login (LoginPage), visualización de datos (DataPage), y registro de usuarios (RegisterPage). Además, se utiliza un componente llamado SimpleTable para mostrar datos tabulares de manera eficiente.

# LoginPage:

La página de login presenta un formulario de inicio de sesión con campos para el usuario y la contraseña.
Se utilizan efectos visuales, como imágenes y estilos gráficos, para mejorar la presentación y la estética de la página.
Incluye enlaces para recuperar la contraseña y redirigir a la página de registro.
La función handleLogin se activa al hacer clic en el botón "INGRESAR" y redirige al usuario a la página de datos (/data).

# DataPage:

La página de datos muestra información detallada, como fecha y hora, número de desembolso, tipo de documento, número de documento y monto.
Incluye un encabezado de navegación con opciones como cerrar sesión y descargar datos.
Se utiliza el componente SimpleTable para visualizar la tabla de datos, y se agrega paginación con el componente Pagination.
Los filtros permiten al usuario refinar la visualización de los datos según diferentes criterios.

# RegisterPage:

La página de registro presenta un formulario para que los usuarios creen nuevas cuentas.
Incluye campos para nombre de usuario, correo electrónico y contraseña, con la opción de confirmar la contraseña.
Los usuarios pueden cancelar el proceso de registro y regresar a la página de inicio de sesión (LoginPage).
SimpleTable:

Este componente se encarga de renderizar una tabla eficiente con la librería @tanstack/react-table.
Realiza una solicitud (fetch) a una API para obtener datos iniciales.
Define encabezados personalizados y construye columnas basadas en esos encabezados.
Utiliza la librería @tanstack/react-table para gestionar y renderizar eficientemente tablas con grandes cantidades de datos.
Se actualiza dinámicamente con los datos obtenidos de la API.
En general, el proyecto utiliza React y React Router para crear una experiencia de usuario fluida, permitiendo a los usuarios iniciar sesión, ver datos tabulares, registrarse y realizar acciones relacionadas con la administración comercial. La implementación de estilos y elementos visuales mejora la presentación de las páginas.
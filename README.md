# Assesment-Back

Se realizo el desarrollo de un servidor (backend) para la aplicacion
solicitada, con la cual se permite a un usuario crear unos favoritos
y listarlos.

Utilizando NodeJS, jest, MongoDB, etc

## notas de uso

Por favor seguir los siguientes pasos:

- Crear un usuario
- Realizar la accion de login para obtener el token
- Ya con el token se pueden crear uno o mas favs
- Enlazar los favs con el usuario mediante una lista en lists

Adicionalmente se pueden crear, editar, actualizar y eliminar cada uno de los elementos de la collecion
estas acciones se pueden apreciar desde las rutas de cada coleccion

## Notas tecnicas

- Se crearon 3 colecciones: user, favs y lists
- El token se debe enviar por medio de la convencion `Bearer *token* `
- Es necesario crear un .env con las siguientes variables
  `MONGO_URI= insertar el url de mongoDB para poder realizar las pruebas`
  `PORT= 8080`
  `SECRET_KEY=secret_key`

## testing

- Se realizo el testing de las funciones mas importantes de la aplicacion,
- Se pueden encontrar en los archivos nombre.test.js y se deben correr con el comando `npm run test`

### notas adicionales

-

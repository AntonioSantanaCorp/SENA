# Proyecto GA7-220501096-AA5-EV01

Este proyecto es una API construida con Express.js que permite la creación y autenticación de usuarios. Debido a los requisitos de la actividad, no nos conectamos a una base de datos; en su lugar, los usuarios se almacenan en memoria.

## Repositorio Git
[Url repo](https://github.com/AntonioSantanaCorp/SENA/tree/GA7-220501096-AA5-EV01)

## Endpoints

### `POST /signin`

Este endpoint permite la creación de un nuevo usuario. El cuerpo de la solicitud debe contener `usuario` y `contra`.

- **Respuesta exitosa:** `Usuario creado`
- **Errores:** `falta usuario o contraseña`

### `POST /login`

Este endpoint permite la autenticación de un usuario existente. El cuerpo de la solicitud debe contener `usuario` y `contra`.

- **Respuesta exitosa:** `Usuario logeado`
- **Errores:** `falta usuario o contraseña`, `el usuario no se encuentra registrado`

## Ejecución

Para ejecutar la API, utiliza el siguiente comando:

```sh
npm start
```

La API se ejecutará en http://localhost:3200.

## Dependencias

- express: 4.21.2

## Notas

Los usuarios se almacenan en memoria, por lo que se perderán al reiniciar el servidor.

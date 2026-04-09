# ERP-Demo
6/12/2023
## Descripción
Plataforma web fullstack con reporteria integrada destinada a llevar registro contable de las transacciones de comercio (inicialmente con objetivos academicos) usando ASP.NET y Angular

## Requerimientos de sistema usados
1. Visual Studio 2022 version 17.8.0 (Por seguridad si se quiere ejecutar en el mismo Visual Studio 2022)
2. .Net 8.0 (para la API)
3. Node version 18.16.0
4. Angular 16.2.0

## Ejecución 
### API
Solo se debe acceder a la solucion de Visual Studio y ejecutar la solucion como https, es decir en el boton de ejecutar de VS 2022

### Interfaz en angular
Debe abrirse una terminal en el directorio en el que se encuentra la carpeta ERP-Repository y posteriormente ejecutar los siguientes comandos en el siguiente orden.

```batch
cd GUI
```
```batch
npm install
```
```batch
ng serve -o
```

Esto abrirá una pestaña en el navegador con la vista inicial del sistema (productos por defecto)



# Firebase Cloud Storage

Web Frontend workshop with Firebase Cloud Storage. 

Cloud Storage is a powerful, simple, and cost-effective object storage service built for Google scale. Allows you to file uploads and downloads for your Firebase apps. You can use Firebase SDKs to store images, audio, video, or other user-generated content.

In this example you will see:
- HTML Form to Upload multiple images
- Retrieve all images and show them in the front

Just paste your firebase configuration object.


Implementación Cloud Storage v8 para Web
========================================

[Documentación](https://firebase.google.com/docs/storage/web/start#web-version-8)

Añade la seguridad de Google al almacenamiento de nuestros archivos. 

BLOB: **B**inary **L**arge **OB***ject, a collection of binary data stored as a single entity, tipically an image or an audiofile 

## Configurar y subir un archivo

1. Integrar SDK de firebase. Crear depósito de Cloud Storage
    - Ir a la consola de Firebase
    - En el menú lateral, build, almacenamiento
    - Comenzar
    - En modo de pruebas
    - En la pantalla de ubicación del servidor, seleccionar y hacer click en hecho. 
    - Pestaña files copiar url del bucket y añadir al objeto de configuración firebaseConfig. 

<br>

2. Añadir `firebaseConfig` object: 

```
const firebaseConfig = {
    apiKey: "********",
    authDomain: "*******",
    projectId: "**************",
    storageBucket: "*********",
    messagingSenderId: "**********",
    appId: "**************"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
```


3. Añadir input para archivo en HTML

```
<input type="file" id="files" name="files[]" multiple />
```
<br>

4. En nuestro script acceder al archivo añadido en el input 

```
const file = document.getElementById('files').files[0]

```
<br>

5. Crear una referencia del cubo de Firestorage donde se va a guardar.

```
const storageRef = storage.ref();
```
<br>

6. Declarar la referencia que tendrá en Firestorage nuestro archivo. Podemos pensar en las referencias como la ruta que tendrá un archivo o carpeta en Firestorage. ¿Qué ruta tendrá en Firestorage?
```
const newRef = storageRef.child('image');

```
<br>

7. Subir y añadir el archivo del input a la refrencia en Firestorage.

```
newRef.put(file).then();
```
<br>

8. Si se desea añadir metadatos se pueden añadir como segundo argumento al método put 

```
var metadata = {
  contentType: 'image/jpeg',
};

newRef.put(file, metadata).then()
```

## Descargar un archivo

### URL de descarga

1. Obtenemos la referencia del cubo de Firestorage
```
const storage = firebase.storage().ref();
```

2. Obtenermos la url con el método `.getDownloadURL()`
```
storage.getChild(ref).getDownloadURL().then((url)=> console.log(url));
```


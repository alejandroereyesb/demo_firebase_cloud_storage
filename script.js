// Your web app's Firebase configuration
const firebaseConfig = {
 
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//function to save file
function uploadFile() {

    // Created a Storage Reference with root dir
    var storageRef = firebase.storage().ref();
    // Get the file from DOM
    var file = document.getElementById("files").files[0];
    console.log(file);

    //dynamically set reference to the file name
    var thisRef = storageRef.child(`images/${file.name}`);

    //put request upload file to firebase storage
    thisRef.put(file).then(function (snapshot) {
        alert("File Uploaded")
        console.log('Uploaded a blob or file!');
    });
}

// Return URL of a certain image
function getFileUrl(filename) {
    //create a storage reference
    var storage = firebase.storage().ref();

    //get file url
    storage.child(filename)
        .getDownloadURL()
        .then(function (url) {
            console.log(url);
        })
        .catch(function (error) {
            console.log("error encountered");
        });
}

// Return all images
function getAllImages(){
      // Since you mentioned your images are in a folder,
    // we'll create a Reference to that folder:
    //var storageRef = firebase.storage().ref("your_folder");
    var storageRef = firebase.storage().ref();

    // Now we get the references of these images
    storageRef.listAll().then(function(result) {
      result.items.forEach(function(imageRef) {
        // And finally display them
        displayImage(imageRef);
      });
    }).catch(function(error) {
      // Handle any errors
      console.log(error);
    });

    function displayImage(imageRef) {
      imageRef.getDownloadURL().then(function(url) {
        // TODO: Display the image on the UI
        console.log(url);
        const result = document.getElementById("result");
        result.innerHTML+=`<img src=${url}>`
      }).catch(function(error) {
        // Handle any errors
        console.log(error);
      });
    }
}

getAllImages();
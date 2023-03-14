function search_college() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('colleges');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

function something(){
    const liElements = document.querySelectorAll('li');

    liElements.forEach((li) => {
      li.addEventListener('click', () => {
        const college = li.innerHTML; // or li.textContent
        document.getElementById("searchbar").value = college;
        console.log(college);
      });
    });
}

// function showCamera() {
//     // Open a new window with the camera stream
//     var cameraWindow = window.open('', '', 'width=640,height=480');
//     var cameraDocument = cameraWindow.document;
//     cameraDocument.write('<video id="videoElement"></video>');
//     cameraDocument.close();
    
//     // Access the camera and set the video element as its source
//     navigator.mediaDevices.getUserMedia({ video: true })
//         .then(function (stream) {
//             var videoElement = cameraDocument.getElementById('videoElement');
//             videoElement.srcObject = stream;
//             videoElement.play();
//         })
//         .catch(function (error) {
//             console.error(error);
//         });
// }

function displayPeps(){
    console.log("displaying peps");
}


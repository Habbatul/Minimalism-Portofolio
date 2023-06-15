 //butuh form id=uploadForm, input : {hidden id=croppedImageData, file id=imageInput} 
 var imagez = document.getElementById('imagez');
 var cropperz;
 var croppedImageDataInputz = document.getElementById('croppedImageDataz');
 
 function loadImage2(event) {
   var input = event.target;
   
   if (input.files && input.files[0]) {
     var reader = new FileReader();
     
     reader.onload = function(e) {
       imagez.src = e.target.result;
       
       if (cropperz) {
         cropperz.destroy();
       }
       
       imagez.onload = function() {
         cropperz = new Cropper(imagez, {
           aspectRatio: 9/9
         });
       };
     };
     
     reader.readAsDataURL(input.files[0]);
   }
 }
 
 var uploadForm = document.getElementById('addForm');
 var ubahItemButton = document.querySelector('button[name="tambahItem"]');
 
 uploadForm.addEventListener('submit', function(event) {
   if (cropperz) {
     var canvas = cropperz.getCroppedCanvas();
     var croppedImageDataz = canvas.toDataURL('image/jpeg');
     croppedImageDataInputz.value = croppedImageDataz;
   }
 });
 
 ubahItemButton.addEventListener('click', function() {
   uploadForm.removeEventListener('submit', submitForm); // Menghapus listener agar form tidak di-submit secara otomatis
   uploadForm.submit(); // Mengirimkan formulir secara manual
 });
 
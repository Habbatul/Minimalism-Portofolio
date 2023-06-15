 //butuh form id=uploadForm, input : {hidden id=croppedImageData, file id=imageInput} 
    var image = document.getElementById('image');
    var cropper;
    var croppedImageDataInput = document.getElementById('croppedImageData');
    
    function loadImage(event) {
      var input = event.target;
      
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
          image.src = e.target.result;
          
          if (cropper) {
            cropper.destroy();
          }
          
          image.onload = function() {
            cropper = new Cropper(image, {
              aspectRatio: 9/9
            });
          };
        };
        
        reader.readAsDataURL(input.files[0]);
      }
    }
    
    var uploadForm = document.getElementById('uploadForm');
    var ubahItemButton = document.querySelector('button[name="ubahItem"]');
    
    uploadForm.addEventListener('submit', function(event) {
      if (cropper) {
        var canvas = cropper.getCroppedCanvas();
        var croppedImageData = canvas.toDataURL('image/jpeg');
        croppedImageDataInput.value = croppedImageData;
      }
    });
    
    ubahItemButton.addEventListener('click', function() {
      uploadForm.removeEventListener('submit', submitForm); // Menghapus listener agar form tidak di-submit secara otomatis
      uploadForm.submit(); // Mengirimkan formulir secara manual
    });
    
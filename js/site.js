$(document).ready(function() {
	console.log('I\'M READY');
	
	if(window.File && window.FileReader && window.FileList && window.Blob) {
		console.log('AWESOME I MADE IT HERE!');
	} else {
		alert('oops File APIs are not fully supported in this browser');
	}
	
	function previewImages(evt) {
			var files = evt.target.files; //FileList object
			//Loop through FileList and render image as thumbnails
			for( var i = 0, f; f = files[i]; i++) {
			
				//only process image files 
				if(!f.type.match('image.*') ) {
					continue;
				}
				var reader = new FileReader();
				
				reader.onload = ( function(currentFile) {
					return function(e) {
						var span = document.createElement('span');
						span.innerHTML = ['<img class="thumb" src="', e.target.result,
						'" title="', escape(currentFile.name),
						'"/>'].join('');	
						
						$('#list').before(span);
						//document.getElementById('list').insertBefore(span,null);	
					};
					
				})(f);
				//Read the image gile as a data url
				reader.readAsDataURL(f);
			}	
		}
	$('#images').change(function(event){
		previewImages(event);
	});
});//END OF JAVASCRIPT FILE;


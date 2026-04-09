import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'img-input',
  templateUrl: './img-input.component.html',
  styleUrls: ['./img-input.component.css']
})
export class ImgInputComponent {
  selectedImageSrc: string | ArrayBuffer | null = null;
  @ViewChild('fileInput') fileInput: ElementRef;
	@Input() formData:any =  {} 
  constructor() {
		this.fileInput = new ElementRef(null)
	}

  onDrop(event: any) {
		event.preventDefault();
		console.log(event)

		let files = null
		if (event.type == "change") {
			files = event.target.files;
		}
		else {
			files = event.dataTransfer.files;
		}

		this.handleImageUpload(files);
	}

	onDragOver(event: any) {
		event.preventDefault();
	}

	onFileSelected(event: any) {
		const selectedFile = event.target.files[0];
		console.log('Archivo seleccionado:', selectedFile);
	}

  
	showImage(srcImage:any) {
		if(srcImage && this.selectedImageSrc ==null) {
			return srcImage
		}
		if(this.selectedImageSrc) {
			return this.selectedImageSrc
		}
	}

  handleImageUpload(files: FileList) {
		const file = files[0];
		this.formData.image = file
		console.log(this.formData)
		if (file) {
			// Cargar la imagen seleccionada como una URL de datos (data URL)
			const reader = new FileReader();
			reader.onload = (e: any) => {
				this.selectedImageSrc = e.target.result;

			};
			reader.readAsDataURL(file);
		}
	}

  openFileInput() {
		this.fileInput.nativeElement.click();
	}

}


import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/model/book.model';
import { FormControlService } from 'src/app/services/form-control.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})

export class BookCreateComponent implements OnInit {
  @Output() addBook = new EventEmitter<any>();
  bookForm:FormGroup;
  submitted:boolean;
  errorMessages: { [key: string]: string } = {};
  displayClassName: { [key: string]: string } = {};

  constructor(
    private formBuilder:FormBuilder,
    private commonService: FormControlService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {}

  initializeForm(): void{
    this.bookForm = this.formBuilder.group({
      bookName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      category: ['', [Validators.required]],
      authorName: ['',[Validators.required]],
      publication: '',
      isAvailable: false
    });

    // Subscribe to form control changes to update error messages
    Object.keys(this.bookForm.controls).forEach(controlName => {
      this.bookForm.get(controlName)?.valueChanges.subscribe(() => {
        this.errorMessages[controlName] = this.commonService.getErrorMessage(this.bookForm,controlName);
        this.displayClassName[controlName] = this.commonService.getClassName(this.bookForm,controlName);
      });
    });
  }

  saveBook(){
    this.submitted = true;

    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      // Update error messages for all controls
      Object.keys(this.bookForm.controls).forEach(controlName => {
        this.errorMessages[controlName] = this.commonService.getErrorMessage(this.bookForm, controlName);
        this.displayClassName[controlName] = this.commonService.getClassName(this.bookForm, controlName);
      });
    } else {
      this.addBook.emit(this.bookForm.value);
      this.bookForm.reset();
    }
  }

}

import { Component, EventEmitter, inject, input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService = inject(AccountService);
  // @Input() usersFormHomeComponent: any; // until angular 17.2
  // usersFormHomeComponent = input.required<any>();
  // @Output() cancelRegister = new EventEmitter(); //until angular 17.3
  cancelRegister = output<boolean>();
  model: any = {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => console.log(error)
    })
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
    // console.log('cancelled');
  }
}

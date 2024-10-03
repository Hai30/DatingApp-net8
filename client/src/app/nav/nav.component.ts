import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MemberListComponent } from '../members/member-list/member-list.component';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RouterLink, TitleCasePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
  accountService = inject(AccountService);
  private router = inject(Router);
  private toaster = inject(ToastrService);
  // loggedIn = false;
  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe ({
      next: () => {
        // console.log(response);
        // this.loggedIn = true;
        this.router.navigateByUrl('/members')
      },
      error: error => {
        console.log(error),
        this.toaster.error(error.error)
      }
    })
  }

  logout() {
    // this.loggedIn = false;
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
}

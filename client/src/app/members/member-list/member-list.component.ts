import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from '../../_services/members.service';
// import { Member } from '../../_models/member';
import { MemberCardComponent } from "../member-card/member-card.component";
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { AccountService } from '../../_services/account.service';
import { UserParamas } from '../../_models/userParams';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent, PaginationModule, FormsModule, ButtonsModule],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit{
  //private accountService = inject(AccountService);
  memberService = inject(MembersService);
  //userParams = new UserParamas(this.accountService.currentUser());
  genderList = [{value: 'male', dislay: 'Males'}, {value: 'female', dislay: 'Females'}];

  
  ngOnInit(): void {
    if (!this.memberService.paginatedResult()) this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers();
  }
  
  ResetFilters() {
    this.memberService.resetUserParams();
    this.loadMembers();
  }
  pageChanged(event: any) {
    if (this.memberService.userParams().pageNumber !== event.page) {
      this.memberService.userParams().pageNumber = event.page;
      this.loadMembers();
    }
  }
}

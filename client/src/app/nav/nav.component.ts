import { Component, OnInit } from '@angular/core';
import {AccountService} from "../_services/account.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  model: any = {};

  ngOnInit(): void {

  }

  login(): void {
    this.accountService.login(this.model)
      .subscribe({
        next: _ => {
          this.router.navigateByUrl('/members');
          this.model = {};
        }
      });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}

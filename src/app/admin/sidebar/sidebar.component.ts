import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router:Router){}

  
  logout(){

    Swal.fire({
      title: 'Logout Succesfully',
      icon: 'success'
    })

    this.router.navigate(['/']);


  }

}

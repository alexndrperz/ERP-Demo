import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent {
  ngOnInit() {
    this.initializeDash()
  }

  initializeDash() {
    let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e:any)=>{
   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar:any = document.querySelector(".sidebar");
  let sidebarBtn:any = document.querySelector(".bx-menu");
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
  });
  }
}

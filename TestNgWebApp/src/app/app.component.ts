import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('navbar') navbar: ElementRef;
  @ViewChild('contentBody') contentBody: ElementRef;
  @ViewChild('mainBody') mainBody: ElementRef;

  title = 'app';
  sticky: any;
  isLogin: boolean = false;

  constructor(private scrollDispatcher: ScrollDispatcher, private router: Router) {
    
  }

  ngOnInit(): void{
    this.router.events.subscribe((event: Event)=>{
      if (event instanceof NavigationStart) {
        if(event.url == '/login'){
          this.isLogin = false;
        }else{
          this.isLogin = true;
        }
      }
    });
  }

  ngAfterViewInit(): void{
    this.sticky = this.navbar.nativeElement.offsetTop;
    this.scrollDispatcher.scrolled().subscribe((x) => {
      if(this.sticky) {
        if(window.pageYOffset >= this.sticky){
          this.navbar.nativeElement.classList.add('sticky');
        } else {
          this.navbar.nativeElement.classList.remove('sticky');
        }
      }
    });

    

  }

  gotoNewPage(p: number){
    switch(p){
      case 1 :
        this.router.navigate(['/login']);
        break;
      case 2 :
        this.router.navigate(['/register']);
        break;
      default :
        break;
    }
  }
}

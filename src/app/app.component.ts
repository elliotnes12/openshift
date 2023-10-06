import { Component, OnInit } from '@angular/core';
import { OpenshiftService } from './openshift.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  apiUrl = 'openshift';

  constructor(private config:OpenshiftService){}
  ngOnInit(): void {

      this.config.getConfigMap().subscribe((data: any) => {
        this.apiUrl = data.data.titulo1;
      });
  }



}

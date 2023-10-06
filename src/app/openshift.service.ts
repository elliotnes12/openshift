import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenshiftService {


  constructor(private http: HttpClient) {}

  getConfigMap() {
    // Hacer una solicitud HTTP al ConfigMap en OpenShift
    return this.http.get('/api/configmap/angular-cli');
  }
  
}

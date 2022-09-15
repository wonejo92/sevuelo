import {Component, Input, OnInit} from '@angular/core';
import { Request } from '../request.model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  requests: Request[];

  @Input() request: Request;
  selectedRequest: Request;
  mensaje ='No existen datos';

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests(): void {
    this.requestService.getRequests()
      .subscribe(requests => this.requests = requests);
  }

  previousState(): void {
    window.history.back();
  }

  delete() {
    this.requestService.delete(this.request)
      .subscribe((newRequest) => {
          this.request = newRequest
          this.previousState();
        }
      );
  }
}



import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { SpinnerService } from "src/app/Core/spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.scss']
})
export class SpinnerComponent {

  public isLoading$: Observable<boolean>;


  constructor(private spinnerService: SpinnerService) {
    this.isLoading$ = this.spinnerService.isLoading$;
  }

}

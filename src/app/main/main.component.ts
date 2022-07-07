import {Component} from "@angular/core";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'page-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.less']
})

export class mainComponent {
  passwordValue = new FormControl();
  nameValue = new FormControl();
  imageControl = new FormControl();
  accordion = false;
}

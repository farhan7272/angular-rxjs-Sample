import { Component, VERSION,OnInit } from '@angular/core';
import {of, from} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){
    of(2,3,4).subscribe(console.log);
    from([5,6,7]).subscribe(console.log);

    let apples = ['apple1','apple2','apple3'];

    //of(...apples).subscribe(console.log);

    of(...apples).subscribe(
      apple => console.log(apple),
      ()=> console.log('complete')
    );
  }

}

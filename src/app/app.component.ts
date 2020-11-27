import { Component, VERSION,OnInit } from '@angular/core';
import {of, from, pipe} from 'rxjs';
import {map, tap, take} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){
    
    //from([5,6,7]).subscribe(console.log);

    let apples = ['apple1','apple2','apple3'];

    //of(...apples).subscribe(console.log);

    of(...apples).subscribe(
      apple => console.log(apple),
      error => console.log(error),
      ()=> console.log('complete')
    );

    of(5,6,7)
    .pipe(
      tap(item => console.log(`checking ${item}`)),
      map(item => item * 2),
      tap(item => console.log(`after multiply by 2 :${item}`)),
      map(item => item - 10),
      tap(item => console.log(`after minus 10 :${item}`)),
      take(2)
      )
    .subscribe(
      item => console.log(`Resulting Item ${item}`),
      error => console.log(`Error : ${error}`),
      () => console.log('completed the number')
    );
  
  }

}

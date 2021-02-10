import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-palmeiras',
  templateUrl: './palmeiras.component.html',
  styleUrls: ['./palmeiras.component.scss']
})
export class PalmeirasComponent implements OnInit {
  
  @ViewChild("field") field: ElementRef;

  private _jsonURL = 'assets/json/palmeiras.json';

  data;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this._jsonURL).subscribe( data => {
      this.data = data;
    })
  }

  setPlayerClass (str) {
    return str.toLowerCase()
  }

  checkValue (evt) {
    
    const time = this.data[0].teams;
    for(let i=0; i < time.length; i++ ) {

      for( let j=0; j < time[i].players.length; j++) {

        let playerName = time[i].players[j].name.toLowerCase();
        playerName = playerName.replace(new RegExp('[ÁÀÂÃáã]','gi'), 'a');
        playerName = playerName.replace(new RegExp('[ÉÈÊéê]','gi'), 'e');
        playerName = playerName.replace(new RegExp('[ÍÌÎí]','gi'), 'i');
        playerName = playerName.replace(new RegExp('[ÓÒÔÕóõ]','gi'), 'o');
        playerName = playerName.replace(new RegExp('[ÚÙÛú]','gi'), 'u');
        playerName = playerName.replace(new RegExp('[Çç]','gi'), 'c');

        let guess = evt.target.value.split(" ");

        for (let k=0; k < guess.length; k++){

          if (guess[k] != undefined && guess[k] != '') {
            if (playerName.includes(guess[k]) ){
              time[i].players[j].checked = true;
            }
          }
          
        }
      }
    }

    this.reset()
  }

  reset() {
    this.field.nativeElement.value = "";
  }

}

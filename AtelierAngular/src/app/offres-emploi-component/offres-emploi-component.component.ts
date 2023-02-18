import { Component } from '@angular/core';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {
  listeEmplois:Emploi[]=[];
  listeEmploi=[
    {reference: "123", titre: "ingenieure", entreprise: "kopi", etat: false},
    {reference: "124", titre: "RH", entreprise: "actia", etat: true},
    {reference: "125", titre: "technicien superieure", entreprise: "sofrecom", etat: false}
  ]


  postuler(e:Emploi){

 
  }

  nb=0;  
  calculer()
    {
  
      let nb=0;
      var i;
      for(i of this.listeEmploi)
      {
      if(i.etat==true)
      this.nb=this.nb+1;
      }
    }


  entreprise! :String;
}

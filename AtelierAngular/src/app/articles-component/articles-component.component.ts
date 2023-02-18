import { Component } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {

  titre="Les articles du jour : ";

  listeArticles:Article[]=[
    {titre:"Le championnat du monde",contenu:"le champion du monde de cette année est '",auteur:"Med Taher",date:"12/12/2005",categorie:"Sport"},
    {titre:"Comment écrire votre CV",contenu:"Pour réussir a décraucher un emploi '",auteur:"Marie Else",date:"02/04/2017",categorie:"Travail"},
    {titre:"Les nouveau parents ",contenu:"Pour réussir '",auteur:"Ahmed",date:"13/07/2022",categorie:"Education"}
   ]

   nb=0;
   calculer()
   {
 for(let a of this.listeArticles)
 {
   if(a.categorie!='Travail')
   this.nb++;
 }
   }

}

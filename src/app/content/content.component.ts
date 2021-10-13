import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  // on créé notre variable qui contiendra nos recettes
  recettes: any[];
  // variable qui contient l'utilisateur connecté actuellement
  userConnected: string = 'Brice';

  constructor() {
    // on initialise le tableau pour éviter d'avoir un undefine
    this.recettes = new Array();
  }

  ngOnInit(): void {}

  // fonction qui va ajouter 2 recettes à notre tableau de recettes
  remplirRecettes(): void {
    let recette = {
      nom: 'Tarte aux pommes',
      cout: 3,
      tempsEnMin: 15,
    };
    this.recettes.push(recette);
    recette = {
      nom: 'Tartiflette',
      cout: 15,
      tempsEnMin: 45,
    };
    this.recettes.push(recette);
  }
  // Fonction qui supprime la dernière recette de notre tableau de recettes.
  supprimerUneRecette():void{
    this.recettes.shift()
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

	private heroes: Heroe[];

  constructor(private heroesService:HeroesService, private router:Router) { 

  }

  ngOnInit() {
  	this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(i:number){
		this.router.navigate(['/heroe', i]);
	}

}
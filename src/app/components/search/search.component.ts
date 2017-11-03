import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

	private heroesFound:Heroe[];
	private nombre:string;

  constructor(private heroesService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		this.nombre = params['txt'];
  		this.heroesFound = this.heroesService.buscarHeroes(this.nombre);
  	});
  }

  verHeroe(nombre:string){
  	this.router.navigate(['/heroe', this.heroesService.getIndexHeroe(nombre)]);
  }

}

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';	

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

	private heroe: Heroe;

  constructor(private activatedRouter:ActivatedRoute, private heroesService:HeroesService) { 

  	this.activatedRouter.params.subscribe( params => {
  		this.heroe = heroesService.getHeroe(params['index']);
  	})

  }

  getImgCasa(casa:string): string{
  	if(casa == 'DC') return 'assets/img/dc.png';
  	else return 'assets/img/marvel.jpg';
  }

}

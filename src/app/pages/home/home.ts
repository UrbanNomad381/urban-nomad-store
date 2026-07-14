import { Component } from '@angular/core';
import { HomeBanner } from '../../components/home/home-banner/home-banner';
import { LoyaltyTile } from '../../components/home/loyalty-tile/loyalty-tile';

@Component({
  selector: 'app-home',
  imports: [
    HomeBanner, 
    LoyaltyTile
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

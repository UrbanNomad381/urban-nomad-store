import { Component } from '@angular/core';
import { HomeBanner } from '../../components/home/home-banner/home-banner';
import { ProductsHighlightTile } from '../../components/home/products-highlight-tile/products-highlight-tile';
import { MarketingTile } from '../../components/home/marketing-tile/marketing-tile';
import { LoyaltyTile } from '../../components/home/loyalty-tile/loyalty-tile';
import { CallToActionTile } from '../../components/home/call-to-action-tile/call-to-action-tile';
import { AboutTile } from '../../components/home/about-tile/about-tile';

@Component({
  selector: 'app-home',
  imports: [
    HomeBanner, 
    ProductsHighlightTile,
    MarketingTile,
    LoyaltyTile,
    CallToActionTile,
    AboutTile
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

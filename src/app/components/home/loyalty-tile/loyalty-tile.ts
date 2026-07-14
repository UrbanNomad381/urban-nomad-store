import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loyalty-tile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './loyalty-tile.html',
  styleUrl: './loyalty-tile.css'
})
export class LoyaltyTile {
}
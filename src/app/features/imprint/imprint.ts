import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../layout/navbar/navbar';

@Component({
  selector: 'app-imprint',
  imports: [RouterLink, Navbar],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {}

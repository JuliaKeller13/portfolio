import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../layout/navbar/navbar';
import { TranslatePipe } from '@ngx-translate/core';
import { Heading } from "../../shared/components/heading/heading";

@Component({
  selector: 'app-imprint',
  imports: [RouterLink, Navbar, TranslatePipe, Heading],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {}

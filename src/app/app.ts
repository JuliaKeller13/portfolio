import { Component, inject, signal } from '@angular/core';
import { KeyboardService } from './shared/services/keyboard.service';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  constructor() {
    inject(ViewportScroller).setOffset([0, 180]);
    inject(KeyboardService);
  }  
}
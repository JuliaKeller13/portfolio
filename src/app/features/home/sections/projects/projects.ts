
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, Heading, Section, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  tabs = [
    { id: 'Card1', label: 'Karte 1', content: 'Inhalt 1' },
    { id: 'Card2', label: 'Karte 2', content: 'Inhalt 2' },
    { id: 'Card3', label: 'Karte 3', content: 'Inhalt 3' },
    { id: 'Card4', label: 'Karte 4', content: 'Inhalt 4' },
  ];
  activeTab = this.tabs[0].id;

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}

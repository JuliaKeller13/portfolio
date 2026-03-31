import { Component } from '@angular/core';
import { About } from "./sections/about/about";
import { Contact } from "./sections/contact/contact";
import { Hero } from "./sections/hero/hero";
import { Projects } from "./sections/projects/projects";
import { Skills } from "./sections/skills/skills";
import { Testimonials } from "./sections/testimonials/testimonials";
import { Navbar } from "../../layout/navbar/navbar";

@Component({
  selector: 'app-home',
  imports: [About, Contact, Hero, Projects, Skills, Testimonials, Navbar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class Home {}
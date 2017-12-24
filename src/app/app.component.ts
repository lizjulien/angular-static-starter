import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(
    private router: Router,
    private metaService: Meta,
    private titleService: Title
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const meta = environment.metas[event.url];

        if (meta) {
          this.metaService.addTag({name: 'description', content: meta.description});
          this.titleService.setTitle(meta.title);
        }
      }
    });
  }
}

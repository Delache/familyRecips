import { RecipService } from './../../shared/services/recip.service';
import { Recip } from './../../shared/models/recip';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  recips$: Observable<Recip[]>;
  constructor(private recipService: RecipService, private router: Router) { }

// Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
search(term: string): void {
  this.searchTerms.next(term);
 }
ngOnInit(): void {
  this.recips$ = this.searchTerms.pipe(
    // attendre 300ms de pause entre chaque requête
    debounceTime(300),
    // ignorer la recherche en cours si c'est la même que la précédente
    distinctUntilChanged(),
    // on retourne la liste des résultats correpsondant aux termes de la recherche
    switchMap((term: string) => this.recipService.searchRecips(term)),
  );
}

gotoDetail(recip: Recip): void {
  const link = ['/recips', recip.id];
  this.router.navigate(link);
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PHRASES } from '../../shared/mock-data';
import { PhrasesService } from '../../shared/phrases.service';
import { Phrase } from '../../shared/phrese';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit{

  phrases!: Phrase[];

  constructor(private phrasesService: PhrasesService, private router: Router ) {}

  ngOnInit(): void {
    this.phrasesService
    .getAllPhrases()
    .then(res => {
      this.phrases = res;
    });
  }

  onSelect(phrase: Phrase): void {
    this.router.navigate(['phrase', phrase.id]).then();
  };

}

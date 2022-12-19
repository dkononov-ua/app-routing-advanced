import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhrasesService } from '../shared/phrases.service';
import { Phrase } from '../shared/phrese';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase?: Phrase

  constructor(
    private phrasesService: PhrasesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {

    this.activatedRoute.params.forEach(params => {
      const id = +params['id']

      if (isNaN(id)) return

      this.phrasesService
      .getPhrase(id)
      .then(res => {
        this.phrase = res;
      });
    });
  }

  gotoPhrasesList (): void{
    this.router.navigate(['/phrases']).then();

  }

}

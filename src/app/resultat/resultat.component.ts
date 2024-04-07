import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { Bquestion } from '../models/bquestion.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit{
  yesAnswers: any[] = [];
  

  constructor(private questionnaireService: QuestionnaireService,private router:Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.yesAnswers = navigation.extras.state['yesAnswers'];
      
    }
   }

  ngOnInit(): void {
    
  }

  getCustomMessage(bquestion: Bquestion): string {
    if (bquestion.answer === true) {
      return `Pour la question ${bquestion.id}, vous avez répondu Oui, ce qui signifie que votre conseil est ${bquestion.advice}`;
    } else {
      return `Pour la question ${bquestion.id}, vous avez répondu Non.`;
    }
  }
}

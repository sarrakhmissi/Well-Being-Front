import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { Hquestion } from '../models/hquestion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hresultat',
  templateUrl: './hresultat.component.html',
  styleUrls: ['./hresultat.component.css']
})
export class HresultatComponent implements OnInit{
  yesAnswers: any[] = [];
  

  constructor(private questionnaireService: QuestionnaireService,private router:Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.yesAnswers = navigation.extras.state['yesAnswers'];
      
    }
   }

  ngOnInit(): void {
    
  }

  getCustomMessage(hquestion: Hquestion): string {
    if (hquestion.answer === true) {
      return `Pour la question ${hquestion.id}, vous avez répondu Oui, ce qui signifie que votre conseil est ${hquestion.advice}`;
    } else {
      return `Pour la question ${hquestion.id}, vous avez répondu Non.`;
    }
  }
}


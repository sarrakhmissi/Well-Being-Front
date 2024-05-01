import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { Bquestion } from '../models/bquestion.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bresultat',
  templateUrl: './bresultat.component.html',
  styleUrls: ['./bresultat.component.css']
})
export class BresultatComponent implements OnInit{
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
      return `Pour la question ${bquestion.id}, vous avez répondu Oui, ce qui signifie que votre conseil est ${bquestion.advice},${bquestion.beautyImage}`;
    } else {
      return `Pour la question ${bquestion.id}, vous avez répondu Non.`;
    }
  }
}
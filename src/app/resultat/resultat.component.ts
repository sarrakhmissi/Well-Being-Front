// resultat.component.ts
import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { Question } from '../models/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
 
  yesAnswers: any[] = [];
  

  constructor(private questionnaireService: QuestionnaireService,private router:Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.yesAnswers = navigation.extras.state['yesAnswers'];
      
    }
   }

  ngOnInit(): void {
    
  }

  getCustomMessage(question: Question): string {
    if (question.answer === true) {
      return `Pour la question ${question.id}, vous avez répondu Oui, ce qui signifie que votre conseil est ${question.advice}`;
    } else {
      return `Pour la question ${question.id}, vous avez répondu Non.`;
    }
  }
  
}

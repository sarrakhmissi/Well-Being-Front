import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { Router } from '@angular/router';
import { Bquestion } from '../models/bquestion.model';
@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit{
  currentQuestionIndex: number = 0;

  questions = [
    { id: 1, text: 'Do you consistently get at least 7-9 hours of sleep each night?',  answer: '' ,
     advice:"Sufficient sleep is crucial for skin repair and rejuvenation."},
    { id: 2, text: 'Are you diligent about removing makeup before going to bed?', answer: '',
    advice:"Leaving makeup on overnight can clog pores and lead to breakouts." },
    { id: 3, text: ' Do you use sunscreen with SPF 30 or higher every day, even on cloudy days?', answer: '' , 
    advice:"Sunscreen helps protect against UV damage and premature aging."},
    { id: 4, text: 'Do you drink at least 8 glasses of water per day?', answer: '',
    advice:"Proper hydration is essential for maintaining healthy skin." },
    { id: 5, text: 'Do you eat a balanced diet with plenty of fruits and vegetables?', answer: '' , 
    advice:"A nutritious diet provides essential vitamins and minerals for skin health."},
    { id: 6, text: 'Do you avoid touching your face throughout the day?', answer: '',
    advice:"Touching your face can transfer dirt and bacteria, leading to breakouts." },
    { id: 7, text: 'Are you consistent with your skincare routine, including cleansing and moisturizing?', answer: '',
    advice:"Consistent skincare helps maintain skin health and prevents issues like dryness or excess oiliness." },
    { id: 8, text: ' Do you regularly clean your makeup brushes and beauty tools?', answer: '',
    advice:"Dirty brushes can harbor bacteria and contribute to skin irritation or breakouts." },
    { id: 9, text: 'Do you protect your hair from heat damage when using styling tools?', answer: '' , 
    advice:"Heat styling can cause damage and weaken hair strands over time."},
    { id: 10, text: 'Do you avoid smoking and limit alcohol consumption?', answer: '',
    advice:"Smoking and excessive alcohol intake can accelerate aging and have negative effects on skin health." },
    { id: 11, text: 'Do you engage in regular physical activity or exercise?', answer: '' ,
     advice:" Exercise promotes healthy circulation, which can contribute to a glowing complexion."},
    { id: 12, text: 'Do you prioritize stress management techniques like meditation or deep breathing?', answer: '',
    advice:"Chronic stress can affect skin health and contribute to issues like acne or eczema." },
   
  ];

  constructor(private questionnaireService: QuestionnaireService, private router: Router) { }

  ngOnInit(): void {
    //this.questions = this.questionnaireService.getQuestions();
  }

  submitForm() {
    const yesAnswers = this.questions.filter(bquestion => bquestion.answer === 'oui');
    this.router.navigate(['/bresultat'], { state: { yesAnswers } });
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }
  // Méthode pour mettre à jour la réponse d'une question
  updateAnswer(bquestion: Bquestion, answer: boolean): void {
    bquestion.answer = answer;
  }
}

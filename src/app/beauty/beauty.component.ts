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
     advice:"Sufficient sleep is crucial for skin repair and rejuvenation.",
    beautyImage:"https://www.scholastic.com/content/dam/parents/OptimizedDesignImages/Batch4/Articles/4-3ratio/your-kid-getting-enough-sleep-article-4-3.jpg"},
    { id: 2, text: 'Are you diligent about removing makeup before going to bed?', answer: '',
    advice:"Leaving makeup on overnight can clog pores and lead to breakouts.",beautyImage:"https://www.elementre-solutions.com/cdn/shop/files/7A7A8543.jpg?v=1689898011&width=1445" },
    { id: 3, text: ' Do you use sunscreen with SPF 30 or higher every day, even on cloudy days?', answer: '' , 
    advice:"Sunscreen helps protect against UV damage and premature aging.",beautyImage:"https://princesscosmeticsqa.com/cdn/shop/files/image_e302cf3d-1311-4ad6-824f-14e25c2fccf0.jpg?v=1685483560"},
    { id: 4, text: 'Do you drink at least 8 glasses of water per day?', answer: '',
    advice:"Proper hydration is essential for maintaining healthy skin.",beautyImage:"https://m.media-amazon.com/images/I/71Wec9b3eXL._SL1500_.jpg" },
    { id: 5, text: 'Do you eat a balanced diet with plenty of fruits and vegetables?', answer: '' , 
    advice:"A nutritious diet provides essential vitamins and minerals for skin health.",beautyImage:"https://www.mygnp.com/wp-content/uploads/2019/11/A-variety-of-fruits-vegetables-fish-and-grain.jpg"},
    { id: 6, text: 'Do you avoid touching your face throughout the day?', answer: '',
    advice:"Touching your face can transfer dirt and bacteria, leading to breakouts.",beautyImage:"https://m.media-amazon.com/images/I/8173ZOZ-4vL.jpg" },
    { id: 7, text: 'Are you consistent with your skincare routine, including cleansing and moisturizing?', answer: '',
    advice:"Consistent skincare helps maintain skin health and prevents issues like dryness or excess oiliness.",beautyImage:"https://beautystore.tn/15930-large_default/lotion-nettoyante-gentle-skin-cleanser-peaux-seches-500ml.jpg" },
    { id: 8, text: ' Do you regularly clean your makeup brushes and beauty tools?', answer: '',
    advice:"Dirty brushes can harbor bacteria and contribute to skin irritation or breakouts.",beautyImage:"https://media.allure.com/photos/60620801b33897fe6335508b/1:1/w_3262,h_3263,c_limit/makeup-brush-cleaners-lede-social.jpg" },
    { id: 9, text: 'Do you protect your hair from heat damage when using styling tools?', answer: '' , 
    advice:"Heat styling can cause damage and weaken hair strands over time.",beautyImage:"https://m.media-amazon.com/images/I/514WJVQOoXL.jpg"},
    { id: 10, text: 'Do you avoid smoking and limit alcohol consumption?', answer: '',
    advice:"Smoking and excessive alcohol intake can accelerate aging and have negative effects on skin health." ,beautyImage:"https://images-stylist.s3-eu-west-1.amazonaws.com/app/uploads/2020/05/20170250/best-antioxidant-serums-skincare-benefits-uses-1120x1120.png"},
    { id: 11, text: 'Do you engage in regular physical activity or exercise?', answer: '' ,
     advice:" Exercise promotes healthy circulation, which can contribute to a glowing complexion.",beautyImage:"https://upcirclebeauty.com/cdn/shop/files/FaceScrubwithCoffee_RosehipOil-CitrusBlend3_3350e243-1482-459f-bec0-f2f5a0ff3152_500x.jpg?v=1699914190"},
    { id: 12, text: 'Do you prioritize stress management techniques like meditation or deep breathing?', answer: '',
    advice:"Chronic stress can affect skin health and contribute to issues like acne or eczema.",beautyImage:"https://static.independent.co.uk/2024/03/06/14/Spot-treatments-hero.png" },
   
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

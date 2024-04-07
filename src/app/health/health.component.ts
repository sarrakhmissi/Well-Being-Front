import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { Router } from '@angular/router';
import { Hquestion } from '../models/hquestion.model';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit{
  currentQuestionIndex: number = 0;

  questions = [
    { "id": 1, "text": "Do you experience frequent headaches or migraines?", "answer": '', "advice": "Consider keeping a headache diary to track triggers. Consult with a healthcare professional for potential underlying causes and management strategies.",healthImage:'https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets.jpg' },
    { "id": 2, "text": "Are you often fatigued or lacking energy?", "answer": '', "advice": "Ensure you're getting enough quality sleep and maintaining a balanced diet. Consider incorporating regular exercise into your routine and discussing potential underlying health issues with a doctor." },
    { "id": 3, "text": "Do you frequently experience digestive issues such as bloating, gas, or indigestion?", "answer": '', "advice": " Evaluate your diet for potential trigger foods and consider keeping a food diary. Experiment with dietary changes, such as increasing fiber intake or avoiding certain foods, and consult with a healthcare provider if symptoms persist." },
    { "id": 4, "text": " Do you struggle with maintaining a healthy weight?", "answer": '', "advice": " Focus on balanced nutrition and regular physical activity. Consider seeking guidance from a nutritionist or dietitian to develop a personalized weight management plan." },
    { "id": 5, "text": "Are you experiencing persistent joint pain or stiffness?", "answer": '', "advice": "Practice gentle stretching exercises and consider low-impact physical activities such as swimming or yoga. Consult with a healthcare provider for a proper diagnosis and potential treatment options." },
    { "id": 6, "text": "Do you have difficulty sleeping or suffer from insomnia?", "answer": '', "advice": "Establish a consistent sleep schedule and create a relaxing bedtime routine. Avoid caffeine and electronic devices before bedtime, and consider speaking with a healthcare provider for additional sleep management strategies" },
    { "id": 7, "text": "Are you experiencing changes in vision, such as blurriness or difficulty focusing?", "answer": '', "advice": "Schedule an eye examination with an optometrist or ophthalmologist to assess your vision and discuss potential corrective measures such as glasses or contact lenses." },
    { "id": 8, "text": "Do you have a persistent cough or trouble breathing?", "answer": '', "advice": " Consult with a healthcare provider for a proper diagnosis, as these symptoms could indicate respiratory issues or allergies. Follow recommended treatment plans and consider lifestyle changes such as quitting smoking or avoiding environmental triggers." },
    { "id": 9, "text": " Do you suffer from persistent joint or muscle pain?", "answer": '', "advice": "Explore stress-reduction techniques such as mindfulness meditation, deep breathing exercises, or yoga. Consider seeking support from a therapist ." },
    { "id": 10, "text": " Do you frequently experience chest pain or discomfort?", "answer": '', "advice": "Seek immediate medical attention, as chest pain could indicate a serious underlying condition such as a heart attack. Follow up with a healthcare provider for further evaluation and treatment." },
    { "id": 11, "text": "Are you experiencing frequent urinary tract infections or issues with bladder control?", "answer": '', "advice": "Stay hydrated and practice good hygiene habits. Consult with a healthcare provider for proper diagnosis and treatment, which may include antibiotics, lifestyle changes, or pelvic floor exercises." },
    { "id": 12, "text": " Do you have concerns about your heart health, such as irregular heartbeat or palpitations?", "answer": '', "advice": "Schedule an appointment with a healthcare provider for a comprehensive cardiac evaluation, which may include tests such as an electrocardiogram (ECG) or echocardiogram. Follow recommended treatment plans and consider lifestyle modifications such as adopting a heart-healthy diet and engaging in regular physical activity." }
];

  constructor(private questionnaireService: QuestionnaireService, private router: Router) { }

  ngOnInit(): void {
    //this.questions = this.questionnaireService.getQuestions();
  }

  submitForm() {
    const yesAnswers = this.questions.filter(hquestion => hquestion.answer === 'oui');
    this.router.navigate(['/hresultat'], { state: { yesAnswers } });
  }
  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }


  // Méthode pour mettre à jour la réponse d'une question
  updateAnswer(hquestion: Hquestion, answer: boolean): void {
    hquestion.answer = answer;
  }
}
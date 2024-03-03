// questionnaire.component.ts
import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { Router } from '@angular/router';
import { Question } from '../models/question.model';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
 
  questions = [
    { id: 1, text: 'Have you been feeling constantly sad or hopeless recently?', answer: '' , advice:"It's important to talk to a friend, family member, or mental health professional for support and explore available treatment options."},
    { id: 2, text: 'Have you experienced a loss of interest or pleasure in activities you once enjoyed?', answer: '',advice:"try engaging in activities you once enjoyed, even if they don't interest you at the moment. Sometimes, participating in pleasurable activities can help improve your mood." },
    { id: 3, text: 'Have you been feeling unusually fatigued or lacking in energy?', answer: '' , advice:"make sure to get enough rest and give yourself time to recharge. It may also be helpful to consult a doctor to check for any underlying physical causes for your fatigue.  Experience a gentle wake-up with the natural light simulation of a sunrise alarm clock."},
    { id: 4, text: 'Have you been experiencing excessive worry or anxiety?', answer: '',advice:"try stress management techniques such as deep breathing, meditation, or yoga. Also, speak to a mental health professional for additional strategies to cope with your anxiety." },
    { id: 5, text: 'Have you noticed changes in your sleeping patterns, such as difficulty falling asleep or staying asleep?', answer: '' , advice:"try establishing a regular sleep routine by going to bed and waking up at the same time every day. Also, limit caffeine and screen time before bedtime to promote restful sleep. Experience uninterrupted sleep with a comfortable and adjustable sleep mask tailored to your needs"},
    { id: 6, text: 'Have you been feeling more irritable or easily agitated than usual?', answer: '',advice:"try practicing relaxation techniques like meditation or yoga to calm your mind and body. Also, identify triggers for your irritation and explore ways to manage them constructively. " },
    { id: 7, text: 'Have you been having trouble concentrating or making decisions?', answer: '',advice:"try breaking tasks into smaller, manageable steps. Also, eliminate distractions and create a conducive environment for concentration, such as a quiet an  organized workspace." },
    { id: 8, text: 'Have you experienced any significant changes in appetite or weight recently?', answer: '',advice:"make sure to maintain a balanced diet and stay hydrated. Also, consult   doctor to rule out any underlying medical conditions that may be contributin to these changes." },
    { id: 9, text: 'Have you been having thoughts of harming yourself or others?', answer: '' , advice:"this is very serious. Contact a mental health professional or emergency  service immediately for help and immediate support."},
    { id: 10, text: 'Have you been using drugs or alcohol as a way to cope with your emotions?', answer: '',advice:"try seeking healthier and more effective ways to cope with stress, such as exercise, meditation, or talking to a therapist. Also, seek specialized support for addiction if needed." },
    { id: 11, text: 'Have you been avoiding social interactions or withdrawing from activities  you used to enjoy?', answer: '' , advice:"try gradually reintegrating into social interactions and enjoyable activities,  even if it feels challenging at first. Talk to a friend or therapist about your feelings to get support "},
    { id: 12, text: 'Have you experienced any hallucinations or delusions?', answer: '',advice:"it's imperative to seek immediate evaluation and treatment from a mental health professional." },
   
  ];

  constructor(private questionnaireService: QuestionnaireService, private router: Router) { }

  ngOnInit(): void {
    //this.questions = this.questionnaireService.getQuestions();
  }

  submitForm() {
    const yesAnswers = this.questions.filter(question => question.answer === 'oui');
    this.router.navigate(['/resultat'], { state: { yesAnswers } });
  }


  // Méthode pour mettre à jour la réponse d'une question
  updateAnswer(question: Question, answer: boolean): void {
    question.answer = answer;
  }
}

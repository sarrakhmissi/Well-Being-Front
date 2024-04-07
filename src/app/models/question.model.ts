// question.model.ts
export interface Question {
  id: number;
  text: string;
  answer: boolean | null; // true for 'Yes', false for 'No', null for not answered
  advice:string;
  mentalImage:string
 
}

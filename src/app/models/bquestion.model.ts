// question.model.ts
export interface Bquestion {
    id: number;
    text: string;
    answer: boolean | null; // true for 'Yes', false for 'No', null for not answered
    advice:string;
    beautyImage:string
   
  }
  
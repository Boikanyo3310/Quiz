export class Quiz
{
    questions: string;
    option: any = [];
    answer: string;
    useranswer:string

    constructor(questions, option, answer, useranswer)
    {
        this.questions = questions;
        this.option = option;
        this.answer = answer;
        this.useranswer =useranswer
    }
}
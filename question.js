class Question{
    constructor() {
        this.input=createInput("Enter your name here");
        this.input2=createInput("Enter Correct Option No.");
        this.title= createElement('h2');
        this.question= createElement('h3');
        this.option1=createElement('h4');
        this.option2=createElement('h4');
        this.option3=createElement('h4');
        this.option4=createElement('h4');

        this.button=createButton('Submit');
        
    }

    display() {

        this.title.html("My Quiz Game");
        this.question.html("Question- What starts and ends with the letter 'E', but has only one letter?");
        this.option1.html("1: Everyone");
        this.option2.html("2: Envelope");
        this.option3.html("3: Estimate");
        this.option4.html("4: Example");

        this.input.position(150, 230);
        this.input2.position(320, 230);
        this.title.position(350,0);

        this.question.position(150,80);
      
        this.option1.position(150,100);
        this.option2.position(150,130);
        this.option3.position(150,160);
        this.option4.position(150,190);
        this.button.position(180, 260);

        this.button.mousePressed(()=> {
            this.title.hide();
            this.input.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input.value;
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });

    }
}
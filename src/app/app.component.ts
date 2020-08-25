import { Component , ViewChild, ElementRef } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Quiz } from './Quiz';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  @ViewChild("test") divView: ElementRef;


  radioSelected:any 
  testz;

  kb="test"

  sum  = 0 ;
  question = [
     new Quiz ("1. What does COVID-19 stand for?", ["It's a term for Coronavirus Disease 19, because it's the 19th strain of coronavirus discovered.",
     "It's a term that stands for Coronavirus Disease 2019, the year it was first identified"], "It's a term that stands for Coronavirus Disease 2019, the year it was first identified"  , "useranswer1"),


     new Quiz ("2. What other viruses belong to the coronavirus family?",[ "SARS and influenza",
      "SARS and MERS ", "SARS and HIV"], "SARS and MERS ","useranswer2"),


     new Quiz ("3. True or False: A vaccine stimulates your immune system to produce antibodies, like it would if you were exposed to the virus.", ["True ",
      "False "], "True " , "useranswer3"),


     new Quiz ("4. There are currently vaccines for the following coronaviruses:", ["SARS",
    "MERS", "SARS and MERS", "None of the above" ], "None of the above" , "3"),


     new Quiz ("5. How many vaccine candidates for COVID-19 have been proposed?", ["25",
     "100","120+"], "120+" , "4"),


     new Quiz ("6. True or False: The virus is mutating rapidly.", ["True  ",
      "False   "], 1, "5"),


     new Quiz ("7. How does weather seem to affect the novel coronavirus?", ["The virus can’t survive in hot, humid climates.",
    "Cold temperatures can kill the virus.", "It is not yet known."], 1, "6"),


     new Quiz ("8. Currently, which group has had more severe effects of COVID-19?", ["Men",
    "Women"], "Women", "7", ),


     new Quiz ("9. True or False: COVID-19 has currently been detected on all seven continents.", ["True",
    "False"], "False" , "8")
    ]

    // option = [
    //   new Quiz ("", ["It's a term for Coronavirus Disease 19, because it's the 19th strain of coronavirus discovered.",
    //   "It's a term that stands for Coronavirus Disease 2019, the year it was first identified."], 0)
    // ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 

  submit(){
    for (let index = 0; index < this.question.length; index++)
    {
      console.log(this.question[index].useranswer)
      console.log(this.question[index].answer)
      if(this.question[index].answer == this.question[index].useranswer){
        this.sum++;
      console.log("Im in ")
      }
      
    }
   
    console.log();
  }



  
  
}

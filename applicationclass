class application{
    constructor(costInDollars, region, fundingAllocation, desc){
      this.costInDollars = costInDollars;
      this.region = region.toLowerCase();
      this.fundingAllocation = fundingAllocation();
      this.desc = desc.toLowerCase();
    }
     //Defines the function we will use to filter appropriate words.
        //This function converts text to an array format and counts the number of times
        //You need to define the keyWords in an array
        function wordFilter(someText, keyWords){
          var textArray = someText.split(" ")
          var wordCount = 0;
          for (element in textArray){
            for (word in keyWords){
              if (textArray[element] == keyWords[word]){
                //to test
                wordCount++;
              }
            }
          }
          return wordCount;
          }

    //Defines the Red Flag Meter--> the basis of the algorithm
  this.redFlagMeter = 0;


    //Checking if region is okay
    this.regionPenalty = 0;

    this.isRegionOkay:boolean;
    if(this.region == 'India'){
      this.isRegionOkay = false;
      this.regionPenalty = 10;
    } else if(this.region == 'Kenya'){
      this.isRegionOkay = false;
      this.regionPenalty = 10;
    } else if(this.region == 'Sierra Leone'){
      this.isRegionOkay = false;
      this.regionPenalty = 10;
    } else if(this.region == 'Uganda'){
      this.isRegionOkay = false;
      this.regionPenalty = 10;
    } else{
      this.isRegionOkay = true;
    }


    //Checking if cost is okay
    costPenalty = 0;
    this.isCostOkay: boolean;
    if (this.costInDollars > 6000){
      this.isCostOkay = false;
      costPenalty = 20;
    } else{
      this.isCostOkay = true;
    }

    //Checks if there are salaries, including translations (filter words: 'salary', 'salaries', 'wage', 'wages', 'income', 'incomes')
    salaryArray = ['salary', 'salaries', 'wage', 'wages', 'income', 'incomes' , 'salario', 'salarios', 'sueldo', 'sueldos', 'ingreso', 'ingresos', 'salaire', 'salaires', 'paie', 'paies', 'paye', 'payes', 'revenu', 'revenus']
    salaryWordCount = wordFilter(this.fundingAllocation,salaryArray);


    //Checks if religion is involved, including their translations (filter words:church, churches, mosque, mosques, temple, temples, Islamic, Hindu,Christian, ~[maybe names of prophets])
    religionArray = ['iglesia', 'iglesias', 'mezquita', 'mezquitas', 'templo', 'templos', 'islámico', 'musulmán', 'hindú', 'cristiano', 'católico', 'protestante', 'église', 'églises', 'mosquée', 'mosquées', 'temple', 'temples', 'islamic', 'muslim', 'hindou', 'chrétien', 'catholique', 'protestant']
    religionWordCount = wordFilter(this.desc, religionArray);

    //Red Flag meter aggregate into Score
     this.score = 100 

    //Now we are going to add the Word Count(for each loop) into the Red Flag Meter.
    this.redFlagMeter = salaryArray + religionArray + regionPenalty + costPenalty;
  //The ranking of this code will be determined from its this.score
  this.score = this.score - this.redFlagMeter;
    
    
  }

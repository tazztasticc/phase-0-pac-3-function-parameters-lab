function introduction (name){
    console.log('Hi, my name is ${name}.');
}

function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  } 

  function introductionWithLanguage(name,language){
      console.log('Hi, my name is ${name} and I am learning to program in ${language}.');
  }

  function introductionWithLanguageOptional(name, language = "JavaScript"){
    console.log('Hi, my name is ${name} and I am learning to program in ${language}.');
  }
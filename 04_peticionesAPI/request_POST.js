var request = require('request');

var options = {
    'method': 'POST',
    'url': 'https://ecume.herokuapp.com/apiECUME/userRegister',
    'headers':{
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        "names": "Carlos",
        "surnames": "Villagran",
        "password": "kiko1234",
        "email": "enrique_segoviano@gmail.com",
        "phone": "5514261783",
        "height": 1.7,
        "weight": 70,
        "yearBirth": 1960,
        "gender": "Male",
        "bloodPresure": "90/100",
        "answer1": "0",
        "answer2": "0",
        "answer3": "1",
        "answer4": "1",
        "answer5": "1",
        "answer6": "1",
        "answer7": "1",
        "activityLevel": "1",
        "noActivity": "1",
        "nowActivity": "1",
        "highActivity": "1",
        "diabetes": "1",
        "hypertension": "1",
        "heartDisease": "1",
        "kidneyDisease": "1",
        "respiratoryDisease": "1",
        "jointDisease": "1",
        "allergies": "1",
        "hyperthyroidism": "1",
        "hypothyroidism": "1",
        "otherDisease": "1",
        "surgicalInterventions": "1",
        "fractures": "1",
        "hospitalization": "1",
        "bath": "1",
        "toothBrushing": "1",
        "sharedRoom": "1",
        "tobaccoConsumption": "1",
        "alcoholConsumption": "1",
        "numberOfMeals": "1",
        "physicalActivity": "1"
    })
};

request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
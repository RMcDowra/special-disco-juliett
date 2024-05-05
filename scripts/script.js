$( document ).ready(function() {
    

    var phoneticAlfa ={
        "A":"Alfa",
        "B":"Bravo",
        "C":"Charlie",
        "D":"Delta",
        "E":"Echo",
        "F":"Foxtrot",
        "G":"Golf",
        "H":"Hotel",
        "I":"India",
        "J":"Juliett",
        "K":"Kilo",
        "L":"Lima",
        "M":"Mike",
        "N":"November",
        "O":"Oscar",
        "P":"Papa",
        "Q":"Quebec",
        "R":"Romeo",
        "S":"Sierra",
        "T":"Tango",
        "U":"Uniform",
        "V":"Victor",
        "W":"Whiskey",
        "X":"Xray",
        "Y":"Yankee",
        "Z":"Zulu"
    };

    var result =""; 
    // Grab input from textbox
    

    

$("#submitButton").click(function () {
        //compare value with a stored object...

        let userText = $('#userText').val().toUpperCase().split("");

        $.each(userText, (index, value)=> {
            console.log(index, value);
            var letter = ''; //initialize as empty
            
           
            
                letter = userText[index];

                console.log('letter var = ', letter); //check what we got from array
                
                console.log('grabbing the correct data??', phoneticAlfa[letter]); 
                
                result += phoneticAlfa[letter] + ' ';
                console.log('result', result);

          
          }); //closes .each()   

         $('#textOutput').text(result);

        });
        
 

$('#clear').click(function () {
    $("#userText").val("")
    $('#textOutput').val("")
});

});

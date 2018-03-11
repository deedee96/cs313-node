function calc_sLetters(weight) {
    "use strict";
    var price = 0.0;
    switch (Math.ceil(weight)) {
    case 0:
    case 1:
        price = 0.50;
        break;
    case 2:
        price = 0.71;
        break;
    case 3:
        price = 0.92;
        break;
    default:
        price = 1.13;
        break;
        
            
    
    }
    
    return price;
}

function calc_mLetters(weight) {
    "use strict";
    var price = 0.0;
    switch (Math.ceil(weight)) {
    case 0:
    case 1:
        price = 0.47;
        break;
    case 2:
        price = 0.68;
        break;
    case 3:
        price = 0.89;
        break;
    default:
        price = 1.10;
        break;
        
            
    
    }
    
    return price;
}

function calc_lEnv(weight) {
    "use strict";
    var price = 0.0;
    switch (Math.ceil(weight)) {
    case 0:
    case 1:
        price = 1.00;
        break;
    case 2:
        price = 1.21;
        break;
    case 3:
        price = 1.42;
        break;
    case 4:
        price = 1.63;
        break;
    case 5:
        price = 1.84;
        break;       
    case 6:
        price = 2.05;
        break;
    case 7:
        price = 2.26;
        break;
    case 8:
        price = 2.47;
        break;
    case 9:
        price = 2.68;
        break;       
    case 10:
        price = 2.89;
        break;
    case 11:
        price = 3.10;
        break;
    case 12:
        price = 3.31;
        break;   
    case 13:
        price = 3.52;
        break;
    
    }
    
    return price;
}

function calc_package(weight) {
    "use strict";
    var price = 0.0;
    switch (Math.ceil(weight)) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        price = 3.50;
        break;
    case 5:  
    case 6:
    case 7:
    case 8:
        price = 3.75;
        break;
    case 9:
        price = 4.10;
        break;       
    case 10:
        price = 4.45;
        break;
    case 11:
        price = 4.80;
        break;
    case 12:
        price = 5.15;
        break;   
    case 13:
        price = 5.50;
        break;
    
    }
    
    return price;
}





function calculate(req, res) {
    "use strict";
    var choice = req.query.mail_type,
        weight = parseFloat(req.query.weight),
        price = 0.0;
        
    
    switch (choice) {
    case 'letters_stamped':
        price = calc_sLetters(weight);
        break;
    case 'letters_metered':
        price = calc_mLetters(weight);
        break;
    case 'l_env':
        price = calc_lEnv(weight);
        break;
    case 'package':
        price = calc_package(weight);
        break;
    }
    
    
    
    //var player = req.query.player_choice;
    //console.log('The player choice is: ' + player);
    
    var stuff = {weight: weight, price: price};
    res.render('result', stuff);
    
    
}



module.exports = {calculator: calculate};

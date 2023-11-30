

                                                             // HOMEEWORK 1

                                                             
function compare(a, b) {

    if (a === b ) {
        return 'equal'
    }
       
   if (typeof a === 'string' || typeof b === 'string') {
        return 'not equal because of the different types';
    }

    else {
        return 'not equal';
    }
}




const homework1=document.getElementById('homework1')
const function1 = document.getElementById('function1');
const condition1 = document.getElementById('condition1');


homework1.addEventListener('click', function() {
    
    
    function1.style.display = 'block';
    function2.style.display = 'none';
        function3.style.display = 'none';
        
        condition1.style.display = 'block';
        condition2.style.display = 'none';
        condition3.style.display = 'none';
        
        
        
        
        // chemi console
        function myconsole(message) {
            let consolediv = document.querySelector('.console');
            consolediv.innerHTML += '<p>' + '> '+ message + '</p>';
        }
        
        myconsole(compare(10, 10));
        myconsole(compare(10, 15));
        myconsole(compare(10, '10'));
        
        
    //brauzeris console
    console.log(compare(10,10))
    console.log(compare(10,15))             
    console.log(compare(10,'10'))


    
});    












///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


//HOMEEWORK 2




function change (fahrenheit,) {
    
    if (typeof fahrenheit === 'string') {
        return "false"
    }
    return   (fahrenheit-32)*5/9 + '°C'
    
}


function myconsole(message) {
    let consolediv = document.getElementById('.console');
    consolediv.innerHTML += '<p>' + '> '+ message + '</p>';
}

const homework2=document.getElementById('homework2')
const function2 = document.getElementById('function2');

homework2.addEventListener('click', function() {   
    
    function1.style.display = 'none';
    function2.style.display = 'block';
    function3.style.display = 'none';
    
    
        condition1.style.display = 'none';
        condition2.style.display = 'block';
        condition3.style.display = 'none';
     


    // chemi console
    myconsole (change (21))
    myconsole (change ('Nika Abashidze'))
    
    
    //brauzeris console
  console.log (change (21))
console.log (change ('Nika Abashidze'))
});





///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

                                                                //HOMEEWORK 3

function calculate(a, b, operation) {
    if (typeof a !== 'number' ) {
        return 'false'
    }
    if (typeof b !== 'number' ) {
        return 'false'
    }



    if (operation === '+') {
       return a + b
    }
     else if (operation === '-') {
        return a - b
    }
     else if (operation === '*') {
        return a * b
    }
     else if (operation === '/') {
        return a / b
    }



     else {
        return 'false'
    }

}



function myconsole(message) {
    let consolediv = document.querySelector('.console');
    consolediv.innerHTML += '<p>' + '> '+ message + '</p>';
}


const homework3=document.getElementById('homework3')
const function3 = document.getElementById('function3');

homework3.addEventListener('click', function() {

    function1.style.display = 'none';
    function2.style.display = 'none';
    function3.style.display = 'block';


    condition1.style.display = 'none';
    condition2.style.display = 'none';
    condition3.style.display = 'block';
 
    

    // chemi console

    myconsole(calculate(10 , 5 , '+' ));
    myconsole(calculate(10 , 5 , '-' ));
    myconsole(calculate(10 , 5 , '*' ));
    myconsole(calculate(10, 5 , '/' ));

    myconsole(calculate(5 , 'Nika' , '+' ));   // tu   a  da  b  ar arian ricxvebi
    myconsole(calculate(5 , 5 , '?' ));    //  tu operation cvladshi aris ucnobi 

//brauzeris console
console.log(calculate(10 , 5 , '+' ));
console.log(calculate(10 , 5 , '-' ));
console.log(calculate(10 , 5 , '*' ));
console.log(calculate(10, 5 , '/' ));

console.log(calculate(5 , 'Nika' , '+' ));   // tu   a  da  b  ar arian ricxvebi
console.log(calculate(5 , 5 , '?' ));    //  tu operation cvladshi aris ucnobi 

});



///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////



















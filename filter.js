//writes the selected value to the console

let url = 'https://adopteereendier.be/katten?';
let regionText = '';
let genderText = '';
let ageText = '';

const region = document.getElementById("region");
region.addEventListener('change', function handleChange(event){
    event.preventDefault();
    console.log(event.target.value);
    regionText = event.target.value;
});

const gender = document.getElementById("gender");
gender.addEventListener('change', function handleChange(event){
    event.preventDefault();
    console.log(event.target.value);
    genderText = event.target.value;
});

const age = document.getElementById("age");
age.addEventListener('change', function handleChange(event){
    event.preventDefault();
    console.log(event.target.value);
    ageText = event.target.value;
});

const form = document.getElementById("form");
form.addEventListener('submit', function handleSubmit(event){
    event.preventDefault();
    let options = '';

    if(regionText !== ''){
        options = options + 'province=' + regionText;      
    }
    if(genderText !== ''){
        if(options !== ''){
            options = options + '&';
        }
        options = options + 'gender=' + genderText;  
    }
    if(ageText !== ''){
        if(options !== ''){
            options = options + '&';
        }
        options = options + 'age=' + ageText;  
    }

    url = url + options;

    window.open(url,'_blank').focus();
});

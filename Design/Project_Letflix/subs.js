function checkIsLetter(char){
    char = char.charCodeAt()
    console.log(char)
    return ((char>=65&&char<=90) || (char>=97&&char<=122))
}

function validate(){
    document.getElementById('errorEmail').innerHTML=''
    document.getElementById('errorPass').innerHTML=''
    document.getElementById('errorGender').innerHTML=''
    document.getElementById('errorPlan').innerHTML=''
    document.getElementById('errorTerms').innerHTML=''

    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value
    let gender = document.getElementsByClassName('gender')
    let plan = document.getElementById('combobox').value
    let agree = document.getElementById('check')

    let valid = true
    let filled = 0

    if(email ==''){
        valid=false
        document.getElementById('errorEmail').innerHTML+='Email cannot be empty!'
    } else if(!email.endsWith('.com') && !email.contains('@')){
        valid=false
        document.getElementById('errorEmail').innerHTML+='Email must contains @ and must ends with .com!'
    } else{
        filled+=1
    }

    if(pass == ''){
        valid=false
        document.getElementById('errorPass').innerHTML+='Password cannot be empty!'
    } else if(pass.length<8){
        valid=false
        document.getElementById('errorPass').innerHTML+='Password length must be equals or more than 8!'
    }else{
        filled+=1
    }

    if(!gender[0].checked && !gender[1].checked){
        valid = false
        document.getElementById('errorGender').innerHTML+='Gender must be selected'
        
    } 

    if(plan == 'none'){
        valid = false
        document.getElementById('errorPlan').innerHTML+='Plan must be choosen'
    }

    if(!agree.checked){
        valid = false
        document.getElementById('errorTerms').innerHTML+='You must agree with terms and condition'
    }

    return false;
}
/*
    nama = gaboleh ada angka
    email = berakhir dengan .com
    pass = panjang minimal 8
    address = berawalan Jl.
    dob = harus sebelum hari ini
*/

function checkIsLetter(char){
    char = char.charCodeAt()
    console.log(char)
    return ((char>=65&&char<=90) || (char>=97&&char<=122))
}

function validate(){
    document.getElementById('error-name').innerHTML=''
    document.getElementById('error-email').innerHTML=''
    document.getElementById('error-pass').innerHTML=''
    document.getElementById('error-adr').innerHTML=''
    document.getElementById('error-dob').innerHTML=''
    // ambil data form
    // document.forms['regisForm']['name'].value
    // document.getElementById('name').value

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value
    let adr = document.getElementById('adr').value
    let dob = document.getElementById('dob').value

    let valid = true

    if(name==''){
        valid=false
        document.getElementById('error-name').innerHTML+='Name cannot be empty!'
    }else{
        for(let i = 0; i < name.length;i++){
            if(!checkIsLetter(name[i])){
                valid=false
                document.getElementById('error-name').innerHTML+='Name cannot contain numbers!'
                break;
            }
        }
    }

    if(email ==''){
        valid=false
        document.getElementById('error-email').innerHTML+='Email cannot be empty!'
    } else if(!email.endswith('.com')){
        valid=false
        document.getElementById('error-email').innerHTML+='Email must ends with .com!'
    }

    if(pass == ''){
        valid=false
        document.getElementById('error-pass').innerHTML+='Password cannot be empty!'
    } else if(pass.length<8){
        valid=false
        document.getElementById('error-pass').innerHTML+='Password length must be equals or more than 8!'
    }

    if(adr == ''){
        valid=false
        document.getElementById('error-adr').innerHTML+='Address cannot be empty!'
    } else if(!adr.startsWith('Jl.')){
        valid=false
        document.getElementById('error-pass').innerHTML+='Address must starts with Jl. !'
    }

    if(dob == ''){
        valid=false
        document.getElementById('error-dob').innerHTML+='DOB cannot be empty!'
    } else{
        let d = new Date(dob)
        if(d>new Date()){
            valid=false
            document.getElementById('error-pass').innerHTML+='DOB must before than today!'
        }
    }
    return false;
}
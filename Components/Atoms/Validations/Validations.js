export const emailvalidation=email=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if (emailRegex.test(email)){
    return true
   }
    else {
    return false
    }
}


export const PasswordValidation=Password=>{
    const PasswordRegex = /^(?=[A-Z]).{5,}$/;
   if (PasswordRegex.test(Password)){
    return true
   }
    else {
    return false
    }
}

export const PhoneValidation=Phone=>{
    const Phoneregex = /^\d{10}$/;
   if (Phoneregex.test(Phone)){
    return true
   }
    else {
    return false
    }
}
export const NameValidation=Name=>{
    const Nameregex =/^[A-Za-z\s]+$/;
   if (Nameregex.test(Name)){
    return true
   }
    else {
    return false
    }
}

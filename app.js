console.log("Ex 3:")
let arr = []

let username=prompt("enter your name :");
askg()

let order=prompt("entr your order : shawarma, zinger, burger ");
let order_name=prompt("enter your order name :");
window.alert("your order is being prepared ");

 arr.push(username)
 arr.push(usergender)
 arr.push(order)
for (let i =0; i<=2;i++){
    console.log(arr[i])
}
function askg()
{
    let usergender=prompt("enter your gender :");
    if(usergender=="male"){
       window.alert("welcome Mr"+" "+username);
    }
    else if(usergender=="female"){
       window.alert("welcome Ms"+" "+username);
    }
    else{
       window.alert("welcome");
    }
}
console.log("***********************");
console.log("Q2");
let num=8;
let result;
switch(num){
    case 1:
    result="ONE";
    break;
    case 2:
        result="TWO";
        break;
        case 3:
            result="THREE";
            break;
            case 4:
                result="FOUR";
                break;
                case 5:
                    result="FIVE";
                    break;
                    case 6:
                        result="SIX";
                        break;
                        case 7:
                            result="SEVEN";
                            break;
                            case 8:
                                result="EIGHT";
                                break;
                                case 9:
                                  result="NINE";
                                  break;
                         default:
                            result="PLEASE TRY AGAIN";
                                                                                                                                 
}
console.log(result);




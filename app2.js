console.log("EX2: Loops")
let usergender =prompt("مشان الله enter your gender :")
while(usergender!=="male" && usergender!=="female")
    {
        usergender =prompt("invalid input, please enter your correct gender(female/male) :")

    }
    window.alert(" thank you (:💕💕💕💕 ");
    console.log("**************")
    console.log("Q1 :");
    let i=0;
    for(i=0;i<=5;i++)
    {
        window.alert(i)
    }
    console.log("**************")
    console.log("Q4 :");
    let num =parseInt(prompt("enter the number from 0 to 100 "))
    while( num<0 || num>100)
    {
        num =prompt("enter the number from 0 to 100")

    }
    window.alert(" thank you dear 🎉🎉🎉🎉🎉🎉 ");
    console.log("**************")
    console.log("Q5 :");
    let n = prompt("enter your number")
    let sum=0;
    for(i=0;i<=n;i++){
        sum= sum +i;
    }
    window.alert("the sum is : "+ sum);
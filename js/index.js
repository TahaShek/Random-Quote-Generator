let qoute=document.querySelector('.qoute')
let person=document.querySelector('.person')
let btn=document.querySelector('.btn')

let qoutes=[
    {Qoute:`Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.`,
    Person:" Bernard M. Baruch"},
    
    {Qoute:`Life is what happens to us while we are making other plans.`,
    Person:" Jahaz"},

    {Qoute:`In three words I can sum up everything I've learned about life: it goes on.`,
    Person:"  Robert Frost"},

    {Qoute:`Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.`,
    Person:" Marilyn Monroe"}

]
btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*qoutes.length)
    console.log(random)
})
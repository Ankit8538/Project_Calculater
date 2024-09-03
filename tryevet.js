let apply=document.querySelector('#add');
let ghat=document.querySelector("#sub");
let multi=document.querySelector('#mul');
let divv=document.querySelector("#bag");
let power=document.querySelector("#pow");
let val=document.querySelector(".numinp");
let valu=document.querySelector(".ninp");
let out=document.querySelector("h3");

apply.addEventListener('click',function()
{    
    
    let a=val.value;
    a=parseInt(a);
    let b=valu.value;
    b=parseInt(b);
    let c=a+b;
    console.log(c);
    out.innerText=`Add Result:${c}`;
    out.style.fontFamily="Arial";
    out.style.color="red";
});
ghat.addEventListener('click',function()
{
    let a=val.value;
    a=parseInt(a);
    let b=valu.value;
    b=parseInt(b);
    let c=a-b;
    out.innerText=`Subtract Result:${c}`;
    out.style.fontFamily="Arial";
    out.style.color="red";
})

multi.addEventListener('click',function()
{
    let a=val.value;
    a=parseInt(a);
    let b=valu.value;
    b=parseInt(b);
    let c=a*b;
    console.log(c);
    out.innerText=`Multiply Result:${c}`;
    out.style.fontFamily="Arial";
    out.style.color="red";
})

divv.addEventListener('click',function()
{
    let a=val.value;
    a=parseInt(a);
    let b=valu.value;
    b=parseInt(b);
    let c=a/b;
    out.innerText=`Divid Result:${c}`;
    out.style.fontFamily="Arial";
    out.style.color="red";
})



power.addEventListener("click",function()
{
    let a=val.value;
    a=parseInt(a);
    let b=valu.value;
    b=parseInt(b);
    let c=1;
    for(let i=1;i<=b;i++)
    {
        c=c*a;
    }
    out.innerText=` Power Result:${c}`;
    out.style.fontFamily="Arial";
    out.style.color="red";
});

let butts=document.querySelector('#op');


butts.addEventListener("click",function()
{
     let tbb=document.querySelector(".tab");
     let all=document.querySelector('body')
     

     let a=tbb.value;
     let b=0;
     
     for(let i=1;i<=10;i++)
     {
        b=a*i;
        let main=document.createElement('h4')
        
        main.innerText=`${a} * ${i} = ${b}`;
        main.style.fontFamily="Arial";
        main.style.color="red";
        all.append(main);
     }
});
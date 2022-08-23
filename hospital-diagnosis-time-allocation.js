let num=Number(prompt("enter the number"))


let count=0;
for(let i=0;i<num;i++)
{
let i=new Promise((res,rej)=>
{  
   let x = Math.floor((Math.random() * 9) + 1);
    let random=x*1000;
    setTimeout(()=>
    {
      res("this took"+random+"ms");
    },random)
    
})


async function myfunction()
{
 let z=await i;
 console.log(z);
 
}
await myfunction();
}

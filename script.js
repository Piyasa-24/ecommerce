const bar=document.getElementById('bar');

const nav=document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

function myFunction()
{
    var cross=document.getElementsByClassName('fa-xmark');
for(var i=0;i<cross.length;i++)
  {
    var element=cross[i];
    
  
}
    if(element)
    {
        element.addEventListener('click',()=>
        {
            nav.classList.remove('active');
        })
    }

}
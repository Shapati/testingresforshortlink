const  ham = document.querySelector('.ham')
const nav = document.querySelector('.linksnav')
const getlink = document.querySelector('form')
const input = document.querySelector('input')
const Copy = document.querySelector('.result button')
const search = document.querySelector('.search')
const result = document.querySelector('.result')
const newshort = document.querySelector('.shorttt')


ham.addEventListener('click', ()=>{

  ham.classList.toggle('active');
  nav.classList.toggle('show')

})



const update = async(link)=>{
  const short_link = await short(link)
  return short_link;

  
}





input.addEventListener('keyup', e=>{
  e.preventDefault();
 
  if (getlink.link.value.includes('.com')){
    input.style.border ='3px solid green'

    

  }else{
    input.style.border = '3px solid red';
    

  }

  

})
getlink.addEventListener('submit',e=>{
  e.preventDefault();

  const updateUI = async(data) =>{
    console.log(data)
  
    const shortt = data.result;
   
    result.innerHTML=`
    <div class="mainlink">
     <p> ${shortt.original_link}</p>
    </div>
    <div class="shortlink">
      <a  href="#" class"shorttt">${shortt.short_link}</a>
      <button >Copy </button>
    </div>
   
  
    `
  // console.log(shortt.short_link)
  
  
  }

  
  


  const link=getlink.link.value.trim();
  getlink.reset();

  update(link)
  .then(data=> updateUI(data))
  .catch(err=> console.log(err))
  

})






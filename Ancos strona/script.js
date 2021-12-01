const f1 = document.querySelector('.about div.f1')
const f2 = document.querySelector('.about div.f2')
const f3 = document.querySelector('.about div.f3')
const f4 = document.querySelector('.about div.f4')

const o1 =document.querySelector('.o1 img:nth-of-type(1)')
const o2 =document.querySelector('.o1 img:nth-of-type(2)')
const o3 =document.querySelector('.o2 img:nth-of-type(1)')
const o4 =document.querySelector('.o2 img:nth-of-type(2)')
const sectionOpinion =document.querySelector('.opinion')

window.addEventListener('scroll', function(){
let scrollVallue = window.scrollY;
if(scrollVallue > f1.offsetTop + f1.offsetHeight){f1.classList.add('active')}
else{f1.classList.remove('active')};
if(scrollVallue > f2.offsetTop + f2.offsetHeight/2){f2.classList.add('active')}
else{f2.classList.remove('active')};
if(scrollVallue > f3.offsetTop + f3.offsetHeight/2){f3.classList.add('active')}
else{f3.classList.remove('active')};
if(scrollVallue > f4.offsetTop + f4.offsetHeight/2){f4.classList.add('active')}
else{f4.classList.remove('active')};


if(scrollVallue > sectionOpinion.offsetTop)
{o1.classList.add('active2')}
else{o1.classList.remove('active2')};
if(scrollVallue > sectionOpinion.offsetTop)
{o2.classList.add('active2')}
else{o2.classList.remove('active2')};
if(scrollVallue > sectionOpinion.offsetTop)
{o3.classList.add('active2')}
else{o3.classList.remove('active2')};
if(scrollVallue > sectionOpinion.offsetTop)
{o4.classList.add('active2')}
else{o4.classList.remove('active2')};

})


// scrolBar

let progess = document.getElementById('progressbar')
let totalHeight = document.body.scrollHeight - window.innerHeight
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight * 100)
    progess.style.height = progressHeight + '%'
}

// Menu

const aboutMe = document.querySelector('div.menu a:nth-of-type(1)')
const priceList = document.querySelector('div.menu a:nth-of-type(2)')
const opinion = document.querySelector('div.menu a:nth-of-type(3)')
const contact = document.querySelector('div.menu a:nth-of-type(4)')
const btnBunner = document.querySelector('.onBanner')


const sectionAbout = document.querySelector('.about')

const sectionPrizeList = document.querySelector('.prizeList>h1')
const sectionContact = document.querySelector('.contact')


aboutMe.addEventListener('click', function(e){
    e.preventDefault();
    let aboutMeHeight = sectionAbout.offsetTop;
    window.scrollTo({
        top: aboutMeHeight - aboutMe.offsetHeight,
        left: 0,
        behavior: 'smooth'
      });
      console.log('click')
})
priceList.addEventListener('click', function(e){
    e.preventDefault()
    let sectionPrizeListHeight = sectionPrizeList.offsetTop;
    window.scrollTo({
        top: sectionPrizeListHeight - sectionPrizeList.offsetHeight,
        left: 0,
        behavior: 'smooth'
      });
})

btnBunner.addEventListener('click', function(e){
    e.preventDefault()
    let prizeListHeight = sectionPrizeList.offsetTop;
    window.scrollTo({
        top:prizeListHeight - sectionPrizeList.offsetHeight,
        left: 0,
        behavior: 'smooth'
      });
})

opinion.addEventListener('click', function(e){
    e.preventDefault()
    let sectionOpinionHeight = sectionOpinion.offsetTop;
    window.scrollTo({
        top: sectionOpinionHeight,
        left: 0,
        behavior: 'smooth'
      });
})

contact.addEventListener('click', function(e){
    e.preventDefault()
    let contactSectionHeight = sectionContact.offsetTop;
    window.scrollTo({
        top:contactSectionHeight + sectionContact.offsetHeight,
        left: 0,
        behavior: 'smooth'
      });
})


const btns = document.querySelectorAll('.pricing-button')

for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener('click', function(e){
        e.preventDefault()
        let contactSectionHeight = sectionContact.offsetTop;
        window.scrollTo({
            top:contactSectionHeight + sectionContact.offsetHeight,
            left: 0,
            behavior: 'smooth'
          });
    })
}


const homeBtn = document.querySelector('.fa-home')

homeBtn.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        left: 0,
        behavior: 'smooth'
      })
})
        
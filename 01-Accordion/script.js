const faqQuestion = document.querySelectorAll('.faqQuest')

faqQuestion.forEach((items,index)=>{
    items.addEventListener('click',()=>{
        let currectAns = items.nextElementSibling;
        let allFaqAns = document.querySelectorAll('.faqAns')
        allFaqAns.forEach((itm,i)=>{
            if(allFaqAns[i] !== currectAns){
                itm.classList.remove('active')
            }
        })
        currectAns.classList.toggle('active')
    })
})
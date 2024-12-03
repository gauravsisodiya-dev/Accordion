const faqQuestion = document.querySelectorAll('.faqQuest')
const icon = document.querySelectorAll('.fa-solid')

faqQuestion.forEach((items,index)=>{
    items.addEventListener('click',()=>{
        let currectAns = items.nextElementSibling;
        let iconChange = items.lastChild.previousSibling;
        // console.log(items.lastChild)
        // console.log(items.lastChild.previousSibling)

        let allFaqAns = document.querySelectorAll('.faqAns')
        allFaqAns.forEach((itm,i)=>{
            if(allFaqAns[i] !== currectAns){
                itm.classList.remove('active')
            }
        })

        icon.forEach((allIcon,allIndex)=>{
            if(icon[allIndex] !== iconChange){
                allIcon.classList.remove('fa-minus')
                allIcon.classList.add('fa-plus')
                // console.log(icon[allIndex])
                // console.log(iconChange)
            }
        })

        currectAns.classList.toggle('active')
        iconChange.classList.toggle('fa-minus')
        iconChange.classList.toggle('fa-plus')
        
    })
})
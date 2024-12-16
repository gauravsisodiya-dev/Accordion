const textarea = document.getElementById('textarea');

function f1(e){
    textarea.style.fontSize = e.value+'px';
}

function color(e){
    textarea.style.color = e.value;
}

let btns = document.querySelectorAll('button');
btns.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        if(btns[0] == btns[index]){
            if(textarea.style.fontWeight == 'bold'){
                textarea.style.fontWeight = 'normal';
                item.style.color = 'gray';
            } else{
                textarea.style.fontWeight = 'bold';
                item.style.color = 'black';
            }
        } else if(btns[1] == btns[index]){
            if(textarea.style.fontStyle == 'italic'){
                textarea.style.fontStyle = 'normal';
                item.style.color = 'gray';
            } else{
                textarea.style.fontStyle = 'italic';
                item.style.color = 'black';
            }
        } else if(btns[2] == btns[index]){
            if(textarea.style.textDecoration == 'underline'){
                textarea.style.textDecoration = 'none';
                item.style.color = 'gray';
            } else{
                textarea.style.textDecoration = 'underline';
                item.style.color = 'black';
            }
        } else if(btns[3] == btns[index]){
            if(textarea.style.textAlign == 'left'){
                textarea.style.textAlign = 'none';
                item.style.color = 'gray';
            } else{
                textarea.style.textAlign = 'left';
                item.style.color = 'black';
                btns[4].style.color = 'gray'
                btns[5].style.color = 'gray'
            }
            
        } else if(btns[4] == btns[index]){
            if(textarea.style.textAlign == 'center'){
                textarea.style.textAlign = 'none';
                item.style.color = 'gray';
            } else{
                textarea.style.textAlign = 'center';
                item.style.color = 'black';
                btns[3].style.color = 'gray'
                btns[5].style.color = 'gray'
            }
            
        } 
        else if(btns[5] == btns[index]){
            if(textarea.style.textAlign == 'right'){
                textarea.style.textAlign = 'none';
                item.style.color = 'gray';
            } else{
                textarea.style.textAlign = 'right';
                item.style.color = 'black';
                btns[3].style.color = 'gray'
                btns[4].style.color = 'gray'
            }
            
        } else if(btns[6] == btns[index]){
            if(textarea.style.textTransform == 'uppercase'){
                textarea.style.textTransform = 'capitalize';
                item.style.color = 'gray';
            } else{
                textarea.style.textTransform = 'uppercase';
                item.style.color = 'black';
                btns[3].style.color = 'gray'
                btns[4].style.color = 'gray'
            }
            
        } else if(btns[7] == btns[index]){
            if(textarea.style.textDecoration == 'line-through'){
                textarea.style.textDecoration = 'none';
                item.style.color = 'gray';
            } else{
                textarea.style.textDecoration = 'line-through';
                item.style.color = 'black';
                btns[3].style.color = 'gray'
                btns[4].style.color = 'gray'
            }
            
        } 
    })
})
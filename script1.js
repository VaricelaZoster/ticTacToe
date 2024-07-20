const buttonClickedId="";
let b=0;
    let arr = ["cell1","cell2","cell3","cell4","cell5","cell6","cell7","cell8","cell9"];
    const c1 = document.getElementById('cell1');
    const c2 = document.getElementById('cell2');
    const c3 = document.getElementById('cell3');
    const c4 = document.getElementById('cell4');
    const c5 = document.getElementById('cell5');
    const c6 = document.getElementById('cell6');
    const c7 = document.getElementById('cell7');
    const c8 = document.getElementById('cell8');
    const c9 = document.getElementById('cell9');

    for (let i = 1; i <= 9; i++) {
        const cell = document.getElementById(`cell${i}`);
        console.log(cell);
        cell.addEventListener("click", function() {
            if (cell.textContent === '') {
                cell.textContent = 'X';
                arr.splice(arr.indexOf(`cell${i}`), 1); 
                console.log(arr);
                winCondition();
                Compute();
            }
        });
    }

function disabler(){
    for(let x = 0 ; x<arr.length;x++){
        document.getElementById(arr[x]).disabled = true;
    }
}

function winCondition(){
    if(c1.textContent === 'X' && c4.textContent === 'X' && c7.textContent === 'X')
    {
        document.getElementById('win').innerHTML = 'You Win!!!';
        b+=1;
        disabler();
        clear();
    }
    else if (c1.textContent === 'O' && c4.textContent === 'O' && c7.textContent === 'O'){
        document.getElementById('win').innerHTML = 'You Lose!!!';
        b+=1;
        console.log("lose");
        disabler();
        clear();
    }
    else if(c3.textContent === 'X' && c6.textContent === 'X' && c9.textContent === 'X')
    {
        document.getElementById('win').innerHTML = 'You Win!!!';
        b+=1;
        disabler();
        clear();
    }
    else if (c3.textContent === 'O' && c6.textContent === 'O' && c9.textContent === 'O'){
        document.getElementById('win').innerHTML = 'You Lose!!!';
        b+=1;
        console.log("lose");
        disabler();
        clear();
    }
    else if(c2.textContent === 'X' && c5.textContent === 'X' && c8.textContent === 'X')
    {
        document.getElementById('win').innerHTML = 'You Win!!!';
        b+=1;
        disabler();
        clear();
    }
    else if (c2.textContent === 'O' && c5.textContent === 'O' && c8.textContent === 'O'){
        document.getElementById('win').innerHTML = 'You Lose!!!';
        b+=1;
        console.log('lose');
        disabler();
        clear();
    }
    else if(c3.textContent === 'X' && c6.textContent === 'X' && c9.textContent === 'X')
    {
        document.getElementById('win').innerHTML = 'You Win!!!';
        b+=1;
        disabler();
        clear();
    }
    else if (c3.textContent === 'O' && c6.textContent === 'O' && c9.textContent === 'O'){
        document.getElementById('win').innerHTML = 'You Lose!!!';
        b+=1;
        console.log("lose");
        disabler();
        clear();
    }
    else if(c1.textContent === 'X' && c2.textContent === 'X' && c3.textContent === 'X')
    {
        document.getElementById('win').innerHTML = 'You Win!!!';
        b+=1;
        disabler();
        clear();
    }
    else if (c1.textContent === 'O' && c2.textContent === 'O' && c3.textContent === 'O'){
        document.getElementById('win').innerHTML = 'You Lose!!!';
        b+=1;
        console.log("lose");
        disabler();
        clear();
    }
    else if(c4.textContent === 'X' && c5.textContent === 'X' && c6.textContent === 'X')
    {
        document.getElementById('win').innerHTML = 'You Win!!!';
        b+=1;
        disabler();
        clear();
    }
    else if (c4.textContent === 'O' && c5.textContent === 'O' && c6.textContent === 'O'){
        document.getElementById('win').innerHTML = 'You Lose!!!';
        b+=1;
        console.log('lose');
        disabler();
        clear();
    }
    else if(c7.textContent === 'X' && c8.textContent === 'X' && c9.textContent === 'X')
        {
            document.getElementById('win').innerHTML = 'You Win!!!';
            b+=1;
            disabler();
            clear();
        }
        else if (c7.textContent === 'O' && c8.textContent === 'O' && c9.textContent === 'O'){
            document.getElementById('win').innerHTML = 'You Lose!!!';
            b+=1;
            console.log('lose');
            disabler();
            clear();
        }
    else if(c1.textContent === 'X' && c5.textContent === 'X' && c9.textContent === 'X')
    {
        document.getElementById('win').innerHTML = 'You Win!!!';
        b+=1;
        disabler();
        clear();
    }
    else if (c1.textContent === 'O' && c5.textContent === 'O' && c9.textContent === 'O'){
        document.getElementById('win').innerHTML = 'You Lose!!!';
        b+=1;
        console.log('lose');
        disabler();
        clear();
    }
    else if(c3.textContent === 'X' && c5.textContent === 'X' && c7.textContent === 'X')
    {
        document.getElementById('win').innerHTML = 'You Win!!!';
        b+=1;
        disabler();;
        clear();
    }
    else if (c3.textContent === 'O' && c5.textContent === 'O' && c7.textContent === 'O'){
        document.getElementById('win').innerHTML = 'You Lose!!!';
        b+=1;
        console.log('lose');
        disabler();
        clear();
    }    
    else if(arr.length == 0)
        {
            document.getElementById('win').innerHTML = "Draw!!!";
            b+=1;
            clear();
        }   
}

function Compute(){
    
        console.log("entered");
        //winCondition();
        console.log("exit");
        let a = Math.floor(Math.random()*(arr.length));
        let cid = arr[a];
        if(b==0){
        document.getElementById(cid).textContent = 'O';
        arr.splice(a,1);
        }
        winCondition();
    }

function clear(){
    if(b==1){
        b=2;
    const winDiv = document.querySelector('.win-condition');
    const button = document.createElement('button');
    button.textContent = 'Click here to reset'; 
    button.id = 'newButton';
    winDiv.appendChild(button);
    button.addEventListener("click" , function(){
        button.remove();
        //location.reload();
        clear1();
        reInitialize();
    })
}
}

function clear1(){
    for (let i = 1; i <= 9; i++) {
        const cell = document.getElementById(`cell${i}`);
        console.log(cell);
        cell.textContent = '';
        cell.disabled = false;
    }
    document.getElementById('win').innerHTML = '';
}

function reInitialize(){
    b=0;
    arr = ["cell1","cell2","cell3","cell4","cell5","cell6","cell7","cell8","cell9"];
}
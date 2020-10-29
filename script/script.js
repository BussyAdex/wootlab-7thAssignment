swal("Please input your name:", {
    content: "input",
    })
    .then((value) => {
    swal(`Welcome ${value}`); 
    document.querySelector('h1').innerHTML = value;
    });
    
    $('.result-session').hide();
    var mycount = 0;
    var scorce = 0;
    var firstRandomNum = 0;
    var firstDiceImage = 'images/dice-'+firstRandomNum+'.png';
    document.getElementById('radDiceNum').innerHTML = firstRandomNum;
    document.getElementById('imageDice').setAttribute('src', firstDiceImage);
    document.getElementById('totalCount').innerHTML = scorce;

$(document).ready(function(){
    $('#rollButton').click(function(){
        if(mycount < 5){
        firstRandomNum = Math.floor(Math.random()*6) + 1;
        firstDiceImage = 'images/dice-'+firstRandomNum+'.png';
        document.getElementById('radDiceNum').innerHTML = firstRandomNum;
        document.getElementById('imageDice').setAttribute('src', firstDiceImage);
        scorce += firstRandomNum;
        document.getElementById('totalCount').innerHTML = scorce; 
        if(mycount == 4){
                document.getElementById('rollButton').innerHTML ='GAME OVER';
                document.getElementById('rollButton').style.backgroundColor = '#081036';
                if (scorce < 25){
                    $('.result-session').show();
                    $('.winResult').hide();
                    $('.loseResult').show();
                    document.getElementById('resultID-2').innerHTML =`You got ${scorce} out of 30`;
                }
                else if (mycount >= 4 && scorce >= 25){
                    $('.result-session').show();
                    $('.loseResult').hide();
                    $('.winResult').show();
                    document.getElementById('resultID-1').innerHTML =`You got ${scorce} out of 30`;
                }
                };
        mycount += 1;
        }     
    }); 

    $('#resetButton').click(function(){
        scorce = 0;
        mycount = 0;
        var firstRandomNum = 0;
        var firstDiceImage = 'images/dice-'+firstRandomNum+'.png';
        document.getElementById('radDiceNum').innerHTML = firstRandomNum;
        document.getElementById('imageDice').setAttribute('src', firstDiceImage);
        document.getElementById('totalCount').innerHTML = scorce;
        document.getElementById('rollButton').innerHTML ='ROLL DICE';
        document.getElementById('rollButton').style.backgroundColor = '#28a745';
        $('.result-session').hide();
        $('.loseResult').hide();
        $('.winResult').hide();
    });  
});



        


//make sure DOM is ready!
$(document).ready(function(){

    //start of code
    let factClick=0;
    $('#funfacts').on('click', function(){
        factClick++;
        $('.funfact').slideToggle();
        if(factClick%2===0){
            $('#factpic').slideUp();

        }
    })
    $('#cornell').on('click', function(){
        $('#factpic').attr('src', 'img/cornell.jpg')
        $('#factpic').fadeIn();
    })
    $('#dogs').on('click', function(){
        $('#factpic').attr('src', 'img/dogs.png')
        $('#factpic').fadeIn();
    })
    $('#cubs').on('click', function(){
        $('#factpic').attr('src', 'img/cubs.jpg')
        $('#factpic').fadeIn();
    })
    $('#rugby').on('click', function(){
        $('#factpic').attr('src', 'img/rugby.gif')
        $('#factpic').fadeIn();
    })
    $('#glacier').on('click', function(){
        $('#factpic').attr('src', 'img/glacier2.jpg')
        $('#factpic').fadeIn();
    })
    $('#bike').on('click', function(){
        $('#factpic').attr('src', 'img/bike.jpg')
        $('#factpic').fadeIn();
    })
    $('#newro').on('click', function(){
        $('#factpic').attr('src', 'img/newro.png')
        $('#factpic').fadeIn();
    })
    $('#boston').on('click', function(){
        $('#factpic').attr('src', 'img/boston.jpg')
        $('#factpic').fadeIn();
    })
    $('#ender').on('click', function(){
        $('#factpic').attr('src', 'img/ender.jpg')
        $('#factpic').fadeIn();
    })




    $('#submit').on('click', function(){
        submitGuess(game);
    });
    $('#player-input').keypress(function(event){
        if(event.which==13){
            submitGuess(game);
        }
    });

    $('#hint').on('click', function(){
        if(game.hintCount===0){
        var hint= game.provideHint();
        $('#title').text("The winning number is: "+game.hint);
        $('#hint-reminder').text("Your Hint: "+ game.hint.join(', '));
        }
        else $('#title, #hint-reminder').text("You only get one hint! Your's was "+ game.hint.join(', '));
        $('#subtitle').text('Now, guess again!');
    });

    $('#hint').on('mouseenter', showHint);
    $('#hint').on('mouseleave', showHint);

    $('#reset').on('click', function(){
        game = newGame();
        $('#title').text('Play the Mystery Number Game!');
        $('#subtitle').text('Guess a number between 1 and 100...good luck!');
        $('body').removeClass('winning')
        $('#losing').hide();
        $('.guess').text('-');
        $('#hint, #submit').prop("disabled", false);
        $('#hint-reminder').text("C'mon, you know you want one!");
    });

    // $('#player-input').on('keyup', function(){
    //     $('#subtitle').text('You sure about that guess??');
    // });

//end of code
});

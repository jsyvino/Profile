
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
        $('#factpic').attr('src', 'img/Cornell.jpg')
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
//end of code
});

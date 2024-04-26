jQuery(document).ready( function($) {

    textRefresh();
    
    document.getElementById('hladVideo').addEventListener('ended',myHandler,false);



    function myHandler(e) {

        console.log('запуск нового цикла видео и анимации текста');
        this.play();
        textRefresh();

    }

    
    let alph = "АаБбВвГгДд";

    let sl1 = "ПОСТОЯНСТВО ПЕРЕМЕЩЕНИЯ";
    let sl2 = "СОХРАННОСТЬ ГРУЗА";
    let sl3 = "ПОСТОЯНСТВО ТЕМПЕРАТУРЫ";
    let sl4 = "КОНТРОЛЬ ПЕРЕДВИЖЕНИЯ";

function textRefresh() {
    setTimeout(function(){
        // Shuffle the container with custom text
        $('.animate-text').shuffleLetters({
            "text": sl1
        });
    },500);
    setTimeout(function(){
        // Shuffle the container with custom text
        $('.animate-text').shuffleLetters({
            "text": sl2
        });
    },10000);

    setTimeout(function(){
        // Shuffle the container with custom text
        $('.animate-text').shuffleLetters({
            "text": sl3
        });
    },20000);

    setTimeout(function(){
        // Shuffle the container with custom text
        $('.animate-text').shuffleLetters({
            "text": sl4
        });
    },30000);

    setTimeout(function(){
        // Shuffle the container with custom text
        $('.animate-text').shuffleLetters({
            "text": sl1
        });
    },45000);
}	

});
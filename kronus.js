onload = () => {
    // executa um JS imediatamente após o carregamento da página.

    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var startStop = 'true'
    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    var appendMinutes = document.getElementById('minutes');
    var btnStart = document.getElementById('button-start');
    var btnReset = document.getElementById('button-reset');
    var Interval;
    btnStart.addEventListener('click', () => {
        if (startStop == 'true') {
            clearInterval(Interval); //Método clearInterval() limpa o temporizador definido no método setInterval().
            Interval = setInterval(() => {
                tens++;//incramento

                btnStart.classList.remove('start')
                btnStart.classList.add('start-move')
                if (tens <= 9) {
                    appendTens.innerHTML = '0' + tens;
                };
                if (tens > 9) {
                    appendTens.innerHTML = tens
                };
                if (tens > 99) {
                    console.log('seconds');
                    seconds++;
                    appendSeconds.innerHTML = '0' + seconds;
                    tens = 0
                }
                if (seconds > 9) {
                    appendSeconds.innerHTML = seconds
                }
                if (seconds > 59) {
                    seconds = 0;
                    console.log('minutes');
                    minutes++;
                    appendMinutes.innerHTML = '0' + minutes;
                }
                if (minutes > 9) {
                    appendMinutes.innerHTML = minutes
                }
                
                startStop = 'false'

            }, 10);//O método setInterval() chama uma função em intervalo especificado (milessegundos).
        } else {
            clearInterval(Interval);
            btnStart.classList.remove('start-move')
            btnStart.classList.add('start')
            startStop = 'true'
        }
    });

    btnReset.addEventListener('click', () => {
        clearInterval(Interval);
        btnStart.classList.remove('start-move')
        btnStart.classList.add('start')
        btnReset.classList.remove('reset')
        btnReset.classList.add('reset-move')
        tens = '00';
        seconds = '00';
        minutes = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        startStop = 'true'
        function tempo(){
            btnReset.classList.remove('reset-move')
            btnReset.classList.add('reset')
        } setTimeout(tempo, 250)
    });

    
}
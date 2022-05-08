document.addEventListener('DOMContentLoaded', () => {
    // /* Adding JQuery */
    // var head = document.getElementsByTagName('head')[0];
    // var script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.src = "http://code.jquery.com/jquery-2.2.1.min.js";
    // // Then bind the event to the callback function.
    // // There are several events for cross browser compatibility.

    // // Fire the loading
    // head.appendChild(script);
    
    // new element for each row
    var txt = ['Welcome to', 'Catalyst 2022']
    // delay between letters
    let delay = 200
    var index = 0

    typeWriter = (text, i, id, fnCallback) => {
        if (i < text.length) {
            document.getElementById(id).innerHTML = text.substring(0, i + 1) + '<span id="caret" aria-hidden="true"></span>'
            // wait for a while and call this function again for next character
            setTimeout(() => {
                typeWriter(text, i + 1, id, fnCallback)}, delay)
            }
            // text finished, call callback if there is a callback function
        else {
            index++
            if (index < txt.length) {
                document.getElementById(id).innerHTML = txt[index - 1]
            }
            if (typeof fnCallback == 'function') {
                setTimeout(fnCallback, delay)
            }
        }
    }
    // main
    // check for overflowing elements (to remove)
    // document.querySelectorAll('*').forEach(el => {
    //     if (el.offsetWidth > document.documentElement.offsetWidth) {
    //         console.log('Found the worst element ever: ', el);
    //     }
    //   });

    document.getElementById('welcome' + String(index + 1)).style.whiteSpace = 'pre'
    typeWriter(txt[index], 0, 'welcome' + String(index + 1), () => {
        typeWriter(txt[index], 0, 'welcome' + String(index + 1), null);
        document.getElementById('welcome' + String(index + 1)).style.whiteSpace = 'pre'
    })
})

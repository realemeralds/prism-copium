document.addEventListener('DOMContentLoaded', () => {
    // new element for each row
    var txt = ['Welcome to', 'Catalyst 2022']
    // delay between letters
    const delay = 200
    var index = 0

    typeWriter = (text, i, id, fnCallback) => {
        if (i < text.length) {
            document.getElementById(id).innerHTML = text.substring(0, i + 1) + '<span id="caret" aria-hidden="true"></span>'
            // wait for a while and call this function again for next character
            setTimeout(() => {
                typeWriter(text, i + 1, id, fnCallback)
            }, delay)
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

    document.getElementById('welcome' + String(index + 1)).style.whiteSpace = 'pre'
    typeWriter(txt[index], 0, 'welcome' + String(index + 1), () => {
        typeWriter(txt[index], 0, 'welcome' + String(index + 1), null);
        document.getElementById('welcome' + String(index + 1)).style.whiteSpace = 'pre'
    })
})

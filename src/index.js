const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let e = expr.split('');
    let res = [];
    for (let i = 0; i < e.length; i += 10) {
        let letter = ''
        if (e[i] == '*') {
            res.push(' ');
        } else {
            for (let k = 0; k < 10; k += 2) {
                if (e[i + k] == 1) {
                    if (e[i + k + 1] == 1) {
                        letter += '-';
                    } else {
                        letter += '.'
                    }
                }
            }
            res.push(MORSE_TABLE[letter])
        }
    }
    return res.join('')
}

module.exports = {
    decode
}
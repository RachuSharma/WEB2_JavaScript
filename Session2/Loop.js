// exc 2.3 Your own loop
// this function is a custom loop function


function loop(start, test, update, body) {
    for (let i = start; test(i); i = update(i)) {
        body(i)
    };
}

loop(3,
    n => n > 0,
    n => n - 1,
    console.log
    );

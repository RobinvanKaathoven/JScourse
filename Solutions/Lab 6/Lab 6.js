var luminis;

(function (ns) {
    function concatWords() {
        var result = "";
        for (var i in arguments) {
            if (!arguments[i]) {
                throw { message: 'word must have letters' };
            }
            if (typeof arguments[i] !== 'string') {
                throw { message: 'word must be a string' }
            }
            result += arguments[i];
        }
        return result;
    }
    ns.concatWords = concatWords;
})((luminis = luminis || {}, luminis.academy = luminis.academy || {}));

console.log(luminis.academy.concatWords('hallo', 'hoe'));
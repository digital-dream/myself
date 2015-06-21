String.prototype.specialCharacters = function () {
    var withAccent = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
    var unaccented = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
    var newWord = '';
    for (var i = 0; i < this.length; i++) {
        if (withAccent.search(this.substr(i, 1)) >= 0) {
            newWord += unaccented.substr(withAccent.search(this.substr(i, 1)), 1);
        } else {
            newWord += this.substr(i, 1);
        }
    }
    return newWord.toUpperCase();
};
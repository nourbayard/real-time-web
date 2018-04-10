function cry(text){

    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    var vowels = ['a', 'e', 'i', 'o', 'u']

    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z', 'w']

    var punctuation = [',', '"', ";", ".", "!", "?"]

    var endingPunctuation = [',', '.', '?', '!']

    var excitedPunctuation = ['?', '!']

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function isLetter(char){
        return letters.includes(char)
    }

    function isVowel(char){
        return vowels.includes(char)
    }

    function isConsonant(char){
        return consonants.includes(char)
    }

    function isPunctuation(char){
        return punctuation.includes(char)
    }

    function isEndingPunctuation(char){
        return endingPunctuation.includes(char)
    }

    function isExcitedPunctuation(char){
        return excitedPunctuation.includes(char);
    }

    function isApos(char){
        return char === '\'';
    }

    function isComma(char){
        return char === ',';
    }

    function isPlease(index, string){
        if (index + 3 >= string.length)
            return false;
        if (string.substring(index, index + 7) === "please ")
            return true;
    }

    function isYou(index, string){
        if (index + 3 >= string.length)
            return false;
        if (string.substring(index, index + 4) === "you ")
            return true;
    }

    function isIng(index, string){
        if (index + 3 >= string.length)
            return false;
        if (string.substring(index, index + 4) === "ing ")
            return true;
    }

    function isIDK(index, string){
        //I DON'T KNOW
        if (index + 12 >= string.length)
            return false;
        if(string.substring(index, index + 12) === "i don\'t know")
            return true;
    }

    function isTBH(index, string){
        //TO BE HONEST
        if (index + 12 >= string.length)
            return false;
        if(string.substring(index, index + 12) === "to be honest")
            return true;
    }

    function isWordStart(index, string){
        if (index === (string.length - 1)) return false;
        if (index === 0)
            return true;
        if ((string[index - 1] == " " || endingPunctuation.includes(string[index - 1])) && letters.includes(string[index])) return true;
        return false;
    }

    function isWordEnd(index, string){
        if (index === 0)
            return false;
        if (index === (string.length - 1)) return true;
        if ((string[index + 1] == " " || endingPunctuation.includes(string[index + 1])) && letters.includes(string[index])) return true;
        return false;
    }

    function double(char){
        var multiply = getRandomInt(2, 4);
        return Array(multiply).join(char);
    }

    function space(char){
        return " " + char;
    }

    function swap(index, string){
        var subStr = string.substring(index, index + 1);
        return subStr.split("").reverse().join("");
    }

    function vowelWarp(char){
        var vowelChoice = vowels[getRandomInt(0, vowels.length - 1)];
        return char + vowelChoice;
    }

    function commaNonsense(){
        var multiply = getRandomInt(2, 5);
        return Array(multiply).join(',');
    }

    function semicolonNonsense(){
        var multiply = getRandomInt(1, 4);
        return Array(multiply).join(';');
    }

    function pointNonsense(){
        var multiply = getRandomInt(1, 4);
        return Array(multiply).join('.');
    }

    var newString = '';
    text = text.toLowerCase();
    for (var i = 0; i < text.length; i++)
    {
        // CASES
        // please
        if (isPlease(i, text)){
            newString += 'pls';
            i += 5;
        }
        // ing
        else if (isIng(i, text)){
            newString += 'in';
            i += 2;
        }
        // you
        else if (isYou(i, text)){
            newString += 'u';
            i += 2;
        }
        // idk
        else if (isIDK(i, text))
        {
            newString += 'idk';
            i += 11;
        }
        // tbh
        else if (isTBH(i, text))
        {
            newString += 'tbh';
            i += 11;
        }
        // ,,,
        else if (isComma(text[i]))
        {
            newString += commaNonsense();
        }
        // shhh, i'm being naughty and not making this a function
        // usually i like to write this code in a different file
        // i write tests and other nice things
        // but i'm doing it live in the browser! oh my! >:3c
        else if (text[i] === '.')
        {
            newString += double('.');
            newString += double('.');
        }
        else if (isApos(text[i]))
        {
            newString += pointNonsense();
        }
        else if (isApos(text[i]))
        {
            newString += semicolonNonsense();
        }
        else if (isExcitedPunctuation(text[i]))
        {
            newString += double(text[i]);
            newString += double(text[i]);
        }
        // big if case to prevent totally garbled text
        else if (getRandomInt(0, 20) > 8)
        {
            // voewael waerping
            if (isVowel(text[i]) && getRandomInt(0, 15) > 10)
            {
                newString += vowelWarp(text[i]);
            }
            // letetr swapnig
            else if (getRandomInt(0, 11) > 10)
            {
                newString += swap(i, text);
            }
            // genneral ccccconssonant stutttttterrrr
            else if (isConsonant(text[i]) && getRandomInt(0, 15) > 10)
            {
                newString += double(text[i]);
            }
            // sud denly spac ing
            else if (getRandomInt(0, 20) > 15)
            {
                newString += space(text[i]);
            }
            // make the entire word CAPS
            else if (isWordStart(i, text) && getRandomInt(0, 10) > 5)
            {
                var nextSpace = text.indexOf(' ', i);
                if(nextSpace === -1){
                    //must be the last word of the string
                    newString += text.substring(i, text.length-1).toUpperCase();
                }
                else {
                    newString += text.substring(i, nextSpace).toUpperCase();
                    i += (nextSpace - i - 1);
                }
            }
            else
            {
                newString += text[i];
            }
        }
        else
        {
            newString += text[i];
        }
    }

    return newString;

}

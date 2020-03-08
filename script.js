let textEngInput = document.querySelector(".engInput")
let textThInput = document.querySelector(".thInput")

let swapToThaiButton = document.querySelector(".swapToThai-btn")
let swapToEngButton = document.querySelector(".swapToEng-btn")
// let p = document.getElementsByTagName("p")[0] 
let resultThaiDisplay = document.querySelector(".swapToThai")
let resultEngDisplay = document.querySelector(".swapToEng")


const dictEngToTh = {
  "1"   : "ๅ",  
  "`"   : "_",  
  "2"   : "/",  
  "3"   : "-",  
  "4"   : "ภ",  
  "5"   : "ถ",  
  "6"   : "ุ",  
  "7"   : " ึ",  
  "8"   : "ค",  
  "9"   : "ต",  
  "0"   : "จ",  
  "-"   : "ข",  
  "="   : "ช",  
  "q"   : "ๆ",  
  "w"   : "ไ",  
  "e"   : "ำ",  
  "r"   : "พ",  
  "t"   : "ะ",  
  "y"   : "ั",  
  "u"   : "ี",  
  "i"   : "ร",  
  "o"   : "น",  
  "p"   : "ย",  
  "["   : "บ",  
  "]"   : "ล",  
  "\\"  : "ฃ",  
  "a"   : "ฟ",  
  "s"   : "ห",  
  "d"   : "ก",  
  "f"   : "ด",  
  "g"   : "เ",  
  "h"   : "้",  
  "j"   : "่",  
  "k"   : "า",  
  "l"   : "ส",  
  ";"   : "ว",  
  "\'"  : "ง",  
  "z"   : "ผ",  
  "x"   : "ป",  
  "c"   : "แ",  
  "v"   : "อ",  
  "b"   : "ิ",  
  "n"   : "ื",  
  "m"   : "ท",  
  ","   : "ม",  
  "."   : "ใ",  
  "\/"  : "ฝ",  
  
  "~"   : "%",  
  "!"   : "+",  
  "@"   : "๑",  
  "#"   : "๒",  
  "$"   : "๓",  
  "%"   : "๔",  
  "^"   : "ู",  
  "&"   : "฿",  
  "*"   : "๕",  
  "("   : "๖",  
  ")"   : "๗",  
  "_"   : "๘",  
  "+"   : "๙",  
  "Q"   : "๐",  
  "W"   : "\"",
  "E"   : "ฎ",  
  "R"   : "ฑ",  
  "T"   : "ธ",  
  "Y"   : "ํ",  
  "U"   : "๊",  
  "I"   : "ณ",  
  "O"   : "ฯ",  
  "P"   : "ญ",  
  "{"   : "ฐ",  
  "}"   : ",",  
  "\|"  : "ฅ",  
  "A"   : "ฤ",  
  "S"   : "ฆ",  
  "D"   : "ฏ",  
  "F"   : "โ",  
  "G"   : "ฌ",  
  "H"   : "็",  
  "J"   : "๋",  
  "K"   : "ษ",  
  "L"   : "ศ",  
  ":"   : "ซ",  
  "\""  : ".",  
  "Z"   : "(",  
  "X"   : ")",  
  "C"   : "ฉ",  
  "V"   : "ฮ",  
  "B"   : "ฺ",  
  "N"   : "์",  
  "M"   : "?",  
  "<"   : "ฒ",  
  ">"   : "ฬ",  
  "?"   : "ฦ",
  " "   : " ",
  "\n"  : "\n",
  "\r"  : "\r"
}  
                                          
const dictThToEng = {
  "_"   :  "`" ,                 
  "ๅ"   :  "1" ,                 
  "/"   :  "2" ,                
  "-"   :  "3" ,                
  "ภ"   :  "4" ,                
  "ถ"   :  "5" ,                
  "ุ"    :  "6" ,                
  " ึ"   :   "7" ,                
  "ค"   :  "8" ,                
  "ต"   :  "9" ,               
  "จ"   :  "0" ,                 
  "ข"   :  "-" ,                
  "ช"   :  "=" ,                
  "ๆ"   :  "q" ,                
  "ไ"   :  "w" ,               
  "ำ"   :  "e" ,                
  "พ"   :  "r" ,               
  "ะ"   :   "t" ,             
  "ั"    :   "y" ,               
  "ี"    :  "u" ,                
  "ร"   :   "i" ,             
  "น"   :  "o" ,                  
  "ย"   :  "p" ,                
  "บ"   :  "[" ,                
  "ล"   :  "]" ,                
  "ฃ"   :  "\\",                
  "ฟ"   :  "a" ,                
  "ห"   :  "s" ,                
  "ก"   :  "d" ,                
  "ด"   :  "f" ,                
  "เ"   :   "g" ,               
  "้"    :   "h" ,               
  "่"    :   "j" ,               
  "า"   :   "k" ,               
  "ส"   :   "l" ,               
  "ว"   :   ";" ,               
  "ง"   :   "\'",               
  "ผ"   :   "z" ,               
  "ป"   :   "x" ,               
  "แ"   :   "c" ,               
  "อ"   :   "v" ,               
  "ิ"    :   "b" ,               
  "ื"    :   "n" ,               
  "ท"   :   "m" ,               
  "ม"   :   "," ,               
  "ใ"   :   "." ,               
  "ฝ"   :   "\/",               
                            
  "%"   :    "~",              
  "+"   :    "!",              
  "๑"   :    "@" ,              
  "๒"   :    "#" ,              
  "๓"   :    "$" ,              
  "๔"   :    "%" ,              
  "ู"    :    "^" ,              
  "฿"   :    "&" ,              
  "๕"   :    "*" ,              
  "๖"   :    "(" ,              
  "๗"   :    ")" ,              
  "๘"   :    "_" ,              
  "๙"   :    "+" ,              
  "๐"   :    "Q" ,              
  "\""  :    "W" ,                
  "ฎ"   :    "E" ,              
  "ฑ"   :    "R" ,              
  "ธ"   :    "T" ,              
  "ํ"    :    "Y" ,              
  "๊"    :    "U" ,              
  "ณ"   :    "I" ,              
  "ฯ"   :    "O" ,              
  "ญ"   :    "P" ,              
  "ฐ"   :    "{" ,              
  ","   :    "}" ,              
  "ฅ"   :    "\|",              
  "ฤ"   :    "A" ,              
  "ฆ"   :    "S" ,              
  "ฏ"   :    "D" ,               
  "โ"   :    "F" ,              
  "ฌ"   :   "G" ,               
  "็"    :    "H" ,              
  "๋"    :    "J" ,              
  "ษ"   :   "K" ,              
  "ศ"   :    "L" ,              
  "ซ"   :   ":" ,               
  "."   :   "\"",                
  "("   :   "Z" ,               
  ")"   :   "X" ,               
  "ฉ"   :   "C" ,               
  "ฮ"   :   "V" ,               
  "ฺ"    :   "B" ,               
  "์"    :   "N" ,               
  "?"   :   "M" ,               
  "ฒ"   :   "<" ,               
  "ฬ"   :   ">" ,               
  "ฦ"   :   "?",
  " "   : " ",
  "\n"  : "\n"  
}               


// // adding | function for developing purpose
// textEngInput.addEventListener("keydown", function() {
//   let textValue = textEngInput.value;
//   let singleChar = textValue +"|"
//   let textNode = document.createTextNode(singleChar)
//   resultThaiDisplay.appendChild(textNode);
//   textEngInput.value = "";
// })


// English to Thai: ถ้าใส่ภาษาไทยแม้แต่ตัวเดียว จะไม่แสดงผลและให้ใส่ใหม่
swapToThaiButton.addEventListener("click", function() {
  let textValue = textEngInput.value;
  let swappedText = textValue.replace(/ 1|2|3|4|5|6|7|8|9|0|-|=|q|w|e|r|t|y|u|i|o|p|[|]|\\|a|s|d|f|g|h|j|k|l|;|\'|z|x|c|v|b|n|m|,|.|\/|!|@|#|\$|%|\^|&|\*|\(|\)|_|\+|Q|W|E|R|T|Y|U|I|O|P|\{|\}|\\|\||A|S|D|F|G|H|J|K|L|:|\"|Z|X|C|V|B|N|M|<|>|\?|`|~|\n|\r /g, function(char) {
    console.log(dictEngToTh[char])
    return dictEngToTh[char]
  });

  if (swappedText.includes("undefined")) {
    resultThaiDisplay.textContent = "กรุณาใส่เฉพาะตัวอักษรภาษาอังกฤษ" 
  } else {
    resultThaiDisplay.textContent = swappedText;
  }

})

// Thai to English: ถ้าปนภาษาอังกฤษมา จะคืนค่าอังกฤษเดิมให้ แต่ถ้าใส่อังกฤษทั้งหมดจะให้ใส่ใหม่
swapToEngButton.addEventListener("click", function() {
  let textValue = textThInput.value;
  let swappedText = textValue.replace(/ ๅ|\/|-|ภ|ถ|ุ|ึ|ค|ต|จ|ข|ช|ๆ|ไ|ำ|พ|ะ|ั|ี|ร|น|ย|บ|ล|ฃ|ฟ|ห|ก|ด|เ|้|่|า|ส|ว|ง|ผ|ป|แ|อ|ิ|ื|ท|ม|ใ|ฝ|\+|๑|๒|๓|๔|ู|฿|๕|๖|๗|๘|๙|๐|"|ฎ|ฑ|ธ|ํ|๊|ณ|ฯ|ญ|ฐ|,|ฅ|ฤ|ฆ|ฏ|โ|ฌ|็|๋|ษ|ศ|ซ|\.|\(|\)|ฉ|ฮ|ฺ|์|\?|ฒ|ฬ|ฦ|_|%\n|\r /g, function(char) {
    console.log(dictThToEng[char])
    return dictThToEng[char]
  });
  
  if (swappedText == textValue) {
    resultEngDisplay.textContent = "กรุณาใส่เฉพาะตัวอักษรภาษาไทย" 
  } else {
    resultEngDisplay.textContent = swappedText;
  }

});







// ๅ|/|-|ภ|ถ|ุ|ึ|ค|ต|จ|ข|ช|ๆ|ไ|ำ|พ|ะ|ั|ี|ร|น|ย|บ|ล|ฃ|ฟ|ห|ก|ด|เ|้|่|า|ส|ว|ง|ผ|ป|แ|อ|ิ|ื|ท|ม|ใ|ฝ|+|๑|๒|๓|๔|ู|฿|๕|๖|๗|๘|๙|๐|"|ฎ|ฑ|ธ|ํ|๊|ณ|ฯ|ญ|ฐ|,|ฅ|ฤ|ฆ|ฏ|โ|ฌ|็|๋|ษ|ศ|ซ|.|(|)|ฉ|ฮ|ฺ|์|?|ฒ|ฬ|ฦ|_|%







































  














































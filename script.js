class G3JPEncoding {
    constructor() {
        this.charMap = {
            0x0 : '　',
            0x1 : 'あ', 0x2 : 'い', 0x3 : 'う', 0x4 : 'え', 0x5 : 'お',
            0x6 : 'か', 0x7 : 'き', 0x8 : 'く', 0x9 : 'け', 0xa : 'こ',
            0xb : 'さ', 0xc : 'し', 0xd : 'す', 0xe : 'せ', 0xf : 'そ',
            0x10 : 'た', 0x11 : 'ち', 0x12 : 'つ', 0x13 : 'て', 0x14 : 'と',
            0x15 : 'な', 0x16 : 'に', 0x17 : 'ぬ', 0x18 : 'ね', 0x19 : 'の',
            0x1a : 'は', 0x1b : 'ひ', 0x1c : 'ふ', 0x1d : 'へ', 0x1e : 'ほ',
            0x1f : 'ま', 0x20 : 'み', 0x21 : 'む', 0x22 : 'め', 0x23 : 'も',
            0x24 : 'や', 0x25 : 'ゆ', 0x26 : 'よ',
            0x27 : 'ら', 0x28 : 'り', 0x29 : 'る', 0x2a : 'れ', 0x2b : 'ろ',
            0x2c : 'わ', 0x2d : 'を', 0x2e : 'ん',
            0x2f : 'ぁ', 0x30 : 'ぃ', 0x31 : 'ぅ', 0x32 : 'ぇ', 0x33 : 'ぉ',
            0x34 : 'ゃ', 0x35 : 'ゅ', 0x36 : 'ょ',
            0x37 : 'が', 0x38 : 'ぎ', 0x39 : 'ぐ', 0x3a : 'げ', 0x3b : 'ご',
            0x3c : 'ざ', 0x3d : 'じ', 0x3e : 'ず', 0x3f : 'ぜ', 0x40 : 'ぞ',
            0x41 : 'だ', 0x42 : 'ぢ', 0x43 : 'づ', 0x44 : 'で', 0x45 : 'ど',
            0x46 : 'ば', 0x47 : 'び', 0x48 : 'ぶ', 0x49 : 'べ', 0x4a : 'ぼ',
            0x4b : 'ぱ', 0x4c : 'ぴ', 0x4d : 'ぷ', 0x4e : 'ぺ', 0x4f : 'ぽ',
            0x50 : 'っ',
            0x51 : 'ア', 0x52 : 'イ', 0x53 : 'ウ', 0x54 : 'エ', 0x55 : 'オ',
            0x56 : 'カ', 0x57 : 'キ', 0x58 : 'ク', 0x59 : 'ケ', 0x5a : 'コ',
            0x5b : 'サ', 0x5c : 'シ', 0x5d : 'ス', 0x5e : 'セ', 0x5f : 'ソ',
            0x60 : 'タ', 0x61 : 'チ', 0x62 : 'ツ', 0x63 : 'テ', 0x64 : 'ト',
            0x65 : 'ナ', 0x66 : 'ニ', 0x67 : 'ヌ', 0x68 : 'ネ', 0x69 : 'ノ',
            0x6a : 'ハ', 0x6b : 'ヒ', 0x6c : 'フ', 0x6d : 'ヘ', 0x6e : 'ホ',
            0x6f : 'マ', 0x70 : 'ミ', 0x71 : 'ム', 0x72 : 'メ', 0x73 : 'モ',
            0x74 : 'ヤ', 0x75 : 'ユ', 0x76 : 'ヨ',
            0x77 : 'ラ', 0x78 : 'リ', 0x79 : 'ル', 0x7a : 'レ', 0x7b : 'ロ',
            0x7c : 'ワ', 0x7d : 'ヲ', 0x7e : 'ン',
            0x7f : 'ァ', 0x80 : 'ィ', 0x81 : 'ゥ', 0x82 : 'ェ', 0x83 : 'ォ',
            0x84 : 'ャ', 0x85 : 'ュ', 0x86 : 'ョ',
            0x87 : 'ガ', 0x88 : 'ギ', 0x89 : 'グ', 0x8a : 'ゲ', 0x8b : 'ゴ',
            0x8c : 'ザ', 0x8d : 'ジ', 0x8e : 'ズ', 0x8f : 'ゼ', 0x90 : 'ゾ',
            0x91 : 'ダ', 0x92 : 'ヂ', 0x93 : 'ヅ', 0x94 : 'デ', 0x95 : 'ド',
            0x96 : 'バ', 0x97 : 'ビ', 0x98 : 'ブ', 0x99 : 'ベ', 0x9a : 'ボ',
            0x9b : 'パ', 0x9c : 'ピ', 0x9d : 'プ', 0x9e : 'ペ', 0x9f : 'ポ',
            0xa0 : 'ッ',
            0xa1 : '0', 0xa2 : '1', 0xa3 : '2',
            0xa4 : '3', 0xa5 : '4', 0xa6 : '5',
            0xa7 : '6', 0xa8 : '7', 0xa9 : '8', 0xaa : '9',
            0xab : '！', 0xac : '？',
            0xad : '。', 0xae : 'ー', 0xaf : '・', 0xb0 : '‥',
            0xb1 : '『', 0xb2 : '』', 0xb3 : '「', 0xb4 : '」',
            0xb5 : '♂', 0xb6 : '♀',
            0xb7 : '¥', 0xb8 : '.', 0xb9 : '×',
            0xba : '／',
            0xbb : 'A', 0xbc : 'B', 0xbd : 'C', 0xbe : 'D', 0xbf : 'E', 0xc0 : 'F',
            0xc1 : 'G', 0xc2 : 'H', 0xc3 : 'I', 0xc4 : 'J', 0xc5 : 'K', 0xc6 : 'L',
            0xc7 : 'M', 0xc8 : 'N', 0xc9 : 'O', 0xca : 'P', 0xcb : 'Q', 0xcc : 'R',
            0xcd : 'S', 0xce : 'T', 0xcf : 'U', 0xd0 : 'V', 0xd1 : 'W', 0xd2 : 'X',
            0xd3 : 'Y', 0xd4 : 'Z',
            0xd5 : 'a', 0xd6 : 'b', 0xd7 : 'c', 0xd8 : 'd', 0xd9 : 'e', 0xda : 'f',
            0xdb : 'g', 0xdc : 'h', 0xdd : 'i', 0xde : 'j', 0xdf : 'k', 0xe0 : 'l',
            0xe1 : 'm', 0xe2 : 'n', 0xe3 : 'o', 0xe4 : 'p', 0xe5 : 'q', 0xe6 : 'r',
            0xe7 : 's', 0xe8 : 't', 0xe9 : 'u', 0xea : 'v', 0xeb : 'w', 0xec : 'x',
            0xed : 'y', 0xee : 'z',
            0xef : '►', 0xf0 : ':',
            0xf1 : 'Ä', 0xf2 : 'Ö', 0xf3 : 'Ü',
            0xf4 : 'ä', 0xf5 : 'ö', 0xf6 : 'ü',
            0xf7 : '↑', 0xf8 : '↓', 0xf9 : '←',
            0xfa : '▼', 0xfb : '▾', 0xfc : '^', 0xfd : '␛', 0xfe : '␤',
            0xff : '␃'
        };
        this.reverseCharMap = {};
        for (let char of Object.entries(this.charMap)) {
            this.reverseCharMap[char[1]] = parseInt(char[0]);
        }
    }

    encode(input) {
        let output = []
        for (let char of input){
            if (char in this.reverseCharMap){
                output.push(this.reverseCharMap[char]);
            } else {
                throw Error(char + ' is not a valid character');
            }
        }
        return Uint8Array.from(output)
    }

    decode(input) {
        let output = []
        for (let char of input){
            if (char in this.charMap){
                output.push(this.charMap[char])
            } else {
                throw Error(char + ' is not a valid character');
            }
        }
        return output.join('');
    }
}

function getBoxNameAsStream(boxNames) {
    let boxNameStream = [];
    for (let name of boxNames) {
        for (let char of name) {
            boxNameStream.push(char);
        }
    }
    return Uint8Array.from(boxNameStream);
}

function convertToInt32(boxNames) {
    let output = [];
    for (let i = 0; i < boxNames.length ; i += 4) {
        let bytes = boxNames.slice(i, i+4);
        let int32 = bytes.reduce((acc, byte, index) => acc | (byte << (index * 8)), 0);
        output.push(int32 >>> 0);
    }
    return output;
}

function convertToInt16(boxNames) {
    let output = [];
    for (let i = 0; i < boxNames.length ; i += 2) {
        let bytes = boxNames.slice(i, i+2);
        let int16 = bytes.reduce((acc, byte, index) => acc | (byte << (index * 8)), 0);
        output.push(int16 >>> 0);
    }
    return output;
}

function getBoxNames(input) {
    let encoder = new G3JPEncoding();
    let inputBoxNames = input.split('\n');
    let boxNames = [];
    for (let inputBoxName of inputBoxNames) {
        try {
            let boxName = [...inputBoxName]
            for (let i = 0; i < boxName.length; i++) {
                // Replace common characters on non-Japanese
                // input devices with Japanese equivalents
                switch (boxName[i]) {
                    case " " :
                        boxName[i] = "　";
                    case "!":
                        boxName[i] = "！";
                    case "?":
                        boxName[i] = "？";
                    case "/":
                        boxName[i] = "／";
                    case "…":
                        boxName[i] = "‥";
                    case "-":
                        boxName[i] = "ー";
                    case ".":
                        boxName[i] = "。";
                    case "“":
                        /* Support for straight quotes will never be added as 
                        trying to guess the context will be too hard */
                        boxName[i] = "『";
                    case "”":
                        boxName[i] = "』";
                    case "‘":
                        boxName[i] = "「";
                    case "’":
                        boxName[i] = "」";
                }
            }
            if (!(boxName.length > 8)) {
                while (boxName.length < 9) {
                    boxName.push('␃');
                }
                boxNames.push(encoder.encode(boxName.join('')))
            } else {
                alert("Box name cannot be more than 8 chars long");
                throw Error ("too long box name");
            }
        }
        catch (err) {
            alert("Operation aborted, due to: " + err);
            return null;
        }
    }
    return boxNames
}

function prepareDisplayNames(rawBoxNames, int16BoxNames, int32BoxNames) {
    let hexStringNames = [];
    let int16StringNames = [];
    let int32StringNames = [];
    let codeGeneratorStringNames = [];
    for (let boxName of rawBoxNames) {
        let hexBoxName = [];
        for (let char of boxName) {
            hexBoxName.push(char.toString(16).padStart(2, '0'));
        }
        hexStringNames.push(hexBoxName.join(' '));
    }
    let rawDisplay = hexStringNames.join('\n');
    for (i of int16BoxNames) {
        int16StringNames.push(i.toString(16).padStart(4, '0'));
    }
    let int16Display = int16StringNames.join('\n');
    for (i of int32BoxNames) {
        int32StringNames.push(i.toString(16).padStart(8, '0'));
    }
    let int32Display = int32StringNames.join('\n');
    for (i of int32BoxNames) {
        codeGeneratorStringNames.push("0x" + i.toString(16))
    }
    let codeGeneratorDisplay = codeGeneratorStringNames.join('\n');
    let displayOutput = `\
Raw Box Names:

${rawDisplay}

Thumb:

${int16Display}

ARM:

${int32Display}

CodeGenerator:

${codeGeneratorDisplay}`;
    return displayOutput;
}

function convertCharToHex() {
    let input = document.getElementById("input").value
    let outputTextBox = document.getElementById("output")
    outputTextBox.value = input
    let boxNames = getBoxNames(input)
    if (boxNames == null) {
        return null // Exit if format is wrong
    }
    let boxNameStream = getBoxNameAsStream(boxNames)
    let boxNamesInt16 = convertToInt16(boxNameStream)
    let boxNamesInt32 = convertToInt32(boxNameStream)
    let displayOutput = prepareDisplayNames(boxNames, boxNamesInt16, boxNamesInt32)
    outputTextBox.value = displayOutput;
}

document.getElementById("convertButton").onclick = convertCharToHex;
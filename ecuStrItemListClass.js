// Define and export the class

let setBits15to12 = (hexString, value) =>
{
    // Parse the hexadecimal string to a number
    let num = parseInt(hexString, 16);

    // Ensure the value is within the range of 4 bits (0 to 15)
    value &= 0xF;

    // Clear bits 15 to 12
    num &= ~(0xF << 12);

    // Set bits 15 to 12 with the provided value
    num |= (value << 12);

    // Convert back to hexadecimal string and return it, padding with zeros if necessary
    return num.toString(16).toUpperCase().padStart(hexString.length, '0');
}

function setBits11to10(hexString, value) 
{
    // Parse the hexadecimal string to a number
    let num = parseInt(hexString, 16);

    // Ensure the value is within the range of 2 bits (0 to 3)
    value &= 0x3;

    // Clear bits 11 to 10
    num &= ~(0x3 << 10);

    // Set bits 11 to 10 with the provided value
    num |= (value << 10);

    // Convert back to hexadecimal string and return it, padding with zeros if necessary
    return num.toString(16).toUpperCase().padStart(hexString.length, '0');
}

let  reversePairs = (str) =>
    {
        if (str.length !== 4) 
        {
            console.error("The input string must be exactly 4 characters long.");
            return null;
        }
    
        // Swap the pairs: [01] -> [10], [23] -> [32]
        return str[2] + str[3] + str[0] + str[1];
    }

let getTypeStr = (str) =>
    {
        if(str == "DS Str")
        {
            return "1"
        }
        else if(str == "DS Ver")
        {
            return "2"
        }
        else if( str == "Misc" )
        {
            return "15"
        }
        else if( str == "0End of list" )
        {
            return "0"
        }
        else
        {
            return "0"
        }
    }


function ensureLengthSixty(str, padChar = '0') 
{
    if (str.length > 60) {
        // Truncate the string to 60 characters if it's too long
        return str.slice(0, 60);
    } else {
        // Pad the string to the right to ensure it's 60 characters long
        return str.padEnd(60, padChar);
    }
}

export class ecuStrItemListClass 
{
    constructor() 
    {
        this.elements = []; 
    }
    addElement(element) 
    {
        this.elements.push(element);
    }

    getElements() 
    {
        return this.elements;
    }

    clearElements() 
    {
        this.elements = [];
    }
    
    printElements()
    {
        let retArr = []
        for(let item of this.elements)
        {
            // console.log(item.name)
            // console.log(item.DSid)
            console.log(item.delimiter)
            let dsHexStr = item.DSid.toString(16).toUpperCase();
            let typeAddedStr = setBits15to12(dsHexStr,getTypeStr(item.type))

            let delimeterTypeAdded = setBits11to10(typeAddedStr, item.delimiterEnumVal) 
            //console.log(delimeterTypeAdded)
            delimeterTypeAdded = delimeterTypeAdded.padStart(4, '0')
            retArr.push(reversePairs(delimeterTypeAdded))
            //console.log(retArr)
        }
        let strVal = ensureLengthSixty(retArr.join(''),0)
        console.log(strVal)
    }
}
// Import the class from the module
import { ecuStrItem } from './ecuStrItem.js';
import { ecuStrItemListClass } from './ecuStrItemListClass.js';

const J1939_ECUID_HashMap = 
{
    "0000": "J1939_ECUID_END_OF_LIST",
    "FFFF": "J1939_ECUID_BLANK_ITEM",
    "2128": "J1939_ECUID_APP_VER",
    "2126": "J1939_ECUID_BL_VER",
    "2127": "J1939_ECUID_HW_VER",
    "F000": "J1939_ECUID_SW_VAR",
    "F001": "J1939_ECUID_HW_VAR",
    "F002": "J1939_ECUID_FW_CRC",
    "F003": "J1939_ECUID_ALGO_CRC",
    "F004": "J1939_ECUID_CFG_CRC",
    "F005": "J1939_ECUID_COMB_CRC",
    "F006": "J1939_ECUID_CONCAT_CRC",
    "F007": "J1939_ECUID_PARALLEL_CRC",
    "F008": "J1939_ECUID_ACTIVECFG_CRC",
    "F009": "J1939_ECUID_BASECFG_CRC",
    "F00B": "J1939_ECUID_SECAPP_CRC",
    "F00A": "J1939_ECUID_MANU_DATE",
    "F00C": "J1939_ECUID_BL_CRC",
    "F00D": "J1939_ECUID_DLID_CRC",
    "1047": "J1939_ECUID_ECU_PARTNUM",
    "1120": "J1939_ECUID_CUSTOMER_PARTNUM",
    "1000": "J1939_ECUID_ECU_SERIAL_NUM",
    "1001": "J1939_ECUID_TYPE",
    "1121": "J1939_ECUID_MANUFACTURER",
    "1122": "J1939_ECUID_CUSTOMER_MODEL",
    "10EF": "J1939_ECUID_CUSTOMER_HW_PARTNUM",
    "111F": "J1939_ECUID_CUSTOMER_SW_PARTNUM",
    "119A": "J1939_ECUID_SW_ASSY_PART_NUM",
    "1125": "J1939_ECUID_CUSTOMER_SER_NUM",
    "120D": "J1939_ECUID_CUSTOM_STR1",
    "120E": "J1939_ECUID_CUSTOM_STR2",
    "120F": "J1939_ECUID_CUSTOM_STR3",
    "1210": "J1939_ECUID_CUSTOM_STR4",
    "1211": "J1939_ECUID_CUSTOM_STR5",
    "1212": "J1939_ECUID_CUSTOM_STR6",
    "F00E": "J1939_ECUID_SW_ASSY_DATE"
};

// Swapped the name and the key: name is now the key, and id and category are values
const  J1939_ECUID_HashMap_detailed = 
{
    "END_OF_LIST":
    {
        id: 0,
        category: "N/A"
    },
    "BLANK_ITEM":
    {
        id: 255,
        category: "Misc"
    },
    "APP_VER":
    {
        id: 296,
        category: "DS Ver"
    },
    "BL_VER":
    {
        id: 294,
        category: "DS Ver"
    },
    "HW_VER":
    {
        id: 295,
        category: "DS Ver"
    },
    "SW_VAR":
    {
        id: 0,
        category: "Misc"
    },
    "HW_VAR":
    {
        id: 1,
        category: "Misc"
    },
    "FW_CRC":
    {
        id: 2,
        category: "Misc"
    },
    "ALGO_CRC":
    {
        id: 3,
        category: "Misc"
    },
    "CFG_CRC":
    {
        id: 4,
        category: "Misc"
    },
    "COMB_CRC":
    {
        id: 5,
        category: "Misc"
    },
    "CONCAT_CRC":
    {
        id: 6,
        category: "Misc"
    },
    "PARALLEL_CRC":
    {
        id: 7,
        category: "Misc"
    },
    "ACTIVECFG_CRC":
    {
        id: 8,
        category: "Misc"
    },
    "BASECFG_CRC":
    {
        id: 9,
        category: "Misc"
    },
    "SECAPP_CRC":
    {
        id: 11,
        category: "Misc"
    },
    "MANU_DATE":
    {
        id: 10,
        category: "Misc"
    },
    "BL_CRC":
    {
        id: 12,
        category: "Misc"
    },
    "DLID_CRC":
    {
        id: 13,
        category: "Misc"
    },
    "ECU_PARTNUM":
    {
        id: 71,
        category: "DS Str"
    },
    "CUSTOMER_PARTNUM":
    {
        id: 288,
        category: "DS Str"
    },
    "MANUFACTURER":
    {
        id: 289,
        category: "DS Str"
    },
    "CUSTOMER_MODEL":
    {
        id: 290,
        category: "DS Str"
    },
    "CUSTOMER_HW_PARTNUM":
    {
        id: 239,
        category: "DS Str"
    },
    "CUSTOMER_SW_PARTNUM":
    {
        id: 287,
        category: "DS Str"
    },
    "SW_ASSY_PART_NUM":
    {
        id: 410,
        category: "DS Str"
    },
    "CUSTOMER_SER_NUM":
    {
        id: 293,
        category: "DS Str"
    },
    "CUSTOM_STR1":
    {
        id: 525,
        category: "DS Str"
    },
    "CUSTOM_STR2":
    {
        id: 526,
        category: "DS Str"
    },
    "CUSTOM_STR3":
    {
        id: 527,
        category: "DS Str"
    },
    "CUSTOM_STR4":
    {
        id: 528,
        category: "DS Str"
    },
    "CUSTOM_STR5":
    {
        id: 529,
        category: "DS Str"
    },
    "CUSTOM_STR6":
    {
        id: 530,
        category: "DS Str"
    },
    "SW_ASSY_DATE":
    {
        id: 14,
        category: "Misc"
    },

    "ECU_SERIAL_NUM":
    {
        id: 0,
        category: "DS Str"
    }
};
const Delimiter_HashMap = 
{
    "NONE": 
    {
        value:"",
        enumVal:1,
    },
    "STANDARD": 
    {
        value:"*",
        enumVal:0,
    },
    "CUSTOM": 
    {
        value:"#",
        enumVal:2,
    },
};
let extractDSidExtended = (number, startBit) =>
{
    // Create a mask for 9 bits
    const mask = 0x01FF; // Binary: 00000001 11111111 (9 bits)
    //console.log(parseInt(number,16))
    // Extract the bits
    let extractedBits = (parseInt(number,16) >> startBit) & mask;

    return extractedBits;
}

let extractType = (hexString) =>
{
    const number = parseInt(hexString, 16);

    // Shift the bits 12 places to the right to bring bits 15-12 to the least significant position
    const shiftedNumber = number >> 12;

    // Create a mask to isolate the last 4 bits (which are originally bits 15-12)
    const mask = 0x0F; // Binary: 00001111

    // Extract the bits 15-12
    const type = shiftedNumber & mask;

    return type;  
}

let  divideString = (str) => 
    {
    let result = [];
    for (let i = 0; i < str.length; i += 4) 
    {
        result.push(str.slice(i, i + 4));
    }
    return result;
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
    if(str == "1")
    {
        return "DS STR"
    }
    else if(str == "2")
    {
        return "DS Ver"
    }
    else if( str == "15" )
    {
        return "Misc"
    }
    else if( str == "0" )
    {
        return "End of list"
    }
    else
    {
        return "none"
    }
}

let readStrPCF = () =>
{
    let resultArr = [];
    let ecuStrItemsList = []
    // Get the input element by its ID
    let inputField = document.getElementById("PCF_value");

    // Get the value of the input field
    let value = inputField.value;

    // Display the value in an alert
    let array = divideString(value)

    array.forEach(element => 
    {
        resultArr.push(reversePairs(element))
    });
    //console.log(resultArr)
    //console.log("Input value: " + array); 

    resultArr.forEach((element)=>
    {
       // console.log(J1939_ECUID_HashMap[element]);
        let name = J1939_ECUID_HashMap[element];
        let DSid = extractDSidExtended(element,0);
        let typeStr = getTypeStr(extractType(element));
        ecuStrItemsList.push(new ecuStrItem(name,DSid,typeStr))
    });

    return ecuStrItemsList
}


let submitBtn = () =>
{
    let button = document.getElementById('submitBtn');
    
    button.addEventListener('click', ()=>{
        console.log(readStrPCF());
      })
}


let generateBtn = () =>
{
    let button = document.getElementById('generateStr'); 
    let ecuStrItemsList = new ecuStrItemListClass();
    
    let itemIds = ["Item1","Item2","Item3","Item4","Item5","Item6"]
    
    button.addEventListener('click', ()=>
    {
        ecuStrItemsList.clearElements()
        for(let item of itemIds)
        {
            let idOfDroptown    = item +"Value";
            let item1Value     = document.getElementById(idOfDroptown);
            let item1Name      = item1Value.value;
            let Item1DSid      = J1939_ECUID_HashMap_detailed[item1Value.value].id;
            let Item1Category  = J1939_ECUID_HashMap_detailed[item1Value.value].category;
            let idOfDelimeter = item+"Delimeter";
            let Item1Delimiter = Delimiter_HashMap[document.getElementById(idOfDelimeter).value]
            ecuStrItemsList.addElement (new ecuStrItem(item1Name,Item1DSid,Item1Category,Item1Delimiter.value,Item1Delimiter.enumVal))
           
        }
        ecuStrItemsList.printElements()

    })
    console.log(ecuStrItemsList)
    return ecuStrItemsList;
}

submitBtn();
generateBtn();

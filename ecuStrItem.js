// Define and export the class
export class ecuStrItem 
{
    constructor(name,DSid,type,delimiter = "",delimiterEnumVal) 
    {
        this.name = name;
        this.DSid = DSid;
        this.type = type;
        this.delimiter = delimiter;
        this.delimiterEnumVal = delimiterEnumVal;
    }

    printItem() 
    {
        console.log(`Hello, ${this.name} ${this.DSid} ${this.type} ${this.delimiter}!`);
    }
}
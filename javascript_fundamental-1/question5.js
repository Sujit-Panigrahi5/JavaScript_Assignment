let typeofpackage="overnight"

switch (typeofpackage) {
    case "standard":
        console.log("your delivery will be do with in 3-5 days");
        break;
    case "express":
        console.log("your delivery will be do with in 1-2 days");
        break;
        
    case "overnight":
        console.log("your delivery will be do with in  nextdays");
        break;

    default:
        console.log("invalid type package name");
        break;
}
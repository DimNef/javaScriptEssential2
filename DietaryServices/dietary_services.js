let userRole = "other";
let accessLevel;

switch (userRole) {
    case "employee":
        accessLevel = "full access to Dietary Services";
        break;
    case "enrolled":
        accessLevel = "full access to Dietary Services and one-on-one interaction with dietician.";
        break;
    case "subscriber":
        accessLevel = "partial access to Dietary Services";
        break;
    default:
        accessLevel = "no services yet. Please enroll or subscribe first.";
}

console.log("You are eligible to ", accessLevel);

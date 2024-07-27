//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function objectValues(object) {
    // code
    return Object.values(object); //return object value
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' '); //return keys in string with a space

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    return Object.values(object) //return strin with a space
    .filter(value => typeof value === 'string') //filter values and test if it is a string
    .join(' '); //join string with a space
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    return Array.isArray(collection) ? 'array' : 'object'; //return array
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
  return string[0].toUpperCase() + string.slice(1);  //return word to be capitalized
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    return string.split(' ') //split string
    .map(word => capitalizeWord(word)) //use .map and capitalize
    .join(' '); 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = object.name;
    var formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // Capitalize the first letter of the name
    //return the welcome message
    return `Welcome ${formattedName}!`;
    }


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    const { name, species } = object;

    //capitalize the first letter of name and species
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

    //create the formatted string
    return `${capitalize(name)} is a ${capitalize(species)}`;
}
    

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
if (Array.isArray(object.noises) && object.noises.length > 0) {
    //join the array elements into a string separated by spaces
    return object.noises.join(' ');
} else {
    //return 'there are no noises' if the 'noises' property is missing or empty
    return 'there are no noises';
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    const normalizedString = string.toLowerCase();
    const normalizedWord = word.toLowerCase();
    const wordsArray = normalizedString.split(/\W+/);

    //return if the normalized word is in the array
    return wordsArray.includes(normalizedWord);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    if (!object.friends) {
        object.friends = [];
    }
    
    //add the new friend to the array
    object.friends.push(name);
    
    //return updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (Array.isArray(object.friends)) {
        //return true if the name is in the friends array false otherwise
        return object.friends.includes(name);
    }
    
    //if 'friends' property is missing or not an array, return false
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    const person = array.find(p => p.name === name);

    //if person is not found, return an empty array
    if (!person) {
        return [];
    }

    const friendsSet = new Set(person.friends);

    //locate all people who are not friends with the specified person
    const nonFriendsList = array
        .filter(p => p.name !== name)  //exclude person
        .map(p => p.name)              //get names of other people
        .filter(name => !friendsSet.has(name)); // Filter out friends

    //return the non-friends list sorted alphabetically
    return nonFriendsList.sort();
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //update property if it exists, or create if it doesn't
    object[key] = value;
    
    //return the updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    array.forEach(key => {
        //use delete operator to remove property from object
        delete object[key];
    });
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    const uniqueSet = new Set(array);
    
    //convert the Set back to an array
    return Array.from(uniqueSet);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
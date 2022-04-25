var com = require(`./Templates/${process.argv[2]}`)
const client = require('discord-rich-presence')(`${com.ClientID}`);
console.clear()
startPresence();

function startPresence() {
    client.updatePresence({
        state: `${com.State}`,
        details: `${com.Details}`,
        startTimestamp: Date.now(),
        largeImageKey: `${com.largeImageKey}`,
        largeImageText: `${com.largeImageText}`,
        smallImageKey: `${com.smallImageKey}`,
        smallImageText: `${com.smallImageText}`,
        instance: `${com.Instances}`,
        buttons : [{label : `>${com['Button 1 Text']}<` , url : `${com['Button 1 URL']}`},{label : `>${com['Button 2 Text']}<`,url : `${com['Button 2 URL']}`}]
        
      });
      
}

console.log('Presence running...');
console.log(`State: ${com.State}`)
console.log(`Details: ${com.Details}`)
console.log(`largeImageKey: ${com.largeImageKey}`)
console.log(`largeImageText: ${com.largeImageText}`)
console.log(`smallImageKey: ${com.smallImageKey}`)
console.log(`smallImageText: ${com.smallImageText}`)
console.log(`Instance?: ${com.Instances}`)
console.log(`Button 1: ${com['Button 1 Text']} ${com['Button 1 URL']}`)
console.log(`Button 2: ${com['Button 2 Text']} ${com['Button 2 URL']}`)
console.log(`Client ID: ${com.ClientID}`)
//
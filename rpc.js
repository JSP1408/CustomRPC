const client = require('discord-rich-presence')(`${process.argv[13]}`);
console.clear()

startPresence();

function startPresence() {
    client.updatePresence({
        state: `${process.argv[2]}`,
        details: `${process.argv[3]}`,
        startTimestamp: Date.now(),
        largeImageKey: `${process.argv[4]}`,
        largeImageText: `${process.argv[6]}`,
        smallImageKey: `${process.argv[5]}`,
        smallImageText: `${process.argv[7]}`,
        instance: `${process.argv[8]}`,
        buttons : [{label : `>${process.argv[9] ?? defaultname}<` , url : `${process.argv[10] ?? defaultwebsite}`},{label : `>${process.argv[11] ?? defaultname}<`,url : `${process.argv[12] ?? defaultwebsite}`}]
        
      });
      
}

console.log('Presence running...');
console.log(`State: ${process.argv[2]}`)
console.log(`Details: ${process.argv[3]}`)
console.log(`largeImageKey: ${process.argv[4]}`)
console.log(`largeImageText: ${process.argv[6]}`)
console.log(`smallImageKey: ${process.argv[5]}`)
console.log(`smallImageText: ${process.argv[7]}`)
console.log(`Instance?: ${process.argv[8]}`)
console.log(`Button 1: ${process.argv[9]} ${process.argv[10]}`)
console.log(`Button 2: ${process.argv[11]} ${process.argv[12]}`)
console.log(`Client ID: ${process.argv[13]}`)

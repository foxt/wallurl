const URL = "https://source.unsplash.com/user/thelmgn/likes/1920x1080"

async function go() {
    const path = require('tmp').fileSync().name // We need a new file path every time due to pathing

    console.log(`Downloading ${URL}...`)
    const data = await require("chainfetch").get(URL)

    console.log("Saving to disk...")
    require("fs").writeFileSync(path,data.raw)

    console.log(`Setting wallpaper to ${path}...`)
    require("wallpaper").set(path,{
        screen: "all",
        scale: "fill"
    })

    console.log(`Done! (${process.uptime()}s)`)
};go()
setInterval(function(){})
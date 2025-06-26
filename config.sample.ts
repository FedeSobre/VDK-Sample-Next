////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Copyright Valannia. All rights reserved.

const Config: Config<"Portal", "Production"> = {

    Application: "VDK Next Sample",
    Version: "0.1.0",

    Platform: "Portal",
    Build: "Production",
    Modules: undefined,

    Scheduler: true,

    URLs: {

        API: "https://api.valannia.net",
        Resources: "https://s3.eu-north-1.amazonaws.com/resources.valannia.net",
        Blockchain: "https://blockchain.valannia.net",
        Portal: "https://valannia.com",
        Localhost: "http://127.0.0.1:3000",
        Test: "http://127.0.0.1:3000"
    }
}
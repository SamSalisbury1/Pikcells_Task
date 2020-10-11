import { initialiser } from "./Initialiser.js";

class Main {
    main() {
        // Warn user if they're using Internet Explorer.
        if (navigator.appVersion.indexOf("MSIE")!=-1) {
            alert("Notice, you are using Internet Explorer some features may not be fully supported.");
        }

        initialiser.Initialise();
    }
}

const main = new Main();
main.main();

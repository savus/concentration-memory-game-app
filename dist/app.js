import { displayGameScreenMessage, initializeGlobalSettings, } from "./utility.js";
await initializeGlobalSettings();
document.addEventListener("keyup", async (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
        await displayGameScreenMessage("test", "testing");
        console.log("pressed");
    }
});
//# sourceMappingURL=app.js.map
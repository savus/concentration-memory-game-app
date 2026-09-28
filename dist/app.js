import { ANIMATION_DURATION } from "./constants.js";
const root = document.documentElement;
const initializeGlobalSettings = () => {
    root.style.setProperty("--global-anim-dur", `${ANIMATION_DURATION}ms`);
};
initializeGlobalSettings();
//# sourceMappingURL=app.js.map
import { ANIMATION_DURATION, GLOBAL_ANIMATION_DUR } from "./constants.js";
const root = document.documentElement;
const initializeGlobalSettings = () => {
    root.style.setProperty(GLOBAL_ANIMATION_DUR, `${ANIMATION_DURATION}ms`);
};
initializeGlobalSettings();
//# sourceMappingURL=app.js.map
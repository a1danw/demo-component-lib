// Plugin:

import LearnVueButton from "./components/LearnVueButton.vue";

export { LearnVueButton }
// register LearnVueButton as a global component
export default {
    install: (app, options) => {
        // set the name of the component
        app.component("LearnVueButton", LearnVueButton);
    }
}
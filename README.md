### Shared component library
- Clear out entire src folder

  - Create index.js file and components folder inside src

- index.js: where the plugin is created

- Define what happens when we run vite build - vite.config.js:
- vite build - bundle the app
- test locally via npm link - create a link to your local module (symlinks a package)
- npm link (library app)
- in another project - npm link lv-button - creates a link to the local module so any changes we make will be reflected in the project
- publish - npm login, npm publish
- Usage(main.js):

```
import { createApp } from "vue"
import App from "./App.vue"
import LearnVueButton from "./lv-button"

const app = createApp(App)
app.use(LearnVueButton)
app.mount("#app")
```

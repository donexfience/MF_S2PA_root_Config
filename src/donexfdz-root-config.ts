import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
// declare global {
//   interface Window {
//     eventBus: any;
//     globalState: any;
//   }
// }
const routes = constructRoutes(microfrontendLayout);
// //testing with custom props passing data from the root other apps
// const sharedData = { username: "donex" };
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach((app) => {
  registerApplication({
    ...app,
  });
});
layoutEngine.activate();
// const eventBus = {
//   on(event, callback) {
//     window.addEventListener(event, (e) => callback(e.detail));
//   },
//   emit(event, data) {
//     window.dispatchEvent(new CustomEvent(event, { detail: data }));
//   },
// };
// window.eventBus = eventBus;
// const globalState = {
//   state: {},
//   subscribers: [],

//   setState(newState) {
//     this.state = { ...this.state, ...newState };
//     window.dispatchEvent(
//       new CustomEvent("global-state-change", {
//         detail: this.state,
//       })
//     );
//   },

//   getState() {
//     return this.state;
//   },
// };
// window.globalState = globalState;
start();

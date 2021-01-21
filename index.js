import { childExport } from "./child-module";
console.log("running root");

const func1 = () => console.log(childExport);
/*#__PURE__*/ func1();

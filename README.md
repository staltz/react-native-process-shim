# react-native-process-shim

```
npm install react-native-process-shim
```

## usage

Set it as a replacement module in your React Native project's package.json:

```diff
 {
   "react-native": {
+    "process": "react-native-process-shim"
   }
 }
```

Import it in your project's index.js:

```js
require('process');
```

Nothing else needs to be done, it just mutated the global process variable.

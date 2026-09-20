'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1839",
  name: "Replace \"p\" with \"W\"",
  description: "Replaces every p with W.",
  run: (value) => String(value).split("p").join("W"),
});

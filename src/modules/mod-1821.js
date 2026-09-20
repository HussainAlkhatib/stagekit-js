'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1821",
  name: "Replace \"p\" with \"E\"",
  description: "Replaces every p with E.",
  run: (value) => String(value).split("p").join("E"),
});

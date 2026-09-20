'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1795",
  name: "Replace \"p\" with \"d\"",
  description: "Replaces every p with d.",
  run: (value) => String(value).split("p").join("d"),
});

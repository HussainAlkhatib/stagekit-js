'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1307",
  name: "Replace \"h\" with \"d\"",
  description: "Replaces every h with d.",
  run: (value) => String(value).split("h").join("d"),
});

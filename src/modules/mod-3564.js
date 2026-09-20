'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3564",
  name: "Replace \"S\" with \"d\"",
  description: "Replaces every S with d.",
  run: (value) => String(value).split("S").join("d"),
});

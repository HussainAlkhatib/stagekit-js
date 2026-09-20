'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2405",
  name: "Replace \"z\" with \"d\"",
  description: "Replaces every z with d.",
  run: (value) => String(value).split("z").join("d"),
});

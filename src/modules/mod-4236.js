'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4236",
  name: "Replace \"3\" with \"e\"",
  description: "Replaces every 3 with e.",
  run: (value) => String(value).split("3").join("e"),
});

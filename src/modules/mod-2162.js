'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2162",
  name: "Replace \"v\" with \"e\"",
  description: "Replaces every v with e.",
  run: (value) => String(value).split("v").join("e"),
});

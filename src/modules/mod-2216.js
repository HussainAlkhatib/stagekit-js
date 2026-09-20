'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2216",
  name: "Replace \"v\" with \"7\"",
  description: "Replaces every v with 7.",
  run: (value) => String(value).split("v").join("7"),
});

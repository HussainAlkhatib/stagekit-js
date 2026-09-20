'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2191",
  name: "Replace \"v\" with \"I\"",
  description: "Replaces every v with I.",
  run: (value) => String(value).split("v").join("I"),
});

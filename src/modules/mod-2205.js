'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2205",
  name: "Replace \"v\" with \"W\"",
  description: "Replaces every v with W.",
  run: (value) => String(value).split("v").join("W"),
});

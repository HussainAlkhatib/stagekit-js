'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4402",
  name: "Replace \"5\" with \"W\"",
  description: "Replaces every 5 with W.",
  run: (value) => String(value).split("5").join("W"),
});

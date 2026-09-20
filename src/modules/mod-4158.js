'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4158",
  name: "Replace \"1\" with \"W\"",
  description: "Replaces every 1 with W.",
  run: (value) => String(value).split("1").join("W"),
});

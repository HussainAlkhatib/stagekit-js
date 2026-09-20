'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4341",
  name: "Replace \"4\" with \"W\"",
  description: "Replaces every 4 with W.",
  run: (value) => String(value).split("4").join("W"),
});

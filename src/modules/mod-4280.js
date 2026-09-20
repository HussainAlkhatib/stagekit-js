'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4280",
  name: "Replace \"3\" with \"W\"",
  description: "Replaces every 3 with W.",
  run: (value) => String(value).split("3").join("W"),
});

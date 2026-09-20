'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4463",
  name: "Replace \"6\" with \"W\"",
  description: "Replaces every 6 with W.",
  run: (value) => String(value).split("6").join("W"),
});

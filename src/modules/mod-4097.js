'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4097",
  name: "Replace \"0\" with \"W\"",
  description: "Replaces every 0 with W.",
  run: (value) => String(value).split("0").join("W"),
});

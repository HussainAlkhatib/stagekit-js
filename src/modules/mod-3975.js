'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3975",
  name: "Replace \"Y\" with \"W\"",
  description: "Replaces every Y with W.",
  run: (value) => String(value).split("Y").join("W"),
});

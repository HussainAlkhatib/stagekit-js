'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4036",
  name: "Replace \"Z\" with \"W\"",
  description: "Replaces every Z with W.",
  run: (value) => String(value).split("Z").join("W"),
});

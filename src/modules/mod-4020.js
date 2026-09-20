'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4020",
  name: "Replace \"Z\" with \"G\"",
  description: "Replaces every Z with G.",
  run: (value) => String(value).split("Z").join("G"),
});

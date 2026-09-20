'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2006",
  name: "Replace \"s\" with \"G\"",
  description: "Replaces every s with G.",
  run: (value) => String(value).split("s").join("G"),
});

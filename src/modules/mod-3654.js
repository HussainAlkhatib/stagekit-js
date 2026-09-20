'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3654",
  name: "Replace \"T\" with \"G\"",
  description: "Replaces every T with G.",
  run: (value) => String(value).split("T").join("G"),
});

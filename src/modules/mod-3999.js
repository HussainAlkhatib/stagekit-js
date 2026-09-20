'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3999",
  name: "Replace \"Z\" with \"l\"",
  description: "Replaces every Z with l.",
  run: (value) => String(value).split("Z").join("l"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3593",
  name: "Replace \"S\" with \"G\"",
  description: "Replaces every S with G.",
  run: (value) => String(value).split("S").join("G"),
});

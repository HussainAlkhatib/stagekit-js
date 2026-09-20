'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3576",
  name: "Replace \"S\" with \"p\"",
  description: "Replaces every S with p.",
  run: (value) => String(value).split("S").join("p"),
});

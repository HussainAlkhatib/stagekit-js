'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3535",
  name: "Replace \"R\" with \"J\"",
  description: "Replaces every R with J.",
  run: (value) => String(value).split("R").join("J"),
});

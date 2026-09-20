'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3596",
  name: "Replace \"S\" with \"J\"",
  description: "Replaces every S with J.",
  run: (value) => String(value).split("S").join("J"),
});

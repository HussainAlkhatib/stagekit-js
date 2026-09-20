'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2786",
  name: "Replace \"F\" with \"s\"",
  description: "Replaces every F with s.",
  run: (value) => String(value).split("F").join("s"),
});

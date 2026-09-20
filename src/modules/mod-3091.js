'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3091",
  name: "Replace \"K\" with \"s\"",
  description: "Replaces every K with s.",
  run: (value) => String(value).split("K").join("s"),
});

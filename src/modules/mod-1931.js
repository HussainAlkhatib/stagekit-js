'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1931",
  name: "Replace \"r\" with \"s\"",
  description: "Replaces every r with s.",
  run: (value) => String(value).split("r").join("s"),
});

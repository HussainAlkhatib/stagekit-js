'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3701",
  name: "Replace \"U\" with \"s\"",
  description: "Replaces every U with s.",
  run: (value) => String(value).split("U").join("s"),
});

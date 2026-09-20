'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3615",
  name: "Replace \"S\" with \"3\"",
  description: "Replaces every S with 3.",
  run: (value) => String(value).split("S").join("3"),
});

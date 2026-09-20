'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3577",
  name: "Replace \"S\" with \"q\"",
  description: "Replaces every S with q.",
  run: (value) => String(value).split("S").join("q"),
});

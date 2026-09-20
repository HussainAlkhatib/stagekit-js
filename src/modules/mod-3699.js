'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3699",
  name: "Replace \"U\" with \"q\"",
  description: "Replaces every U with q.",
  run: (value) => String(value).split("U").join("q"),
});

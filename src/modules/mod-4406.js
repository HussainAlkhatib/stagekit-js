'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4406",
  name: "Replace \"5\" with \"0\"",
  description: "Replaces every 5 with 0.",
  run: (value) => String(value).split("5").join("0"),
});

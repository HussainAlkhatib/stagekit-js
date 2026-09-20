'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2941",
  name: "Replace \"H\" with \"0\"",
  description: "Replaces every H with 0.",
  run: (value) => String(value).split("H").join("0"),
});

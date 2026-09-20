'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2936",
  name: "Replace \"H\" with \"V\"",
  description: "Replaces every H with V.",
  run: (value) => String(value).split("H").join("V"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3485",
  name: "Replace \"Q\" with \"V\"",
  description: "Replaces every Q with V.",
  run: (value) => String(value).split("Q").join("V"),
});

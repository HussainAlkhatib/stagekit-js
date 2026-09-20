'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2445",
  name: "Replace \"z\" with \"S\"",
  description: "Replaces every z with S.",
  run: (value) => String(value).split("z").join("S"),
});

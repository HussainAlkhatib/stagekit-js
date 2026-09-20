'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2406",
  name: "Replace \"z\" with \"e\"",
  description: "Replaces every z with e.",
  run: (value) => String(value).split("z").join("e"),
});

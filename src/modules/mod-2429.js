'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2429",
  name: "Replace \"z\" with \"C\"",
  description: "Replaces every z with C.",
  run: (value) => String(value).split("z").join("C"),
});

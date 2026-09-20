'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2448",
  name: "Replace \"z\" with \"V\"",
  description: "Replaces every z with V.",
  run: (value) => String(value).split("z").join("V"),
});

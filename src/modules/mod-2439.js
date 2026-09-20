'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2439",
  name: "Replace \"z\" with \"M\"",
  description: "Replaces every z with M.",
  run: (value) => String(value).split("z").join("M"),
});

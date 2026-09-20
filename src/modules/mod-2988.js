'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2988",
  name: "Replace \"I\" with \"M\"",
  description: "Replaces every I with M.",
  run: (value) => String(value).split("I").join("M"),
});

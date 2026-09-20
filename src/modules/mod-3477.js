'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3477",
  name: "Replace \"Q\" with \"M\"",
  description: "Replaces every Q with M.",
  run: (value) => String(value).split("Q").join("M"),
});

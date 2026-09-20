'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4433",
  name: "Replace \"6\" with \"s\"",
  description: "Replaces every 6 with s.",
  run: (value) => String(value).split("6").join("s"),
});

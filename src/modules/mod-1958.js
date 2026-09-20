'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1958",
  name: "Replace \"r\" with \"T\"",
  description: "Replaces every r with T.",
  run: (value) => String(value).split("r").join("T"),
});

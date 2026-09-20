'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3589",
  name: "Replace \"S\" with \"C\"",
  description: "Replaces every S with C.",
  run: (value) => String(value).split("S").join("C"),
});

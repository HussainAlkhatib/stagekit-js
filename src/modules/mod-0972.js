'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0972",
  name: "Replace \"d\" with \"V\"",
  description: "Replaces every d with V.",
  run: (value) => String(value).split("d").join("V"),
});

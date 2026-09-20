'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0987",
  name: "Replace \"d\" with \"0\"",
  description: "Replaces every d with 0.",
  run: (value) => String(value).split("d").join("0"),
});

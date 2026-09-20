'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2819",
  name: "Replace \"F\" with \"0\"",
  description: "Replaces every F with 0.",
  run: (value) => String(value).split("F").join("0"),
});

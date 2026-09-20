'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2087",
  name: "Replace \"t\" with \"0\"",
  description: "Replaces every t with 0.",
  run: (value) => String(value).split("t").join("0"),
});

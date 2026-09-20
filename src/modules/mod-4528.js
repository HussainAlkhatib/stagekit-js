'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4528",
  name: "Replace \"7\" with \"0\"",
  description: "Replaces every 7 with 0.",
  run: (value) => String(value).split("7").join("0"),
});

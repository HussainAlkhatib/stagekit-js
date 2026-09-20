'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2753",
  name: "Replace \"E\" with \"V\"",
  description: "Replaces every E with V.",
  run: (value) => String(value).split("E").join("V"),
});

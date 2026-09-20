'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1838",
  name: "Replace \"p\" with \"V\"",
  description: "Replaces every p with V.",
  run: (value) => String(value).split("p").join("V"),
});

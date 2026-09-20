'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4218",
  name: "Replace \"2\" with \"V\"",
  description: "Replaces every 2 with V.",
  run: (value) => String(value).split("2").join("V"),
});

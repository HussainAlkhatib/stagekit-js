'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3424",
  name: "Replace \"P\" with \"V\"",
  description: "Replaces every P with V.",
  run: (value) => String(value).split("P").join("V"),
});

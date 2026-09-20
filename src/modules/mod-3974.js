'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3974",
  name: "Replace \"Y\" with \"V\"",
  description: "Replaces every Y with V.",
  run: (value) => String(value).split("Y").join("V"),
});

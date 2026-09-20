'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4035",
  name: "Replace \"Z\" with \"V\"",
  description: "Replaces every Z with V.",
  run: (value) => String(value).split("Z").join("V"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3612",
  name: "Replace \"S\" with \"0\"",
  description: "Replaces every S with 0.",
  run: (value) => String(value).split("S").join("0"),
});

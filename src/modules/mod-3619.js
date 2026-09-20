'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3619",
  name: "Replace \"S\" with \"7\"",
  description: "Replaces every S with 7.",
  run: (value) => String(value).split("S").join("7"),
});

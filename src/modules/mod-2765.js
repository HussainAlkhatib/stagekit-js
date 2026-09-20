'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2765",
  name: "Replace \"E\" with \"7\"",
  description: "Replaces every E with 7.",
  run: (value) => String(value).split("E").join("7"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1240",
  name: "Replace \"f\" with \"7\"",
  description: "Replaces every f with 7.",
  run: (value) => String(value).split("f").join("7"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3741",
  name: "Replace \"U\" with \"7\"",
  description: "Replaces every U with 7.",
  run: (value) => String(value).split("U").join("7"),
});

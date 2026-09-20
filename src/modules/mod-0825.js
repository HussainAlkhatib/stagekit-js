'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0825",
  name: "Replace \"c\" with \"7\"",
  description: "Replaces every c with 7.",
  run: (value) => String(value).split("c").join("7"),
});

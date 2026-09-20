'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1484",
  name: "Replace \"j\" with \"7\"",
  description: "Replaces every j with 7.",
  run: (value) => String(value).split("j").join("7"),
});

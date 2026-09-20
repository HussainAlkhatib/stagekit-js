'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3863",
  name: "Replace \"W\" with \"7\"",
  description: "Replaces every W with 7.",
  run: (value) => String(value).split("W").join("7"),
});

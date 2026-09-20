'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1911",
  name: "Replace \"q\" with \"7\"",
  description: "Replaces every q with 7.",
  run: (value) => String(value).split("q").join("7"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2219",
  name: "Replace \"w\" with \"a\"",
  description: "Replaces every w with a.",
  run: (value) => String(value).split("w").join("a"),
});

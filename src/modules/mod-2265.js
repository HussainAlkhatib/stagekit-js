'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2265",
  name: "Replace \"w\" with \"V\"",
  description: "Replaces every w with V.",
  run: (value) => String(value).split("w").join("V"),
});

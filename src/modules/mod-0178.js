'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0178",
  name: "Bullet \"~ \"",
  description: "Prefixes each line with \"~ \".",
  run: (value) => String(value).split('\n').map((line) => "~ " + line).join('\n'),
});

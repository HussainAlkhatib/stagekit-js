'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0062",
  name: "Mask all but last 4",
  description: "Masks all but the last 4 characters.",
  run: (value) => { const s = String(value); const keep = 4; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});

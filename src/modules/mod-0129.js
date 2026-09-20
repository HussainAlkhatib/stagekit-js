'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0129",
  name: "Mask all but last 8",
  description: "Masks all but the last 8 characters.",
  run: (value) => { const s = String(value); const keep = 8; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});

var _ = require('underscore');

// 'key' vince contro 'value'
var schema = { 'sasso' : 'forbice', 'forbice' : 'carta', 'carta' : 'sasso' };

var playLogic = function(mossa,mossaCPU){
  if(schema[mossa] == null) return -1;
  if(mossa == mossaCPU) return 0;
  if(schema[mossa] == mossaCPU) return 1;
  return 2;
};

exports.play = function(mossa){
  var mossaCPU = ['sasso','carta','forbice'][_.random(0,2)];
  console.log('Player: ' + mossa);
  console.log('CPU: ' + mossaCPU);
  console.log('------------');
  return playLogic(mossa,mossaCPU);
}

exports.playLogic = playLogic;

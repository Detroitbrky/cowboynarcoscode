const {ShardingManager} = require ('discord.js');
const manager = new ShardingManager ('./index.js', {totalShards: 'auto', token: 'ODE0MDcwMjQ1MjY2NDIzODM4.YDYf_w.XuwimmG3Rv8nmg8e9XbxAUClq9g'}); // TOKEN discord.com/developers Alabilirsiniz!

manager.on ('shardCreate', shard => console.log (`Shardlar Başlatılıyor!`));
manager.spawn ();

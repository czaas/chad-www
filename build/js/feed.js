var instagramData;
var feed = new Instafeed({
  get: 'user',
  userId: 1388413337,
  clientId: 'efdc48d247ca43e1a890066446d81c16',
  accessToken: '1388413337.efdc48d.c50dbba9aec14c0c9b6f82e968620029',
  mock: true,
  success: function getImagesData(data){
  	app.init(data);
  }
});
feed.run();

// article that shows full model data that is being 
//https://github.com/stevenschobert/instafeed.js/issues/21#issuecomment-21423698


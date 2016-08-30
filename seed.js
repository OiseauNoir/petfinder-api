require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Dog = require('./models/dog');


var dogsArr = [
  {
    breed: 'Pembroke Welsh Corgie',
    kidFriendly: true,
    maintenance: 'Low',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Intellectual',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffb%2FWelchcorgipembroke.JPG&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPembroke_Welsh_Corgi&docid=BBJ_9I_2GxfuBM&tbnid=ST_7QocYVrti3M%3A&w=2967&h=1978&noj=1&bih=699&biw=1368&ved=0ahUKEwjyqvrFtOfOAhUL3WMKHV-pAvcQMwg4KAAwAA&iact=mrc&uact=8'
  },
  {
    breed: 'Bulldog',
    kidFriendly: true,
    maintenance: 'Low',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F13%2FClyde_The_Bulldog.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBulldog&docid=35PzRdNy1f4rWM&tbnid=iBWOpVDygb_W_M%3A&w=1552&h=1551&noj=1&bih=699&biw=1368&ved=0ahUKEwi-iJrAtefOAhVJ6GMKHTnEAwsQMwhTKAEwAQ&iact=mrc&uact=8'
  },
  {
    breed: 'Daschund',
    kidFriendly: true,
    maintenance: 'Low',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F27%2FShort-haired-Dachshund.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDachshund&docid=lVLMbMj4VfvFPM&tbnid=LFf9Kg1LL9ny7M%3A&w=512&h=384&noj=1&bih=699&biw=1368&ved=0ahUKEwiMw6fStefOAhVY42MKHSDbAaoQMwghKAMwAw&iact=mrc&uact=8'
  },
  {
    breed: 'Shih Tzu',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F5f%2FPancho0008.JPG&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FShih_Tzu&docid=kjXmcssAfNHClM&tbnid=mW_gKLDmJuzuTM%3A&w=2848&h=2136&noj=1&bih=699&biw=1368&ved=0ahUKEwihuuLgtefOAhUQ9WMKHY85B5QQMwhAKAIwAg&iact=mrc&uact=8'
  },
  {
    breed: 'Havanese',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb4%2FHavanese0315.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHavanese&docid=RHTS7AMUAXSV-M&tbnid=uFmyG5BgRoTdpM%3A&w=681&h=571&noj=1&bih=699&biw=1368&ved=0ahUKEwjd5_DxtefOAhVJ5GMKHcHeAgAQMwhOKAAwAA&iact=mrc&uact=8'
  },
  {
    breed: 'Mastiff',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Lone Wolf',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fcc%2FWestgort_Anticipation_17_months.JPG&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEnglish_Mastiff&docid=A6wSSUmE2xyCfM&tbnid=no4pnV1OpOBPvM%3A&w=1149&h=789&noj=1&bih=699&biw=1368&ved=0ahUKEwiMurz9tefOAhVB6GMKHQnhD3kQMwhZKAQwBA&iact=mrc&uact=8'
  },
  {
    breed: 'King Charles Spaniel',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F5f%2FCarterBIS.Tiki.13.6.09.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCavalier_King_Charles_Spaniel&docid=8ILfDzVHcaVqbM&tbnid=rkSuN9Ll0JoDDM%3A&w=691&h=505&noj=1&bih=699&biw=1368&ved=0ahUKEwig58zttufOAhVPyGMKHVfODdsQMwhaKAIwAg&iact=mrc&uact=8'
  },
  {
    breed: 'Boston Terrier',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7d%2FBostonTerrier001.JPG&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBoston_Terrier&docid=jNV2zYW9YVAf9M&tbnid=Iqm7eqNmBes-XM%3A&w=1709&h=1680&noj=1&bih=699&biw=1368&ved=0ahUKEwjnguj3tufOAhVB2WMKHd4pD6EQMwhGKAAwAA&iact=mrc&uact=8'
  },
  {
    breed: 'Pointer (German Shorthair)',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Medium',
    personality: 'Lone Wolf',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F38%2FDuitse_staande_korthaar_10-10-2.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGerman_Shorthaired_Pointer&docid=uux_OiKSCbbv8M&tbnid=AVds7JPyKonVwM%3A&w=500&h=332&noj=1&bih=699&biw=1368&ved=0ahUKEwj7xKeAt-fOAhVD9WMKHYP6CX0QMwhKKAAwAA&iact=mrc&uact=8'
  },
  {
    breed: 'Beagle',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc2%2FBeagle_portrait_Camry.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBeagle&docid=LWcY9XL5rvXonM&tbnid=AjCW3We7ZauX_M%3A&w=1024&h=683&noj=1&bih=699&biw=1368&ved=0ahUKEwjkgqCOt-fOAhUOxmMKHaYhAZQQMwhGKAAwAA&iact=mrc&uact=8'
  },
  {
    breed: 'Rottweiler',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F04%2FRottweiler_kopf_2.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRottweiler&docid=BSn3QjoIGr3T3M&tbnid=Y-2sI2dGGaWwLM%3A&w=1151&h=801&noj=1&bih=699&biw=1368&ved=0ahUKEwjIifGbt-fOAhVR4mMKHYdhDTsQMwhTKAEwAQ&iact=mrc&uact=8'
  },
  {
    breed: 'Sheepdog',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Athlete',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F62%2FShetlandShpdogBlue2_wb.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FShetland_Sheepdog&docid=ioFyblQZOAuV_M&tbnid=sCkV2XvonNBDyM%3A&w=500&h=411&noj=1&bih=695&biw=1368&ved=0ahUKEwjRhp3dxufOAhVW_WMKHSs9BFcQMwhHKAAwAA&iact=mrc&uact=8'
  },
  {
    breed: 'Poodle',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Intellectual',
    imageName: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fmini-french-poodle-puppy.jpg&imgrefurl=http%3A%2F%2Fwww.publicdomainpictures.net%2Fhledej.php%3Fhleda%3Dpoodle&docid=0PCrrwoMcVABAM&tbnid=D-WximogYZS02M%3A&w=1920&h=1440&noj=1&bih=695&biw=1368&ved=0ahUKEwjvoMHtxufOAhVV-GMKHTyhCtIQMwhQKBAwEA&iact=mrc&uact=8'
  },
  {
    breed: 'Boxer',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Medium',
    personality: 'Defender',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8c%2FBoxer.jgp.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ABoxer.jgp.jpg&docid=vQTgv8IQN3ap3M&tbnid=FkgQxTgJ9DbLsM%3A&w=350&h=335&noj=1&bih=695&biw=1368&ved=0ahUKEwjhzuqBx-fOAhVD9mMKHedOBJ8QMwhAKAUwBQ&iact=mrc&uact=8'
  },
  {
    breed: 'Retreiver',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Large',
    personality: 'Athlete',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffe%2FGolden_Retriever_puppy.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AGolden_Retriever_puppy.jpg&docid=d_NjM7cstC0WwM&tbnid=8SYC5SB1VzeFgM%3A&w=1792&h=1200&noj=1&bih=695&biw=1368&ved=0ahUKEwiWiqaKx-fOAhVQ3GMKHcvYBVgQMwhSKAUwBQ&iact=mrc&uact=8'
  },
  {
    breed: 'French Bulldog',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Intellectual',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpixabay.com%2Fstatic%2Fuploads%2Fphoto%2F2014%2F02%2F28%2F22%2F45%2Ffrench-bulldog-277255_960_720.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fen%2Fphotos%2Ffrench%2520bulldog%2F&docid=w4O2B2KVKCY-NM&tbnid=1ym4xoXwQFerSM%3A&w=960&h=635&noj=1&bih=695&biw=1368&ved=0ahUKEwjO6O6Sx-fOAhUW72MKHcY1CDAQMwhHKAAwAA&iact=mrc&uact=8'
  },
  {
    breed: 'Australian Shepherd',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Medium',
    personality: 'Intellectual',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc7%2FMiniature_Australian_Shepherd_red_tricolour.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMiniature_Australian_Shepherd&docid=_yNHLSUgGWWFSM&tbnid=snuc6Z2duKkKpM%3A&w=500&h=465&noj=1&bih=695&biw=1368&ved=0ahUKEwjIkp-cx-fOAhVIVWMKHcdyCWIQMwhDKAMwAw&iact=mrc&uact=8'
  },
  {
    breed: 'Siberian Husky',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Medium',
    personality: 'Lone Wolf',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fca%2FSiberian-husky.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FSiberian_Husky&docid=2sOCe1OtZs5s2M&tbnid=JiSTcLr_lZmbMM%3A&w=640&h=466&noj=1&bih=695&biw=1368&ved=0ahUKEwjH18-kx-fOAhUT8mMKHZf-AKAQMwhDKAQwBA&iact=mrc&uact=8'
  },
  {
    breed: 'Retriever',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Athlete',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F83%2FLabrador_retriever_bulaj1.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLabrador_Retriever&docid=G2FX7MlKb0XrgM&tbnid=emSB5yEiaaWyBM%3A&w=640&h=480&noj=1&bih=695&biw=1368&ved=0ahUKEwjkneGux-fOAhUC7GMKHUHhBhQQMwhMKAIwAg&iact=mrc&uact=8'
  },
  {
    breed: 'Great Dane',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Cuddler',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8b%2FGreat_Dane_black_laying.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGreat_Dane&docid=Vpq8zJsBupPKxM&tbnid=BhrXA_lKwIbp1M%3A&w=3008&h=2000&noj=1&bih=695&biw=1368&ved=0ahUKEwiwxa27x-fOAhVOz2MKHcG3AccQMwhKKAAwAA&iact=mrc&uact=8'
  },
  {
    breed: 'German Shepherd',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F10%2FGerman_Shepherd_Dog_with_disc.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWolfdog&docid=ib0B8Oh_Otpb6M&tbnid=zn3oufGRLs_4mM%3A&w=1024&h=768&noj=1&bih=695&biw=1368&ved=0ahUKEwiSg9HDx-fOAhVP7GMKHe_iBlwQMwhDKAUwBQ&iact=mrc&uact=8'
  },
  {
    breed: 'Doberman Pinscher',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FDoberman_Pinscher_down.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ADoberman_Pinscher_down.jpg&docid=3hfsNwNzhWC1MM&tbnid=Wkuqc258t0ooDM%3A&w=2325&h=1686&noj=1&bih=695&biw=1368&ved=0ahUKEwjU7p_Nx-fOAhVP72MKHc72Bi8QMwhPKAQwBA&iact=mrc&uact=8'
  },
  {
    breed: 'Miniature Schnauzer',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Lone Wolf',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa6%2FMiniature_schnauzer_blackandsilver.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AMiniature_schnauzer_blackandsilver.jpg&docid=dLHh_MBIFBRAEM&tbnid=NwbApqTvkA3CQM%3A&w=2272&h=1704&noj=1&bih=695&biw=1368&ved=0ahUKEwjd0tDXx-fOAhUPx2MKHbRpCNoQMwhOKAMwAw&iact=mrc&uact=8'
  },
  {
    breed: 'Pomeranian',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Intellectual',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fcb%2FPomeranian_orange-sable_Coco.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPomeranian_(dog)&docid=lTKZ9IUl6V5hvM&tbnid=if5yjF2-arPNfM%3A&w=2799&h=2055&noj=1&bih=695&biw=1368&ved=0ahUKEwjE-57gx-fOAhVMwmMKHaS9CmoQMwhHKAAwAA&iact=mrc&uact=8vv'
  },
  {
    breed: 'Yorkshire Terrier',
    kidFriendly: false,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F57%2FYorkshire_terrier.jpg&imgrefurl=https%3A%2F%2Fsimple.wikipedia.org%2Fwiki%2FYorkshire_Terrier&docid=HCc2vc0vhkJg9M&tbnid=gV8pUWWdvxhziM%3A&w=1165&h=823&noj=1&bih=695&biw=1368&ved=0ahUKEwiy1-Tqx-fOAhUS9mMKHQ47CG0QMwhDKAMwAw&iact=mrc&uact=8'
  },
].forEach(function (dogObject) {
  var dog = new Dog(dogObject)
  dog.save(function (err) {
    // if(err) {
    //   console.log(err);
    // } else {
    //   res.redirect('/');
    // }
  });
});

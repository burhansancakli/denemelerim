var haberler=[
{
"baslik":"Senkronize Patenlerimiz Türkiye Şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8308"
},
{
"baslik":"Menderes Eren Türkiye Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8070"
},
{
"baslik":"Menderes Eren’den Short Tack'da 5 madalya…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7959"
},
{
"baslik":"Buz Pateni Spor Toto Kupası’nda Türkiye 3.’süyüz..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7781"
},
{
"baslik":"Patenlerimiz Türkiye Şampiyonası’na damga vurdu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7738"
},
{
"baslik":"Berk Yetişken Short Track Türkiye Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7724"
},
{
"baslik":"Patenlerimiz 10 madalyayla piste damga vurdu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7690"
},
{
"baslik":"Patenlerimiz Cumhuriyet Kupası’nda 4 madalya aldı…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7630"
},
{
"baslik":"Artistik Buz Pateni’nde 5 madalya..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7578"
},
{
"baslik":"Patenlerimiz 9 madalya aldı…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7562"
},
{
"baslik":"Artistik Buz Pateni’nde 4 madalya…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7543"
},
{
"baslik":"Sürat Pateni’ne 5 Milli Yıldız..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7539"
},
{
"baslik":"Buz Pateni sezona hazır!…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7419"
},
{
"baslik":"Rooster Cup’ta kürsüde yer aldık…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7318"
},
{
"baslik":"Teşvik Şampiyonası’nda 6 madalya aldık…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7277"
},
{
"baslik":" Buz Pateni’nde 6 madalya aldık…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7088"
},
{
"baslik":"Denkova – Staviski Cup’ta 3 madalya aldık",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7029"
},
{
"baslik":"Buz Pateni’nde 6 madalya aldık…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7014"
},
{
"baslik":"Teşvik Şampiyonası’nda 6 madalya aldık…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6770"
},
{
"baslik":"Alp Eren Özkan, Türkiye Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6687"
},
{
"baslik":"Buz Pateni Grup maçları yapıldı…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6594"
},
{
"baslik":"Başar Oktar Türkiye Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6575"
},
{
"baslik":"Denkova-Staviski Cup’ta 10 madalya aldık",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6533"
},
{
"baslik":"Başar Oktar Türkiye Şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6465"
},
{
"baslik":"Buz Pateni’nde Türkiye 3.’sü olduk. ",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6253"
},
{
"baslik":"Uluslararası Trophy’de 7 madalya aldık",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6231"
},
{
"baslik":"Buz Pateni’nde kürsü İlayda Bayar’ın",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6204"
},
{
"baslik":"Buz Pateni’nde kürsüyü bırakmadık!",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6142"
},
{
"baslik":"Teşvik Şampiyonası’nda 6 madalya kazandık.",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6106"
},
{
"baslik":"Oğuzhan Selimoğlu Türkiye 2.’si",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6054"
},
{
"baslik":"Artistik Buz Pateni’nde kürsüye ambargo koyduk",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=5991"
}
]
window.onload = function () {
   var data="";
   length=haberler.length;
   for(var i = 0; i<length;i++){
      var find=findString(haberler[i].baslik.substring(0,haberler[i].baslik.length-5));
      if (!find){
         data = data + haberler[i].link+'\n';
      }
   }
   console.log(data);
}
var TRange = null;
function findString(str) {
    if (parseInt(navigator.appVersion) < 4) return;
    var strFound;
    if (window.find) {
        // CODE FOR BROWSERS THAT SUPPORT window.find
        strFound = self.find(str);
        if (strFound && self.getSelection && !self.getSelection().anchorNode) {
            strFound = self.find(str)
			console.log('burdan buldu');
        }
        if (!strFound) {
            strFound = self.find(str, 0, 1)
            while (self.find(str, 0, 1)) continue
        }
    
    } 
    
    if (!strFound) 
   {
        return false;
	}
	return true;
}
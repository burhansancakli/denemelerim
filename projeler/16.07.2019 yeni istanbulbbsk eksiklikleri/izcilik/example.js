var haberler=[
{
"baslik":"Komutanlarımız ve Sn.Topbaş'tan İzci Kampı’na ziyaret",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7831"
},
{
"baslik":"İzcilerimizden Başkanımıza ziyaret…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7708"
},
{
"baslik":"İzcilerimiz Çanakkale Şehitleri için etkinlik düzenledi…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7695"
},
{
"baslik":"2015 Kış Kampları Sona Erdi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7681"
},
{
"baslik":"İzcilerimiz Milli Bilinç Kampı’nda…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=6220"
},
{
"baslik":"Büyükşehir Belediyesi İzcileri Ata’nın huzurunda",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=5140"
},
{
"baslik":"İzcilerimiz Ata'yı Anacak?",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=4424"
},
{
"baslik":"25 Nisan Anzak Günü Degildir.",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=4545"
},
{
"baslik":"Izcileri Çanakkale`ye Ugurladik...",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=4559"
},
{
"baslik":"IB.B izcileri Allahu Ekber Daglarina tirmandi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=4663"
},
{
"baslik":"Izcilikte 10 Kasim Faaliyetimiz..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=4710"
},
{
"baslik":"Aday Izci Kampi Sona Erdi...",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=4767"
},
{
"baslik":"6000 Izciyi Erdek`e Ugurladik",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=4788"
},
{
"baslik":" İzciler Çanakkaleye ugurlandı",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=4836"
},
{
"baslik":"Ilk izci grubu yola çikti..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=5037"
},
{
"baslik":"25 Nisan Anzak Günü Degildir.25 Nisan 57. Alayin Günüdür.",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=5050"
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
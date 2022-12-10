function odliczanie()
	{
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
		var miesiac = dzisiaj.getMonth()+1;
		var tekst = "Witam was w ten piękny dzień";
		
		
		
		document.getElementById("text").innerHTML = 
		tekst+"   "+dzien+"/"+miesiac
		 
		 setTimeout("odliczanie()",10000);
	}
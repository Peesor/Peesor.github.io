function odliczanie()
	{
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
		var miesiac = dzisiaj.getMonth()+1;
		
		
		
		
		document.getElementById("zegar").innerHTML = 
		 dzien+"/"+miesiac
		 
		 setTimeout("odliczanie()",1000000000000);
	}
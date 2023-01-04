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
function TestCOMPort()
{
  var ForWriting = 2;
  var TriStateFalse = 0;

  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var f = fso.OpenTextFile("COM1:", ForWriting, false, TriStateFalse);
  // Write data to the port
  f.Write("A");
  f.Write(" ");
  f.Write("\x1B");
  f.Close();
}
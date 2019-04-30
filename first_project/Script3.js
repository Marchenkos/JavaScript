
            if(window.XMLHttpRequest)
                {
                    xmlhttp=new XMLHttpRequest();
                    
                }
            else
                {
                    xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
                }
            xmlhttp.open("GET", "L3.xml", false);
            xmlhttp.send();
            xmlDoc=xmlhttp.responseXML;
           
             document.getElementById("first").innerHTML=xmlDoc.getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
             document.getElementById("second").innerHTML=xmlDoc.getElementsByTagName("NUM")[0].childNodes[0].nodeValue;
            document.getElementById("third").innerHTML=xmlDoc.getElementsByTagName("EXAM")[0].childNodes[0].nodeValue;
            document.getElementById("fou").innerHTML=xmlDoc.getElementsByTagName("CITY")[0].childNodes[0].nodeValue;
 
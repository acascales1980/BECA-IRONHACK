
      acumulado="";
       //function that display value
       function introduce(valor)
       {
         // validamos la entrada de carga_datos
         // si es una operador entonces reseteamos la pantalla y no lo muestra
         // sen caso contrario mostramos los numeros
          document.getElementById("carga_datos").value+=valor
          acumulado+=valor;

       }

       function almacenar(valor)
       {
        acumulado+=valor;
        document.getElementById("carga_datos").value = ""

         //let x = document.getElementById("carga_datos").value
          // total+=x;
         }

         function calcular()
        {

           total=eval(acumulado);
          document.getElementById("carga_datos").value = total
           //let x = document.getElementById("carga_datos").value
            // total+=x;
           }

       //function that clear the display
       function borrar()
       {
           document.getElementById("carga_datos").value = ""
              acumulado="";
       }

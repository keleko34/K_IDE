var os = require('os');
      var timer = null;
      function getRam()
      {
        if(timer)
        {
          clearTimeout(timer);
        }
        var ram = "total: "+parseInt((os.totalmem()/1000000))+"mb free: "+parseInt((os.freemem()/1000000))+"mb";
        document.querySelector('#ram').innerHTML = ram;
        timer = setTimeout(function(){getRam();},20);
      }

      document.querySelector('#cpu').innerHTML = os.cpus().length;
      getRam();
      document.querySelector('#close').onclick = function(){
        var nwgui = require('nw.gui');
        if(nwgui)
        {
          nwgui.Window.get().close();
        }
        else if(mainWindow)
        {
          global.mainWindow.close();
        }

      }

console.log("Content script loaded");
//alert("Content script loaded");
var greeting = "hola, ";
var button = document.getElementById("mybutton");
/*button.addEventListener("click", function() {
  alert(greeting + button + ".");
}, false);*/


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
   /* console.log(request);
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    var src = $("#beehyv-logo").attr("src");
    console.log(src);
    */
    var path = request.path;
    var options = request.options;
    downloadImg(path, options);
    if (request.greeting == "hello"){
        sendResponse({farewell: src});
    }
  });
  
  function downloadImg(path, options){
      console.log(path);
      console.log($(path).length);
      if(!$(path).length){
          console.log("No element found");
          return;
      }
      var $cloned = $(path).clone();
      var $content = $(path);
      if(options.emptyChildElements){
          $content.empty();
      }
      if(options.textTransparent){
          $content.css({
              "color": "rgba(0,0,0,0)"
          });
      }
        html2canvas($content, {
            onrendered: function(canvas) {
                console.log(canvas);
                theCanvas = canvas;
                document.body.appendChild(canvas);

                // Convert and download as image 
              //  Canvas2Image.saveAsPNG(canvas); 
                
                var dataString = canvas.toDataURL("image/png");
                var link = document.createElement("a");
                link.download = path+".png";
                link.href = dataString;
                link.target = "_blank";
       
                link.click();
                
                $content.replaceWith($cloned);
                
                $("body").append("<div id='img-out'></div>");
                $("#img-out").append(canvas);
                // Clean up 
                //document.body.removeChild(canvas);
            }
        });
     
  }
  
  function downloadCanvas(link, canvasId, filename) {
        var dataString = canvas.toDataURL("image/png");
        var link = document.createElement("a");
        link.download = 'image';
        link.href = dataString;
        link.click();
    }
  $(document).ready(function(){
     
      
  });
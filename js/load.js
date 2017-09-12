window.onload=function(){
document.forms['myform'].elements['myfile'].onchange = function(evt) {
    if(!window.FileReader) return; // Browser is not compatible
    var reader = new FileReader();

    reader.onload = function(evt) {
        if(evt.target.readyState != 2) return;
        if(evt.target.error) {
            alert('Error while reading file');
            return;
        }

        filecontent = evt.target.result;

        document.forms['myform'].elements['text'].value = evt.target.result;
    };

    reader.readAsText(evt.target.files[0]);
};
}
var Download = 
    {
        click : function(node) {
            var ev = document.createEvent("MouseEvents");
            ev.initMouseEvent("click", true, false, self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            return node.dispatchEvent(ev);
        },
        encode : function(data) {
                return 'data:application/octet-stream;base64,' + btoa( data );
        },
        link : function(data, name){
            var a = document.createElement('a');
            a.download = name || self.location.pathname.slice(self.location.pathname.lastIndexOf('/')+1);
            a.href = data || self.location.href;
            return a;
        }
    };
    Download.save = function(data, name)
    {
        this.click(
            this.link(
                this.encode( data ),
                name
            )
        );
    };
var save = function(){
var output = document.getElementById("text").value
var filename = document.getElementById("filename").value
Download.save(output,""+filename+"")
}

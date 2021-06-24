
function form(types) {
    form = ""; 
    closetag = false;
    for(i in types) {
       if(i == "textarea")
	    form = form + `<textarea></textarea>`;
       else if(i == "select")
	    if(closetag){
	        closetag = false;
	        form = form + "</select>";
            } else {
               closetag = true;
	       form = form + "<select>";
	    }
       else if(i == "option")
	    form = form + "<option></option>";
       else
            form = form + `<input type="${type}">`;
    }
}

module.exports = {form: form}

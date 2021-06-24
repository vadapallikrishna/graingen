
function form(types) {
    f = ""; 
    closetag = false;
    types.forEach((i) => {
       if(i == "textarea")
	    f = f + `<textarea></textarea>`;
       else if(i == "select")
	    if(closetag){
	        closetag = false;
	        f = f + "</select>";
            } else {
               closetag = true;
	       f = f + "<select>";
	    }
       else if(i == "option")
	    f = f + "<option></option>";
       else
            f = f + `<input type="${i}">`;
    })
    return f;
}

module.exports = {form: form}

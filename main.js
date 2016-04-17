
function form_hide(a)
{
    if (a === 1) {
         document.getElementById("form_hide").style.display="none";
         document.getElementById("butHide").style.visibility="hidden";
         document.getElementById("butShow").style.visibility="visible";    
         
         var i1 = document.getElementById("profile-name").value;
         document.getElementById("full-name-output").textContent = i1;
         
         var i2 = document.getElementById("bio").value;
         document.getElementById("bio-output").textContent = i2;     
         
         var i3 = document.getElementById("favbooks").value;
         document.getElementById("favbooks-output").textContent = i3;
         
        // var i4 = document.getElementById("favlibs").value;
        // document.getElementById("favlibs-output").textContent = i4;           
    }
    else {
         document.getElementById("form_hide").style.display="block";
         document.getElementById("butHide").style.visibility="visible";
         document.getElementById("butShow").style.visibility="hidden";  
    }
    
}
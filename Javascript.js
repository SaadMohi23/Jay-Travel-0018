$("#formValidate").validate({
    rules:{
        firstname:{
            minlength: 2
        },
        lastname:{
            minlength: 2
        },
        email:{
            email:true,
        },
        phone:{
            number:true,
            minlength: 8,
            maxlength: 20
        },
    },
    
    messages: {
        firstname:{
            required: "Please enter your first name",
            minlength: "First name should be atleast 2 characters"
        },
        lastname:{
            required: "Please enter your last name",
            minlength: "Last name should be atleast 2 characters"
        },
        email:"Please enter your E-mail",
        phone:"Please enter your Phone Number"
      },

    submitHandler: function(form) {
      form.submit();
    },



   });
   
function successfulSubmit() {
    alert("The form was submitted successfullly");
}

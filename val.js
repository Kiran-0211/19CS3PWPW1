function emailValidation()
{
  var val = input.Email.value.search(/[a-z]+.[a-z]{2}[1-2][1-9]@bmsce.ac.in/i);
  if(val == -1)
  {
    return false;

  }
  else {
    return true;
  }
}
function MoveOn()
{
  if(emailValidation())
  {
    location.replace("/Users/kiranmk/Documents/FINAL PROJECT/chem.html");
  }
  else {
    alert("INVALID EMAIL ID. PLEASE TRY AGAIN");
  }
}
function Start()
{


    if(emailValidation()==false)
    {
      alert("INVALID EMAIL! PLEASE ENTER COLLEGE EMAIL ID ONLY!!!!");
    }
    if(phoneValidation()==false)
    {
      alert("INVALID PHONE NUMBER! PLEASE ENTER A VALID PHONE NUMBER!!!!");
    }

    if( passwordValidation()==false )
    {
      alert("Password and Confirm password dont match!!");
    }
    if(emailValidation()==true&&phoneValidation()==true&&(passwordValidation()==true))
    {
      location.replace("success.html");

    }
  }
function passwordValidation()
{
  var p = input.Pass.value;
  var c = input.Confpass.value;
  if(p!=c)
  {
    return false;
  }
  else {
    return true;
  }
}

function phoneValidation()
{
  var ph = input.Phone.value.search(/[0-9]{10}/);
  if(ph==-1 || input.Phone.value.length != 10)
  {
    return false;
  }
  else {
    return true;4
  }
}

import SignUp from "../components/Signup";

export default function SignInPage() {

  function handleSignIn(userDetails) {
    console.log(userDetails); //sign in Details..........
  }

  return (
    <>
      <SignUp signIn={true} title="It’s nice to have you back!" onSignIn={handleSignIn}/>
    </>
  );
}

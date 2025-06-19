import SignUp from "../components/Signup";

export default function SignUpPage() {
  
  function handleSignUp(userDetails) {
    console.log(userDetails); // sign up details..........
  }
  return (
    <SignUp
      signUp={true}
      title="Sign up for endless opportunities"
      onSignup={handleSignUp}
    />
  );
}

import Verify from "../components/Verify";

//Assuming we get the user from an API or through context.....


export default function VerifyEmail() {
  return <Verify button="Verify email" title="Verify your email" user="Johndoe@doe.com" email={true}/>;
}

import Verify from "../components/Verify";

//Assuming we get the user from an API or through context.....

export default function ResetPasswordPage () {
    return <Verify button="Verify pin" title="Reset Your Password" user="Johndoe@doe.com"/>
}
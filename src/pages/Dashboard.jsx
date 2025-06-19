import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

export default function Dashboard() {
  return (
    <div className="backgroundImage">
      <div className="dashboard">
        <h2>Congratulations!! You have completed this task</h2>
        <p>Submit and wait for Feedback</p>
        <Button style="dashboardBtn">
          <Link to="/" className="link">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LinkButtons from "../components/LinkButtons";
import TextFields from "../components/TextFields";
import "./login.css";

export default function Login() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header style={{ backgroundColor: "#b2191e" }} closeButton>
          <Modal.Title style={{ color: "#FFFFFF" }}>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: "#b2191e"}}>
          <TextFields id="outlined-basic" label="Email" type="email"/>
          <TextFields id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
        </Modal.Body>

        <Modal.Footer style={{ backgroundColor: "#b2191e" }}>
          <Button variant="light" style={{color: "#b2191e", fontWeight:'bold'}}>Close</Button>
          <Button variant="light" style={{color: "#b2191e", fontWeight:'bold'}}>Login</Button>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <LinkButtons title="Forget Password?" color="#FFFFFF" fSize="15px"/>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <LinkButtons title="No Account? Sign Up Now!" color="#FFFFFF" fSize="15px"/>
          </div>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

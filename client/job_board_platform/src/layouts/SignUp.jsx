import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LinkButtons from "../components/LinkButtons";
import TextFields from "../components/TextFields";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import "./login.css";

export default function SignUp() {
  return (
    <Box>
      <Grid container spacing={2} style={{ height: "84vh", marginTop: "10px" }}>
        <Grid size={2}></Grid>
        <Grid size={8} style={{ height: "100%" }}>
          <div
            className="modal show"
            style={{ display: "block", position: "initial" }}
          >
            <Modal.Dialog
              style={{
                width: "100%",
                maxWidth: "100%",
                margin: 0,
                boxSizing: "border-box",
              }}
            >
              <Modal.Header
                style={{ backgroundColor: "#FFFFFF", borderBottom: "none" }}
                closeButton
              >
                <Modal.Title style={{ color: "#000000" }}>Sign Up</Modal.Title>
              </Modal.Header>

              <Modal.Body style={{ backgroundColor: "#FFFFFF" }}>
                <TextFields id="outlined-basic" label="Email" type="email" />
                <TextFields
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </Modal.Body>

              <Modal.Footer
                style={{ backgroundColor: "#FFFFFF", borderTop: "none" }}
              >
                <Button
                  variant="light"
                  style={{ color: "#F5F5F5", fontWeight: "bold" }}
                >
                  Close
                </Button>
                <Button
                  variant="light"
                  style={{ color: "#FFFFFF", fontWeight: "bold" }}
                >
                  Login
                </Button>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "0px",
                  }}
                >
                  <LinkButtons
                    title="Forget Password?"
                    color="#FFFFFF"
                    fSize="15px"
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "0px",
                  }}
                >
                  <LinkButtons
                    title="No Account? Sign Up Now!"
                    color="#FFFFFF"
                    fSize="15px"
                  />
                </div>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </Grid>
        <Grid size={2}></Grid>
      </Grid>
    </Box>
  );
}

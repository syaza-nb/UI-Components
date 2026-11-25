import { Label } from "./components/Label";

function App() {
  return (
    <div style={{ padding: "32px", maxWidth: "400px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Label htmlFor="email" required>
          Email Address
        </Label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          style={{
            padding: "10px",
            border: "1px solid #E2E8F0",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
}

export default App;
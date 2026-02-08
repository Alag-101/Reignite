export default function Session() {
  return (
    <div>
      <h2>Active Work Session</h2>
      <p>Step 2: Evaluating AI Output</p>

      <button
        onClick={() => {
          localStorage.setItem("interrupted", "true")
          window.location.href = "/session/demo/resume"
        }}
      >
        Simulate Interruption
      </button>
    </div>
  )
}

import React from "react";
import Button from "../components/Button";

function Playground() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      <div className="h-80 w-80 border-solid border-4 border-gray-900">
        {/* <Button size="sm" variant="primary">
          Hello World
        </Button>
        <Button size="md" variant="primary">
          Hello World
        </Button> */}
        <Button size="sm" variant="dark" rounded>
          Register
        </Button>
      </div>
    </section>
  );
}

export default Playground;

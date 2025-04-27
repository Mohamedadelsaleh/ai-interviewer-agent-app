import { Button } from "../components/ui/button";
import Provider from "./Provider";

export default function Home() {
  return (
    <div>
      <Provider>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button>Subscribe</Button>
      </Provider>
    </div>
  );
}

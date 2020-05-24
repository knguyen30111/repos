import * as React from "react";
import { HelloWorld, Button } from '@wow/coms';

export interface IAppProps {}

export default function IApp(props: IAppProps) {
  return (
    <div>
      <HelloWorld />
      <h1>Bye Bye</h1>
      <Button>baby</Button>
    </div>
  );
}
// app/components/AuthWrapper.tsx
'use client';

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import outputs from "../../amplify_outputs.json"; // ajusta según la ruta real
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs); // configure aquí, en el cliente

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Authenticator>{children}</Authenticator>;
}

// GoogleLoginButton.tsx
'use client';

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";

// const handleLoginWithGoogle = useCallback((cred:CredentialResponse)=>{

// },[])

export default function GoogleLoginButton() {
  return (
    <GoogleLogin 
      onSuccess={cred => console.log(cred)} 
      onError={() => console.log('Login Failed')} 
    />
  );
}



// GoogleLoginButton.tsx
'use client';

import { graphqlClient } from "@/client/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { log } from "console";
import { useCallback } from "react";
import toast from "react-hot-toast";
// const handleLoginWithGoogle = useCallback((cred:CredentialResponse)=>{

// },[])

export default function GoogleLoginButton() {
  const handleLoginWithGoogle=useCallback(async (cred: CredentialResponse)=> {
    const googleToken = cred.credential
    if(!googleToken){
      return toast.error('google token not found')
    }

    const {verifyGoogleToken} = await graphqlClient.request(
      verifyUserGoogleTokenQuery,
      {token:googleToken}
    );

    toast.success("verified success")
    console.log(verifyGoogleToken)

    if(verifyGoogleToken){
      window.localStorage.setItem('__twitter_token',verifyGoogleToken)
    }

  },[])

  return (
    <GoogleLogin 
      onSuccess={cred => handleLoginWithGoogle(cred)} 
      onError={() => console.log('Login Failed')} 
    />
  );
}



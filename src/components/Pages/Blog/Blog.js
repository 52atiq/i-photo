import React from "react";

const Blog = () => {
  return (
    <div className="container">
         <h4 className="mt-5 mb-3"> Q1: Difference between and authentication authorization :</h4>
      <div className="flex sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 justify-center gap-x-8 gap-y-4  ">
         
          <div className="grid "> 
              <hh5>Authentication</hh5>
              <p> <span className="text-2xl font-medium">1.</span> authentication is the process of identify someone who  is claim correctly </p>
             <p> <span className="text-2xl font-medium">2.</span> Authentication is providing integrity control and security to the data.</p>
             <p>  <span className="text-2xl font-medium">3.</span>Authentication usually requires a username and a password</p>
             <p> <span className="text-2xl font-medium">4.</span> Authentication is visible to and partially changeable by the user.</p>
             <p> <span className="text-2xl font-medium">5.</span>Authentication is the first step of a good identity and access management process.</p>
          </div>
          <div>
              <hh5>Authorization</hh5>
              <p> <span className="text-2xl font-medium">1.</span>authorization is the process of verifying what specific applications, files, and data a user has access to</p>
             <p>  <span className="text-2xl font-medium">2.</span>It is protecting the data to ensure privacy and access control of data. Authorization is giving
access to authorized users</p>
            <p><span className="text-2xl font-medium">3.</span> 
            Authentication factors required for authorization may vary, depending on the security level.
            </p>
            <p> <span className="text-2xl font-medium">4.</span> Authorization isn’t visible to or changeable by the user.</p>
            <p> <span className="text-2xl font-medium">5.</span>Authorization always takes place after authentication.</p>
          </div>
      </div>
        
        <div className="mt-5">
            <h4 className="mb-2">Q2. Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Authress
            Firebase is a Backend-as-a-Service is a platform by Google that provides  developers with a variety of tools and services to help them creates quality  iOS, Android, and Web apps.
            </p>
            <p>User authentication is a powerful way to provide rightful access to your digital properties like  website or application. there are many other options for authentication such stytch,ory, supabase,okta, PingIdentity,Keycloak ,Amazon Cognito, OneLogin, Auth0, Authress and mony more.</p>
        </div>

        <div className="mt-5">
            <h4 className="mb-3">Q3.What other services does firebase provide other than authentication</h4>
            <p>There are many services which Firebase provides us, Most useful of them are below</p>
            <ol>
                <li> Cloud Firestore</li>
                <li>Cloud Functions</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li> Remote Config</li>
                <li>Dynamic Links</li>
                <li>Cloud Messaging</li>
                <li>Predictions</li>
            </ol>

        </div>
      
    </div>
  );
};

export default Blog;

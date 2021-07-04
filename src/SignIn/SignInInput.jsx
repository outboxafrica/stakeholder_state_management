import React from "react";

export default function SignInInput({name, placeholder, type}) {
  return (
    <div>
      <input
        class="signIn__sectionInput"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

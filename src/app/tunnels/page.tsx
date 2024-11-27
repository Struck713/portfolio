"use client"

import { Button } from "@/components/Button";
import { IconButton, IconGithub } from "@/components/Icons";
import { useEffect } from "react";

export default () => {

  useEffect(() => {
    window.location.href = "https://github.com/Struck713/tunnels";
  }, [])

  return (
    <p>Taking you to Github...</p>
  );
};

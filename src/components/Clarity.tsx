"use client";

import clarity from "@microsoft/clarity";
import { useEffect } from "react";

export default function Clarity() {
  useEffect(() => {
    // Real Clarity Project ID: w7jzvuczw8
    const CLARITY_ID = "w7jzvuczw8";
    
    clarity.init(CLARITY_ID);

    // Initial consent check
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "granted") {
      clarity.consentV2();
    }
  }, []);

  return null;
}

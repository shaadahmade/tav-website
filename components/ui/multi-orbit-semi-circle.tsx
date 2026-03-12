"use client";
import React, { useState, useEffect } from "react";

// Each app with its brand color and inline SVG
const APPS = [
  {
    name: "OpenAI",
    color: "#ffffff",
    bg: "rgba(0,0,0,0.8)",
    border: "rgba(255,255,255,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-3.99 2.9A6.05 6.05 0 0 0 1.72 14.2a5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 3.99-2.9 6.06 6.06 0 0 0-.74-7.07zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68V9.42l2.02 1.17a.07.07 0 0 1 .038.052v5.58a4.5 4.5 0 0 1-4.49 4.49z"/>
      </svg>
    ),
    glowColor: "rgba(255,255,255,0.15)",
  },
  {
    name: "Anthropic",
    color: "#d4a574",
    bg: "rgba(20,16,12,0.9)",
    border: "rgba(212,165,116,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-3.654 0H6.57L0 20h3.603l1.388-3.083h6.794l1.387 3.083h3.604L10.172 3.52zm-3.66 10.62L8.77 7.59l2.261 6.55H6.512z"/>
      </svg>
    ),
    glowColor: "rgba(212,165,116,0.2)",
  },
  {
    name: "HubSpot",
    color: "#FF7A59",
    bg: "rgba(30,12,8,0.9)",
    border: "rgba(255,122,89,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.164 7.93V5.084a1.56 1.56 0 0 0 .898-1.409V3.64a1.56 1.56 0 0 0-1.56-1.56h-.035a1.56 1.56 0 0 0-1.56 1.56v.036a1.56 1.56 0 0 0 .898 1.409V7.93a4.42 4.42 0 0 0-2.101.93L7.697 3.734a1.75 1.75 0 1 0-.84.898l6.918 5.038a4.44 4.44 0 0 0-.663 2.344 4.45 4.45 0 0 0 .663 2.35l-2.11 1.534a1.53 1.53 0 0 0-1.016-.382 1.54 1.54 0 1 0 1.54 1.54 1.53 1.53 0 0 0-.148-.645l2.086-1.516a4.46 4.46 0 0 0 2.703.916 4.47 4.47 0 1 0-1.666-8.62zm1.666 6.55a2.09 2.09 0 1 1 0-4.18 2.09 2.09 0 0 1 0 4.18z"/>
      </svg>
    ),
    glowColor: "rgba(255,122,89,0.2)",
  },
  {
    name: "Salesforce",
    color: "#00A1E0",
    bg: "rgba(0,12,22,0.9)",
    border: "rgba(0,161,224,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.02 6.12a3.57 3.57 0 0 1 2.6-1.12 3.6 3.6 0 0 1 3.17 1.88 4.44 4.44 0 0 1 1.63-.31 4.5 4.5 0 0 1 4.5 4.5 4.5 4.5 0 0 1-4.5 4.5H6.57a3.75 3.75 0 1 1 .92-7.39A3.57 3.57 0 0 1 10.02 6.12z"/>
      </svg>
    ),
    glowColor: "rgba(0,161,224,0.2)",
  },
  {
    name: "Mailchimp",
    color: "#FFE01B",
    bg: "rgba(22,20,0,0.9)",
    border: "rgba(255,224,27,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.759 15.654a3.9 3.9 0 0 1-3.243 1.754A3.916 3.916 0 0 1 9.06 14.27a.24.24 0 0 0-.36-.082l-.633.432a.242.242 0 0 0-.064.33c.741 1.122 1.999 1.86 3.412 1.86a4.39 4.39 0 0 0 3.737-2.014.24.24 0 0 0-.065-.326l-.655-.432a.242.242 0 0 0-.673.616zM11 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
      </svg>
    ),
    glowColor: "rgba(255,224,27,0.15)",
  },
  {
    name: "Slack",
    color: "#E01E5A",
    bg: "rgba(22,0,8,0.9)",
    border: "rgba(224,30,90,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    ),
    glowColor: "rgba(224,30,90,0.2)",
  },
  {
    name: "Meta",
    color: "#0668E1",
    bg: "rgba(0,8,22,0.9)",
    border: "rgba(6,104,225,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    glowColor: "rgba(6,104,225,0.2)",
  },
  {
    name: "Shopify",
    color: "#95BF47",
    bg: "rgba(10,18,0,0.9)",
    border: "rgba(149,191,71,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.337.956S15.082.77 14.578.77c-.034 0-.068.001-.1.003-.116.009-.22.038-.32.082C13.942.674 13.256.13 12.222.13c-.966 0-1.78.505-2.358 1.237-.442-.133-.865-.197-1.26-.197-1.49 0-2.15 1.01-2.15 2.14 0 .082.005.164.013.245-.03.003-.058.008-.086.013l-.006.001C4.5 3.98 3.334 5.485 3 7.313c-.043.24-.065.484-.065.73 0 1.39.822 2.504 2.058 2.826L8.28 24h7.373l3.246-13.185c1.182-.385 2.038-1.43 2.038-2.752 0-.57-.17-1.1-.463-1.547L15.337.956z"/>
      </svg>
    ),
    glowColor: "rgba(149,191,71,0.2)",
  },
  {
    name: "Zapier",
    color: "#FF4F00",
    bg: "rgba(22,6,0,0.9)",
    border: "rgba(255,79,0,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.924 9.497a9.915 9.915 0 0 0-.64-2.355l3.678-3.678a1.35 1.35 0 0 0-1.909-1.909L12.375 5.23a9.915 9.915 0 0 0-2.356-.64V0H7.981v4.59a9.915 9.915 0 0 0-2.355.64L1.947 1.555A1.35 1.35 0 0 0 .038 3.464l3.678 3.678a9.915 9.915 0 0 0-.64 2.355H0v2.038h3.076a9.915 9.915 0 0 0 .64 2.355L.038 17.568a1.35 1.35 0 0 0 1.909 1.909l3.678-3.678a9.915 9.915 0 0 0 2.356.64V24h2.038v-4.56a9.915 9.915 0 0 0 2.355-.64l3.679 3.678a1.35 1.35 0 0 0 1.909-1.909l-3.678-3.678a9.915 9.915 0 0 0 .64-2.356H24v-2.038h-9.076zM12 14.4a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z"/>
      </svg>
    ),
    glowColor: "rgba(255,79,0,0.2)",
  },
  {
    name: "Notion",
    color: "#ffffff",
    bg: "rgba(10,10,10,0.9)",
    border: "rgba(255,255,255,0.25)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.887l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
      </svg>
    ),
    glowColor: "rgba(255,255,255,0.1)",
  },
  {
    name: "Discord",
    color: "#5865F2",
    bg: "rgba(4,6,26,0.9)",
    border: "rgba(88,101,242,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.128 18.113a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
      </svg>
    ),
    glowColor: "rgba(88,101,242,0.2)",
  },
  {
    name: "Python",
    color: "#3776AB",
    bg: "rgba(0,6,18,0.9)",
    border: "rgba(55,118,171,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    ),
    glowColor: "rgba(55,118,171,0.2)",
  },
  {
    name: "n8n",
    color: "#EA4B71",
    bg: "rgba(22,0,8,0.9)",
    border: "rgba(234,75,113,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 5.5A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 18.5v-13zm1.5 0v13h7v-13h-7zm1.5 5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5z"/>
      </svg>
    ),
    glowColor: "rgba(234,75,113,0.2)",
  },
  {
    name: "Google Drive",
    color: "#4285F4",
    bg: "rgba(0,6,20,0.9)",
    border: "rgba(66,133,244,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.6 17.15l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" transform="translate(-1.5 -3.3) scale(0.8)"/>
        <path d="M7 13l-6 10.4h12L7 13z"/>
        <path d="M7 4L1 14h6l6-10z" fill="currentColor" transform="translate(6 0)"/>
        <path d="M14 14l6-10-6-0L8 14z" fill="currentColor" transform="translate(0 0)"/>
      </svg>
    ),
    glowColor: "rgba(66,133,244,0.2)",
  },
  {
    name: "Airtable",
    color: "#18BFFF",
    bg: "rgba(0,14,22,0.9)",
    border: "rgba(24,191,255,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.955.937L.538 5.498a.61.61 0 0 0 .002 1.133l11.443 4.503a3.28 3.28 0 0 0 2.034 0l11.443-4.503a.61.61 0 0 0 .002-1.133L14.045.937a3.28 3.28 0 0 0-2.09 0zM2.19 9.503l-1.652.65a.61.61 0 0 0-.001 1.133l11.443 4.503a3.28 3.28 0 0 0 2.034 0l11.444-4.503a.61.61 0 0 0 .001-1.132l-1.652-.65-9.122 3.59a4.9 4.9 0 0 1-3.372 0zm0 5.638l-1.652.65a.61.61 0 0 0-.002 1.133l11.443 4.504a3.28 3.28 0 0 0 2.034 0l11.444-4.504a.61.61 0 0 0-.002-1.133l-1.652-.65-9.122 3.591a4.9 4.9 0 0 1-3.372 0z"/>
      </svg>
    ),
    glowColor: "rgba(24,191,255,0.2)",
  },
];

// Orbiting ring configuration - Increased radius factors to prevent overlapping on small screens
const RINGS = [
  { count: 3, radiusFactor: 0.45, duration: 20, reverse: false, appOffset: 0 },
  { count: 5, radiusFactor: 0.72, duration: 30, reverse: true, appOffset: 3 },
  { count: 7, radiusFactor: 0.95, duration: 45, reverse: false, appOffset: 8 },
];

interface OrbitIconProps {
  app: typeof APPS[0];
  radius: number;
  totalCount: number;
  index: number;
  duration: number;
  reverse: boolean;
  iconSize: number;
  key?: string;
}

function OrbitIcon({ app, radius, totalCount, index, duration, reverse, iconSize }: OrbitIconProps) {
  const startAngle = (index / totalCount) * 360;
  const delay = -(duration * index) / totalCount;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        animation: `orbit-spin ${duration}s linear infinite${reverse ? " reverse" : ""}`,
        animationDelay: `${delay}s`,
        transformOrigin: "center center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: `calc(50% - ${radius}px)`,
          left: "50%",
          transform: "translateX(-50%)",
          width: iconSize,
          height: iconSize,
          animation: `counter-spin ${duration}s linear infinite${reverse ? " reverse" : ""}`,
          animationDelay: `${delay}s`,
        }}
      >
        <div
          className="group relative w-full h-full rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-125 flex items-center justify-center"
          style={{
            background: "rgba(0,0,0,0.8)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 0 20px rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.4)",
            color: "#ffffff",
            padding: iconSize * 0.2,
          }}
        >
          {app.icon}

          {/* Tooltip */}
          <div className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap rounded-md bg-zinc-900 border border-white/10 px-2 py-1 text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-white shadow-2xl z-[100]">
            {app.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MultiOrbitSemiCircle() {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.getElementById("orbit-wrap");
      if (el) setContainerWidth(el.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const size = Math.min(containerWidth * 0.95, 1000);
  const isMobile = size < 500;
  const iconSize = size < 350 ? 30 : size < 400 ? 34 : size < 600 ? 44 : size < 900 ? 56 : 64;

  if (!size) return <div id="orbit-wrap" className="w-full h-96" />;

  return (
    <div id="orbit-wrap" className="w-full flex justify-center">
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes counter-spin {
          from { transform: translateX(-50%) rotate(0deg); }
          to   { transform: translateX(-50%) rotate(-360deg); }
        }
      `}</style>

      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>

        {/* Subtle ring paths */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {RINGS.map((ring, i) => (
            <circle
              key={i}
              cx="50%"
              cy="50%"
              r={`${ring.radiusFactor * 50}%`}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
          ))}
        </svg>

        {/* Center glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: size * 0.18,
            height: size * 0.18,
            background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
            filter: "blur(25px)",
          }}
        />

        {/* Center label */}
        <div className="absolute flex flex-col items-center justify-center z-10 pointer-events-none">
          <span className="text-white/60 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] mb-1">Powered by</span>
          <span className="font-chunky font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-600 text-xl md:text-3xl leading-none uppercase">AI</span>
        </div>

        {/* Orbiting rings */}
        {RINGS.map((ring, ri) => {
          const radius = (ring.radiusFactor * size) / 2;
          return Array.from({ length: ring.count }).map((_, i) => {
            const app = APPS[(i + ring.appOffset) % APPS.length];
            return (
              <OrbitIcon
                key={`${ri}-${i}`}
                app={app}
                radius={radius}
                totalCount={ring.count}
                index={i}
                duration={ring.duration}
                reverse={ring.reverse}
                iconSize={iconSize}
              />
            );
          });
        })}
      </div>
    </div>
  );
}

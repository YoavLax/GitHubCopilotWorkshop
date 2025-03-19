"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

// craete conference card props
export interface ConferenceCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  transcription: string;
}

const ConferenceCard = ({
  title,
  date,
  time,
  location,
  transcription,
}: ConferenceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Date: {date}</CardDescription>
        <CardDescription>Time: {time}</CardDescription>
        <CardDescription>Location: {location}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle className="pb-3">Transcription</CardTitle>
        <CardDescription>{transcription}</CardDescription>
      </CardContent>

      <CardFooter>
        <Button variant="default">Summarize with AI</Button>
      </CardFooter>
    </Card>
  );
};

export default ConferenceCard;

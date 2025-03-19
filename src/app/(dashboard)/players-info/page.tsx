"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface Player {
  id: number;
  name: string;
  team: string;
  weight: string;
  height: string;
  position: string;
}

const PlayersInfo = () => {
  return <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6"></div>;
};

export default PlayersInfo;

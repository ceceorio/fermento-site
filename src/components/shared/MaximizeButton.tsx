'use client';

import { Button } from "@/components/ui/button";
import { Maximize2 } from "lucide-react";

interface MaximizeButtonProps {
  targetId: string;
}

export function MaximizeButton({ targetId }: MaximizeButtonProps) {
  const handleMaximize = () => {
    const container = document.getElementById(targetId);
    if (container) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      } else if ((container as any).msRequestFullscreen) {
        (container as any).msRequestFullscreen();
      }
    }
  };

  return (
    <Button variant="ghost" className="text-fermento-gray hover:text-fermento-white" onClick={handleMaximize}>
      <Maximize2 className="mr-2 h-4 w-4" /> Maximizar Leitor
    </Button>
  );
}

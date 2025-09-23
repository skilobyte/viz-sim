import { useState } from "react";
import { arrangeInRing } from "./NodeBalancer";
import type { VizNode } from "./NodeBalancer";


export const NodeManager = () => {
  const [nodesByBoard, setNodesByBoard] = useState<Record<string, VizNode[]>>({});

  const updateNodes = (boardId: string, count: number, width: number, height: number) => {
    const arranged = arrangeInRing(count, width, height);
    setNodesByBoard(prev => ({ ...prev, [boardId]: arranged }));
  };

  const addNode = (boardId: string, width: number, height: number) => {
    setNodesByBoard(prev => {
      const current = prev[boardId] || [];
      const newCount = Math.min(8, current.length + 1);
      return { ...prev, [boardId]: arrangeInRing(newCount, width, height) };
    });
  };

  const removeNode = (boardId: string, width: number, height: number) => {
    setNodesByBoard(prev => {
      const current = prev[boardId] || [];
      const newCount = Math.max(1, current.length - 1);
      return { ...prev, [boardId]: arrangeInRing(newCount, width, height) };
    });
  };
  return { nodesByBoard, updateNodes, addNode, removeNode };
};
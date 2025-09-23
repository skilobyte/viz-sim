import React from "react";
import PinBoard from "../components/boards/PinBoard";
import { NodeManager } from "../components/Util/NodeManager";

const width = 600;
const height = 400;

const MultiBoardPage: React.FC = () => {
  const { nodesByBoard, addNode, removeNode } = NodeManager();

  return (
    <div className="space-y-6">
      {/* Board A */}
      <div>
        <div className="flex gap-2 mb-2">
          <button
            onClick={() => removeNode("boardA", width, height)}
            className="px-3 py-1 bg-gray-700 text-white rounded"
          >
            −
          </button>
          <button
            onClick={() => addNode("boardA", width, height)}
            className="px-3 py-1 bg-gray-700 text-white rounded"
          >
            +
          </button>
        </div>
        <PinBoard title="Raft Cluster A" width={width} height={height}>
          {nodesByBoard["boardA"]?.map(node => (
            <div
              key={node.id}
              className="absolute flex items-center justify-center rounded-full bg-blue-500 text-white font-bold shadow-md"
              style={{
                width: 70,
                height: 70,
                left: node.x - 35,
                top: node.y - 35,
              }}
            >
              N{node.id}
            </div>
          ))}
        </PinBoard>
      </div>

      {/* Board B */}
      <div>
        <div className="flex gap-2 mb-2">
          <button
            onClick={() => removeNode("boardB", width, height)}
            className="px-3 py-1 bg-gray-700 text-white rounded"
          >
            −
          </button>
          <button
            onClick={() => addNode("boardB", width, height)}
            className="px-3 py-1 bg-gray-700 text-white rounded"
          >
            +
          </button>
        </div>
        <PinBoard title="Raft Cluster B" width={width} height={height}>
          {nodesByBoard["boardB"]?.map(node => (
            <div
              key={node.id}
              className="absolute flex items-center justify-center rounded-full bg-green-500 text-white font-bold shadow-md"
              style={{
                width: 70,
                height: 70,
                left: node.x - 35,
                top: node.y - 35,
              }}
            >
              N{node.id}
            </div>
          ))}
        </PinBoard>
      </div>
    </div>
  );
};

export default MultiBoardPage;

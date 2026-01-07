'use client'

import { useState, useCallback } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Connection,
  Edge,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { Button } from '@/components/ui/button'
import { Save, Play, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Trigger: Gmail New Email' },
    position: { x: 250, y: 25 },
    style: { background: '#8b5cf6', color: 'white', border: 'none', borderRadius: '8px', padding: '10px' },
  },
  {
    id: '2',
    data: { label: 'Filter: Contains "invoice"' },
    position: { x: 250, y: 125 },
    style: { background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', padding: '10px' },
  },
  {
    id: '3',
    data: { label: 'Action: Save to Google Sheets' },
    position: { x: 100, y: 225 },
    style: { background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', padding: '10px' },
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Action: Send Slack Message' },
    position: { x: 400, y: 225 },
    style: { background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', padding: '10px' },
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', animated: true },
]

export default function WorkflowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [workflowName, setWorkflowName] = useState('Gmail to Sheets & Slack')

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const handleSave = () => {
    console.log('Saving workflow:', { name: workflowName, nodes, edges })
    // TODO: Implement save functionality
  }

  const handleRun = () => {
    console.log('Running workflow:', workflowName)
    // TODO: Implement run functionality
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="h-16 border-b glass flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/workflows">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <input
            type="text"
            value={workflowName}
            onChange={(e) => setWorkflowName(e.target.value)}
            className="text-xl font-bold bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-primary rounded px-2"
          />
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button 
            onClick={handleRun}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Play className="mr-2 h-4 w-4" />
            Test Run
          </Button>
        </div>
      </div>

      {/* Workflow Canvas */}
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  )
}
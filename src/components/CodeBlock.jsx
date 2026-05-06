'use client'
import React, { useState } from 'react'
import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'

export default function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-xl overflow-hidden bg-black/50 border border-white/10 my-8">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <span className="text-xs font-mono text-gray-400">{language}</span>
        <button 
          onClick={copyToClipboard}
          className="p-1.5 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          title="Copy code"
        >
          {copied ? (
            <CheckIcon className="w-4 h-4 text-green-400" />
          ) : (
            <DocumentDuplicateIcon className="w-4 h-4" />
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-300 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

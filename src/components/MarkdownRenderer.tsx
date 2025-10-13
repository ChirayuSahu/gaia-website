"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';

type MarkdownRendererProps = {
  content: string;
  className?: string;
};

/**
 * A simple markdown renderer component using react-markdown
 * 
 * @param content - The markdown content to render
 * @param className - Optional CSS class to apply to the container
 */
export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={className}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
import React from 'react';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import './Editor.css';

type ToolbarAction = {
  label: string;
  isActive: (editor: NonNullable<ReturnType<typeof useEditor>>) => boolean;
  run: (editor: NonNullable<ReturnType<typeof useEditor>>) => void;
  canRun?: (editor: NonNullable<ReturnType<typeof useEditor>>) => boolean;
};

const toolbarActions: ToolbarAction[] = [
  {
    label: 'Bold',
    run: (editor) => editor.chain().focus().toggleBold().run(),
    isActive: (editor) => editor.isActive('bold'),
    canRun: (editor) => editor.can().chain().focus().toggleBold().run(),
  },
  {
    label: 'Italic',
    run: (editor) => editor.chain().focus().toggleItalic().run(),
    isActive: (editor) => editor.isActive('italic'),
    canRun: (editor) => editor.can().chain().focus().toggleItalic().run(),
  },
  {
    label: 'Strike',
    run: (editor) => editor.chain().focus().toggleStrike().run(),
    isActive: (editor) => editor.isActive('strike'),
    canRun: (editor) => editor.can().chain().focus().toggleStrike().run(),
  },
  {
    label: 'Bullet List',
    run: (editor) => editor.chain().focus().toggleBulletList().run(),
    isActive: (editor) => editor.isActive('bulletList'),
    canRun: (editor) => editor.can().chain().focus().toggleBulletList().run(),
  },
  {
    label: 'Numbered List',
    run: (editor) => editor.chain().focus().toggleOrderedList().run(),
    isActive: (editor) => editor.isActive('orderedList'),
    canRun: (editor) => editor.can().chain().focus().toggleOrderedList().run(),
  },
  {
    label: 'Undo',
    run: (editor) => editor.chain().focus().undo().run(),
    isActive: () => false,
    canRun: (editor) => editor.can().chain().focus().undo().run(),
  },
  {
    label: 'Redo',
    run: (editor) => editor.chain().focus().redo().run(),
    isActive: () => false,
    canRun: (editor) => editor.can().chain().focus().redo().run(),
  },
];

function Editor(): JSX.Element {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start writing with Tiptap…',
      }),
    ],
    content: '<p></p>',
    autofocus: 'end',
  });

  if (!editor) {
    return <div className="editor-loading">Loading editor...</div>;
  }

  return (
    <section className="editor">
      <div
        className="editor-toolbar"
        role="toolbar"
        aria-label="Formatting options"
      >
        {toolbarActions.map(({ label, run, isActive, canRun }) => (
          <button
            key={label}
            type="button"
            className={`editor-toolbar__button${isActive(editor) ? ' editor-toolbar__button--active' : ''}`}
            onClick={() => run(editor)}
            disabled={canRun ? !canRun(editor) : false}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="editor-content">
        <EditorContent editor={editor} />
      </div>
    </section>
  );
}

export default Editor;

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownCard } from '@renderer/components/Markdown-Card';
import { CodeEditor } from '@renderer/components/Editor';
import Sidebar from '@renderer/components/Sidebar';
import { useExercise } from '@renderer/hooks/useExercise';
import Dialog from '@mui/material/Dialog';
import Chatbot from '@renderer/components/Chatbot'; // Asumiendo que tienes un componente de Chatbot

function Exercise() {
  const { exercise } = useParams();
  const exerciseTitle = exercise ?? '404';
  const data = useExercise(exerciseTitle);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Estado para controlar si el dialogo está abierto

  // Función para abrir el dialogo
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  // Función para cerrar el dialogo
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <Sidebar />
        <button onClick={openDialog}>Open Chatbot</button>
      </div>
      <div className="flex flex-row">
        <div className="bg-secondary w-1/2 p-4">
          {data && <MarkdownCard>{data.description}</MarkdownCard>}
        </div>
        {data && <CodeEditor language={data.languaje}></CodeEditor>}
      </div>
      <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth={true}>
          <Chatbot />
      </Dialog>
    </div>
  );
}

export default Exercise;

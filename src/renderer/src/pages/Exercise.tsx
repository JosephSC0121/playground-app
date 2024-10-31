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
    <div className="bg-secondary flex flex-col">
      <div className="flex flex-row justify-between">
        <Sidebar />
        <div>
          <button onClick={openDialog}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-robot" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
            <path d="M12 2v2" />
            <path d="M9 12v9" />
            <path d="M15 12v9" />
            <path d="M5 16l4 -2" />
            <path d="M15 14l4 2" />
            <path d="M9 18h6" />
            <path d="M10 8v.01" />
            <path d="M14 8v.01" />
          </svg></button></div>
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

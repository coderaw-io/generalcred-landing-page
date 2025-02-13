import { CarouselAlert } from "@/components/shared/carousel-alert";
import { createContext, useContext, useState } from "react";

interface AlertDialogContextProps {
  showDialog: (message: string) => void;
  hideDialog: () => void;
}

const AlertDialogContext = createContext<AlertDialogContextProps | undefined>(undefined);

export function AlertDialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [_, setMessage] = useState("");

  console.log(_);

  const showDialog = (msg: string) => {
    setMessage(msg);
    setIsOpen(true);
  };

  const hideDialog = () => {
    setIsOpen(false);
  };

  return (
    <AlertDialogContext.Provider value={{ showDialog, hideDialog }}>
      {children}
      {isOpen && <CarouselAlert onClose={hideDialog} />}
    </AlertDialogContext.Provider>
  );
}

export function useAlertDialog() {
  const context = useContext(AlertDialogContext);
  if (!context) {
    throw new Error("useAlertDialog deve ser usado dentro de um AlertDialogProvider");
  }
  return context;
}

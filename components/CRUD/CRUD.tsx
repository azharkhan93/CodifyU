"use client"
import { ActionBar } from "./components/ActionBar"

interface CRUDProps {
    updateComponent: React.ReactNode;
}

export const CRUD: React.FC<CRUDProps> = ({updateComponent}) => {
    return (

        <ActionBar updateComponent = {updateComponent}  />
    )

       

    
        
    
}
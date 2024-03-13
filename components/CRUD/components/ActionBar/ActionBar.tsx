"use client"
import React, { useState } from 'react';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, StyledInputBox, Button } from "@/components";
import { Modal } from '../Modal';

interface ActionBarProps {
    updateComponent: React.ReactNode;
}


export const ActionBar: React.FC<ActionBarProps> = ({updateComponent}) => {
    const [isSearchIconVisible, setSearchIconVisibility] = useState(true);
    const [isModalVisible, setModalVisibility] = useState(false);

    const handleInputFocus = () => {
        setSearchIconVisibility(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchIconVisibility(e.target.value === '');
    };
    

    const handleAddNewClick = () => {
        setModalVisibility(true);
    };

    const handleCloseModal = () => {
        setModalVisibility(false);
    };

    return (
        <Box
            height={"8%"}
            width={"98%"}
            bg={"secondary"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            borderRadius={"xs"}
            mx={"m"}
            px={"l"}
        >
            <Box alignItems={"center"} justifyContent={"center"} position={"relative"}>
                {isSearchIconVisible && <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '0' }} />}
                <StyledInputBox
                    borderRadius={"circle"}
                    border={"none"}
                    placeholder={"Type something"}
                    py={"m"}
                    px={"m"}
                    onFocus={handleInputFocus}
                    onBlur={() => setSearchIconVisibility(true)}
                    onChange={handleInputChange}
                />
            </Box>

            <Button
                variant={"primary"}
                color={"white"}
                height={"5vh"}
                width={"11vw"}
                onClick={handleAddNewClick}
            >
                Add New
                <FontAwesomeIcon icon={faPlus} style={{ marginLeft: '6px' }} />
            </Button>


            {isModalVisible && <Modal onClose={handleCloseModal} content={updateComponent} />}
        </Box>
    );
};

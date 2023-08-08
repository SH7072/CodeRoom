import { Flex, Text, UnstyledButton } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";

const ConsoleButton = () => {

    const [openConsole, setOpenConsole] = useState(false);

    return (
        <>
            <UnstyledButton
                onClick={() => setOpenConsole(!openConsole)}
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyItems: 'center',
                    height: '20px',
                }}
            >
                <Flex align={'center'}>
                    <Text color="#858b96" size={'sm'} fw={'500'}>Console</Text>
                    <Flex pl={'5px'}>
                        {openConsole ? <IconChevronDown color="#95aac2" size={'15px'} fw={'500'} /> : <IconChevronUp color="#95aac2" size={'15px'} fw={'500'} />}
                    </Flex>
                </Flex>
            </UnstyledButton>
        </>
    );
}

export default ConsoleButton;
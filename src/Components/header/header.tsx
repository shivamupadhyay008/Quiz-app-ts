import { Box, Center, Image } from "@chakra-ui/react"
export default function Header({questionNo}:{questionNo:number}){
return(
        <Box bg="#874fcc" w="100%" pt="5" pb="10" position="relative" mb="2rem">
            <Center color="#fff" fontWeight="bold">
            Question No. {questionNo}
            </Center>
            <Center>
                <Box borderRadius="full"
                    p="2"  background="#f3e4db"
                position="absolute"
                bottom="-2rem">
                    <Image
                        borderRadius="full"
                        boxSize="50px"
                        src="https://svgsilh.com/svg/2099158.svg"
                        alt="Segun Adebayo"
                    />
                </Box>
                </Center>
        </Box>


)
}